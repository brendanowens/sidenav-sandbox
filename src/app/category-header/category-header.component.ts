import {Component, Input, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.scss']
})
export class CategoryHeaderComponent implements OnInit {
  @Input() category: any;
  @Input() showMenuIcon: boolean;

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'sort-tool-2',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/sort-tool-2.svg')
    );
    this.iconRegistry.addSvgIcon(
      'switches',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/switches.svg')
    );
  }

  ngOnInit(): void {
  }

  openProjectOptionsPopover(myEvent) {
    // const popover = this.popoverCtrl
    //   .create({
    //     component: ProjectOptionsPopoverPage,
    //     event: myEvent,
    //     showBackdrop: true,
    //   })
    //   .then(popover => popover.present());
    console.log('OPENING PROJECT OPTIONS POPOVER...');
  }

  async openElementFilterPopover(myEvent) {
    // const popover = await this.popoverCtrl.create({
    //   component: ElementsFilterPopoverPage,
    //   event: myEvent,
    //   showBackdrop: true,
    //   componentProps: {
    //     categories: this.categories,
    //   },
    // });
    // popover.present();
    console.log('OPENING SORT/FILTER POPOVER...');
  }

}
