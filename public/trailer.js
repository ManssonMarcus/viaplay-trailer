$.ajax({
	    url: 'http://localhost:8081/film/non-stop-2014',
	    type: 'GET',
	    withCredentials: true,
	})
	.done(function(theData) {
		var h = document.createElement("H1");
    	var title = document.createTextNode(theData.trailer_title);
		h.appendChild(title);
		var iframe = document.createElement("IFRAME");
	    iframe.setAttribute('src', theData.trailer_url);
	    iframe.setAttribute('width', '480');
	    iframe.setAttribute('height', '270');
	    document.body.appendChild(h);
	    document.body.appendChild(iframe);

	}).fail(function(req) {	
		console.log("error");
	});	