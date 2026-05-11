import { Component, inject, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent  implements OnInit {

  @Input() title!: string;
  @Input() isModal!: boolean;

  utilsSvc = inject(UtilsService)

  ngOnInit() {}

  dismissModal() {
    this.utilsSvc.dismissModal();
  }
}
