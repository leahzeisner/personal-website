import profile from "../../../utils/profile.jpg";
import {
  WHOOP_URL,
  WM_URL,
  COLLINS_URL,
  C4C_URL,
  TADPOLE_URL,
} from "../../../utils/constants";

function About() {
  return (
    <div className="flex mt-16 mb-32 text-darkblue font-medium w-2/3">
      <img
        src={profile}
        alt="Leah Zeisner"
        className="h-[50vh] rounded-full place-self-center border border-pink mr-20"
      ></img>

      <div>
        <header className="text-6xl">Hi, I'm Leah</header>

        <hr class="h-px my-8 bg-pink border-0"></hr>
        <p className="mb-4">
          I am a recent graduate of Northeastern University aspiring to become a
          Software Engineer. I completed co-ops at{" "}
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
          , working full-time as a developer.
        </p>
        <p className="mb-4">
          During my time at Northeastern, I was a member of{" "}
          <a className="font-bold hover:text-pink" href={C4C_URL}>
            Code4Community
          </a>
          , a club dedicated to developing software solutions for non-profit
          organizations. Additionally, I worked as a front-end developer for{" "}
          <a className="font-bold hover:text-pink" href={TADPOLE_URL}>
            Tadpole Tutoring
          </a>
          , a platform connecting students with tutors and managing their
          meetings. In my free time, I've developed mock landing pages, a live
          chat room, a blog, and games such as Sudoku and Hangman, along with
          practical tools like recipe and to-do apps.
        </p>
        <p className="mb-4">
          I am passionate about full-stack web development that has a positive
          impact. I find fulfillment in both the development and design aspects
          of creating websites. I have experience with React, NextJS,
          Typescript, Python, Java, SQL, GraphQL, AWS, and more.
        </p>
        <p>
          In my free time, you can find me painting, playing basketball, skiing,
          or doing a puzzle.
        </p>
      </div>
    </div>
  );
}

export default About;
