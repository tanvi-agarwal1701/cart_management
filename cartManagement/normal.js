let base_url="https://dummyjson.com/";
 async function apiCalling(type,endPoint,data={}){
   
    const apiURL =`${base_url}${endPoint}`
    try{
    return  await fetch(apiURL, {
        method: type,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then((response) =>
 { if(response.status!=200)
    {
        alert("api is loading");
    }
    return  response.json()})
    .then((data) =>
    {
        
 return data;
    });     

}catch(error)
{
    console.log(error,"this is an error");
}
}
export {base_url,apiCalling}