import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
// "This is a very small wrapper around fetch that aims to simplify requests. 
// It is not a full-blown replacement for axios , superagent , or any other 
// more heavy-weight library, but it will cover the large majority of your needs."
// const axios = require("axios");

const createApiHeaders = {
    // Coin headers
    

}

const baseUrl = 'https://coinranking1.p.rapidapi.com';



export const cryptoAPI = cryptoAPI({
    // "In Redux, a reducer is a pure function that takes an 
    // action and the previous state of the application and 
    // returns the new state. The action describes what happened 
    // and it is the reducer's job to return the new state based on that action."
    
    reducerPath: 'cryptoAPI', // this reducer is for
    baseQuery: fetchBaseQuery({ baseUrl }) 
    endpoipoints: (builder) => ({
        // endpoints function = builder, an objects passed in as parameter returns an object
        getCryptos: builder.query({
            query: () =>  '/cryptocurrencies'
            // names of end point point to specif request
        }) 
    })
});
// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//    
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });