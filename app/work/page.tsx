import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

export default function WorkPage() {
  console.log()
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm still early in my career, but striving to build great products
          that people love and bring something positive into the world. My goal
          in life is to stay curious and learn a lot along the way. Here's a
          summary of my work so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Key</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Product, Engineering, & Growth Intern
          <br></br>
          August 2023 - Present
        </p>

        <p>
          I joined <a href="https://key.ai">Key</a> as employee #1 to lead its engineering
          organization and product development as we set out to build the de facto product
          for career development, networking, and building impactful professional communities.
        </p>
        <h2 className="font-medium text-lg mb-1 tracking-tighter"> Some things I've at Key:</h2>
        <ul>
          <li>
            Grew the company's product user base from 0 to 6.5k
          </li>
          <li>
            Hired and managed a team of 13 full-time engineers & 2 designers
            spanning 3 distinct product categories
          </li>
          <li>
            Created and managed cloud infrastructure, CI/CD pipelines,
            deployment logging, and engineering on-call systems
          </li>
          <li>
            Conducted user interviews, orchestrated product feedback rounds,
            and ran weekly sprints/release cycles
          </li>
          <li>
            Hosted in-person and virtual events (like <a href="https://www.youtube.com/watch?v=udWephd7f8U">
              this fireside chat</a> with <a href="https://linkedin.com/in/davidlieb">David Lieb</a>)
            to bring together the 30k+ member Xoogler community.
          </li>
        </ul>
        <p>
          In case you were curious, I turned down a Google offer to work @ Key and learn about startups instead.
          It was once of the best decisions of my life. I would highly encourage anyone who's remotely interested
          in startups to take the jump and get out of your comfort zone. You won't regret it, and life is too short
          to wonder "what if?".
        </p>
        <p>
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Netflix</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineering Intern
          <br></br>
          Summer 2023
        </p>
        <p>
          I had the pleasure of spending a summer working alongside the folks of
          <a href="https://research.netflix.com/research-area/video-encoding-and-quality"> Netflix's
            Video & Image Encoding and Video Codecs & Quality Teams</a>, helping them migrate from the company's
          monolithic legacy streaming & encoding pipeline (dubbed 'Reloaded') to a new microservice
          architecture built on Cosmos, a proprietary media-centric distributed computing platform.
        </p>
        <p>
          Specifically, I built an end-to-end microservice to ensure that this new encoding pipeline
          honored certain points of interest in the final bitstreams that reach devices in users'
          homes and hands. Ever seen the "Skip Intro?" or "Skip Credits?" buttons that pop up on the
          screen when you're binging your favorite shows (mine are Suits, Breaking Bad, & the Flash)?
          Those are the kinds of POI's I was working with.
        </p>
        <p>
          I give huge props 👏 to the entire Encoding Technologies org @ Netflix for accomplishing this
          migration. It's no small feat, and the fact that not a single user would suspect this
          happened says all you need to know. Check out the links below to learn more ⬇️
        </p>

        <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
          <div className="group flex w-full">
            <a
              href="https://netflixtechblog.com/the-netflix-cosmos-platform-35c14d9351ad"
              target="_blank"
              className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
            >
              <div className="flex items-center space-x-3">
                <Image
                  alt="Netflix Cosmos Microservice Architecture"
                  src="/netflix_cosmos.png"
                  height={150}
                  width={150}
                  priority
                />
                <div className="flex flex-col">
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">
                  Cosmos Microservice Platform
                  </p>
                </div>
              </div>
              <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
                <ArrowIcon />
              </div>
            </a>
          </div>
          <div className="group flex w-full">
            <a
              href="https://netflixtechblog.com/rebuilding-netflix-video-processing-pipeline-with-microservices-4e5e6310e359"
              target="_blank"
              className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
            >
              <div className="flex items-center space-x-3">
                <Image
                  alt="Netflix Cosmos Microservice Architecture"
                  src="/netflix_encoding_pipeline.png"
                  height={150}
                  width={150}
                  priority
                />
                <div className="flex flex-col">
                  <p className="font-medium text-neutral-900 dark:text-neutral-100">
                    Video Encoding Pipeline Migration Process
                  </p>
                </div>
              </div>
              <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
                <ArrowIcon />
              </div>
            </a>
          </div>
        </div>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Cisco</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineering Intern
          <br></br>
          Summer 2022
        </p>
        <p>
          Cisco powers much of the networking, cloud, and cybersecurity infrastructure and software that keeps us
          connected to the internet 24/7. I got to work on the Polaris/IOS-XE team, which maintains the operating system
          that runs on majority of Cisco's hardware product lines (routers, switches, links, etc.).
        </p>
        <p>
          While I'll concede networking doesn't sound that cool, I got to work with some pretty cool tech 😎.
          Specifically, I used Natural Language Processing & Machine Learning methods to build an internal developer tool
          that made understanding device logs easier. Since these devices process millions of requests every second,
          their logging files can get very dense, so I trained a classification model to parse these logs in their entirety
          and summarize the observed behavior for other engineers to use during testing/debugging.
        </p>
        <p>
          Fun fact, Cisco has been ranked the #️⃣1️⃣ place to work in the U.S. for many years running!
          It was a pretty cool first job :)
        </p>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}