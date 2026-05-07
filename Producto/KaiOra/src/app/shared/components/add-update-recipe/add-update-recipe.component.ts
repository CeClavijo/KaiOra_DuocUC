import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils';

@Component({
  selector: 'app-add-update-recipe',
  templateUrl: './add-update-recipe.component.html',
  styleUrls: ['./add-update-recipe.component.scss'],
  standalone: false
})
export class AddUpdateRecipeComponent  implements OnInit {

  categories = [
    { id: '1', name: 'Entrantes' },
    { id: '2', name: 'Platos Fuertes' },
    { id: '3', name: 'Salsas y Guarniciones' },
    { id: '4', name: 'Repostería' }
  ];

  units = ['gr', 'ml', 'ud'];

  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    category: new FormControl('', [Validators.required]),
    performance: new FormControl(null, [Validators.required, Validators.min(0)]),
    prepTime: new FormControl(null, [Validators.required, Validators.min(0)]),
    cookingTime: new FormControl(null, [Validators.required, Validators.min(0)]),
    ingredients: new FormArray([]),
    cookingTemp: new FormControl('', [Validators.required, Validators.minLength(5)]),
    maintance: new FormControl('', [Validators.required, Validators.minLength(5)]),
    neededPointA: new FormControl('', [Validators.required, Validators.minLength(5)]),
    neededPointB: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  ngOnInit() {}

  // Logica de la categoria de ingredientes
  // Obtencion del array para el html

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  // Añadir otro ingrediente al array

  addIngredient() {
    const ingredientGroup = new FormGroup ({
      name: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      unit: new FormControl('', [Validators.required])
    });

    this.ingredients.push(ingredientGroup)
  }

  // Eliminar un ingrediente del array

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

}
