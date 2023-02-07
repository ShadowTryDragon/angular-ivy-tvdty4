import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Show } from '../model/show';
@Injectable()
export class ShowDataService {

  shows: Show[] = [];

 
  constructor(private httpClient: HttpClient) {
    this.shows.push(new Show(1, 'Paw Patrol','Kinderserie, in der Hunde Jobs haben,', 'pawpatrol.jpg'));
  
   }
   
   saveShow(show: Show) {

    this.shows.push(show);
    
    }

    deleteShow(show : Show){
      this.shows = this.shows.filter(s => s !== show);
    }
async  showShowDetails(show: Show) {


  const data: any = this.httpClient.get('https://api.tvmaze.com/singlesearch/shows?q=' + show.titel)
  show.kurzbeschreibung = data.summa
  show.cover = data.image.original
  try { 
     await lastValueFrom(this.httpClient.get('https://api.tvmaze.com/singlesearch/shows?q='));}
  catch(e) {
    alert('Es wurde leider keine passende Show gefunden!');
    }
}

}


