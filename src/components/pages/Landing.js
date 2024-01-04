import { useEffect, useState } from "react";
import About from "./About";
import Work from "./Work";
import Header from "../common/Header";
import "./Landing.css";
import SlideShow from "./Slideshow";
import Contact from "./Contact";

function Landing() {
  const [text, setText] = useState("F");
  const [index, setIndex] = useState(1);

  const name = "LEAH ZEISNER";
  const fullText = `FULL STACK WEB DEVELOPER`;

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index, text, fullText, setIndex, setText]);

  return (
    <div className="flex flex-col bg-yellow w-screen text-darkblue place-items-center">
      <Header isLanding={true} />

      <div className="flex flex-col landing w-full h-[100vh]">
        <div className="flex flex-col justify-center items-center h-[100vh]">
          <h1 className="text-5xl font-bold tracking-[.3em] mb-10">{name}</h1>
          <p className="text-lg font-medium mb-6">{text}</p>
        </div>
      </div>

      <About />
      <Work />
      <SlideShow />
      <Contact isLanding={true} />
    </div>
  );
}

export default Landing;
