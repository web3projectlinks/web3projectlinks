import { NextRequest, NextResponse } from "next/server";
// import { mergeJSONFiles } from "../lib/json-utils";

import fs from "fs";
import path from "path";

function getDataFromJsonFiles(directoryPath: string): any[] {
  const files = fs.readdirSync(directoryPath);
  const dataArray: any[] = [];

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    if (fs.statSync(filePath).isFile() && path.extname(filePath) === ".json") {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      try {
        const jsonData = JSON.parse(fileContent);
        if (Array.isArray(jsonData)) {
          dataArray.push(...jsonData);
        } else {
          dataArray.push(jsonData);
        }
      } catch (error) {
        console.error(`Error parsing JSON file ${file}:`, error);
      }
    }
  });

  return dataArray;
}

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
