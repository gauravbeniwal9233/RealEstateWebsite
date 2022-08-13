import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '387a559a85msha2dca20156581c8p1b7f8djsn4a13facccb2d' ,
    },
  });
    
  return data;
}