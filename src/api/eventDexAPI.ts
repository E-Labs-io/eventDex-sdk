/** @format */

import axios from "axios";

// Define the base URL for the EventDex API
const API_URL = "https://api.eventdex.io";

// Define the structure of an error response from the API
export interface ErrorResponse {
  status: number;
  message: string;
}

export default class EventDexAPI {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  // Fetch event data from the API
  async getEventData(indexId: string): Promise<any> {
    try {
      const response = await axios.get(`${API_URL}/get/event-data/${indexId}`, {
        headers: {
          "x-api-key": this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      this.handleErrors(error);
    }
  }

  // Manage indexes in the API
  async manageIndexes(action: string, indexId: string): Promise<any> {
    try {
      const response = await axios.post(
        `${API_URL}/manage/indexes`,
        {
          action,
          indexId,
        },
        {
          headers: {
            "x-api-key": this.apiKey,
          },
        }
      );
      return response.data;
    } catch (error) {
      this.handleErrors(error);
    }
  }

  // Access the database in the API
  async accessDatabase(action: string, data: any): Promise<any> {
    try {
      const response = await axios.post(
        `${API_URL}/access/database`,
        {
          action,
          data,
        },
        {
          headers: {
            "x-api-key": this.apiKey,
          },
        }
      );
      return response.data;
    } catch (error) {
      this.handleErrors(error);
    }
  }

  // Handle errors and exceptions in the SDK
  private handleErrors(error: any): void {
    let errorResponse: ErrorResponse;

    if (error.response) {
      errorResponse = {
        status: error.response.status,
        message: error.response.data.message,
      };
    } else {
      errorResponse = {
        status: 500,
        message: "An unknown error occurred.",
      };
    }

    // Check if the error is related to API key verification
    if (
      errorResponse.status === 401 &&
      errorResponse.message.includes("API key")
    ) {
      throw new Error("Invalid API key provided.");
    }

    throw errorResponse;
  }
}
