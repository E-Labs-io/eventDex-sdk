/** @format */

import EventDexAPI from "./api/eventDexAPI";

// Create an instance of the EventDexAPI class
const sdkInstance = (api: string) => new EventDexAPI(api);

/**
 *
 */
// Export the sdkInstance for users to interact with the SDK
export default sdkInstance;
