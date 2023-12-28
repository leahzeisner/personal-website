import { useEffect, useState } from "react";
import Header from "../../common/Header";
import About from "./About";
import Work from "./Work";
import "./Landing.css";
import ProjectSlideShow from "./ProjectSlideshow";

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
    <div className="flex flex-col place-items-center bg-yellow">
      <div className="flex flex-col landing text-darkblue overflow-hidden h-[100vh] w-screen">
        <Header isLanding={true} />

        <div className="flex flex-col justify-center items-center h-[90vh]">
          <div className="flex flex-col place-items-center w-3/5 mb-16">
            <h1 className="text-5xl font-bold tracking-[.3em] mb-10">{name}</h1>
            <p className="text-lg font-medium mb-6">{text}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col place-items-center w-screen">
        <Header />
        <About />
        <Work />
        <ProjectSlideShow />
      </div>
    </div>
  );
}

export default Landing;
