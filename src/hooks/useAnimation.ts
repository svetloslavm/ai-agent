import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrambleTextPlugin);

export const useAnimation = () => {
  const animateScrambleText = (textRef: HTMLDivElement, text: string, rightToLeft: boolean = false) => {
    if (!textRef) return;

    gsap.to(textRef, {
      duration: 2.5,
      scrambleText: {
        text,
        chars: '█▓▒░',
        speed: 0.25,
        revealDelay: 0.5,
        tweenLength: false,
        rightToLeft,
      },
    });
  };

  return { animateScrambleText };
};
