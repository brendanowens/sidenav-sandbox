import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-sidenav-no-expansion',
  templateUrl: './sidenav-no-expansion.component.html',
  styleUrls: ['./sidenav-no-expansion.component.scss'],
})

export class SidenavNoExpansionComponent implements OnInit {
  opened = true;
  @Input() categories: any;
  public selectedCategory = null;
  mode = null;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.configureSideNav();
  }
  configureSideNav(){
    if (window.innerWidth < 1024){
      this.mode = 'over';
      this.opened = false;
    } else {
      this.mode = 'side';
      this.opened = true;
    }
  }

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
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
    this.iconRegistry.addSvgIcon(
      'tail-left',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/tail-left.svg')
    );
  }

  ngOnInit(): void {
    this.configureSideNav();
  }

  trackByCat(index, item) {
    return index; // or item.id
  }

  async categoryModal(category) {
    // const modal = await this.modalCtrl.create({
    //   component: CategoryOptionsPage,
    //   componentProps: { category },
    // });
    // modal.present();
    // this.opened = false;
    console.log('OPENING CATEGORY MODAL FOR:' + category.id);
  }

  async openCreateCategoryMenu(event) {
    // this.launchAddCategoryModal();
    // this.opened = false;
    console.log('LAUNCHING CREATE CATEGORY MODAL...');
  }

  getCategoryById(categoryId){
    return this.categories.filter(cat => cat.id === categoryId)[0];
  }
}
