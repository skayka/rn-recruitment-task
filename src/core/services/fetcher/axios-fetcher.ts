import axios from 'axios';
import { Fetcher } from './fetcher.inteface';

/* It's a class that implements the Fetcher interface and uses axios to make HTTP requests */
export class AxiosFetcher implements Fetcher {
  constructor() {}

  get = async <ResponseType>(url: string): Promise<ResponseType> => {
    const { data } = await axios.get(url);
    // zod <- generic
    return data as ResponseType;
  };
}

// type ObjectLike = Record<string, any>;
//   post = async <PayloadType, ResponseType>(endpoint: string, payload: PayloadType): Promise<ResponseType> => {
//     const postUrl = this._getFullUrl(endpoint, payload);
//     const data = await (await fetch(postUrl)).json();
//     return data as ResponseType;
//   };

//   private _getFullUrl = (endpoint: string, payload?: any): string => {
//     return apiUrl + endpoint + this._converObjectToPostString(payload as ObjectLike);
//   };

//   private _converObjectToPostString = (obj: ObjectLike | undefined): string => {
//     if (typeof obj === 'undefined') {
//       return '';
//     }

//     let postString = '';
//     let i = 0;
//     Object.keys(obj).map(key => {
//       if (i !== 0) {
//         postString += '&';
//       }
//       postString += `${key}=${obj[key]}`;
//     });
//     return postString;
//   };
