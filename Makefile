ALL: server/swagger_server/swagger/swagger.yaml ui/src/api/index.js

server/swagger_server/swagger/swagger.yaml: schema/family-context-api.yaml
	rm -rf build/python
	docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli-v3:3.0.15 generate \
		-i /local/schema/family-context-api.yaml \
		-l python-flask \
		-o /local/build/python/
	rsync -avP --delete build/python/swagger_server server/.

ui/src/api/index.js: schema/family-context-api.yaml schema/config-jsclient.json
	rm -rf build/javascript
	docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli-v3:3.0.15 generate \
		-c /local/schema/config-jsclient.json \
		-i /local/schema/family-context-api.yaml \
		-l javascript \
		-o /local/build/javascript/
	mkdir -p ./ui/src/api
	rsync -avP --delete build/javascript/src/* ui/src/api/.
	mkdir -p ./ui/docs/api
	rsync -avP --delete build/javascript/docs/* ui/docs/api/.

clean :
	rm -rf build

