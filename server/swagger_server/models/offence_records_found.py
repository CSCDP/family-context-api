# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class OffenceRecordsFound(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, records_found: str=None):  # noqa: E501
        """OffenceRecordsFound - a model defined in Swagger

        :param records_found: The records_found of this OffenceRecordsFound.  # noqa: E501
        :type records_found: str
        """
        self.swagger_types = {
            'records_found': str
        }

        self.attribute_map = {
            'records_found': 'recordsFound'
        }
        self._records_found = records_found

    @classmethod
    def from_dict(cls, dikt) -> 'OffenceRecordsFound':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The OffenceRecordsFound of this OffenceRecordsFound.  # noqa: E501
        :rtype: OffenceRecordsFound
        """
        return util.deserialize_model(dikt, cls)

    @property
    def records_found(self) -> str:
        """Gets the records_found of this OffenceRecordsFound.


        :return: The records_found of this OffenceRecordsFound.
        :rtype: str
        """
        return self._records_found

    @records_found.setter
    def records_found(self, records_found: str):
        """Sets the records_found of this OffenceRecordsFound.


        :param records_found: The records_found of this OffenceRecordsFound.
        :type records_found: str
        """

        self._records_found = records_found