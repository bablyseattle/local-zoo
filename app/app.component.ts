import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
	  <div class="jumbotron">
	  	<h1>Wild Fauna Park</h1>
	  </div>
  <div class="container">
    <div *ngIf='!logNewAnimal'>
      <button class="btn" id="log" (click)="logButtonClicked()">Add New Animal</button>
      <animal-list [childAnimalList]="masterAnimalList" (editButtonClickSender)="editAnimal($event)"></animal-list>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    </div>
    <div *ngIf='logNewAnimal'>
      <new-animal (newAnimalSender)="logAnimal($event)" (logButtonClickedSender)="finishedLogging()"></new-animal>
    </div>
  </div>
  `
})

export class AppComponent{

	masterAnimalList: Animal[] = [
    new Animal('Tiger','Leo',  11, 'Meat', 'Forest', 3, 'Female', 'Food', 'Dogs'),
    new Animal( 'Bear', 'Gobi', 1, 'Fruit', 'Mountain', 1, 'Male', 'Music', 'cold')
];

logNewAnimal = false;
  selectedAnimal = null;

  logButtonClicked() {
    this.logNewAnimal = true;
  }

  logAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

  finishedLogging() {
    this.logNewAnimal = false;
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }
}