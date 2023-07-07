/** @format */

import { AcceptedNetworks } from "./network";

// Indexer interface
export interface Indexer {
  network: AcceptedNetworks;
  id: string;
  contractAddress: string;
  contractABI: any;
  paused: boolean;
  owner: string;
  events: Event[];
  updated: number;
  created: Date;
  [eventName: string]: any | EventEntry[];
}

// Event interface
export interface Event {
  name: string;
  args: EventArgs[];
  active: boolean;
  entries?: number;
}

// Event entry item type
export interface EventEntry {
  blockNumber: number;
  transactionHash: string;
  address: string;
  name: string;
  args: EventArgs;
}

// Args type
export type EventArgs = { [key: string]: any };
