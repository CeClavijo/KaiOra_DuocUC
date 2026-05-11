import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Recipe } from 'src/app/models/recipe.model';
import { UtilsService } from 'src/app/services/utils';

@Component({
  selector: 'app-add-update-recipe',
  templateUrl: './add-update-recipe.component.html',
  styleUrls: ['./add-update-recipe.component.scss'],
  standalone: false,
})
export class AddUpdateRecipeComponent implements OnInit {
  categories = [
    { id: '1', name: 'Entrantes' },
    { id: '2', name: 'Platos Fuertes' },
    { id: '3', name: 'Salsas y Guarniciones' },
    { id: '4', name: 'Repostería' },
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
    maintenance: new FormControl('', [Validators.required, Validators.minLength(5)]),
    keyPoints: new FormArray([])
  });

  ngOnInit() {}

  // Logica de la categoria de ingredientes
  // Obtencion del array para el html

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  // Añadir otro ingrediente al array

  addIngredient() {
    const ingredientGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      unit: new FormControl('', [Validators.required]),
    });

    this.ingredients.push(ingredientGroup);
  }

  // Eliminar un ingrediente del array

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  // Progress bars form
  get basicInfoProgress(): number {
    const controls = ['name', 'category'];
    return this.calculateProgress(controls);
  }

  get securityProgress(): number {
    const controls = ['cookingTemp', 'maintenance'];
    return this.calculateProgress(controls);
  }

  private calculateProgress(controlNames: string[]): number {
    let completed = 0;
    controlNames.forEach((name) => {
      if (this.form.get(name)?.valid && this.form.get(name)?.value) {
        completed++;
      }
    });
    return completed / controlNames.length;
  }

  get keyPoints() {
    return this.form.get('keyPoints') as FormArray;
  }

  addKeypoint() {
    this.keyPoints.push(new FormControl('', [Validators.required]));
  }

  removeKeyPoint(index: number) {
    this.keyPoints.removeAt(index);
  }
}
