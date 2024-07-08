
gsap.registerPlugin(ScrollTrigger);

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    gsap.fromTo(panel, {
        autoAlpha: 1,  
        y: 0
    }, {
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
            trigger: panel,
            start: 'top 20%',
            end: 'bottom 80%',
            scrub: true,
            markers: false // Remove markers for a cleaner look
        }
    }
    
);
}
);

// Timeline for animated-element1 (vertical motion down)
let tl = gsap.timeline({
scrollTrigger: {
trigger: '.animated-element1',
start: '50% center',   // Start animation when the top of the trigger element reaches the bottom of the viewport
end: '150% center',  // End animation when the bottom of the trigger element reaches the center of the viewport
scrub: true,
markers: false,
toggleActions: 'play reverse reverse complete'
}
});

tl.to('.animated-element1', {
y: '+=200',   // Move animated-element1 downwards by 200px (adjust this value as needed)
opacity: 0.8,   // Fade out the element
duration: 0.5
});

// Timeline for animated-element2 (vertical motion down)
let tll = gsap.timeline({
scrollTrigger: {
trigger: '.animated-element2',
start: '50% center',   // Start animation when the top of the trigger element reaches the bottom of the viewport
end: '150% center',  // End animation when the bottom of the trigger element reaches the center of the viewport
scrub: true,
markers: false,
toggleActions: 'play reverse reverse complete'
}
});

tll.to('.animated-element2', {
y: '+=300',   
opacity: 1,   
duration: 0.5
});

// Timeline for animated-element3 (vertical motion up and hide)
// Timeline for animated-element3 (vertical motion up within blublue section)
let tl3 = gsap.timeline({
scrollTrigger: {
trigger: '.animated-element3',
start: '50% center',   // Start animation when the top of the trigger element reaches the center of the viewport
end: '150% center',  // End animation when the bottom of the trigger element reaches the center of the viewport of .blublue section
scrub: true,
markers: false,
toggleActions: 'play reverse reverse complete'
}
});

tl3.to('.animated-element3', {
y: '-=300',   // Move animated-element3 upwards by 200px (adjust this value as needed)
duration: 0.5,
//opacity:0
});

// Timeline for animated-element2 (vertical motion down)
let tl4 = gsap.timeline({
scrollTrigger: {
trigger: '.animated-element4',
start: 'top center',   // Start animation when the top of the trigger element reaches the bottom of the viewport
end: 'bottom center',  // End animation when the bottom of the trigger element reaches the center of the viewport
scrub: true,
markers: false,
toggleActions: 'play reverse reverse complete'
}
});

tl4.to('.animated-element4', {
y: '+=300',   // Move animated-element2 downwards by 200px (adjust this value as needed)
duration: 0.5
});

// Timeline for animated-element3 (vertical motion up and hide)
// Timeline for animated-element3 (vertical motion up within blublue section)
let tl5 = gsap.timeline({
scrollTrigger: {
trigger: '.animated-element5',
start: 'top center',   // Start animation when the top of the trigger element reaches the center of the viewport
end: 'bottom center',  // End animation when the bottom of the trigger element reaches the center of the viewport of .blublue section
scrub: true,
markers: false,
toggleActions: 'play reverse reverse complete'
}
});

tl5.to('.animated-element5', {
y: '-=300',   // Move animated-element3 upwards by 200px (adjust this value as needed)
duration: 0.5,
//opacity:0
});
let tl6 = gsap.timeline({
scrollTrigger: {
trigger: '.animated-element6',
start: '50% center', // Start when the trigger is 150% down the viewport
end: '200% center',   // End when the trigger is 50% down the viewport
scrub: true,
markers: false,
toggleActions: 'play reverse reverse complete'
}
});

tll.to('.animated-element6', {
x: '-50%', // Move animated-element2 to the left (reverse direction)
duration: 0.5
});
let tl7 = gsap.timeline({
scrollTrigger: {
trigger: '.animated-element7',
start: '50% center',
end: '150% center',
scrub: true,
markers: false,
toggleActions: 'play reverse reverse complete'
}
});

tl7.to('.animated-element7', {
x: '50%', // Move animated-element1 to the right
duration: 0.5
});
let tl8 = gsap.timeline({
scrollTrigger: {
trigger: '.animated-element8',
start: '50% center',
end: '150% center',
scrub: true,
markers: false,
toggleActions: 'play reverse reverse complete'
}
});

tl8.to('.animated-element8', {
x: '25%', // Move animated-element1 to the right
duration: 0.5
});

let tl9 = gsap.timeline({
scrollTrigger: {
trigger: '.animated-element9',
start: '50% center',   // Start animation when the top of the trigger element reaches the bottom of the viewport
end: '150% center',  // End animation when the bottom of the trigger element reaches the center of the viewport
scrub: true,
markers: false,
toggleActions: 'play reverse reverse complete'
}
});

tl9.to('.animated-element9', {
y: '+=500',   // Move animated-element1 downwards by 200px (adjust this value as needed)
duration: 0.5
});

// Timeline for animated-element2 (vertical motion down)
let tl10 = gsap.timeline({
scrollTrigger: {
trigger: '.animated-element10',
start: '50% center',   // Start animation when the top of the trigger element reaches the bottom of the viewport
end: '150% center',  // End animation when the bottom of the trigger element reaches the center of the viewport
scrub: true,
markers: false,
toggleActions: 'play reverse reverse complete'
}
});

tl10.to('.animated-element10', {
y: '-=300',   // Move animated-element2 downwards by 200px (adjust this value as needed)
duration: 0.5
});

let tl11 = gsap.timeline({
scrollTrigger: {
trigger: '.animated-element11',
start: '50% center',   // Start animation when the top of the trigger element reaches the bottom of the viewport
end: '150% center',  // End animation when the bottom of the trigger element reaches the center of the viewport
scrub: true,
markers: false,
toggleActions: 'play reverse reverse complete'
}
});

tl11.to('.animated-element11', {
y: '+=400',   // Move animated-element1 downwards by 200px (adjust this value as needed)
opacity: 1,   // Fade out the element
duration: 0.5
});

let tl13 = gsap.timeline({
scrollTrigger: {
trigger: '.animated-element13',
start: '50% center',   // Start animation when the top of the trigger element reaches the bottom of the viewport
end: '150% center',  // End animation when the bottom of the trigger element reaches the center of the viewport
scrub: true,
markers: false,
toggleActions: 'play reverse reverse complete'
}
});

tl13.to('.animated-element13', {
y: '+=200',   // Move animated-element1 downwards by 200px (adjust this value as needed)
duration: 0.5
});

// Timeline for animated-element2 (vertical motion down)
let tl12 = gsap.timeline({
scrollTrigger: {
trigger: '.animated-element12',
start: '50% center',   // Start animation when the top of the trigger element reaches the bottom of the viewport
end: '150% center',  // End animation when the bottom of the trigger element reaches the center of the viewport
scrub: true,
markers: false,
toggleActions: 'play reverse reverse complete'
}
});

tl12.to('.animated-element12', {
y: '+=200',   // Move animated-element2 downwards by 200px (adjust this value as needed)
duration: 0.5
});

let tl14 = gsap.timeline({
    scrollTrigger: {
    trigger: '.animated-element14',
    start: '50% center',   // Start animation when the top of the trigger element reaches the bottom of the viewport
    end: '150% center',  // End animation when the bottom of the trigger element reaches the center of the viewport
    scrub: true,
    markers: false,
    toggleActions: 'play reverse reverse complete'
    }
    });
    
    tl14.to('.animated-element14', {
    y: '+=300',   // Move animated-element2 downwards by 200px (adjust this value as needed)
    duration: 0.5
    });
    let tl15 = gsap.timeline({
        scrollTrigger: {
        trigger: '.animated-element15',
        start: '50% center',   // Start animation when the top of the trigger element reaches the bottom of the viewport
        end: '150% center',  // End animation when the bottom of the trigger element reaches the center of the viewport
        scrub: true,
        markers: false,
        toggleActions: 'play reverse reverse complete'
        }
        });
        
        tl15.to('.animated-element15', {
        y: '-=300',   // Move animated-element2 downwards by 200px (adjust this value as needed)
        duration: 0.5
        });

        tl14.to('.animated-element14', {
            y: '+=300',   // Move animated-element2 downwards by 200px (adjust this value as needed)
            duration: 0.5
            });
            let tl16 = gsap.timeline({
                scrollTrigger: {
                trigger: '.animated-element16',
                start: '50% center',   // Start animation when the top of the trigger element reaches the bottom of the viewport
                end: '150% center',  // End animation when the bottom of the trigger element reaches the center of the viewport
                scrub: true,
                markers: false,
                toggleActions: 'play reverse reverse complete'
                }
                });
                
                tl16.to('.animated-element16', {
                y: '+=300',   // Move animated-element2 downwards by 200px (adjust this value as needed)
                duration: 0.5
                });
const textLines = document.querySelectorAll('h1');

textLines.forEach((line, index) => {
    gsap.from(line, {
        y: '100%', // Start from below
        autoAlpha: 0, // Start with opacity 0
        duration: 0.5, // Duration of the animation
        delay: index * 0.2, // Stagger by 0.2 seconds
        scrollTrigger: {
            trigger: line,
            start: 'top bottom', // Start when the top of the line reaches the bottom of the viewport
            end: 'top center', // End when the top of the line reaches the center of the viewport
            scrub: true,
            markers: false,
            toggleActions: 'play reverse play reverse'
        }
    });
});
const textLines1 = document.querySelectorAll('.paragraph');

textLines1.forEach((line, index) => {
    gsap.from(line, {
        y: '100%', // Start from below
        autoAlpha: 0, // Start with opacity 0
        duration: 0.5, // Duration of the animation
        delay: index * 0.2, // Stagger by 0.2 seconds
        scrollTrigger: {
            trigger: line,
            start: 'top bottom', // Start when the top of the line reaches the bottom of the viewport
            end: 'top center', // End when the top of the line reaches the center of the viewport
            scrub: true,
            markers: false,
            toggleActions: 'play reverse play reverse'
        }
    });
});
const textLines2 = document.querySelectorAll('.line-1');

textLines2.forEach((line, index) => {
    gsap.from(line, {
        y: '100%', // Start from below
        autoAlpha: 0, // Start with opacity 0
        duration: 0.5, // Duration of the animation
        delay: index * 0.2, // Stagger by 0.2 seconds
        scrollTrigger: {
            trigger: line,
            start: 'top bottom', // Start when the top of the line reaches the bottom of the viewport
            end: 'top center', // End when the top of the line reaches the center of the viewport
            scrub: true,
            markers: false,
            toggleActions: 'play reverse play reverse'
        }
    });
});
const textLines3 = document.querySelectorAll('.line-2');

textLines3.forEach((line, index) => {
    gsap.from(line, {
        y: '100%', // Start from below
        autoAlpha: 0, // Start with opacity 0
        duration: 0.5, // Duration of the animation
        delay: index * 0.2, // Stagger by 0.2 seconds
        scrollTrigger: {
            trigger: line,
            start: 'top bottom', // Start when the top of the line reaches the bottom of the viewport
            end: 'top center', // End when the top of the line reaches the center of the viewport
            scrub: true,
            markers: false,
            toggleActions: 'play reverse play reverse'
        }
    });
});
const textLines4 = document.querySelectorAll('.line-3');

textLines4.forEach((line, index) => {
    gsap.from(line, {
        y: '100%', // Start from below
        autoAlpha: 0, // Start with opacity 0
        duration: 0.5, // Duration of the animation
        delay: index * 0.2, // Stagger by 0.2 seconds
        scrollTrigger: {
            trigger: line,
            start: 'top bottom', // Start when the top of the line reaches the bottom of the viewport
            end: 'top center', // End when the top of the line reaches the center of the viewport
            scrub: true,
            markers: false,
            toggleActions: 'play reverse play reverse'
        }
    });
});
const textLines5 = document.querySelectorAll('.text-bottom-right');

textLines5.forEach((line, index) => {
    gsap.from(line, {
        y: '100%', // Start from below
        autoAlpha: 0, // Start with opacity 0
        duration: 0.5, // Duration of the animation
        delay: index * 0.2, // Stagger by 0.2 seconds
        scrollTrigger: {
            trigger: line,
            start: 'top bottom', // Start when the top of the line reaches the bottom of the viewport
            end: 'top center', // End when the top of the line reaches the center of the viewport
            scrub: true,
            markers: false,
            toggleActions: 'play reverse play reverse'
        }
    });
});
gsap.to(".path-slider", {
    strokeDashoffset: 0,
    duration: 5,
    repeat: -1,
    ease: "linear"
})


