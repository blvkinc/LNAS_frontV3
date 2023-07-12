// Import required modules and components
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantTableComponent } from './plant-table/plant-table.component';
import { FarmFormComponent } from '../farm/farm-form/farm-form.component';
import { FarmTableComponent } from '../farm/farm-table/farm-table.component';
import { RouterLink } from '@angular/router';
import { PlantFormComponent } from './plant-form/plant-form.component';
import { PlantDto } from '../../api/models/plant-dto';
import { SecurityModule } from 'src/app/security/security.module';

@Component({
  selector: 'app-plant',
  standalone: true,
  // Configure component dependencies and template
  imports: [
    CommonModule,
    FarmFormComponent,
    FarmTableComponent,
    RouterLink,
    PlantFormComponent,
    PlantTableComponent,
    SecurityModule
  ],
  templateUrl: './plant.component.html',
})
export class PlantComponent {
  @ViewChild(PlantTableComponent) table: PlantTableComponent;
  @ViewChild(PlantFormComponent) form: PlantFormComponent;

  // Handle search event
  onSearch($event: string) {
    this.table.filter = $event;
    this.table.fetchData();
  }

  // Handle refresh event
  onRefresh() {
    this.table.fetchData();
  }

  // Handle edit event
  onEdit($event: PlantDto) {
    this.form.inputValue = $event;
    this.form.type = 'UPDATE';
    this.form.initForm();
    window.scroll(0, 0);
  }
}
