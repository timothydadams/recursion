// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  console.log(JSON.stringify(obj));

  function addToString(obj, string) {
  	//handle some edge cases
  	if (typeof obj === `number` || obj === null || typeof obj === `boolean`) {
  		return `${obj}`;
  	}

  	//add double quotes to strings
  	if (typeof obj === `string`) {
  		return `"${obj}"`;
  	}

  	//handle arrays
  	if (Array.isArray(obj)) {
  	  if (obj.length === 0) return `[]`;

  	  string = `[`;

  	  for (var i = 0; i < obj.length; i++) {
  	    string += addToString(obj[i], string);
  		if (obj.length > 1 && i < obj.length - 1) {
  		  string += `,`;
  		}
  	  }
  	  return string + `]`;
  	}

  	//handle objects      
  	if (obj instanceof Object) {

  	  if (Object.entries(obj).length === 0) {
  	  	return `{}`;
  	  }

  	  var keys = Object.keys(obj);

  	  string = `{`;
  	  for (var j = 0; j < keys.length; j++) {
  	  	if (obj[keys[j]] === undefined || obj[keys[j]] instanceof Function) {
  	  		string += ``;
  	  	} else {
  	  	  string += `"${keys[j]}"`;
  	  	  string += `:`;
  	  	  string += addToString(obj[keys[j]], string);
  	  	
  	  	  if (keys.length > 1 && j < keys.length - 1) {
  	        string += `,`;
  	  	  }
        }
  	  }
  	  return string + `}`;
  	}
  }
 
   console.log(addToString(obj, ``));
   return addToString(obj, ``);

};