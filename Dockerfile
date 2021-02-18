FROM node:12 AS builder
WORKDIR /app

COPY ui/package.json /app/.
COPY ui/yarn.lock /app/.
RUN yarn install --frozen-lockfile

COPY ui /app
RUN REACT_APP_API_BASE_URL=/api yarn build




FROM python:3.7-buster

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY server/requirements.txt /usr/src/app/

RUN pip3 install --no-cache-dir -r requirements.txt

COPY server/. /usr/src/app
COPY schema /usr/src/schema

COPY --from=builder /app/build /usr/src/app/static

RUN python /usr/src/app/swagger_formatter/__init__.py \
    /usr/src/schema/family-context-api.yaml \
    /usr/src/app/static/family-context-api.xlsx

RUN cd /usr/src/app/static; ln -s . FamilyContext

ENV PORT 8080

EXPOSE $PORT

CMD gunicorn --bind 0.0.0.0:${PORT} --access-logfile=- wsgi:app
