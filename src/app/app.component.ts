import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import type { InvestmentData } from './investment-input.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

export interface AnnualData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {}
