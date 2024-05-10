/* tslint:disable */
/* eslint-disable */
/**
 * MongoDB Atlas Data API
 * A fully-managed API to read, write, and aggregate data in MongoDB Atlas. The Data API is powered by serverless Atlas Functions and secured with user authentication and role-based permissions. To learn more about the Data API, see [Atlas Data API](https://www.mongodb.com/docs/atlas/app-services/data-api/).  ## Set Up the Data API  Before you can use the Data API, you must enable and configure it in an Atlas App Services App. The configuration controls how the App\'s users authenticate, authorize requests, and interact with the API.  To learn how to start using the Data API in your App, see [Set up the Data API](https://www.mongodb.com/docs/atlas/app-services/data-api/generated-endpoints/#set-up-the-data-api).  ## Authenticate Requests  Your Data API configuration in App Services controls how users authenticate their API requests. In most cases, you will use Application authentication, which lets users log in with one of the App\'s authentication providers. Users can either provide their login credentials directly in every request or provide a reusable access token for an authenticated session.  To learn more, see [Authenticate Data API Requests](https://www.mongodb.com/docs/atlas/app-services/data-api/authenticate/). 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * The result of an insertOne operation.
 * @export
 * @interface InsertOneResponseBody
 */
export interface InsertOneResponseBody {
    /**
     * 
     * @type {any}
     * @memberof InsertOneResponseBody
     */
    insertedId?: any;
}

/**
 * Check if a given object implements the InsertOneResponseBody interface.
 */
export function instanceOfInsertOneResponseBody(value: object): boolean {
    return true;
}

export function InsertOneResponseBodyFromJSON(json: any): InsertOneResponseBody {
    return InsertOneResponseBodyFromJSONTyped(json, false);
}

export function InsertOneResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): InsertOneResponseBody {
    if (json == null) {
        return json;
    }
    return {
        
        'insertedId': json['insertedId'] == null ? undefined : json['insertedId'],
    };
}

export function InsertOneResponseBodyToJSON(value?: InsertOneResponseBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'insertedId': value['insertedId'],
    };
}
