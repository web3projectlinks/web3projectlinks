import { NextRequest, NextResponse } from "next/server";
import { getDataFromJsonFiles } from "../lib/getDataFromJsonFiles";
// import { mergeJSONFiles } from "../lib/json-utils";

export async function GET(request: NextRequest) {
  // const directoryPath = "public/database";
  const directoryPath = "src/app/api/project/database";
  const database = await getDataFromJsonFiles(directoryPath);
  console.log("database", database);

  // get the search params as a URLSearchParams object
  const searchParams = request.nextUrl.searchParams;

  // get the values of the name and age parameters
  const name = searchParams.get("name");

  if (name) {
    const validNames = database.map((d) => d.id);
    if (!validNames.includes(name)) {
      return NextResponse.json({ error: "Invalid name parameter" });
    }
    // Filter data based on query parameters
    const filteredData = database.filter((item) => item.id === name);
    return NextResponse.json(filteredData);
  }

  // If no query parameters are provided, return all data
  return NextResponse.json(database);
}
