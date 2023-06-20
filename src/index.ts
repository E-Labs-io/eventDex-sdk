/** @format */

import EventDexAPI, { ErrorResponse } from "./api/eventDexAPI";

// Create an instance of the EventDexAPI class
const initiateEventDex = (api: string) => new EventDexAPI(api);

/**
 *
 */
// Export the sdkInstance for users to interact with the SDK
export default initiateEventDex;
export type { EventDexAPI, ErrorResponse };
