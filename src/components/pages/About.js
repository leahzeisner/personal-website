import profile from "../../utils/profile-square.jpg";
import {
  WHOOP_URL,
  WM_URL,
  COLLINS_URL,
  C4C_URL,
  TADPOLE_URL,
} from "../../utils/constants";

function About() {
  return (
    <div className="mt-16 text-darkblue">
      <img
        src={profile}
        alt="Leah Zeisner"
        className="h-[40vh] rounded-full"
      ></img>

      <header className="text-6xl">Hi, I'm Leah</header>
      <p className="mb-4">
        I am a recent Northeastern University graduate and an aspiring Software
        Engineer. I have a BS in Computer Science with a concentration in
        Software. I've completed co-ops at{" "}
        <a className="font-bold hover:text-pink" href={WM_URL}>
          Wood Mackenzie
        </a>
        ,
        <a className="font-bold hover:text-pink" href={WHOOP_URL}>
          {" "}
          WHOOP
        </a>
        , and{" "}
        <a className="font-bold hover:text-pink" href={COLLINS_URL}>
          Collins Aerospace
        </a>
        , where I worked full-time for 6+ months as a software developer.
      </p>
      <p className="mb-4">
        I've also completed several personal and group-based projects. At
        Northeastern, I was a member of{" "}
        <a className="font-bold hover:text-pink" href={C4C_URL}>
          Code4Community
        </a>
        , a club that builds software solutions for non-profit organizations. I
        also worked as a front-end developer on{" "}
        <a className="font-bold hover:text-pink" href={TADPOLE_URL}>
          Tadpole Tutoring
        </a>
        , which connects students with tutors and manages their meetings. In my
        free time, I've developed mock landing pages, a live chat room, a blog,
        games such as Sudoku and Hangman, recipe and to-do apps, and much more.
      </p>
      <p className="mb-4">
        I am passionate about full-stack web development that has a positive
        impact on the world. I enjoy both the development and design processes
        of building websites. I have experience with React, NextJS, Python,
        Java, SQL, GraphQL, AWS, and more.
      </p>
    </div>
  );
}

export default About;
