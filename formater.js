/*
OK TO USE GOOGLE
OK TO MAKE MORE THAN ONE FUNCTION
OK TO USE ANY LANGUAGE YOU WANT, BUT THE DEMO BELOW IS IN JAVASCRIPT
OK TO USE ANY IDE THAT YOU WANT TO USE
*/

// Write a library that converts the following object

const input = {
  name: "Chris Tester",
  defaultAddress: {
    address1: "123 Main Street",
    address2: null,
    city: "Los Angeles",
    region: "CA",
    postalCode: "90045",
    country: "USA",
  },
  badges: ["big-spender","happy-customer","company-advocate"],
  averageMonthlyRevenue: 224.10,
  counts: {
    activeSubscriptions: 2,
    pastPurchases: 323,
  },
  requiresNewCardInformation: false,
}

/*
const input2 = {
  type: "Truck",
  make: "Ford",
  model: "F-150"
}
*/

const formattingFunction = (input) => {
	const result = {}


    for(key in input) {
        const typeF = Object.prototype.toString.call(input[key])

        if(typeF === '[object String]'){
            result[`${key}`] = {
                "stringValue": `${input[key]}`,
            }
        }
        
        if(typeF === '[object Boolean]'){
            result[`${key}`] = {
                "booleanValue": input[key]
            }
        }


        if(typeF === '[object Object]'){
            //console.log(typeF)
            result[`${key}`] = formattingFunction(input[key]);
        }
        
        
        if(typeF === '[object Array]'){
            //console.log(typeF)
        }
        
    }


	console.log(result)
	return result
}

// Into the following format

const output = formattingFunction(input)

/*
const expectedOutput = {
  name: {
    stringValue: "Chris Tester"
  },
  defaultAddress: {
    address1: {
      stringValue: "123 Main Street"
    },
    address2: {
      nullValue: null
    },
    city: {
      stringValue: "Los Angeles"
    },
    region: {
      stringValue: "CA"
    },
    postalCode: {
      stringValue: "90045"
    },
    country: {
      stringValue: "USA"
    },
  },
  badges: { arrayValue: [
    { stringValue: "big-spender" }, 
    { stringValue: "happy-customer" }, 
    { stringValue: "company-advocate" }, 
  ] } 
  averageMonthlyRevenue: {
    doubleValue: 224.10
  },
  counts: {
    activeSubscriptions: {
      integerValue: 2
    },
    pastPurchases: {
      integerValue: 323
    },
  },
  requiresNewCardInformation: {
    booleanValue: false
  },
}
*/
