import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    {name:'TypeScript', pct:90},
    {name:'Angular', pct:90},
    {name:'React', pct:80},
    {name:'Vue', pct:70},
    {name:'Node.js', pct:80},
    {name:'Java / Spring Boot', pct:75},
    {name:'SQL', pct:75},
    {name:'MongoDB', pct:70},
    {name:'Neo4J', pct:60},
    {name:'CI/CD & DevOps', pct:85},
    {name:'Docker', pct:80},
    {name:'LLM / AI integration', pct:70}
  ];

  industries = ['InsurTech','Telco','Healthcare'];
}
