import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import test from "./test.json";
import interview from "./interview.json";
import target from "./target.json";

function Steps() {
  const animations = [
    { src: test, content: "Showcase your passion for sustainability and fashion by filling out the application form.", title: "1 Google Form", label: "Test" },
    { src: target, content: "Show off and for models it's based on confidence and etiquette and body language.", title: "2 Challenge", label: "Target" },
    { src: interview, content: "Meet with our team to discuss your vision, interests, and contributions to RITI.", title: "3 Interview", label: "Interview" }
  ];

  return (
    <section>
      <div className="container mt-24">
        <div className="flex items-center gap-2 w-full justify-center mt-10 mb-8">
          <div className="h-2 w-2 rounded-full bg-pink-500"></div>
          <span className="text-gray-600 text-lg">Process</span>
        </div>
        <div className="md:text-5xl text-3xl text-center">Join the movement</div>
        <div className="w-full flex flex-col md:flex-row justify-between mt-16">
          {animations.map((animation, index) => (
            <div
              key={index}
              className="h-auto md:w-1/3 w-full flex flex-col items-center p-5"
            >
              <DotLottiePlayer
                src={animation.src}
                className="md:h-20 h-14 w-14 md:w-20"
                autoplay={true}
                loop={true}
                speed={0.7}
              />
              <div className="text-center mt-5 md:text-3xl text-xl">
                <span>{animation.title}</span>
              </div>
              <div className="md:text-lg text-md mx-auto text-center max-w-xs mt-6">
                <span>{animation.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;

