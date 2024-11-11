import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { LinkPreview } from "@/components/ui/link-preview";
import TypingAnimation from '@/components/ui/typing-animation';
import BlurIn from '@/components/ui/blur-in';
import { BorderBeam } from "@/components/ui/border-beam";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <BlurIn>
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            EY Digital Innovations{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-red-700 via-green-800 to-amber-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Your Partner for Innovation.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-red-700 via-green-800 to-amber-500 py-4">
                <span className="">Your Partner for Innovation.</span>
              </div>
            </div>
          </h2>
        </BlurIn>
      </BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center justify-center min-h-screen py-12 m-3"> 
        {/* Hero Section */}
        <div className="hero text-center mb-12"> 
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Empowering businesses with cutting-edge technology solutions.
          </h1>
          <TypingAnimation
            className="text-2xl font-bold text-gray-500 mb-4"
            text="Who would you like to create with?"
          />
        </div>

        {/* Sub-Company Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="relative p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col"> 
            {/* EY Photo & Video */}
            <BorderBeam />
            <LinkPreview
              url="https://instagram.com/the_ey_photo"
              className="text-2xl font-bold text-gray-800 mb-4 w-full flex justify-center"
            >
              EY Photo & Video
            </LinkPreview>
            <p className="text-gray-600 mb-4">Capture moments, tell stories.</p>
            <div className="flex-grow"></div> {/* This will push the button to the bottom */}
            <Link href="https://instagram.com/the_ey_photo"> 
              <Button variant="ringHover" className="w-full flex justify-center">
                Explore
              </Button>
            </Link>
          </Card>

          <Card className="relative p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col"> 
            {/* EY Web & App Dev */}
            <BorderBeam />
            <LinkPreview
              url="https://web.elkommos.com"
              className="text-2xl font-bold text-gray-800 mb-4 w-full flex justify-center"
            >
              EY Web & App Dev
            </LinkPreview>
            <p className="text-gray-600 mb-4">Crafting digital experiences.</p>
            <div className="flex-grow"></div> {/* This will push the button to the bottom */}
            <Link href="https://web.elkommos.com"> 
              <Button variant="ringHover" className="w-full flex justify-center">
                Learn More
              </Button>
            </Link>
          </Card>

          <Card className="p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            {/* EY Consulting Solutions */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 w-full text-center">EY IT Consulting</h2>
            <p className="text-gray-600 mb-4">
              Strategic guidance for digital transformation.
            </p>
            <div className="flex-grow"></div> {/* This will push the button to the bottom */}
            <Button disabled className="cursor-not-allowed w-full flex justify-center">
              Coming Soon
            </Button> 
          </Card>
        </div>
      </div>
      <footer className="py-8 text-center text-gray-500">
        Designed by{' '}
        <a
          href="https://anthony.elkommos.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-gray-700 hover:text-gray-900"
        >
          Anthony Elkommos Youssef
        </a>
      </footer>
    </>
  );
}
