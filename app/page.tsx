import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import Image from 'next/image';
import facebookSign from 'public/facebook_sign.jpg';
import netflixFinale from 'public/netflix_finale.jpg';
import ethindiaStage from 'public/ethindia_stage.jpg';
import rivian from 'public/rivian_view.jpg';
import polo from 'public/polo_photo.jpg';
import ethindia from 'public/ethindia_line.jpg';
import gtios from 'public/gtios_logo.png';
import avatar from 'app/avatar.jpeg';
import armLogo from 'public/arm_logo.svg'
import ViewCounter from 'app/blog/view-counter';
import { PreloadResources } from 'app/preload';
import {
  getLeeYouTubeSubs,
  getVercelYouTubeSubs,
  getViewsCount,
} from 'app/db/queries';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    />
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

function ChannelLink({ img, link, name }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
              priority
            />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
          </div>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

function BlogLink({ slug, name }) {
  return (
    <div className="group">
      <a
        href={`/blog/${slug}`}
        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <Suspense fallback={<p className="h-6" />}>
            <Views slug={slug} />
          </Suspense>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
}

export default function Page() {
  return (
    <section>
      <PreloadResources />
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hey, I'm ajay 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a student, software engineer, traveler, and catalyst. I'm currently `}
        <Link href="/experience">working</Link>
        {` on a couple side projects as I finish my degree at `}
        <span className="not-prose">
          <Badge href="https://www.gatech.edu">
            <img
              alt='Georgia Tech logomark'
              src='/georgia_tech_logo_white.svg'>
            </img>
            <p className='opacity-0'>Georgia Tech</p>
          </Badge>
        </span>
        {` , where I'm studying Computer Science, more specifically `}
        <Badge href="https://www.cc.gatech.edu">
          🧠 Artificial Intelligence
        </Badge>
        {` and `}
        <Badge href="https://www.cc.gatech.edu">
          🤖 Embedded Systems
        </Badge>
        .
      </p>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Me and some of my team memnbers at Netflix"
            src={netflixFinale}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me Playing Polo, one of my favorite hobbies"
            src={polo}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="The main stage at ETHIndia, an Ethereum Hackathon I attended while traveling for work in India"
            src={ethindiaStage}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Me standing in front of Facebook's sign on 1 Hacker Way"
            src={facebookSign}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Roadtripping in a Rivian R1S, one of my favorite pieces of technology"
            src={rivian}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="The line to enter ETHIndia, an Ethereum Hackathon I attended while traveling for work in India"
            src={ethindia}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          For several years, I've been a Senior Tech Lead for <a href="https://www.gtios.club"> Georgia Tech's iOS Club </a>, where
          we help students find their passion for mobile development by building cool apps 📱. I also spend some free time
          writing software and working on cool side projects. Check out some of my work on <a href="https://www.github.com/ajaymoturi12">GitHub:</a>
        </p>
      </div>
      <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        <ChannelLink
          img={avatar}
          name="@ajaymoturi12"
          link="https://www.github.com/ajaymoturi12"
        />
        <ChannelLink
          img={gtios}
          name="@gtiosclub"
          link="https://www.github.com/gtiosclub"
        />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          One of my goals as I enter my career is to write more. Whether it be documenting
          my experience, giving advice that can help people in similar positions as me, or
          simply talking about cool new technology. You can keep me accountable by reading
          my blog ... we'll see how this one goes 🙃
        </p>
      </div>
      <div className="my-8 flex flex-col space-y-4 w-full">
        {/* <BlogLink
          name="What Makes A Great Developer Experience?"
          slug="developer-experience-examples"
        />
        <BlogLink name="What is Developer Relations?" slug="devrel-at-vercel" /> */}
        <BlogLink name="Check out my (still very new) blog" slug="" />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I like to invest spare cash into growing tech companies that I think could become
          behemoths one day. Some of the companies I'm currently invested in:
        </p>
      </div>
      <div className="my-8 flex flex-row space-x-2 w-full h-14 overflow-hidden">
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://rivian.com">
            <Image
              src="/rivian_logo.png"
              alt="Rivian Logo"
              height={180}
              width={900}
            ></Image>
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://novavax.com">
            <Image
              src="/novavax_logo.png"
              alt="Novavax Logo"
              width={600}
              height={150}
            ></Image>
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://www.makeswift.com/blog/makeswift-is-joining-bigcommerce">
            <Image
              priority
              src={armLogo}
              alt="ARM Logo"
            ></Image>
          </a>
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Thanks for checking out my website :) If you found something interesting or
          just want to chat, feel free to reach out below:
        </p>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/ajaymoturi"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">connect with me</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:ajaymoturi0@gmail.com"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">let's chat</p>
          </a>
        </li>
        <li>
          <Link
            href="/resume"
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank">
            <ArrowIcon />
            <p className="h-7 ml-2">resume</p>
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
      </ul>
    </section>
  );
}