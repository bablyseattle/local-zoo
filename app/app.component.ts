import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
	  <div class="jumbotron">
	  	<h1>Wild Fauna Park</h1>
	  </div>
	  
  </div>
  `
})

export class AppComponent{

	masterAnimalList: Animal[] = [
    new Animal('Lion', 'Tiger', 11, 'Meat', 'Forest', 3, 'Female', 'Food', 'Dogs'),
    new Animal('Gobi Bear', 'Bear', 1, 'Fruit', 'Mountain', 1, 'Male', 'Music', 'cold')
];
}