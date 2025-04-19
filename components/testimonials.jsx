const testimonials = [
  {
    body: "Nebulix has revolutionized our workflow. The platform's scalability and reliability have allowed us to focus on growth without worrying about infrastructure.",
    author: {
      name: "Sophia Carter",
      handle: "CEO of CloudifyTech",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE14aLLnl8ZPaWowyKwHIoqyRtFuMHNdSoTCjybZlrFQDWo5BmCxonFwU&s",
    },
  },
  {
    body: "Thanks to Nebulix, we’ve been able to deploy faster and scale smarter. Their support team is exceptional and always ready to assist.",
    author: {
      name: "James Anderson",
      handle: "CTO of ScaleUp Inc.",
      imageUrl:
        "data:image/jpeg;base64,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",
    },
  },
  {
    body: "Nebulix has been a game-changer for our business. The seamless integration and robust features have made our operations more efficient than ever.",
    author: {
      name: "Emily Johnson",
      handle: "Founder of StreamlineHQ",
      imageUrl:
        "data:image/jpeg;base64,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",
    },
  },
  {
    body: "We’ve experienced unparalleled performance and uptime with Nebulix. It’s the backbone of our digital transformation journey.",
    author: {
      name: "Michael Brown",
      handle: "VP of Tech at InnovateNow",
      imageUrl:
        "data:image/jpeg;base64,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",
    },
  },
  {
    body: "Nebulix has provided us with the tools we need to scale globally. Their platform is intuitive, and their customer service is top-notch.",
    author: {
      name: "Olivia Davis",
      handle: "COO of GlobalReach Ltd.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTztlBaRVvq50A78hmuT-W3n88lKNt1M-4hXowwFRpjtqOBOHyq_KzQUhE&s",
    },
  },
  {
    body: "The flexibility and power of Nebulix have allowed us to innovate faster than ever. It’s a must-have for any tech-driven company.",
    author: {
      name: "William Martinez",
      handle: "Head of R&D at FutureTech Labs",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxKmK1eAhHJ3mNg3Ft3gMWsNjQ2Bd-m_HhOi_8gEycXGLJpvu3PCaa-Tg&s",
    },
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hear from our customers
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      alt=""
                      src={testimonial.author.imageUrl}
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
