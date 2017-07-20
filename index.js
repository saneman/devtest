const
  nodePort = 3001,
  nano = require('nano')('https://overrun:u235cmCloudantOverrun@overrun.cloudant.com/'),
  db = nano.use('chat')
  express = require('express'),
  app = express(),
  // server = require('http').createServer(),
  // io = require('socket.io')(server);

http = require('http').createServer(app),
server = require('http').createServer(app);
io = require('socket.io')(http);

io.on('connection', function (socket) {
    // send "connected" event to the client
    socket.emit('connected');
});

io.on('connection', function (client) {
  console.log('connection !!!!');

  client.on('command', function (data) {
    console.log('io event', data);
  });
  client.on('disconnect', function (data) {
    console.log('io disconnect', data);
  });
});



app.use(express.static(__dirname + '/public'));

// app.all('/*', (req, res) => {
//   console.log('hello', req.url);
// });

server.listen(nodePort, () => {
  console.log('now listening on port: ' + nodePort);
});

/*
The purpose of this test is get a good sense of your coding proficiency. It’s also important for us to understand how you process information and come up with simple and elegant solutions to problems which you or may not have encountered before. At Redblade we are all about problem solving until we find the very best option!

Please select ONE of the below options:

Option 1:
================================================================================
Create a web application that captures customer information.

Required information is:
ID number,
first name,
surname and
contact information (
  email,
  phone,
  address
).

Customers must be persisted to a data store of your choice.

Provide a lookup/search into saved customers.

Additional:

Provide integration into a map control and API for address capture and view

Search customers by location

Input validation






================================================================================
Option 2:

Create a web based chat application

Chats must be persisted to a data store of your choice

Allow a customer to take part in multiple chats

Chats can be resumed

Chats can be searched





================================================================================
Option 3:

Image recognition

Use whatever third-party libraries or services you deem appropriate

Determine if a document is likely to be an ID book or drivers license

All other document types are deemed invalid

Provide frontend for document upload

Show key data about document:

Document Type (ID book or drivers license)

Information from document

General Notes

Use third-party libraries and services of your choice.

Any assumptions made, make a note of them.

Any questions – fire off an email to dev@redblade.io and we’ll get back to you asap.

Go to the level of detail that you think appropriate to show your skills.

Ideally MEAN stack, but open to other technologies if that is what you are more familiar with

Submission via: Email – project on github or S3 or dropbox

If you have any questions, please do not hesitate to contact: dev@redblade.io
*/
