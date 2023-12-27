import Header from "../common/Header";

function Contact() {
  return (
    <div className="bg-yellow">
      <Header />

      <hr class="h-px bg-pink border-0"></hr>

      <div className="bg-yellow text-darkblue h-[90vh]">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-8 lg:mb-16 text-4xl tracking-tight font-extrabold text-center">
            Contact Me
          </h2>
          <form action="#" class="space-y-8">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium">
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
              <label for="subject" class="block mb-2 text-sm font-medium">
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
              <label for="message" class="block mb-2 text-sm font-medium">
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
              class="shadow-sm bg-darkblue text-yellow text-sm rounded-lg py-3 px-5 font-medium text-center focus:border-darkblue hover:bg-pink"
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
