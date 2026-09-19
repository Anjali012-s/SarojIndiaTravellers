import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-when-to-go-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section">
      <div class="wrap">
        <p class="eyebrow">Season</p>
        <h1>When to go</h1>
        <p>
          Peak for North India is October–March. That is also when palace hotels and Ranthambore permits sell out.
          We still run trips in summer and monsoon — with shorter outdoor blocks and honest weather notes on the quote.
        </p>
        <div class="table-wrap">
          <table class="plain">
            <thead>
              <tr>
                <th>Months</th>
                <th>North / Triangle</th>
                <th>Rajasthan</th>
                <th>Wildlife</th>
                <th>Kerala</th>
              </tr>
            </thead>
            <tbody>
              @for (row of rows; track row.months) {
                <tr>
                  <td>{{ row.months }}</td>
                  <td>{{ row.north }}</td>
                  <td>{{ row.raj }}</td>
                  <td>{{ row.wild }}</td>
                  <td>{{ row.kerala }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        <p style="margin-top: 1.5rem">
          Festival dates (Diwali, Holi, Christmas–New Year) change hotel rates. Tell us the week; we re-quote.
        </p>
        <a class="btn" routerLink="/custom">Check your dates</a>
      </div>
    </section>
  `,
})
export class WhenToGoPageComponent {
  rows = [
    {
      months: 'Oct–Mar',
      north: 'Best. Cool mornings, clear Taj light.',
      raj: 'Best. Book palaces early.',
      wild: 'Strong. Permits go first.',
      kerala: 'Best. Houseboats busy Dec–Jan.',
    },
    {
      months: 'Apr–Jun',
      north: 'Hot. Dawn starts, AC cars, indoor lunch.',
      raj: 'Very hot. Shorter forts, pool hotels.',
      wild: 'Often excellent (dry grass). Heat is real.',
      kerala: 'Warm; hills help. Pre-monsoon humidity.',
    },
    {
      months: 'Jul–Sep',
      north: 'Monsoon. Softer crowds, some wet roads.',
      raj: 'Occasional storms; fewer tourists.',
      wild: 'Some zones close. We say so before you pay.',
      kerala: 'Lush, quieter boats, more indoor time.',
    },
  ];

  constructor(title: Title) {
    title.setTitle('When to visit India | Saroj India Tours');
  }
}
