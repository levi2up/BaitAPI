// Main Website Code

getProfileData = function(username) {
  fetch('https://sky.shiiyu.moe/api/v2/profile/' + username, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer <your_token>'
  }
})
.then(response => response.json())
.then(data => {
  return data
})
.catch(error => {
  return error
});
}

getBazaarData = function(item) {
  fetch('https://sky.shiiyu.moe/api/v2/bazaar', {
    method: "GET"
  })
  .then(response => response.json)
  .then(data => {
    return data
  })
  .catch(error => {
    return error
  });
}

console.log(getBazaarData)