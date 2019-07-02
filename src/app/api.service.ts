import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // tslint:disable-next-line: max-line-length
  private privateKey = '83ecdee7581f30f037d2a93c09912e19f1f8db8bc0d1142158b765f2d76d43a1d2c7caf91c143f3ec8aa1e9443e8860f693285b4b0bca95ffd4c3fb7a5c6041c';
  private publicKey = '966ac8b8bbb57d4c27becec1efeeb42e874d49a099e24544b9c2c80a7f0beeea';
  private headers = {
    'DEV-SHRIMPY-API-KEY': this.publicKey,
    'DEV-SHRIMPY-API-NONCE': Date.now()
  };

  constructor(private http: HttpClient) { }

  getMarketData(exchange: string) {
    let ex: object = {};
    this.http.get('http://dev-api.shrimpy.io/v1/exchanges/coinbasepro/ticker').subscribe(data => {
      ex = data;
      console.log(data);
    });
  }

  generateSignature(endpoint: string, request: object): object {
    const method = 'GET';
    const nonce = Date.now();
    const preHash = endpoint + method + nonce + JSON.stringify(request);
    const key = new Buffer(this.privateKey, 'base64');

    return {};
  }
}
