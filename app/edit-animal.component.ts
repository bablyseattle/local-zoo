import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <div class="card-panel">
     <h2>Edit {{childSelectedAnimal.name}}</h2>

     <label>Name:</label>
     <input [(ngModel)]="childSelectedAnimal.name" class="form-control">
     <label>Age:</label>
     <input [(ngModel)]="childSelectedAnimal.age" class="form-control">
     <label>Number of Caretakers Needed:</label>
     <input [(ngModel)]="childSelectedAnimal.caretakersNeeded" class="form-control">
     <button class="btn" (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}