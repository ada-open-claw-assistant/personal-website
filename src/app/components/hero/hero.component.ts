import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  title = 'Andrea';
  private onScroll = () => this.handleScroll();
  constructor(private el: ElementRef){}

  ngAfterViewInit(){
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.handleScroll();
  }

  ngOnDestroy(){
    window.removeEventListener('scroll', this.onScroll);
  }

  private handleScroll(){
    const host = (this.el.nativeElement as HTMLElement).querySelector('.parallax') as HTMLElement | null;
    if (!host) return;
    const rect = (this.el.nativeElement as HTMLElement).getBoundingClientRect();
    const winH = window.innerHeight || document.documentElement.clientHeight;
    // compute progress from -1 to 1 based on center of element in viewport
    const center = rect.top + rect.height/2;
    const progress = (center - winH/2) / (winH/2);
    const translate = Math.max(Math.min(progress * -8, 12), -12); // small range
    host.style.transform = `translate3d(0, ${translate}px, 0) scale(1.03)`;
  }
}
