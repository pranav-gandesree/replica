
import { NextResponse } from "next/server";
import { supabase } from "@/lib/SupabaseClient";


export async function POST(req: Request) {
  try {
    const {title, description} = await req.json();

    // console.log({title, description})

    if (!title || !description) {
        return NextResponse.json({ message: "Invalid data" }, { status: 400 });
      }

    const response = await supabase.from("updates")
    .insert([{ 
      title,
      description,
      created_at: new Date().toISOString()}])
    .select();
    
  
    const { data, error } = response;

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ message: "Error saving update", data: data }, { status: 500 });
  }

  // console.log("responsie is", data)

    return NextResponse.json({ message: "Update saved" }, { status: 200 });
  } catch (error) {
    console.log("error is", error)
    return NextResponse.json({ message: "Error saving update" }, { status: 500 });
  }
}



export async function GET() {
  try {
    const { data, error } = await supabase.from("updates").select("*").order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log("cant fetch data", error)
    return NextResponse.json({ message: "Error loading updates", error }, { status: 500 });
  }
}
