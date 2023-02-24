let base_url="https://dummyjson.com/";
function apiCalling(type,endPoint,data={}){
   
    const apiURL =`${base_url}${endPoint}`
    try{
   return fetch(apiURL, {
        method: type,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then((response) =>
 { if(response.status!=200)
    {
      console.log("esponse status is not true");
    }
    return response.json()})
    .then((data) =>
    {
       
      return data;
 
    });
      

}catch(error)
{
    console.log(error,"this is an error");
}
}

function localStorageSetItem(key,value)
{
    let setData=localStorage.setItem(key,JSON.stringify(value));
    return setData;
}
function localStorageGetItem(key)
{
    let getData=JSON.parse(localStorage.getItem(key));
   return getData;

}
 function getMethod(endPoint)
{
    const apiURL=`${base_url}${endPoint}`
    try{
 
    return fetch(apiURL)
      .then((response) =>
 { if(response.status!=200)
    {
        alert("api is loading");
    }
    return response.json()})
    .then((data) =>
    {
      return data;
 
    });
      

}
    catch(error)
    {
        console.log(error);
    }
}



export {base_url,apiCalling,localStorageSetItem,localStorageGetItem,getMethod}