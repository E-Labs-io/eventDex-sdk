# EventDex SDK

This is the official Node.js/TypeScript SDK for the EventDex API. It allows users to easily access the EventDex database, management, and API.

## Installation

```bash
npm install eventdex-sdk
```

## Usage

```javascript
import { EventDexAPI } from 'eventdex-sdk';

const API_KEY = 'your-api-key';
const sdkInstance = new EventDexAPI(API_KEY);

// Example: Fetch event data
sdkInstance.getEventData(indexId)
	.then(data => console.log(data))
	.catch(error => console.error(error));

// Example: Manage indexes
sdkInstance.createIndex(indexData)
	.then(response => console.log(response))
	.catch(error => console.error(error));

// More examples and detailed usage can be found in the documentation
```

## Documentation

For detailed documentation and examples, please visit the [official documentation](https://eventdex.example.com/docs).

## Support

If you encounter any issues or need help, please reach out to our [support team](mailto:support@example.com).