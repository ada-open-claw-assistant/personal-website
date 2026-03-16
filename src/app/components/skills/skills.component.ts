import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {
  skills = [
    {name:'Angular', pct:90},
    {name:'TypeScript', pct:85},
    {name:'CSS/Design', pct:78},
    {name:'Node.js', pct:75}
  ];

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
