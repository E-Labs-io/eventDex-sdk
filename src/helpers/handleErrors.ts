/** @format */

import { ErrorResponse } from "../api/eventDexAPI";

/**
 * Handles errors and exceptions in the SDK.
 * @param error - The error object received from the API.
 * @throws {Error} - Throws an error with a message based on the error object.
 */
export function handleErrors(error: ErrorResponse): void {
  if (error.status) {
    const { status, message } = error;
    if (status === 400) {
      throw new Error(`Bad Request: ${message}`);
    } else if (status === 401) {
      throw new Error(`Unauthorized: ${message}`);
    } else if (status === 403) {
      throw new Error(`Forbidden: ${message}`);
    } else if (status === 404) {
      throw new Error(`Not Found: ${message}`);
    } else if (status === 500) {
      throw new Error(`Internal Server Error: ${message}`);
    } else if (status === 4010) {
      throw new Error(`API Key Verification Failed: ${message}`);
    } else {
      throw new Error(`Unknown Error: ${message}`);
    }
  } else if (!error.status) {
    throw new Error("No response received from the server.");
  } else {
    throw new Error(`Error: ${error.message}`);
  }
}
