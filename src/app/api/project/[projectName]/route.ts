import { NextResponse, NextRequest } from "next/server";
import { readJSONFile } from "../../lib/json-utils";

export async function GET(
  request: NextRequest,
  { params }: { params: { projectName: string } },
) {
  // filter a singel data accordinto parrams and id

  // we will use params to access the data passed to the dynamic route
  const projectName = params.projectName;

  const filePath = `public/database/${projectName}.json`;
  const jsonData = readJSONFile(filePath);
  return NextResponse.json(jsonData);
}
