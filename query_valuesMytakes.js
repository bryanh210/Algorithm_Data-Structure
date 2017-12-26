function queryValues(url) {
  let result = {};


  let query = url.split('?');
  let trimQuery = query[1].split('&');

  for(let i = 0; i< trimQuery.length; i++){
    let finalTrim = trimQuery[i].split("=")
    let key = finalTrim[0];
    let value = decodeURIComponent(finalTrim[1]);

    if(!result[key]){
      result[key] =value;


    }else{
      // IMPORTANT
      if(Array.isArray(result[key])){
        result[key].push(value)
      }else{
        let valueArray = [result[key]];
        result[key] = valueArray;
        result[key].push(value)
      }

    }


  }


  return result;




}



console.log(queryValues('http://www.houzz.com/emerson?foo=1&bar=2&foo=3&decipher=z%20zno%C9%A5'))


/*

Need to split along the line of ?, = and &





*/
