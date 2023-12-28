import Header from "../common/Header";

function Contact({ isLanding = false }) {
  return (
    <div className="flex flex-col place-items-center w-screen bg-yellow h-[100vh]">
      {!isLanding ? <Header /> : undefined}

      <div className="w-2/3 mb-32 bg-yellow text-darkblue font-medium mt-16">
        <div class="pt-6 lg:pt-10 px-4 mx-auto max-w-screen-md">
          <header className="text-4xl mb-6 tracking-[.05em] text-center font-medium">
            Contact Me
          </header>
          <hr class="h-px mb-10 bg-pink border-0"></hr>
          <form action="#" class="space-y-8">
            <div>
              <label for="email" class="block mb-2 text-md">
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-pink text-sm rounded-lg block w-full p-2.5 focus:border-darkblue"
                placeholder="name@email.com"
                required
              ></input>
            </div>
            <div>
              <label for="subject" class="block mb-2 text-md">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="shadow-sm bg-gray-50 border border-pink text-sm rounded-lg block w-full p-2.5 focus:border-darkblue"
                placeholder="What are you messaging me about?"
                required
              ></input>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-md">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="shadow-sm bg-gray-50 border border-pink text-sm rounded-lg block w-full p-2.5 focus:border-darkblue"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="shadow-md bg-yellow text-darkblue border border-pink text-sm rounded-lg py-3 px-5 text-center focus:border-darkblue hover:bg-pink hover:text-yellow"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
