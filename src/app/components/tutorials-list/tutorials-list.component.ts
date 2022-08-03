import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {
  
  titel = '';
  tutorials? : Tutorial[];
  currentTutorial : Tutorial = {};
  currentIndex = -1;
  constructor(private tutorialService : TutorialService) { }

  ngOnInit(): void {
    this.getTutorials();
  }

  getTutorials() : void{
    this.tutorialService.getAllTutorials().subscribe(
      
      data =>{
        this.tutorials = data;
      },
      error =>{
        console.log(error);
      }
    );
  }

  searchTitel() : void{
    this.tutorialService.findByTitle(this.titel).subscribe(
      
      data =>{
        this.tutorials = data;
        
      },
      error =>{
        console.log(error);
      }
    );
  }

  pageRefresh() : void{
    return this.getTutorials();
  }

  setActiveTutorial(tutorial : Tutorial, index : number) : void{
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

}
