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
 * @interface UpdateRequestBody
 */
export interface UpdateRequestBody {
  /**
   * The name of a linked MongoDB Atlas data source. This is
   * commonly `"mongodb-atlas"` though it may be different in
   * your App if you chose a different name when you created the
   * data source.
   *
   * @type {string}
   * @memberof UpdateRequestBody
   */
  dataSource?: string;
  /**
   * The name of a database in the specified data source.
   * @type {string}
   * @memberof UpdateRequestBody
   */
  database?: string;
  /**
   * The name of a collection in the specified database.
   * @type {string}
   * @memberof UpdateRequestBody
   */
  collection?: string;
  /**
   * A MongoDB query filter that matches documents. For a list of all query operators that the Data API supports, see [Query Operators](https://www.mongodb.com/docs/atlas/app-services/mongodb/crud-and-aggregation-apis/#query-operators).
   * @type {object}
   * @memberof UpdateRequestBody
   */
  filter?: object;
  /**
   * A MongoDB update expression to apply to matching documents. For a list of all update operators that the Data API supports, see [Update Operators](https://www.mongodb.com/docs/atlas/app-services/mongodb/crud-and-aggregation-apis/#update-operators).
   * @type {object}
   * @memberof UpdateRequestBody
   */
  update: object;
  /**
   * When `true`, if the update filter does not match any
   * existing documents, then insert a new document based on
   * the filter and the specified update operation.
   *
   * @type {boolean}
   * @memberof UpdateRequestBody
   */
  upsert?: boolean;
}

/**
 * Check if a given object implements the UpdateRequestBody interface.
 */
export function instanceOfUpdateRequestBody(value: object): boolean {
  if (!("dataSource" in value)) return false;
  if (!("database" in value)) return false;
  if (!("collection" in value)) return false;
  if (!("update" in value)) return false;
  return true;
}

export function UpdateRequestBodyFromJSON(json: any): UpdateRequestBody {
  return UpdateRequestBodyFromJSONTyped(json, false);
}

export function UpdateRequestBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateRequestBody {
  if (json == null) {
    return json;
  }
  return {
    dataSource: json["dataSource"],
    database: json["database"],
    collection: json["collection"],
    filter: json["filter"] == null ? undefined : json["filter"],
    update: json["update"],
    upsert: json["upsert"] == null ? undefined : json["upsert"],
  };
}

export function UpdateRequestBodyToJSON(value?: UpdateRequestBody | null): any {
  if (value == null) {
    return value;
  }
  return {
    dataSource: value["dataSource"],
    database: value["database"],
    collection: value["collection"],
    filter: value["filter"],
    update: value["update"],
    upsert: value["upsert"],
  };
}