import { baseUrl } from "./constants";
import axios, { AxiosResponse } from 'axios';


export function get(url: string) {
    const uri = baseUrl + url;
    return axios.get(uri);
}
export function getById(url: string, id: string) {
    const uri = baseUrl + url + '/' + id;
    return axios.get(uri);
}

export function post(url: string, payload: any): Promise<AxiosResponse> {
    const uri = baseUrl + url;
    return axios.post(uri, payload);
}

export function deleteItem(url: string, id: string) {
    const uri = baseUrl + url + '/' + id;
    return axios.delete(uri);
}

export function put(url: string, id: string,payload:any) {
    const uri = baseUrl + url + '/' + id;
    return axios.put(uri,payload);
}