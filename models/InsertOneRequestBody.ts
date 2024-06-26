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

import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface InsertOneRequestBody
 */
export interface InsertOneRequestBody {
  /**
   * The name of a linked MongoDB Atlas data source. This is
   * commonly `"mongodb-atlas"` though it may be different in
   * your App if you chose a different name when you created the
   * data source.
   *
   * @type {string}
   * @memberof InsertOneRequestBody
   */
  dataSource?: string;
  /**
   * The name of a database in the specified data source.
   * @type {string}
   * @memberof InsertOneRequestBody
   */
  database?: string;
  /**
   * The name of a collection in the specified database.
   * @type {string}
   * @memberof InsertOneRequestBody
   */
  collection?: string;
  /**
   * A document to insert into the collection.
   * @type {object}
   * @memberof InsertOneRequestBody
   */
  document: object;
}

/**
 * Check if a given object implements the InsertOneRequestBody interface.
 */
export function instanceOfInsertOneRequestBody(value: object): boolean {
  if (!("dataSource" in value)) return false;
  if (!("database" in value)) return false;
  if (!("collection" in value)) return false;
  if (!("document" in value)) return false;
  return true;
}

export function InsertOneRequestBodyFromJSON(json: any): InsertOneRequestBody {
  return InsertOneRequestBodyFromJSONTyped(json, false);
}

export function InsertOneRequestBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InsertOneRequestBody {
  if (json == null) {
    return json;
  }
  return {
    dataSource: json["dataSource"],
    database: json["database"],
    collection: json["collection"],
    document: json["document"],
  };
}

export function InsertOneRequestBodyToJSON(
  value?: InsertOneRequestBody | null
): any {
  if (value == null) {
    return value;
  }
  return {
    dataSource: value["dataSource"],
    database: value["database"],
    collection: value["collection"],
    document: value["document"],
  };
}
