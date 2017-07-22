import { Component, OnInit,Input } from '@angular/core';
import { DropdownModel } from './dropdown-model';
import { DropdownService } from './dropdown-service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  private items : DropdownModel[] ;
  @Input() selectedDropdown : DropdownModel ;
  constructor(private dropdownService : DropdownService) { }

  ngOnInit() {
    this.dropdownService.getDropdownData().then(items => {
      this.items = items;
      this.selectedDropdown = this.items[0];
    });    
  }  
  
  onSelect(newValue:DropdownModel):void {
    this.selectedDropdown = newValue;
  }
}
