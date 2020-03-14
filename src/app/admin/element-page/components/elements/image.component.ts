import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component( {
  selector: 'app-element-text',
  template: `
    <button class="btn" (click)="close.emit()">Закрыть</button>
    <p>{{activeObject.name}}</p>
    <h3 class="styleTitle">картинка компонент</h3>
    <h5 class="styleTitle">свойства</h5>
    <br>
    <h5 class="styleTitle">стили</h5>
  `,
  styles: [`
  `]
} )

export class ElementImageComponent{
  @Input() title = 'картинка элемент'
  @Output() close = new EventEmitter<void>()

  activeObject = null

  newElement =
    {
      component: 'ElementImageComponent',
      name: 'картинка',
      content: '',
      handle: true,
      props: [
        {
          type: 'input',
          style: 'name',
          name: 'название',
          value: 'картинка'
        }
      ],
      styles: [
        {
          type: 'input',
          style: 'width',
          name: 'ширина',
          value: '100%'
        },
        {
          type: 'input',
          style: 'height',
          name: 'высота',
          value: '100%'
        },
        {
          type: 'input',
          style: 'border-width',
          name: 'толщина рамки',
          value: '1px'
        },
        {
          type: 'select',
          style: 'border-style',
          name: 'тип рамки',
          value: 'solid',
          valueList: ['solid', 'dashed', 'dotted', 'none'],
          valueName: ['сплошная', 'пунктирная', 'точки', 'нет']
        },
        {
          type: 'input',
          style: 'border-color',
          name: 'цвет рамки',
          value: 'darkgrey'
        },
        {
          type: 'input',
          style: 'border-radius',
          name: 'радиус рамки',
          value: '0px'
        },
        {
          type: 'input',
          style: 'background-color',
          name: 'цвет фона',
          value: '#fff'
        }
      ]
    }

}
