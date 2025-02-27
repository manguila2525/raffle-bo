import axios from "axios";

export const axiosRaffle = axios.create({
    baseURL: 'https://dev.api.raffleofficial.com/api/v1',
    headers: {
      'Content-Type': 'application/json',
    },
  });