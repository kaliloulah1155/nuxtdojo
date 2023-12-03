 
export default defineEventHandler(async (event) => {
  // ... Do whatever you want here
 // const { name } = getQuery(event);

  //handle post data
  //const { age } = await readBody(event);

  //api call with private key 
    const config = useRuntimeConfig(event);
  const data = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${config.currencyKey}&currencies=EUR%2CUSD%2CCAD`
  );
    // return {
    //   message: `Hello, ${name} , age : ${age} `,
      
    // };
    return data
});