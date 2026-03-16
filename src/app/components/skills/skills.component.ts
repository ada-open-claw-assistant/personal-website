import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

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
    const onScroll = () => {
      document.querySelectorAll('.skills .bar > i').forEach((el:any,idx)=>{
        const val = el.getAttribute('data-value') || '70%';
        if(!el.style.width || el.style.width==='0px'){
          el.style.transition='width 900ms cubic-bezier(.2,.9,.2,1)';
          el.style.width = val + '%';
        }
      });
      window.removeEventListener('scroll', onScroll);
    };
    window.addEventListener('scroll', onScroll);
    // also trigger on load
    setTimeout(onScroll,200);
  }
}
