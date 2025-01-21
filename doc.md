- how do we manage if any of the processees fail?
uploading to temp
scanning
byok
upload to target container
callback

== add status to json in mongo and write a process to revist it everyday


- can we check webhooks for callback?



- monitoring
add data to mongo db
pushing logs to datadog
logging to segment
add logs for performance analysis also

- big containers in small number



- if there is a malicious file, open a bug in jira with all the details



- delete file

uploading to temp location
	node package for uploading the file 


malware processing - 
	/process-file - accept the upload file parameters from a pre configured client application, store the details into the database.
	/file-status - Accept the file name as parameter of this API check for the status of the file and return the detailed status of the file
	/health – For health check of this service by Kubernetes monitoring system

client app
malware processing 
event listener
A V Scan Process 


scan-file
	this will be a separate service which will take the parameters
		azure-config
		source-container
		signature, blobname
	which will download the radable content and scan by stream
	once scan completes update the status in the db


db will trigger the event and push into destination container 
