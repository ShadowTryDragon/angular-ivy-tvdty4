import { Component, OnInit } from '@angular/core';
import { ShowDataService } from '../../services/show-data.service';
import { Show } from '../../model/show';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})

export class ShowListComponent implements OnInit {

  constructor(private showDataService: ShowDataService){
    
  }

  ngOnInit() {}

  get shows(): Show[] {
    return this.showDataService.shows;
  }

  editShow : Show;

  edit(show : Show){
    show = this.editShow;
  }

  toEdit(show : Show) : boolean{
    if(!this.editShow){
      return false;
    }
    else if (this.editShow !== show){
      return false;
    }
    else{
      return true;
    }
  }

  saveEdit(){
    this.editShow = null;
  }
  
  delete(show : Show){
    return this.showDataService.deleteShow(show);
  }

}