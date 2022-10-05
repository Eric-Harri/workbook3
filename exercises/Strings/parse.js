"use strict";
  let name = "Brenda Kaye";

function parseAndDisplayName() {

  let first = name.substring(0, 6);
  let last = name.substring(7, 11);

  console.log(`
    Name: ${name}
    First Name: ${first}
    Last Name: ${last}`);
}

parseAndDisplayName("Ian Auston"); 
