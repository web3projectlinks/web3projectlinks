import data from "@/app/assets/search-suggestions.json";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");

  // Validate the query parameter
  if (query && query !== undefined && typeof query !== "string") {
    return NextResponse.json({ error: "Invalid query parameter" });
  }

  // Filter data based on the search query if provided
  let filteredData = data;
  if (query && query.trim() !== "") {
    filteredData = data.filter((item) => item.id.startsWith(query));
  }

  // Sort data by market_cap_rank
  const sortedData = filteredData.sort((a, b) => {
    if (a.market_cap_rank === null) return 1;
    if (b.market_cap_rank === null) return -1;
    return a.market_cap_rank - b.market_cap_rank;
  });

  // Return all matching results if search query is provided
  // Otherwise, return the first 20 items
  const responseData =
    query && query.trim() !== "" ? sortedData : sortedData.slice(0, 20);

  return NextResponse.json(responseData);
}
