import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Centre } from 'src/app/model/centre';
import { CentreSearchRequest } from 'src/app/model/CentreSearchRequest';
import { CentreService } from 'src/app/service/centreService/centre.service';

@Component({
  selector: 'app-centerspage',
  templateUrl: './centerspage.component.html',
  styleUrls: ['./centerspage.component.css']
})
export class CenterspageComponent implements OnInit {

  centres: Centre[] = []
  searchCentre:CentreSearchRequest;
  
  
  constructor(private centreService: CentreService) {this.searchCentre = new CentreSearchRequest()}

  ngOnInit(): void {
    this.centreService.getAllCentres().subscribe(
      {
        next: result =>{
          this.centres = result;
        }
      }
    )
    this.searchCentre.searchAddress=""
    this.searchCentre.searchName=""
  }

   search(){
    this.centreService.searchAllCentres(this.searchCentre).subscribe(
      {
        next:result =>{
          this.centres = result;
        }
      }
)
      }
    
  

}
