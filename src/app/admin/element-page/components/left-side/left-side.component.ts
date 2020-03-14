import { Component, ComponentFactoryResolver, ElementRef, Renderer2, ViewChild } from '@angular/core'
import { DataService } from '../../../services/data.service'
import { DndDropEvent} from 'ngx-drag-drop'
import { ElementTextComponent } from '../elements/text.component'

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss']
})
export class LeftSideComponent {

  @ViewChild( 'cont', { static: false } ) cont: ElementRef

  elementStyleObj = {
    left: '0px',
    position: 'fixed'
  }

  constructor(
    private render: Renderer2,
    private data: DataService
  ) { }

  swichShow( elementStyleObj ) {
    if ( elementStyleObj.left === '0px' ) {
      elementStyleObj.left = '-190px'
    } else {
      elementStyleObj.left = '0px'
    }
  }

  swichPosition( elementStyleObj ) {
    if ( elementStyleObj.position === 'fixed' ) {
      elementStyleObj.position = 'relative'
      this.render.setStyle( this.cont.nativeElement, 'left', '0px' )
      this.render.setStyle( this.cont.nativeElement, 'width', '100%' )
    } else {
      elementStyleObj.position = 'fixed'
      this.render.setStyle( this.cont.nativeElement, 'left', '0px' )
      this.render.setStyle( this.cont.nativeElement, 'width', '115%' )
    }
  }

}
