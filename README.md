# viaplay-trailer

## Install
```bash
$ npm install
```

## Run

```bash
$ node server.js
```
## Port & URL

```bash
http://localhost:8081
```

## Notes
### Client
The client is done by angular.js and uses some bootstrap to easier and faster make the content of the site look good. The html structure is downloaded together with some css. This because there was no time to produce a design from scratch.
### OMDb API
Instead of using the viaplay content API I have choosen to use the OMDb API because I could not find the requested movie, non-stop by https://content.viaplay.se/web-se/film/non-stop-2014
### Promises vs Callback
Waiting for the request from the OMDb API to receive the IMDb ID is done by promises. I think the structure in the code gets more readable/smaller and looks better than with callbacks.  
