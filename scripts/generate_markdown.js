var parse = require('json-schema-to-markdown')
var fs = require('fs')

function writeMarkdownToFile(filename, markdown){
	fs.writeFile(filename, markdown, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	}); 
}

var certschema = require('../cert_schema/schema/certificate/1.1/certificate-schema-v1-1.json')
var certmarkdown = parse(certschema)
writeMarkdownToFile('../docs/certificate-schema-v1-1.md', certmarkdown)

var issuerschema = require('../cert_schema/schema/issuer-keys/1.1/issuer-schema-v1-1.json')
var issuermarkdown = parse(issuerschema)
writeMarkdownToFile('../docs/issuer-schema-v1-1.md', issuermarkdown)
