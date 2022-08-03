import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-add',
  templateUrl: './tutorials-add.component.html',
  styleUrls: ['./tutorials-add.component.css']
})
export class TutorialsAddComponent implements OnInit {

    addTutorial : Tutorial ={
    title : '',
    description : '',
    published : false,
  }
  constructor(private tutorialService : TutorialService, private router : Router) { }

  ngOnInit(): void {
  }

  saveTutorial() : void{
    const jsonData = {
      title : this.addTutorial.title,
      description : this.addTutorial.description
    }

    this.tutorialService.newRegister(jsonData).subscribe(
        addTutorial =>{
        console.log(this.addTutorial);
        this.router.navigate(["/tutorials"]);
      },
      error =>{
        console.log(error);
      }        
    )
  }
  }

