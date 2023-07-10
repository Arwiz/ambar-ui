import axios, { AxiosResponse } from 'axios';

export const postData = async (url: string, data: any): Promise<any> => {
  const response: AxiosResponse<any> = await axios.post(url, data);
  return response.data;
}

export const getData = async (url: string): Promise<any> => {
  const response: AxiosResponse<any> = await axios.get(url);
  return response.data;
}



export const putData = async (url: string, data: any): Promise<any> => {
  const response: AxiosResponse<any> = await axios.put(url, data);
  return response.data;
}


export const deleteData = async (url: string): Promise<any> => {
  const response: AxiosResponse<any> = await axios.delete(url);
  return response.data;
}