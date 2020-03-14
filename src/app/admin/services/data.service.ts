import { ComponentFactoryResolver, Injectable, Renderer2, TemplateRef } from '@angular/core'
import { myNewElement } from '../../shared/interfaces'
import { Subject } from 'rxjs'

@Injectable( {
  providedIn: 'root'
} )
export class DataService {

  activeElement = null

  //projects = []
  //pages = []
  //layers = []
  //groups = []
  //elements = []

  sub = new Subject<any>()
  templates$ = new Subject<TemplateRef<any>>()
  commands$ = new Subject<any>()

  pageList = []

  elements = [
    {
      component: 'ElementContainerComponent',
      handle: true,
      disable: false,
      children: [],
      props: {
        name: 'контейнер',
        display: 'block',
      },
      styles: {
        width: '100%',
        height: '100%'
      }
    },
    {
      component: 'ElementTextComponent',
      handle: true,
      disable: false,
      props: {
        name: 'текст',
        content: '',
      },
      styles: {
        width: '100%',
        height: '100%',
        "text-align": 'center'
      }
    }
  ]

  newElements = [
    {
      component: 'ElementContainerComponent',
      handle: true,
      disable: false,
      children: [],
      props: {
        name: 'контейнер',
        display: 'block',
      },
      styles: {
        width: '100%',
        height: '100%'
      }
    },
    {
      component: 'ElementTextComponent',
      handle: true,
      disable: false,
      props: {
        name: 'текст',
        content: '',
      },
      styles: {
        width: '100%',
        height: '100%',
        "text-align": 'center'
      }
    }
  ]


}
