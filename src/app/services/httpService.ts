import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'X-CoinAPI-Key': '036614C4-5306-4E25-8CFA-FBE26075E37C',
  }),
};

@Injectable()
export class HttpService {
  cryptoApiUrl = 'https://rest.coinapi.io/v1';
  apiKey = '036614C4-5306-4E25-8CFA-FBE26075E37C';

  constructor(private http: HttpClient) {}

  getCoinToUsdNow(coin: string) {
    return this.http.get<any>(
      this.cryptoApiUrl + '/exchangerate/' + coin + '/USD',
      httpOptions
    );
  }

  getAllAssets() {
    return this.http.get<any>(
      this.cryptoApiUrl +
        '/assets/BTC,ETH,USDT,USDC,BNB,XRP,BUSD,ADA,SOL,DOGE,DOT,WBTC,AVAX,DAI,SHIB,MATIC,LEO,LTC,CRO,NEAR,FTT,BCH,UNI,LINK,XLM,ALGO,ATOM,XMR,ETC,HBAR,EGLD,MANA,VET,ICP,FIL,XTZ,SAND,ZEC,MKR,KCS,AXS,CAKE,EOS,THETA,TUSD,KLAY,UST',
      httpOptions
    );
  }
}
