//XMLHttpRequest GET boilerplate
const xhr = new XMLHttpRequest();
const url = "https://api-to-call.com/endpoint";

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};

//open request and send object
xhr.open('GET', url);
xhr.send();


//fetch GET boilerplate
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
