/**
 * Family Context
 * This is the API definition for Family Context
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import Person from '../model/Person';

/**
* Person service.
* @module api/PersonApi
* @version 0.0.1
*/
export default class PersonApi {

    /**
    * Constructs a new PersonApi. 
    * @alias module:api/PersonApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Find person by ID
     * Returns a single person
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Person} and HTTP response
     */
    getPersonByIdWithHttpInfo(personId) {
      let postBody = null;

      let pathParams = {
        'personId': personId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Person;

      return this.apiClient.callApi(
        '/api/person/{personId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Find person by ID
     * Returns a single person
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Person}
     */
    getPersonById(personId) {
      return this.getPersonByIdWithHttpInfo(personId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search for a person
     * Returns a list of individuals matching the criteria
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Person>} and HTTP response
     */
    searchPersonWithHttpInfo(firstName, lastName, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'firstName': firstName,
        'lastName': lastName,
        'dateOfBirth': opts['dateOfBirth']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['cookieAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Person];

      return this.apiClient.callApi(
        '/api/search/person', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search for a person
     * Returns a list of individuals matching the criteria
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Person>}
     */
    searchPerson(firstName, lastName, opts) {
      return this.searchPersonWithHttpInfo(firstName, lastName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}