
"use client";

import { useEffect, useState } from "react";


interface Update {
  id: number;
  title: string;
  description: string;
  image?: string;
  created_at: string;
}


export default function UpdatesInfo() {
  const [updates, setUpdates] = useState<Update[]>([]);



  useEffect(() => {
    const fetchUpdates = async () => {
      const res = await fetch("/api/update",{
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      
      setUpdates(data);
    };

    fetchUpdates();
  }, []);


  return (
    
 <div className="">
      <h1 className="text-2xl font-bold mb-4">Updates</h1>
      {updates.length === 0 ? <p>No updates yet</p> : null}
      {updates.map((update, index) => (
        <div key={index} className=" mb-4">
          <p className="text-2xl font-semibold mb-1">{update.title}</p>
          <p className="text-lg font-medium">{update.description}</p>
          {update.image && <img src={update.image} alt="Update Image" width={200} />}
          <small className="text-gray-500 bg-[#a7d2c8]">
            {new Date(update.created_at).toISOString().split("T")[0].replace(/-/g, ".")}
          </small>

        </div>
      ))}
    </div>



  )
}

