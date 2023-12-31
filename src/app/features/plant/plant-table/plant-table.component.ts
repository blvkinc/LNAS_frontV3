// Import required modules and components
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantDto } from '../../../api/models/plant-dto';
import { PlantResourceService } from '../../../api/services/plant-resource.service';
import { SecurityModule } from 'src/app/security/security.module';

@Component({
  selector: 'app-plant-table',
  standalone: true,
  // Configure component dependencies and template
  imports: [CommonModule, SecurityModule],
  templateUrl: './plant-table.component.html',
})
export class PlantTableComponent implements OnInit {
  @Output() onEdit: EventEmitter<PlantDto> = new EventEmitter<PlantDto>();

  // Array to store plant data
  plants: PlantDto[] = [];

  // Pagination variables
  currentPage = 1;
  pageSize = 5;
  totalElements = 0;
  sortBy = ['id,asc'];
  filter = '';

  // Array to store page numbers for pagination
  pageNumbers: number[] = [];
  totalPages: number;

  constructor(private service: PlantResourceService) {}

  ngOnInit(): void {
    // Fetch data on component initialization
    this.fetchData();
  }

  // Handle page change event
  onPageChange(page: number): void {
    this.currentPage = page;
    this.fetchData();
  }

  // Handle edit button click event
  onEditClick(plant: PlantDto) {
    this.onEdit.emit(plant);
  }

  // Fetch plant data from the server
  fetchData(): void {
    let params = {
      page: this.currentPage - 1,
      size: this.pageSize,
      sort: this.sortBy,
    };

    if (this.filter.length > 0) {
      params['filter'] = this.filter;
    }

    this.service.paginatePlants(params).subscribe({
      next: (data) => {
        this.plants = data.content;
        this.totalElements = data.totalElements;
        this.totalPages = data.totalPages;
        this.pageNumbers = new Array(data.totalPages).fill(0).map((x, i) => i + 1);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // Toggle the sort order
  toggleSortOrder(): void {
    this.sortBy = this.sortBy[0] === 'id,asc' ? ['id,desc'] : ['id,asc'];
    this.fetchData();
  }
}
