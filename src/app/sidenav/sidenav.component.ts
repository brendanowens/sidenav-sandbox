import {Component, Input, OnInit} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})

export class SidenavComponent implements OnInit {
  opened = true;
  @Input() categories: any;

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'template',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/template.svg')
    );
    this.iconRegistry.addSvgIcon(
      'add-part',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add-part.svg')
    );
    this.iconRegistry.addSvgIcon(
      'menu-8',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu-8.svg')
    );
    this.iconRegistry.addSvgIcon(
      'menu-5',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu-5.svg')
    );
    this.iconRegistry.addSvgIcon(
      'file-stack',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/file-stack.svg')
    );
    this.iconRegistry.addSvgIcon(
      'chat-46',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/chat-46.svg')
    );
    this.iconRegistry.addSvgIcon(
      'list',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/list.svg')
    );
  }

  ngOnInit(): void {
  }

}
