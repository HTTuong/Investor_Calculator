import { Component, computed, inject, input, Input } from '@angular/core';
import { AnnualData } from '../app.component';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // @Input() results?: AnnualData[];
  // results = input<AnnualData[]>();
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultsData());
}
