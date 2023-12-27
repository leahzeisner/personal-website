function Work() {
  return (
    <div className="flex flex-col mb-32 text-darkblue font-medium w-2/3">
      <header className="text-3xl mb-6">My Work Experience</header>
      <hr class="h-px mb-6 bg-pink border-0"></hr>

      <ol className="relative border-s border-darkblue">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-darkblue rounded-full mt-1.5 -start-1.5"></div>
          <time className="mb-1 text-sm font-normal leading-none">
            February 2023 - May 2024
          </time>
          <h3 className="text-lg font-bold">Code4Community: J-PAL</h3>
          <h2 className="text-md font-medium italic">Co-Tech Lead</h2>
          <ul className="my-2 text-base list-disc ml-8 font-medium">
            <li>
              Contributed to a full-stack application that generates letters of
              recommendation by leveraging performance surveys completed by
              employers.
            </li>
            <li>
              Demonstrated efficiency in meeting client deadlines and delivering
              a functional product for their research project.
            </li>
            <li>
              Demoed the product to the entire C4C club to show the product’s
              development over time.
            </li>
          </ul>
          {/* <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Learn more{" "}
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a> */}
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-darkblue rounded-full mt-1.5 -start-1.5"></div>
          <time className="mb-1 text-sm font-normal leading-none">
            May 2023 - September 2023
          </time>
          <h3 className="text-lg font-bold">Tadpole Tutoring</h3>
          <h2 className="text-md font-medium italic">Front-End Developer</h2>
          <ul className="my-2 text-base list-disc ml-8 font-medium">
            <li>
              Developed front-end code for a web application that connects
              students with tutors and manages their meetings.
            </li>
            <li>
              Upgraded major features including how tutors schedule meetings.
            </li>
            <li>
              Communicated directly with the CEO, design team, and other
              developers to roadmap designs, implement features and solve
              issues.
            </li>
          </ul>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-darkblue rounded-full mt-1.5 -start-1.5"></div>
          <time className="mb-1 text-sm font-normal leading-none">
            January 2023 - August 2023
          </time>
          <h3 className="text-lg font-bold">Wood Mackenzie</h3>
          <h2 className="text-md font-medium italic">Software Developer</h2>
          <ul className="my-2 text-base list-disc ml-8 font-medium">
            <li>
              Engineered dynamic and interactive visualizations using React
              Typescript, encompassing charts, graphs, and maps, to adeptly
              convey intricate energy data to end users.
            </li>
            <li>
              Familiarized myself with popular technologies, including GraphQL
              and AWS, broadening my involvement in the development process.
            </li>
            <li>
              Collaborated with global cross-functional teams to conceptualize,
              design, and implement new features while troubleshooting issues
              across the entire technology stack.
            </li>
            <li>
              Integrated our legacy application into a centralized product
              facilitating user access to data across diverse energy markets,
              thereby empowering confident investments in clean energy.
            </li>
          </ul>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-darkblue rounded-full mt-1.5 -start-1.5"></div>
          <time className="mb-1 text-sm font-normal leading-none">
            January 2022 - July 2022
          </time>
          <h3 className="text-lg font-bold">WHOOP</h3>
          <h2 className="text-md font-medium italic">
            Full-Stack Software Engineer
          </h2>
          <ul className="my-2 text-base list-disc ml-8 font-medium">
            <li>
              Utilized React JS to update the front-end checkout flow for WHOOP
              products in order to engage hundreds-of-thousands of customers and
              strengthen their first impression of the company.
            </li>
            <li>
              Reinforced back-end infrastructures through Java & SQL to
              accommodate various discounting options for WHOOP's product range.
            </li>
            <li>
              Consistently refactored our codebase from Angular to React to
              ensure ongoing optimization and improvement.
            </li>
            <li>
              Cooperated with my team to devise strategies for expanding our
              customer base and optimizing the company's revenue.
            </li>
          </ul>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-darkblue rounded-full mt-1.5 -start-1.5"></div>
          <time className="mb-1 text-sm font-normal leading-none">
            January 2021 - August 2021
          </time>
          <h3 className="text-lg font-bold">Collins Aerospace</h3>
          <h2 className="text-md font-medium italic">Software Engineer</h2>
          <ul className="my-2 text-base list-disc ml-8 font-medium">
            <li>
              Performed QA testing to ensure code was bug-free and met the
              requirements of the client.
            </li>
            <li>Contributed ideas to team architecture meetings.</li>
            <li>
              Adapted to a fast-paced, agile work environment in order to meet
              department deadlines.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default Work;
