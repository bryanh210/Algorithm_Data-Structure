function queryValues(url) {
  let result = {};
  let query = '';

 if (url.indexOf('?') !== -1) {
    query = url.substring(url.indexOf('?') + 1, url.length);
   console.log(query, 'query')

   let querySplit = query.split('&');
   console.log(querySplit, 'querySplit')

   for (let i = 0; i < querySplit.length; i++) {
      let valuesSplit = querySplit[i].split('=');
      console.log(valuesSplit, 'valuesSplit');
      let key = valuesSplit[0];
     console.log(key , "key");
      let value = decodeURIComponent(valuesSplit[1]);
     console.log(value, "value");

     if (result[key]) {
        if (Array.isArray(result[key])) {
          result[key].push(value);
          console.log(result, "result")
        } else {
          let valueArray = [result[key], value];
          console.log('valueArray', valueArray)
          result[key] = valueArray;
          console.log(result[key], "result[key]")
        }
      } else {
        result[key] = value;
      }
    }
  }

 return result;
}


console.log(queryValues('http://www.houzz.com/emerson?foo=1&bar=2&foo=3&decipher=z%20zno%C9%A5'))
