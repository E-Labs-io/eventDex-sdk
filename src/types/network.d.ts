

//  API STUFF

// API response interface
export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

// Firestore document reference interface
export interface DocumentReference {
  id: string;
}

//  CHAIN STUFF

// Accepted networks type
export type AcceptedNetworks = "goerli" | "ethereum" | "polygon" | "mumbai";