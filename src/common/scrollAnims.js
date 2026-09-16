import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const ScrollAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);

    // appearance
    const appearance = document.querySelectorAll(".mil-up");

    appearance.forEach((section) => {
        gsap.fromTo(section, {
            opacity: 0,
            y: 40,
            scale: .98,
            ease: 'sine',

        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: .4,
            scrollTrigger: {
                trigger: section,
                toggleActions: 'play none none reverse',
            }
        });
    });

    // scale image
    const scaleImage = document.querySelectorAll(".mil-scale");

    scaleImage.forEach((section) => {
        var value1 = section.getAttribute('data-value-1');
        var value2 = section.getAttribute('data-value-2');

        gsap.fromTo(section, {
            ease: 'sine',
            scale: value1,

        }, {
            scale: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

    // parallax
    const parallaxImage = document.querySelectorAll(".mil-parallax");

    if (window.innerWidth > 960) {
        parallaxImage.forEach((section) => {
            var value1 = section.getAttribute('data-value-1');
            var value2 = section.getAttribute('data-value-2');

            gsap.fromTo(section, {
                ease: 'sine',
                y: value1,

            }, {
                y: value2,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });
    }

    // rotate
    const rotate = document.querySelectorAll(".mil-rotate");

    rotate.forEach((section) => {
        var value = section.dataset.value;
        gsap.fromTo(section, {
            ease: 'sine',
            rotate: 0,

        }, {
            rotate: value,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

    // back to top
    const btt = document.querySelector(".mil-back-to-top .mil-link");

    gsap.set(btt, {
        x: -30,
        opacity: 0,
    });

    gsap.to(btt, {
        x: 0,
        opacity: 1,
        ease: 'sine',
        scrollTrigger: {
            trigger: "body",
            start: "top -40%",
            end: "top -40%",
            toggleActions: "play none reverse none"
        }
    });

    // progressbar
    
    gsap.to('.mil-progress', {
        height: '100%',
        ease: 'sine',
        scrollTrigger: {
            scrub: 0.3
        }
    });

    // ScrollTrigger caches element positions as each tween above is created, which
    // happens before fonts and images have settled. Above-the-fold ".mil-up" elements
    // can then stay stuck at their opacity:0 start state until a scroll or resize
    // forces a recalculation, leaving the banner blank on first paint. Refreshing
    // once now, and again once everything has loaded, fires them on time.
    ScrollTrigger.refresh();

    if (document.readyState !== "complete") {
        window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
    }
}