import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";   // <--- standalone only

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  challengeHover: boolean = false;

  skillsList = [
    {
      name: "Angular",
      img: "ang.svg"
    },
    {
      name: "TypeScript",
      img: "ts.svg"
    },
    {
      name: "JavaScript",
      img: "js.svg"
    },
    {
      name: "HTML",
      img: "html.svg"
    },
    {
      name: "CSS",
      img: "css.svg"
    },
    {
      name: "Rest-Api",
      img: "rest.svg"
    },
    {
      name: "Firebase",
      img: "firebase.svg"
    },
    {
      name: "GIT",
      img: "git.svg"
    },
    {
      name: "Scrum",
      img: "scrum.svg"
    },
    {
      name: "Material<br>design",
      img: "matdes.svg"
    },
    {
      name: 'Challenge me',
      img: "chall.svg"
    }
  ];


}
