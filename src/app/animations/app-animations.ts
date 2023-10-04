import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  state('void', style({
    opacity: 0
  })),
  transition('void <=> *', animate(1300)),
]);

export const slideInOutLeft = trigger('slideInOutLeft', [
  state('void', style({
    transform: 'translateX(-100%)',
    opacity: 0
  })),
  transition('void <=> *', [
    animate('0.8s ease-in-out')
  ])
]);

export const slideInOutRight = trigger('slideInOutRight', [
    state('void', style({
      transform: 'translateX(100%)',
      opacity: 0
    })),
    transition('void <=> *', [
      animate('0.8s ease-in-out')
    ])
  ]);

export const zoomInOut = trigger('zoomInOut', [
    state('void', style({
      transform: 'scale(0.5)',
      opacity: 0
    })),
    transition('void <=> *', [
      animate('1s ease-in-out')
    ])
  ]);
 
export const pulse = trigger('pulse', [
    state('void', style({
      transform: 'scale(0.9)',
      opacity: 0.6
    })),
    transition('void <=> *', [
      animate('0.3s ease-in-out')
    ])
  ]);

  
export const slideInOutBottom = trigger('slideInOutBottom', [
  state('void', style({
    transform: 'translateY(100%)',
    opacity: 0
  })),
  transition('void <=> *', [
    animate('0.8s ease-in-out')
  ])
]);


