import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild, ViewContainerRef
} from '@angular/core'
import { DataService } from '../../../services/data.service'
import { ElementTextComponent } from '../elements/text.component'
import { ElementContainerComponent } from '../elements/container.component'
import { ElementImageComponent } from '../elements/image.component'
import { InputComponent } from '../elements/input.component'

@Component( {
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
} )
export class RightSideComponent implements OnInit {

  @ViewChild( 'outTemplate', { static: false, read: ViewContainerRef } ) outTemplate: ViewContainerRef
  @ViewChild( 'cont', { static: false } ) cont: ElementRef

  elementStyleObj = {
    right: '0px',
    position: 'fixed'
  }

  constructor(
    private data: DataService,
    private render: Renderer2,
    private resolver: ComponentFactoryResolver
  ) {
  }

  swichShow( elementStyleObj ) {
    if ( elementStyleObj.right === '0px' ) {
      elementStyleObj.right = '-190px'
    } else {
      elementStyleObj.right = '0px'
    }
  }

  swichPosition( elementStyleObj ) {
    if ( elementStyleObj.position === 'fixed' ) {
      elementStyleObj.position = 'relative'
      this.render.setStyle( this.cont.nativeElement, 'left', '0px' )
      this.render.setStyle( this.cont.nativeElement, 'width', '100%' )
    } else {
      elementStyleObj.position = 'fixed'
      this.render.setStyle( this.cont.nativeElement, 'left', '-28px' )
      this.render.setStyle( this.cont.nativeElement, 'width', '115%' )
    }
  }


  ngOnInit(): void {
    this.data.sub.subscribe( item => {
      if ( item ) {
        const comp = this.getComponent( item.component )
        this.showElement( item, comp )
      }
    } )
  }

  getComponent( comp ) {
    switch ( comp ) {
      case 'ElementContainerComponent':
        return ElementContainerComponent
      case 'ElementTextComponent':
        return ElementTextComponent
      case 'ElementImageComponent':
        return ElementImageComponent
    }
  }

  showElement( item, comp ) {
    const elementFactory = this.resolver.resolveComponentFactory( comp )
    this.outTemplate.clear()
    const component = this.outTemplate.createComponent<any>( elementFactory )
    component.instance.activeObject = item

    //component.instance.close.subscribe( () => {
    //this.elDir.containerRef.clear()
    //}
    //)
  }

  showComponent( component ) {
    const componentFactory = this.resolver.resolveComponentFactory( component )
    this.outTemplate.clear()
    const comp = this.outTemplate.createComponent<any>( componentFactory )
  }

}
