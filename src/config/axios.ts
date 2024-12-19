import axios from "axios";

export const axiosRaffle = axios.create({
    baseURL: 'https://api.raffle.evolutionygo.com/api/v1',
    headers: {
      'Content-Type': 'application/json',
    },
  });