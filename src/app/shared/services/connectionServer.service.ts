import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  private serverUrl: string;

  constructor(private http: HttpClient) {
    this.serverUrl =  environment.APIServer.server + ":" +
                      environment.APIServer.port + '/' +
                      environment.APIServer.context
  }

  public httpGet( api: String ):  Observable <any> {
    return this.http.get<any>( this.serverUrl+= '/' + api );
  }

  public httpPost( api: string, ModelClass: any ): Observable<any> {

    const DataResponse = this.getDataResponse( api, ModelClass );
    return DataResponse;

  }

  private getDataResponse ( api: string, ModelClass: any ) {

    const uri =  this.serverUrl + api;
    return this.http.post( uri , ModelClass );

  }


}
