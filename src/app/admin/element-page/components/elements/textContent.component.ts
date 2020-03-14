import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core'
import { DataService } from '../../../services/data.service'

@Component( {
  selector: 'app-element-text',
  template: `
    <div>
      <i>контент элемента <b>текст</b></i>
    </div>
  `,
  styleUrls: ['element.scss']
} )

export class TextContentComponent{

  activeObject = null

  constructor(
    private data: DataService,
    public render: Renderer2
  ) { }


}
