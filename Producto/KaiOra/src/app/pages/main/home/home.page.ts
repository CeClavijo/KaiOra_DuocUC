import { Component, inject, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { Utils } from 'src/app/services/utils';
import { AddUpdateRecipeComponent } from 'src/app/shared/components/modals/add-update-recipe/add-update-recipe.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  utilsSvc = inject(Utils);

  ngOnInit() {
  }

  //funcion vacia / necesaria para evitar problemas de compilacion
  click() {
    console.log("ok")
  }

  async addUpdateRecipe(recipe?: Recipe) {
    let success = await this.utilsSvc.presentModal({
      component: AddUpdateRecipeComponent,
      cssClass: 'add-update-modal',
      componentProps: { recipe }
    })
  }

}
