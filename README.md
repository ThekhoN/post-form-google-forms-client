# post-form-google-forms-client

Sometimes, the client wants to store data in google forms along with storage at their end.
check the embedFormHandler.js

## Basic logic
form has action defined with the default google-form-response url,
if invalid, we ensure event.preventDefault() which prevents the form from being submitted
if valid, form is automatically submitted to goole-form and also the client storage
