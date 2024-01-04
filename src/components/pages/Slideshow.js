import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import tadpole1 from "../../utils/projects/tadpole1.png";
import tadpole2 from "../../utils/projects/tadpole4.png";
import sudoku from "../../utils/projects/sudoku2.png";
import blog from "../../utils/projects/blog1.png";
import chat from "../../utils/projects/chat1.png";
import recipe from "../../utils/projects/recipe1.png";
import weather from "../../utils/projects/weather.png";
import c4c from "../../utils/projects/c4c-message-board-2.png";

function SlideShow() {
  return (
    <div className="flex flex-col text-darkblue font-medium w-2/3 h-[100vh]">
      <div className="flex justify-between items-center text-center mb-6">
        <header className="h-fit text-3xl tracking-[.05em] text-center">
          My Projects
        </header>
        <Link
          className="h-fit shadow-md bg-transparent text-darkblue text-md rounded-lg px-3 py-1 text-center border border-pink focus:border-darkblue hover:bg-pink hover:text-yellow"
          to="/portfolio"
        >
          See Portfolio
        </Link>
      </div>
      <hr className="h-px mb-10 bg-pink border-0"></hr>

      <Carousel pauseOnHover className="place-self-center h-2/3">
        <img
          src={tadpole1}
          alt="Tadpole Tutoring (1)"
          className="h-full w-full object-cover"
        />
        <img
          src={tadpole2}
          alt="Tadpole Tutoring (2)"
          className="h-full w-full object-cover"
        />
        <img src={sudoku} alt="Sudoku" className="h-full w-full object-cover" />
        <img
          src={c4c}
          alt="C4C Message Board"
          className="h-full w-full object-cover"
        />
        <img src={blog} alt="Blog" className="h-full w-full object-cover" />
        <img src={chat} alt="Chat" className="h-full w-full object-cover" />
        <img src={recipe} alt="Recipe" className="h-full w-full object-cover" />
        <img
          src={weather}
          alt="Weather"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
}

export default SlideShow;
