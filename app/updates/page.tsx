
"use client";

import { useEffect, useState } from "react";


interface Update {
  title: string;
  description: string;
  image?: string;
  date: string;
}


export default function Updates() {
  const [updates, setUpdates] = useState<Update[]>([]);

  useEffect(() => {
    fetch("/updates.json")
      .then((res) => res.json())
      .then((data) => setUpdates(data.reverse())); 
  }, []);



  return (
    // <div className="space-y-16">
    //   <div className="space-y-4">
    //     <h2 className="text-2xl font-medium">EXP-0003: Application Subscriptions</h2>
    //     <p className="text-lg leading-relaxed">
    //       Application Subscriptions are needed for the next generation of crypto products.
    //     </p>
    //     <p className="text-sm text-gray-400">2025.02.19 • Experiment</p>
    //   </div>

    //   <div className="space-y-4">
    //     <h2 className="text-2xl font-medium">
    //       Introducing Porto: Next-generation account for unstoppable applications
    //     </h2>
    //     <p className="text-lg leading-relaxed">
    //       Porto is a developer-first Typescript library that enables authentication, crypto payments, and account
    //       recovery to be seamlessly integrated into your app or existing toolkit.
    //     </p>
    //     <p className="text-sm text-gray-400">2024.12.11 • Update</p>
    //   </div>

    //   <div className="space-y-4">
    //     <h2 className="text-2xl font-medium">EXP-0002: App Sessions</h2>
    //     <p className="text-lg leading-relaxed">Building apps with account-based sessions on Odyssey</p>
    //     <p className="text-sm text-gray-400">2024.11.20 • Experiment</p>
    //   </div>

    //   <div className="space-y-4">
    //     <h2 className="text-2xl font-medium">Wevm x Ithaca</h2>
    //   </div>
    // </div>




 <div className="">
      <h1 className="text-2xl font-bold mb-4">Updates</h1>
      {updates.length === 0 ? <p>No updates yet</p> : null}
      {updates.map((update, index) => (
        <div key={index} className=" mb-4">
          <p className="text-2xl font-semibold mb-1">{update.title}</p>
          <p className="text-lg font-medium">{update.description}</p>
          {update.image && <img src={update.image} alt="Update Image" width={200} />}
          <small className="text-gray-500 bg-[#a7d2c8]">
            {new Date(update.date).toISOString().split("T")[0].replace(/-/g, ".")}
          </small>

        </div>
      ))}
    </div>



  )
}

