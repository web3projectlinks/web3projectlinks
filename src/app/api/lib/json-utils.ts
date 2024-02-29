import * as fs from "fs";
import * as path from "path";

// Interface for the JSON data structure
interface JSONData {
  [key: string]: any;
}

type ProjectData = JSONData[];
// Function to read JSON files from a folder and merge them into a single array
export async function mergeJSONFiles(folderPath: string): Promise<ProjectData> {
  // Get list of files in the folder
  const files: string[] = fs.readdirSync(folderPath);

  // Array to hold merged JSON data
  let mergedData: ProjectData = [];

  // Iterate over each file
  for (const file of files) {
    // Check if file is a JSON file
    if (file.endsWith(".json")) {
      // Read JSON file
      const filePath: string = path.join(folderPath, file);
      const jsonData: JSONData[] = JSON.parse(
        fs.readFileSync(filePath, "utf-8"),
      );

      // Merge JSON data into the array
      mergedData = [...mergedData, ...jsonData];
    }
  }

  return mergedData;
}

// Function to read JSON file from a given file path
export const readJSONFile = (filePath: string): JSONData => {
  try {
    // Read JSON file
    const jsonData: JSONData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return jsonData;
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return { message: "project not found" };
  }
};

