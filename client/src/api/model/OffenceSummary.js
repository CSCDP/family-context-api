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
* The OffenceSummary model module.
* @module model/OffenceSummary
* @version 0.0.1
*/
export default class OffenceSummary {
    /**
    * Constructs a new <code>OffenceSummary</code>.
    * @alias module:model/OffenceSummary
    * @class
    */

    constructor() {
                
    }

    /**
    * Constructs a <code>OffenceSummary</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OffenceSummary} obj Optional instance to populate.
    * @return {module:model/OffenceSummary} The populated <code>OffenceSummary</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OffenceSummary();
                                    if (data.hasOwnProperty('dateOfOffence')) {
                obj['dateOfOffence'] = ApiClient.convertToType(data['dateOfOffence'], 'Date');
            }
            if (data.hasOwnProperty('typeOfOffence')) {
                obj['typeOfOffence'] = ApiClient.convertToType(data['typeOfOffence'], 'String');
            }
            if (data.hasOwnProperty('natureOfInvolvement')) {
                obj['natureOfInvolvement'] = ApiClient.convertToType(data['natureOfInvolvement'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Date} dateOfOffence
    */
    dateOfOffence = undefined;
    /**
    * @member {String} typeOfOffence
    */
    typeOfOffence = undefined;
    /**
    * @member {String} natureOfInvolvement
    */
    natureOfInvolvement = undefined;




}
