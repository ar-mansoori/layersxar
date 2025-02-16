import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import fitness from "./asset/fitness.webp";
import aoc from "./asset/aoc.webp";
import lkc from "./asset/lkc.webp";
import Founders from "../../assets/Founders.png";
import About from "../About";
gsap.registerPlugin(ScrollTrigger);

function OurStory() {
  const heroRef = useRef();
  const missionRef = useRef();
  const valuesRef = useRef();
  const values1Ref = useRef();
  const values2Ref = useRef();
  const storyRef = useRef();

  useGSAP(() => {
    gsap.from(heroRef.current, {
      y: "-50%",
      opacity: 0,
      duration: 2,
    });
    gsap.from(".letter", {
      opacity: 0,
      ease: "power3.out",
      stagger: 1,
      scrollTrigger: {
        trigger: missionRef.current,
        scroller: "body",
        start: "top 50%",
        end: "top 20%",
        scrub: 1,
      },
    });
    gsap.from(values1Ref.current, {
      opacity: 0,
      y: "-100%",
      ease: "power3.out",
      scrollTrigger: {
        trigger: valuesRef.current,
        scroller: "body",
        start: "top 50%",
        end: "top 30%",
        scrub: 1,
      },
    });
    gsap.from(values2Ref.current, {
      opacity: 0,
      y: "-100%",
      ease: "power3.out",
      scrollTrigger: {
        trigger: valuesRef.current,
        scroller: "body",
        start: "top 30%",
        end: "top 20%",
        scrub: 1,
      },
    });
    gsap.from(storyRef.current, {
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: storyRef.current,
        scroller: "body",
        start: "top 50%",
        end: "top 30%",
        scrub: 1,
      },
    });
  });

  return (
    <>
      <div className="bg-white pt-20">
        {/* Hero Section */}
        <div className="relative text-center text-white px-4 w-full h-60 bg-blue-950 place-content-center">
          <div ref={heroRef}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Chaos is Creativity
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Creating unique designs that reflect your personality
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div ref={missionRef} className="max-w-4xl mx-auto px-4 py-20">
          <div class="place-self-center text-center text-2xl">
            <p>
              <span className="letter">T</span>
              <span className="letter">h</span>
              <span className="letter">e</span>
              <span className="letter">y</span>
              <span className="letter">’</span>
              <span className="letter">v</span>
              <span className="letter">e</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">t</span>
              <span className="letter">o</span>
              <span className="letter">l</span>
              <span className="letter">d</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">u</span>
              <span className="letter">s</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">t</span>
              <span className="letter">h</span>
              <span className="letter">e</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">r</span>
              <span className="letter">u</span>
              <span className="letter">l</span>
              <span className="letter">e</span>
              <span className="letter">s</span>
              <span className="letter">.</span>
            </p>
            <p>
              <span className="letter">F</span>
              <span className="letter">a</span>
              <span className="letter">l</span>
              <span className="letter">l</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">i</span>
              <span className="letter">n</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">l</span>
              <span className="letter">i</span>
              <span className="letter">n</span>
              <span className="letter">e</span>
              <span className="letter">.</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">P</span>
              <span className="letter">l</span>
              <span className="letter">a</span>
              <span className="letter">y</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">i</span>
              <span className="letter">t</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">s</span>
              <span className="letter">a</span>
              <span className="letter">f</span>
              <span className="letter">e</span>
              <span className="letter">.</span>
            </p>
            <p>
              <span className="letter">T</span>
              <span className="letter">h</span>
              <span className="letter">e</span>
              <span className="letter">r</span>
              <span className="letter">e</span>
              <span className="letter">’</span>
              <span className="letter">s</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">a</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">p</span>
              <span className="letter">l</span>
              <span className="letter">a</span>
              <span className="letter">c</span>
              <span className="letter">e</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">f</span>
              <span className="letter">o</span>
              <span className="letter">r</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">e</span>
              <span className="letter">v</span>
              <span className="letter">e</span>
              <span className="letter">r</span>
              <span className="letter">y</span>
              <span className="letter">t</span>
              <span className="letter">h</span>
              <span className="letter">i</span>
              <span className="letter">n</span>
              <span className="letter">g</span>
              <span className="letter">.</span>
            </p>
            <p>
              <span className="letter">A</span>
              <span className="letter">n</span>
              <span className="letter">d</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">e</span>
              <span className="letter">v</span>
              <span className="letter">e</span>
              <span className="letter">r</span>
              <span className="letter">y</span>
              <span className="letter">o</span>
              <span className="letter">n</span>
              <span className="letter">e</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">h</span>
              <span className="letter">a</span>
              <span className="letter">s</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">a</span>
              <span className="letter">&nbsp;</span>
              <span className="letter">p</span>
              <span className="letter">l</span>
              <span className="letter">a</span>
              <span className="letter">c</span>
              <span className="letter">e</span>
              <span className="letter">.</span>
            </p>
          </div>
        </div>
        {/**Fitness */}
        <div
          className="h-96 w-full"
          style={{
            backgroundImage: `url('${fitness}')`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        ></div>
        {/* Values Section */}
        <div className="bg-gray-50 py-20">
          <div
            ref={valuesRef}
            className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <img src={aoc}></img>
            <div
              ref={values1Ref}
              className="text-center lg:text-3xl text-gray-600"
            >
              <p>Success must have a formula.</p>
              <p>Find it, and repeat it.</p>
              <p>Over and over and over again.</p>
            </div>
            <div
              ref={values2Ref}
              className="text-center lg:text-3xl text-gray-600"
            >
              <p>But in this order-obsessed world,</p>
              <p>creativity cannot breathe,</p>
              <p>and innovation dies.</p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div
          ref={storyRef}
          className="max-w-4xl lg:max-w-7xl mx-auto px-4 py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div>
              <img src={lkc} alt="#lowkeychaotic" className="" />
            </div>
            <div>
              <div class="text-3xl font-bold mb-6 text-gray-700">
                <p>Chaos challenges us to find new inspiration. </p>
                <p>
                  And rejects the user manual of
                  this-is-how-it-has-always-been-done.
                </p>
                <p>Do your own thing, it says.</p>
                <p>Find your own place.</p>
                <p>
                  Chaos has its own mess and methods, The source of light-bulbs
                  and bright ideas. Crazy experiments and accidental genius.
                </p>
                <p>The world will always demand order,</p>
                <p>But creativity craves chaos.</p>
              </div>
            </div>
            <div>
              <img
                className="shadow-md shadow-gray-500 rounded-lg"
                src={Founders}
              ></img>
              <p>Neel & Shlok , co-founders of Layers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky z-40">
        <About />
      </div>
    </>
  );
}

export default OurStory;
