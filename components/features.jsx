export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-indigo-600">
          Why Nebulix?
        </h2>
        <p className="mt-2 max-w-lg text-pretty text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">
          Everything you need to deploy your app.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://media.istockphoto.com/id/1500645450/photo/motion-blurred-image-of-traffic-in-the-highway.jpg?s=612x612&w=0&k=20&c=wgh7dvMagRjdhQFxIGahrJAJNpBMNjF4cvQfBZK1F68="
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  Performance
                </h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                  Lightning-Fast Deployments
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Spin up servers and containers in seconds with our
                  high-performance compute engine.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://blogs.vmware.com/wp-content/uploads/sites/74/2018/12/Screen-Shot-2022-05-27-at-10.28.46-AM.png"
                className="h-80 object-cover object-left lg:object-right"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  Releases
                </h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                  ☁️ Instant Cloud Cloning
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Spin up exact replicas of your entire infrastructure with a
                  single click — perfect for testing, debugging, or just feeling
                  powerful.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1533136251085-1abf189c72e0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZmluaXR5fGVufDB8fDB8fHww"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  scale to ∞
                </h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                  Built for Scale
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Whether you’re launching a side project or managing enterprise
                  traffic, we grow with you.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <img
                alt=""
                src="https://miro.medium.com/v2/resize:fit:1400/1*0hcduJ-1b1OU7gPDb-Uz0A.jpeg"
                className="h-80 object-cover object-center"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  developer friendly
                </h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                  Developer-Centric Tools
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  From intuitive APIs to powerful CLI tools—everything you need
                  to stay in flow.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://assets.telecomtv.com/assets/telecomtv/globe-connection-connected-map-16589.jpeg?w=1280"
                className="h-80 object-cover object-center"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  Network
                </h3>
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                  Global Reach
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Deploy closer to your users with data centers in 20+ regions
                  worldwide.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}
