import Image from "next/image";
import teammember1 from "../../../public/teammember1.jpg"
import teammember2 from "../../../public/teammember2.jpg"
import Link from "next/link";

export default function About() {
  return (
    <div className="space-y-16">
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">SOME OF OUR VALUES</h2>

        <ul className="space-y-6  text-lg">
          <li className="flex items-baseline">
            <span className="text-lg mr-2">•</span>
            <div>
              <span className="font-medium">Truth-seeking:</span> We pursue truth relentlessly, even when it's
              unpopular, elusive, or overlooked.
            </div>
          </li>
          <li className="flex items-baseline">
            <span className="text-lg mr-2">•</span>
            <div>
              <span className="font-medium">High agency:</span> We take initiative to solve problems and create
              solutions, regardless of obstacles.
            </div>
          </li>
          <li className="flex items-baseline">
            <span className="text-lg mr-2">•</span>
            <div>
              <span className="font-medium">Urgency and prioritization:</span> We drive progress with a keen sense of
              what matters most.
            </div>
          </li>
          <li className="flex items-baseline">
            <span className="text-lg mr-2">•</span>
            <div>
              <span className="font-medium">Scientific approach:</span> We form hypotheses, gather data, and let
              evidence guide our technical decisions.
            </div>
          </li>
          <li className="flex items-baseline">
            <span className="text-lg mr-2">•</span>
            <div>
              <span className="font-medium">Collaborative mindset:</span> We actively seek feedback and diverse
              perspectives to refine and improve our ideas.
            </div>
          </li>
          <li className="flex items-baseline">
            <span className="text-lg mr-2">•</span>
            <div>
              <span className="font-medium">Excellence:</span> For every member on the team we ask ourselves: 1. Is this
              person consistently raising the bar? 2. Would I enthusiastically re-hire this person?
            </div>
          </li>
          <li className="flex items-baseline">
            <span className="text-lg mr-2">•</span>
            <div>
              <span className="font-medium">Rough consensus:</span> Disagreeing and committing to move the ball forward
              is more important than you trying to be right.
            </div>
          </li>
          <li className="flex items-baseline">
            <span className="text-lg mr-2">•</span>
            <div>
              <span className="font-medium">Say what you think:</span> Be direct and do not talk around what you want to
              say.
            </div>
          </li>
        </ul>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-medium">TEAM</h2>

<div className="flex flex-wrap gap-6 justify-start">
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <Link href="https://x.com/surya_suhaas" target="_blank" rel="noopener noreferrer">
        <Image 
          src={teammember1} 
          alt="Team Member 1"
          width={64} 
          height={64} 
          className="w-full h-full object-cover"
          />
          </Link>
      </div>
      
      <div className="w-16 h-16 rounded-full overflow-hidden">
      <Link href="https://x.com/nithinexe" target="_blank" rel="noopener noreferrer">
        <Image 
          src={teammember2} 
          alt="Team Member 2"
          width={64} 
          height={64} 
          className="w-full h-full object-cover"
        />
        </Link>
      </div>
    </div>


      </div>
    </div>
  )
}

