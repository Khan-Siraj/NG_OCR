// src/app/animations/animations.ts
import { trigger, transition, style, animate } from '@angular/animations';

export const slideInRight = trigger('slideInRight', [
    transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(
            '1s ease-in-out',
            style({ transform: 'translateX(0)', opacity: 1 })
        )
    ])
])


export const slideInLeft = trigger('slideInLeft', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(
            '1s ease-in-out',
            style({ transform: 'translateX(0)', opacity: 1 })
        )
    ])
])

export const slideUp = trigger('slideUp', [
    transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
    ]),
])



// export const slideInRight = function (time:number){
//     return `trigger('slideInRight', [
//     transition(':enter', [
//         style({ transform: 'translateX(100%)', opacity: 0 }),
//         animate(
//             '${time} ease-in-out',
//             style({ transform: 'translateX(0)', opacity: 1 })
//         )
//     ])
// ])
// `

// }

// export const slideInLeft = function (time:number){
//     console.log("calling in ")
//     return `trigger('slideInLeft', [
//     transition(':enter', [
//         style({ transform: 'translateX(-100%)', opacity: 0 }),
//         animate(
//             '${time} ease-in-out',
//             style({ transform: 'translateX(0)', opacity: 1 })
//         )
//     ])
// ])`
// }