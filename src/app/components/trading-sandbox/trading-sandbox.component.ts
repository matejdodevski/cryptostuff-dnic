import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/httpService';

@Component({
  selector: 'app-trading-sandbox',
  templateUrl: './trading-sandbox.component.html',
  styleUrls: ['./trading-sandbox.component.scss'],
})
export class TradingSandboxComponent implements OnInit {
  data: any;
  chosenCoin = '';
  amount = 0;

  assets: any;
  displayedColumns: string[] = ['asset_id', 'name', 'price_usd', 'volume_1hrs_usd', 'volume_1day_usd', 'volume_1mth_usd'];

  portfolio = [
    {
      coin: 'SOL',
      amount: 5.124,
    },
  ];
  cryptos = [
    {
      short: 'BTC',
      long: 'Bitcoin',
    },
    {
      short: 'ADA',
      long: 'Cardano',
    },
    {
      short: 'USDT',
      long: 'Tether',
    },
    {
      short: 'ETH',
      long: 'Etherium',
    },
    {
      short: 'USDC',
      long: 'USD Coin',
    },
    {
      short: 'BNB',
      long: 'BNB',
    },
    {
      short: 'XRP',
      long: 'Ripple',
    },
    {
      short: 'SOL',
      long: 'Solana',
    },
    {
      short: 'DOGE',
      long: 'Dogecoin',
    },
  ];
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getAllAssets().subscribe((res) => {
      this.assets = res.filter(
        (x: { type_is_crypto: number }) => x.type_is_crypto == 1
      );
      console.log(this.assets)
    });
  }

  buyCrypto(coin: string) {
    this.http.getCoinToUsdNow(coin).subscribe((res) => {
      this.data = res;
      let value = this.data.rate;

      let amountToBuy = this.amount / value;
      var alreadyHave = this.portfolio.find((x) => x.coin === coin);
      if (alreadyHave) {
        alreadyHave!.amount += amountToBuy;
      } else {
        this.portfolio.push({ coin: coin, amount: amountToBuy });
      }
    });
  }
}
