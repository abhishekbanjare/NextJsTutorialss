// import { NextResponse } from "next/server";
// export function GET(request) {
//     return NextResponse.json({ name: "Abhishek", age: 27, Mobile: 9098035866, city: "Raipur", Adress: "Raipur Chhatisgarh" }, { status: 200 })
// }

import { user } from "@/util/db";
import { NextResponse } from "next/server";

// db.js........................................................................................
export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(request) {
  let payload = await request.json();
  console.log(payload, ":....payload");
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "require field not found", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { result: "new user created", success: true },
    { status: 201 }
  );
}
