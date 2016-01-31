# viaplay-trailer

## Install
```bash
$ npm install
```

## Run

```bash
$ node server.js
```
## Notes
### Client
The client is done by angular.js and uses some bootstrap to easier and faster make the content of the site look good. The html structure is downloaded together with some css. This because there was no time to produce a design from scatch.
### OMDb API
Instead of using the viaplay content API I have choosen to use the OMDb API because the response is smaller and that it is http which means that there is no need to require both http and https.
### Promises vs Calback
Waiting for the request from the OMDb API to recieve the IMDb ID is done by promises. I think the structure in the code gets more readable/smaller and looks better than with callbacks.  