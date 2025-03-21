import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const filePath = path.join(process.cwd(), "public", "updates.json");

export async function POST(req: Request) {
  try {
    const {title, description} = await req.json();

    if (!title || !description) {
        return NextResponse.json({ message: "Invalid data" }, { status: 400 });
      }

      
      if (!fs.existsSync(path.dirname(filePath))) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
      }

    
    const fileData = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf-8") : "[]";
    const updates = JSON.parse(fileData);

    updates.push({
        title,
        description,
        date: new Date().toISOString(), 
      });

    
    fs.writeFileSync(filePath, JSON.stringify(updates, null, 2));

    return NextResponse.json({ message: "Update saved" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error saving update" }, { status: 500 });
  }
}
