import { Link } from "react-router-dom";
import { EMAIL_URL, GITHUB_URL, LINKED_IN_URL } from "../../utils/constants";
import linkedin_blue from "../../utils/linkedin-blue.png";
import linkedin_pink from "../../utils/linkedin-pink.png";
import linkedin_yellow from "../../utils/linkedin-yellow.png";
import github_blue from "../../utils/github-blue.png";
import github_pink from "../../utils/github-pink.png";
import github_yellow from "../../utils/github-yellow.png";
import email_blue from "../../utils/email-blue.png";
import email_pink from "../../utils/email-pink.png";
import email_yellow from "../../utils/email-yellow.png";
import { useState } from "react";
import { useEffect } from "react";

function Header({ isLanding = false }) {
  const [linkedInImg, setLinkedInImg] = useState(linkedin_blue);
  const [githubImg, setGithubImg] = useState(github_blue);
  const [emailImg, setEmailImg] = useState(email_blue);

  useEffect(() => {
    if (isLanding) {
      setLinkedInImg(linkedin_yellow);
      setGithubImg(github_yellow);
      setEmailImg(email_yellow);
    }
  }, [isLanding]);

  return (
    <div className="flex w-screen justify-between">
      <div className="flex justify-start items-center h-[10vh] w-1/3 bg-transparent ml-4">
        <ul className="flex flex-row justify-around w-full font-bold uppercase text-darkblue">
          <li className="hover:text-pink">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-pink">
            <Link to="/work">Work Experience</Link>
          </li>
          <li className="hover:text-pink">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="hover:text-pink">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-end items-center h-[10vh] w-1/4 bg-transparent mr-4">
        <ul className="flex flex-row justify-around w-2/5 font-bold uppercase text-darkblue">
          <li>
            <a href={LINKED_IN_URL}>
              <img
                className="h-[4vh]"
                src={linkedInImg}
                alt="LinkedIn"
                onMouseOver={() =>
                  isLanding
                    ? setLinkedInImg(linkedin_blue)
                    : setLinkedInImg(linkedin_pink)
                }
                onMouseOut={() =>
                  isLanding
                    ? setLinkedInImg(linkedin_yellow)
                    : setLinkedInImg(linkedin_blue)
                }
              ></img>
            </a>
          </li>
          <li>
            <a href={GITHUB_URL}>
              <img
                className="h-[4vh]"
                src={githubImg}
                alt="Github"
                onMouseOver={() =>
                  isLanding
                    ? setGithubImg(github_blue)
                    : setGithubImg(github_pink)
                }
                onMouseOut={() =>
                  isLanding
                    ? setGithubImg(github_yellow)
                    : setGithubImg(github_blue)
                }
              ></img>
            </a>
          </li>
          <li>
            <a href={EMAIL_URL}>
              <img
                className="h-[4vh]"
                src={emailImg}
                alt="Email"
                onMouseOver={() =>
                  isLanding ? setEmailImg(email_blue) : setEmailImg(email_pink)
                }
                onMouseOut={() =>
                  isLanding
                    ? setEmailImg(email_yellow)
                    : setEmailImg(email_blue)
                }
              ></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
