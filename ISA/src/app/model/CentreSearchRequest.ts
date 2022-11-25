
export interface ICentreSearchRequest {
    searchName?: string;
    searchAddress?: string;
    centerId?: number;
  }
  export class CentreSearchRequest implements ICentreSearchRequest {
    searchName?: string;
    searchAddress?: string;
    centerId?: number;
    constructor(data?: ICentreSearchRequest){
      if (data) {
        for (const property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
  }
