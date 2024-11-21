import { user } from "@/util/db";
import { NextResponse } from "next/server";

// db.js........................................................................................
export function GET(request, content) {
  // console.log(content.params.id);    // only access perticular id
  const data = user;
  // console.log(data, content.params.id);  // here access all data
  const userData = data.filter((item) => item.id == content.params.id);
  // return NextResponse.json(data, { status: 200 })
  return NextResponse.json(
    userData.length == 0
      ? { result: "No Data Found", success: false }
      : { result: userData[0], succes: true },
    { status: 200 }
  );
}
// Define Put method............................
export async function PUT(request, content) {
  let payload = await request.json();
  // console.log(payload);
  let userId = content.params.id;
  payload.id = userId;
  console.log(payload);
  if (!payload.id || !payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "request data is not vailid", success: false },
      { status: 400 }
    );
  }

  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}
