//fetch GET request boilerplate

//send request
fetch("https://api-to-call.com/endpoint").then((response) => {
  //convert response object to JSON
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, (networkError) => {
  console.log(networkError.message);
  //handle success
}).then((jsonResponse) => {
  return jsonResponse;
});
