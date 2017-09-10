// Compares json objects of the following format:
//      {
//          attr1: strval1, attr2: strval2 ..., 
//          value: [{attr1: strval1, ...}, ...]
//      }
function compare(a, b) {
    a = JSON.parse(a);
    b = JSON.parse(b);
    if (Object.getOwnPropertyNames(a).length !== Object.getOwnPropertyNames(b).length) {
        console.log("Property: root length mismatch");
        return false;
    }
    if (Object.getOwnPropertyNames(a.value).length !== Object.getOwnPropertyNames(b.value).length) {
        console.log("Property: value length mismatch");
        return false;
    }
    let valueNames = Object.getOwnPropertyNames(a.value[0]);
    for (let i = 0; i < a.value.length; i++) {
        for (let j = 0; j < valueNames.length; j++) {
            if (a.value[i][valueNames[j]] !== b.value[i][valueNames[j]]) {
                console.log("Property: " + valueNames[j] + " value mismatch");
                console.log("On: ");
                console.log(a.value[i]);
                console.log(b.value[i]);
                return false;
            }
        }
    }
    return true;
}

let theirJsons = ['{"odata.metadata":"http://localhost:8181/WcfDataService1.svc/$metadata","value":[{"name":"Categories","url":"Categories"},{"name":"Suppliers","url":"Suppliers"},{"name":"Products","url":"Products"}]}',
'{"odata.metadata":"http://localhost:8181/WcfDataService1.svc/$metadata#Categories&$select=CategoryID,CategoryName,Description","value":[{"CategoryID":1,"CategoryName":"Beverages","Description":"Soft drinks, coffees, teas,beers, and ales"},{"CategoryID":2,"CategoryName":"Condiments","Description":"Sweet and savory sauces,relishes, spreads, and seasonings"},{"CategoryID":3,"CategoryName":"Confections","Description":"Desserts, candies, and sweetbreads"}]}',
'{"odata.metadata":"http://localhost:8181/WcfDataService1.svc/$metadata#Suppliers&$select=SupplierID,CompanyName,ContactName,Country","value":[{"SupplierID":1,"CompanyName":"Exotic Liquids","ContactName":"CharlotteCooper","Country":"UK"},{"SupplierID":2,"CompanyName":"New Orleans Cajun Delights","ContactName":"ShelleyBurke","Country":"USA"},{"SupplierID":3,"CompanyName":"Grandma Kelly\'s Homestead","ContactName":"ReginaMurphy","Country":"USA"}]}',
'{"odata.metadata":"http://localhost:8181/WcfDataService1.svc/$metadata#Products&$select=ProductID,ProductName,CategoryID,SupplierID,UnitPrice,UnitsInStock,UnitsOnOrder","value":[{"ProductID":1,"ProductName":"Chai!","CategoryID":1,"SupplierID":1,"UnitPrice":"18.0000","UnitsInStock":39,"UnitsOnOrder":0},{"ProductID":2,"ProductName":"Chang","CategoryID":1,"SupplierID":29,"UnitPrice":"19.0000","UnitsInStock":175,"UnitsOnOrder":40},{"ProductID":3,"ProductName":"AniseedSyrup","CategoryID":2,"SupplierID":1,"UnitPrice":"10.0000","UnitsInStock":13,"UnitsOnOrder":70}]}',
'{"odata.metadata":"http://localhost:8181/WcfDataService1.svc/$metadata#Products&$select=ProductID,ProductName,CategoryID,SupplierID,Category/CategoryName,Supplier/CompanyName,Supplier/ContactName","value":[{"Category":{"CategoryName":"Beverages"},"Supplier":{"CompanyName":"ExoticLiquids","ContactName":"Charlotte Cooper"},"ProductID":1,"ProductName":"Chai!","CategoryID":1,"SupplierID":1},{"Category":{"CategoryName":"Beverages"},"Supplier":{"CompanyName":"For\u00eatsd\'\u00e9rables","ContactName":"Chantal Goulet"},"ProductID":2,"ProductName":"Chang","CategoryID":1,"SupplierID":29},{"Category":{"CategoryName":"Condiments"},"Supplier":{"CompanyName":"ExoticLiquids","ContactName":"Charlotte Cooper"},"ProductID":3,"ProductName":"AniseedSyrup","CategoryID":2,"SupplierID":1}]}'];
let myJsons = ['{"odata.metadata":"http://localhost:8181/WcfDataService1.svc/$metadata","value":[{"name":"Categories","url":"Categories"},{"name":"Suppliers","url":"Suppliers"},{"name":"Products","url":"Products"}]}',
'{"odata.metadata":"http://localhost:8181/WcfDataService1.svc/$metadata#Categories&$select=CategoryID,CategoryName,Description","value":[{"CategoryID":1,"CategoryName":"Beverages","Description":"Soft drinks, coffees, teas, beers, and ales"},{"CategoryID":2,"CategoryName":"Condiments","Description":"Sweet and savory sauces, relishes, spreads, and seasonings"},{"CategoryID":3,"CategoryName":"Confections","Description":"Desserts, candies, and sweet breads"}]}',
'{"odata.metadata":"http://localhost:8181/WcfDataService1.svc/$metadata#Suppliers&$select=SupplierID,CompanyName,ContactName,Country","value":[{"SupplierID":1,"CompanyName":"Exotic Liquids","ContactName":"Charlotte Cooper","Country":"UK"},{"SupplierID":2,"CompanyName":"New Orleans Cajun Delights","ContactName":"Shelley Burke","Country":"USA"},{"SupplierID":3,"CompanyName":"Grandma Kelly\'s Homestead","ContactName":"Regina Murphy","Country":"USA"}]}',
'{"odata.metadata":"http://localhost:8181/WcfDataService1.svc/$metadata#Products&$select=ProductID,ProductName,CategoryID,SupplierID,UnitPrice,UnitsInStock,UnitsOnOrder","value":[{"ProductID":1,"ProductName":"Chai!","SupplierID":1,"CategoryID":1,"UnitPrice":"18.0000","UnitsInStock":39,"UnitsOnOrder":0},{"ProductID":2,"ProductName":"Chang","SupplierID":29,"CategoryID":1,"UnitPrice":"19.0000","UnitsInStock":175,"UnitsOnOrder":40},{"ProductID":3,"ProductName":"Aniseed Syrup","SupplierID":1,"CategoryID":2,"UnitPrice":"10.0000","UnitsInStock":13,"UnitsOnOrder":70}]}',
'{"odata.metadata":"http://localhost:8181/WcfDataService1.svc/$metadata#Products&$select=ProductID,ProductName,CategoryID,SupplierID,Category/CategoryName,Supplier/CompanyName,Supplier/ContactName","value":[{"Supplier":null,"Category":null,"ProductID":1,"ProductName":"Chai!","SupplierID":1,"CategoryID":1},{"Supplier":null,"Category":null,"ProductID":2,"ProductName":"Chang","SupplierID":29,"CategoryID":1},{"Supplier":null,"Category":null,"ProductID":3,"ProductName":"Aniseed Syrup","SupplierID":1,"CategoryID":2}]}'];
for (let i = 0; i < 5; i++) {
    compare(theirJsons[i], myJsons[i]);
}