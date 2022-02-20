# adjust-timezone
This is for adjust date time while sending and receiving date time in different time zone 

## Install

```bash
$ npm i adjust-timezone
```


## Usage

client-side: get timezone offset with getTimezoneOffset() and send to server woth API

```javascript
const clientOffset = new Date().getTimezoneOffset(); 
const clientDate = from_client;
```
### Date from client to server then ```direction = 'CLIENT_TO_SERVER'```
### Date from server to client then ```direction = 'SERVER_TO_CLIENT'```
### Default ```direction = 'SERVER_TO_CLIENT'```


### server-side: Send date time from client to server
```javascript
const { adjustTimezone } = require("adjust-timezone");

const direction = 'CLIENT_TO_SERVER'
const inServerTimeDate = adjustTimezone(clientDate, clientOffset, direction)
```

### server-side: Send date time from server to client
```javascript
const { adjustTimezone } = require("adjust-timezone");

const direction = 'SERVER_TO_CLIENT'
const inClientTimeDate = adjustTimezone(clientDate, clientOffset, direction)
```