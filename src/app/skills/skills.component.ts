import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit, OnDestroy {

  navigateToSection() {
    const section = document.getElementById('contact-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private scrollHandler!: () => void;
  private isAnimating = false;
  private isInView = false;
  private isAnimatingSecond = false;
  private isInViewSecond = false;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.scrollHandler = () => {
      const icons = document.querySelector('.icon-container') as HTMLElement;
      const text = document.querySelector('.skills-font-container') as HTMLElement;

      if(icons && text) {
        const position = icons.getBoundingClientRect();
        const positionSecond = text.getBoundingClientRect();

        const offset = 350;
        const inView = position.top + offset >= 0 && position.bottom - offset <= window.innerHeight;
        const inViewSecond = positionSecond.top + offset >= 0 && positionSecond.bottom - offset <= window.innerHeight;

        if(inView && !this.isAnimating && !this.isInView) {
          this.animateElement(icons);
          this.isInView = true;
        } else if (!inView) {
          this.isInView = false;
        }

        if(inViewSecond && !this.isAnimatingSecond && !this.isInViewSecond) {
          this.animateElement(text);
          this.isInViewSecond = true;
        } else if (!inViewSecond) {
          this.isInViewSecond = false;
        }
      }
    };

    window.addEventListener('scroll', this.scrollHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  private animateElement(element: HTMLElement) {
    element.style.animation = 'none';
    this.isAnimating = true;

    setTimeout(() => {
      element.style.animation = '';
      element.style.animationPlayState = 'running';

      element.addEventListener('animationend', () => {
        this.isAnimating = false;
      }, {once: true});
    }, 0);
  }
}
