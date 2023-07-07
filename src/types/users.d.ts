/** @format */

//  ACCOUNT STUFF

// User interface
export interface User {
  uid: string;
  email: string;
  apiKey: string;
  quota: QuotaType;
  indexes: string[];
  active: boolean;
  accountType: string;
}

// Add-on type
export type AddOnType = {
  item: "indexes" | "events";
  package: number;
  expiry: Date;
};

// Quota type
export type QuotaType = {
  indexes: {
    totalAvailable: number;
    used: number;
  };
  eventEntries: {
    totalAvailable: number;
    used: number;
  };
};
