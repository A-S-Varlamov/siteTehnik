import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core'
import { DataService } from '../../../services/data.service'

@Component( {
  selector: 'app-element-text',
  template: `
    <div *ngIf="activeObject">
      <h5 class="styleTitle">свойства</h5>
      <p>название</p>
      <input type="text"
             value="{{activeObject.props.name}}"
             [(ngModel)]="activeObject.props.name">
      <p>выравнивание</p>
      <select
        [(ngModel)]="activeObject.props.display"
        (ngModelChange)="
             this.render.setStyle( this.data.activeElement.lastChild, 'display', activeObject.props.display )">
        <option value="block">вертикально</option>
        <option value="flex">горизонтально</option>
        <option value="grid">сетка</option>
      </select>
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
    </div>
  `,
  styleUrls: ['element.scss']
} )

export class ElementContainerComponent{

  constructor(
    private data: DataService,
    public render: Renderer2
  ) { }

  activeObject = null

}
