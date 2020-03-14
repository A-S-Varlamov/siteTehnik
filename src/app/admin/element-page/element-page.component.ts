import {
  Component,  ElementRef,  ViewChild,  HostListener,
  Renderer2,  ContentChild,  AfterContentInit} from '@angular/core'
import { UpMenuComponent } from './components/up-menu/up-menu.component'

@Component( {
  selector: 'app-element-page',
  templateUrl: './element-page.component.html',
  styleUrls: ['./element-page.component.scss']
} )
export class ElementPageComponent implements AfterContentInit {

  @ContentChild( UpMenuComponent, { static: false } ) upMenuComponent: UpMenuComponent

  ngAfterContentInit(): void {
  }

}
