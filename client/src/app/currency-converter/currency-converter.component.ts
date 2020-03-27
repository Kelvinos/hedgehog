import { Component, OnInit } from '@angular/core'
import { AmountChangeAction } from '../actions/amount'
import { Store } from '@ngrx/store'
import * as fromRoot from '../reducers'
import { Observable } from 'rxjs'
import { Currency } from '../models/currency'
import { CurrenciesUpdateAction } from '../actions/currency'

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  public amount$: Observable<number>
  public currencyRates$: Observable<Currency[]>

  constructor(
    public store: Store<fromRoot.State>
  ) { 
    this.amount$ = store.select(fromRoot.getAmountState)
    this.currencyRates$ = store.select(fromRoot.getCurrencyRates)
  }

  ngOnInit(): void {
    this.store.dispatch(new CurrenciesUpdateAction())
  }

  onAmountChange(amount: string) {
    const number = parseFloat(amount);

    if(isNaN(number))
      return

    this.store.dispatch(new AmountChangeAction(number));
  }

}
