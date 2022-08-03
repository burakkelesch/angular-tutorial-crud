import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';



@Component({
  selector: 'app-tutorials-details',
  templateUrl: './tutorials-details.component.html',
  styleUrls: ['./tutorials-details.component.css']
})
export class TutorialsDetailsComponent implements OnInit {

  id = '';
  updateTutorials : Tutorial={
    title : '',
    description : '',
  }
 
  constructor(private route : ActivatedRoute, private tutorialService : TutorialService, private router : Router ) { }

  ngOnInit(): void {
    console.log("tutorial list started");
    // Bir önceki ekrandan gelen id paremetresinin degerini yakaladik
    this.route.params.subscribe(x =>{
    this.id = x['id'];
    console.log(this.id);
    this.getTutorial(this.id);
    });
  }

  getTutorial(id : string) : void{
    // Buradan service katmanina erisiyorum
    this.tutorialService.getTutorialById(id).subscribe(data =>{
      console.log(data);
      this.updateTutorials = data;
    },
    error =>{
      console.log(error);
    });    
  }

  deleteTutorials() : void{
    console.log("delete tiklandi");
    this.tutorialService.deleteTutorial(this.id).subscribe(response =>{
      console.log(response);
      this.router.navigate(["/tutorials"]);
    },
    error =>{
      console.log(error);
    });    
  }

  editTutorials() : void{
    console.log("editleme basladi");
    const jsonData = {
      title : this.updateTutorials.title,
      description : this.updateTutorials.description
    }
    this.tutorialService.editTutorial(this.id,jsonData).subscribe(
      updateTutorials =>{
        console.log(this.updateTutorials);
        this.router.navigate(["/tutorials"]);
      },
      error =>{
        console.log(error);
      }        
    );
  }

 
}
