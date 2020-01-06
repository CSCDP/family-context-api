/**
 * Family Context
 * This is the *DRAFT / WORK IN PROGRESS* API definition for Family Context. This document is currently undergoing rapid change and should not be used as basis for implementation without discussing with the project team. 
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The PersonQuery model module.
* @module model/PersonQuery
* @version 0.0.1
*/
export default class PersonQuery {
    /**
    * Constructs a new <code>PersonQuery</code>.
    * Used for querying a person. TODO: As long as this the fields are a subset of the Person object this could be the same, however we may want more flexibility around the search criteria, such as min/max values for dob. 
    * @alias module:model/PersonQuery
    * @class
    * @param firstName {String} 
    * @param lastName {String} 
    */

    constructor(firstName, lastName) {
                this['firstName'] = firstName;
        this['lastName'] = lastName;
        
    }

    /**
    * Constructs a <code>PersonQuery</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PersonQuery} obj Optional instance to populate.
    * @return {module:model/PersonQuery} The populated <code>PersonQuery</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonQuery();
                                    if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('dateOfBirth')) {
                obj['dateOfBirth'] = ApiClient.convertToType(data['dateOfBirth'], 'Date');
            }
        }
        return obj;
    }

    /**
    * @member {String} firstName
    */
    firstName = undefined;
    /**
    * @member {String} lastName
    */
    lastName = undefined;
    /**
    * @member {Date} dateOfBirth
    */
    dateOfBirth = undefined;




}