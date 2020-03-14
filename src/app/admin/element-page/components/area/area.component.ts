import { Component, ComponentFactoryResolver, ElementRef, Input, Renderer2, ViewChild } from '@angular/core'
import { DataService } from '../../../services/data.service'
import { Observable, Subject } from 'rxjs'
import { DndDropEvent, DropEffect } from 'ngx-drag-drop'

@Component( {
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
} )
export class AreaComponent {

  constructor(
    private render: Renderer2,
    private data: DataService
  ) {
  }

  onDragged( item, list: any[], effect: DropEffect ) {
    if ( effect === 'move' ) {
      const index = list.indexOf( item )
      list.splice( index, 1 )
    }
  }

  onDrop( event: DndDropEvent, list?: any[] ) {
    if ( list && (event.dropEffect === 'copy' || event.dropEffect === 'move') ) {
      let index = event.index
      if ( typeof index === 'undefined' ) {
        index = list.length
      }
      console.log( event.data)
      list.splice( index, 0, event.data )
    }
  }

  deleteElement( item, list ) {
    const index = list.indexOf( item )
    list.splice( index, 1 )
  }

  elementActive( event, item ) {
    event.stopPropagation()

    this.data.sub.next( item )

    if ( this.data.activeElement ) {
      this.data.activeElement.classList.toggle( 'activeElement' )
    }
    if ( event.target.classList.contains( 'inserted' ) || event.target.classList.contains( 'title' ) ) {
      this.data.activeElement = event.target.parentElement
    } else if ( event.target.classList.contains( 'svg-handler' ) ) {
      this.data.activeElement = event.target.parentElement.parentElement
    } else {
      this.data.activeElement = event.target
    }

    this.data.activeElement.classList.toggle( 'activeElement' )
  }

  getStyle( item ): object {
    const obj = {}
    if (item) {
      if (item.styles) {
        const keys = Object.keys(item.styles)
        const value = Object.values(item.styles)
        //console.log( keys, value)
        keys.forEach( (key, index) => {
          obj[key] = value[index]
        })
      }
    }
    return obj
  }
}
