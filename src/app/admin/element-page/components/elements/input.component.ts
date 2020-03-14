import { Component } from '@angular/core'

@Component( {
  selector: 'app-input',
  template: `
    <div class="main">
      <small>{{title}}</small>
      <div class="cont" *ngIf="persentToggle">
        <input  class="range" type="range" min="0" max="100" step="5" [(ngModel)]="persentValue"
               [value]="persentValue">
        <i>{{persentValue}}%</i>
      </div>
      <div class="cont" *ngIf="pixelsToggle">
        <input class="myInput" type="number" [(ngModel)]="pixelsValue" [value]="pixelsValue">
        <i>px.</i>
      </div>
    </div>

  `,
  styles: [`
    .main {
      width: 90%;
      margin: 3px auto;
      text-align: center;
      //border-radius: 5px;
      //background-color: #ddd;
      padding: 5px;
      //box-shadow: 0 1px 5px #888;
    }

    .range {
      width: 70%;
    }

    .cont {
      display: flex;
      justify-content: space-between;
    }

    .myInput {
      height: 1.5rem;
      font-size: 0.8rem;
      text-align: center;
      padding: 0.3rem;
      width: 80%;
      border-radius: 8px;
    }

  `]
} )

export class InputComponent {
  title = '*название поля*'
  persentValue = 100
  pixelsValue = 100
  persentToggle = true
  pixelsToggle = true
}
