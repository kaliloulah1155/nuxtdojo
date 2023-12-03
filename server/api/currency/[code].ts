export default defineEventHandler(async (event) => {
    const code =event.context.params 
   let code_cur='CAD'
    if(code !== undefined) code_cur=code["code"];
 
    
      const config = useRuntimeConfig(event);

    const uri = `https://api.currencyapi.com/v3/currencies?apikey=${config.currencyKey}&currencies=${code_cur}`;

    const data =await $fetch(uri)

    return data

});