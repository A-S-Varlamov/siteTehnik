import { Component, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core'
import { DataService } from '../../../services/data.service'

@Component( {
  selector: 'app-element-text',
  template: `

    <strong class="newElement">area template</strong>

    <ng-template>
      <div *ngIf="activeObject">
        <h5 class="styleTitle">свойства</h5>
        <p>название</p>
        <input type="text"
               value="{{activeObject.props.name}}"
               [(ngModel)]="activeObject.props.name">
        <p>контент</p>
        <textarea
          value="{{activeObject.props.content}}"
          [(ngModel)]="activeObject.props.content"
          (ngModelChange)="changeText()"
        >
      </textarea>
        <p>ширина</p>
        <input type="text"
               value="{{activeObject.styles.width}}"
               [(ngModel)]="activeObject.styles.width"
               (ngModelChange)="
             this.render.setStyle( this.data.activeElement, 'width', activeObject.styles.width )"
        >
        <p>высота</p>
        <input type="text"
               value="{{activeObject.styles.height}}"
               [(ngModel)]="activeObject.styles.height"
               (ngModelChange)="
             this.render.setStyle( this.data.activeElement, 'height', activeObject.styles.height )"
        >
        <p>выравнивание</p>
        <select
          [(ngModel)]="activeObject.styles['text-align']"
          (ngModelChange)="
             this.render.setStyle( this.data.activeElement, 'text-align', activeObject.styles['text-align'] )">
          <option value="center">по центру</option>
          <option value="left">слева</option>
          <option value="right">справа</option>
        </select>
      </div>
    </ng-template>
  `,
  styleUrls: ['element.scss']
} )

export class ElementTextComponent {

  public activeObject = null

  constructor(
    private data: DataService,
    public render: Renderer2
  ) {
  }

  changeText() {
  }

}
