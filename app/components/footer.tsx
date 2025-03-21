import Link from "next/link"
import { ArrowRight, Github, Twitter } from "lucide-react"

export default function Footer() {
  return (

    <>
        <div className="space-y-2 text-md">
        <div className="space-y-2 text-md">
          <div className="border border-gray-800 rounded-lg px-4 py-2 text-center max-w-[450px] mx-auto">
            <p className="flex flex-wrap items-center justify-center gap-1">
              <Link href="/updates" className="text-blue-400 underline">
                Introducing kiko_network
              </Link>
              hivemapper for hyper-local climate data
            </p>
          </div>
        </div>
          <div className="border border-gray-800 rounded-lg px-4 py-2 text-center max-w-[450px] mx-auto flex items-center justify-center">
            Dive deep into Application Subscriptions with{" "}
            <Link href="/updates" className="text-blue-400 underline">
              EXP-0003
            </Link>
            .
          </div>
        </div>


    <footer className="mt-24 border-t border-gray-800">


      <div className="py-16 border-b border-gray-800">
        <div className="max-w-3xl mx-auto px-8">
       

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Subscribe to updates</h3>
              <p className="text-[#094D3E]">Stay in touch with the latest Kiko Network products & experiments.</p>
            </div>

            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="john@ithaca.xyz"
                className="bg-[#094D3E] border border-gray-800 px-4 py-2 w-full md:w-64 focus:outline-none focus:border-gray-600 text-white"
              />
              <button className="bg-black border border-gray-800 border-l-0 px-3 text-white">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6">
        <div className="max-w-3xl mx-auto px-8 flex justify-between items-center">
          <div className="text-lg font-semibold">Kiko Network</div>
          <div className="flex items-center gap-4">
            {/* <span className="text-gray-400">13883188</span> */}
            {/* <span className="text-gray-400">•</span> */}
            
            <Link href="https://discord.gg/ithaca" aria-label="Discord" className="text-gray-400 hover:text-[#094D3E]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4C14.89 4.19 14.76 4.45 14.67 4.66C13.06 4.41 11.46 4.41 9.85 4.66C9.76 4.45 9.63 4.19 9.51 4C8.01 4.26 6.57 4.71 5.23 5.33C2.39 9.61 1.56 13.78 1.97 17.88C3.7 19.22 5.39 20 7.04 20.51C7.37 20.05 7.67 19.56 7.92 19.05C7.28 18.81 6.67 18.51 6.09 18.15C6.19 18.07 6.29 17.99 6.38 17.91C9.94 19.55 13.82 19.55 17.34 17.91C17.43 17.99 17.53 18.07 17.63 18.15C17.05 18.51 16.44 18.81 15.8 19.05C16.05 19.56 16.35 20.05 16.68 20.51C18.33 20 20.02 19.22 21.75 17.88C22.22 13.12 20.95 9 19.27 5.33ZM8.57 15.47C7.53 15.47 6.67 14.5 6.67 13.33C6.67 12.16 7.51 11.19 8.57 11.19C9.63 11.19 10.49 12.16 10.47 13.33C10.47 14.5 9.63 15.47 8.57 15.47ZM15.43 15.47C14.39 15.47 13.53 14.5 13.53 13.33C13.53 12.16 14.37 11.19 15.43 11.19C16.49 11.19 17.35 12.16 17.33 13.33C17.33 14.5 16.49 15.47 15.43 15.47Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link href="https://x.com/kiko_network" aria-label="Twitter" className="text-gray-400 hover:text-[#094D3E]">
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
 </>
  )
}

