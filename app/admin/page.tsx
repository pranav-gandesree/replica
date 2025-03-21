"use client";

import { useState } from "react";

export default function Admin() {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")

  const [image, setImage] = useState<File | null>(null);

  const correctPassword = "kiko_network";

  const handleLogin = () => {
    if (enteredPassword === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  const handleSubmit = async () => {
    if (!title && !! description) return alert("Title and Desscription are required!");

    // let imageUrl = "";
    // if (image) {
    //   const formData = new FormData();
    //   formData.append("file", image);
    //   formData.append("upload_preset", "your_upload_preset"); 

    //   const imgRes = await fetch("https://api.cloudinary.com/v1_1/your_cloudinary_name/image/upload", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   const imgData = await imgRes.json();
    //   imageUrl = imgData.secure_url;
    // }

    // const newUpdate = { text, image: imageUrl, date: new Date().toISOString() };

    const newUpdate = { title, description, date: new Date().toISOString() };

    await fetch("/api/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({title, description}),
    });

    alert("Update added successfully!");
    setTitle("");
    setDescription("");
    // setImage(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl text-[#094D3E] mb-4">Kiko Network</h2>
        <input
          type="password"
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
          placeholder="Enter password"
          className="border p-2 rounded w-64 text-center"
        />
        <button onClick={handleLogin} className="bg-blue-500 text-white p-2 mt-4 rounded w-32">
          Enter
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-64 text-center"
      />
      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded w-64 text-center"
      />
      {/* <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} className="mt-2" /> */}
      <button onClick={handleSubmit} className="bg-green-500 text-white p-2 mt-4 rounded w-32">
        Submit Update
      </button>
    </div>
  );
}
