import { Carousel } from "@material-tailwind/react";
import tadpole1 from "../../../utils/projects/tadpole1.png";
import tadpole2 from "../../../utils/projects/tadpole2.png";
import tadpole3 from "../../../utils/projects/tadpole3.png";
import tadpole4 from "../../../utils/projects/tadpole4.png";
import sudoku1 from "../../../utils/projects/sudoku1.png";
import sudoku2 from "../../../utils/projects/sudoku2.png";
import blog1 from "../../../utils/projects/blog1.png";
import blog2 from "../../../utils/projects/blog2.png";
import chat1 from "../../../utils/projects/chat1.png";
import chat2 from "../../../utils/projects/chat2.png";

function ProjectSlideShow() {
  return (
    <div className="flex flex-col mb-32 text-darkblue font-medium w-2/3">
      <header className="text-3xl mb-6">My Projects</header>
      <hr class="h-px mb-6 bg-pink border-0"></hr>

      <Carousel className="rounded-xl">
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
        <img
          src={tadpole3}
          alt="Tadpole Tutoring (3)"
          className="h-full w-full object-cover"
        />
        <img
          src={tadpole4}
          alt="Tadpole Tutoring (4)"
          className="h-full w-full object-cover"
        />
        <img
          src={sudoku1}
          alt="Sudoku (1)"
          className="h-full w-full object-cover"
        />
        <img
          src={sudoku2}
          alt="Sudoku (2)"
          className="h-full w-full object-cover"
        />
        <img
          src={blog1}
          alt="Blog (1)"
          className="h-full w-full object-cover"
        />
        <img
          src={blog2}
          alt="Blog (2)"
          className="h-full w-full object-cover"
        />
        <img
          src={chat1}
          alt="Chat (1)"
          className="h-full w-full object-cover"
        />
        <img
          src={chat2}
          alt="Chat (2)"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
}

export default ProjectSlideShow;
