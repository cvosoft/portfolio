import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

  projectsList = [
    {
      name: "Join",
      skills: "Angular | TypeScript | HTML | CSS | Firebase",
      text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      img: "joinscreenshot.png",
      liveURL: "https://join.christophvoelker.com",
      gitURL: "https://github.com/cvosoft/Join",
    },
    {
      name: "El Pollo Loco",
      skills: "JavaScript | HTML | CSS",
      text: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      img: "pollolocoscreenshot.png",
      liveURL: "https://epl.christophvoelker.com",
      gitURL: "https://github.com/cvosoft/JumpNRun",
    },
    {
      name: "DA Bubble",
      skills: "JavaScript | HTML | CSS",
      text: "This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
      img: "dabubblescreenshot.png",
      liveURL: "",
      gitURL: "",
    }
  ]

}
