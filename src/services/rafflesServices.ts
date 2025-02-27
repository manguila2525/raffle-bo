import { axiosRaffle } from "../config/axios"
import { IDetailRaffle } from "../interface/raffle"

export const getRaffles: () => Promise<IDetailRaffle[]>= async() => {
       const {data} = await axiosRaffle.get('/raffles/most-recent', {
        params: {
          limit: 20,
        },
      })
       return data
}

// export const getExchangeRateFromInternal = async (): Promise<number> => {
//     try {
//       const response = await axiosRaffle.get("/raffles/most-recent", {
//         params: {
//           limit: 20,
//         },
//       });
  
//       const exchangeRate = response?.data?.exchangeRate || 0;
//       return exchangeRate;
//     } catch (error) {
//       console.error("Error obteniendo la tasa de cambio de la API interna:", error);
//       throw error;
//     }
//   };