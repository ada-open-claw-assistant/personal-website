import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {
  skills = [
    {name:'TypeScript', pct:92},
    {name:'Angular', pct:90},
    {name:'React', pct:80},
    {name:'Vue', pct:70},
    {name:'Node.js', pct:85},
    {name:'Java / Spring Boot', pct:75},
    {name:'SQL', pct:80},
    {name:'MongoDB', pct:72},
    {name:'Neo4J', pct:65},
    {name:'CI/CD', pct:78},
    {name:'Docker', pct:80},
  ];

  industries = ['InsurTech','Telco','Healthcare'];

  ngAfterViewInit(){
    // Use IntersectionObserver for reliable reveal and animation
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry => {
        const el = entry.target as HTMLElement;
        if(entry.isIntersecting){
          el.classList.add('visible');
          observer.unobserve(el);
        }
      });
    },{threshold:0.15});

    document.querySelectorAll('.skills .reveal').forEach((el)=> observer.observe(el));
  }
}
