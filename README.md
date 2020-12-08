# orderbook-app
Order book react app to connect to the orderbook-parser for kraken markets

### `yarn install`
Install first

### update .env
Use the .example.env to create your own .env and populate it with the IP of the server that is serving the order book as well as the DEV or PROD modes
*Dev mode requires react chrome debug extension

### `yarn start`

Start the app after you start the orderbook-parser so that the ws can connect or just reload the page after you start the server
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.