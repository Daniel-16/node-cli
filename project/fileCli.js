// Import required Node.js modules
import fs from "fs";
import readline from "readline";

// Create readline interface for handling user input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the main menu options to the user
function displayMenu() {
  console.log("\n=== File Operations CLI ===");
  console.log("1. Read a file");
  console.log("2. Create a new text file");
  console.log("3. Write to a file");
  console.log("4. Exit");
  console.log("========================\n");
}

// Main function to handle the file operations menu loop
async function handleFileOperations() {
  while (true) {
    displayMenu();
    
    // Get user input for menu selection
    const answer = await new Promise((resolve) => {
      rl.question("Choose an option (1-4): ", resolve);
    });

    // Process user selection
    switch (answer) {
      case "1":
        await readFile();
        break;
      case "2":
        await createFile();
        break;
      case "3":
        await writeToFile();
        break;
      case "4":
        console.log("Goodbye!");
        rl.close();
        return;
      default:
        console.log("Invalid option. Please try again.");
    }
  }
}

// Function to read contents of a file
async function readFile() {
  // Get filename from user
  const filename = await new Promise((resolve) => {
    rl.question("Enter the filename to read: ", resolve);
  });

  try {
    // Read and display file contents
    const data = fs.readFileSync(filename, "utf-8");
    console.log("\nFile contents:");
    console.log(data);
  } catch (error) {
    console.error("Error reading file:", error.message);
  }
}

// Function to create a new empty file
async function createFile() {
  // Get filename from user
  const filename = await new Promise((resolve) => {
    rl.question("Enter the filename to create: ", resolve);
  });

  try {
    // Create empty file
    fs.writeFileSync(filename, "");
    console.log(`File '${filename}' created successfully!`);
  } catch (error) {
    console.error("Error creating file:", error.message);
  }
}

// Function to write content to a file
async function writeToFile() {
  // Get filename from user
  const filename = await new Promise((resolve) => {
    rl.question("Enter the filename to write to: ", resolve);
  });

  // Get content from user
  const content = await new Promise((resolve) => {
    rl.question("Enter the content to write: ", resolve);
  });

  try {
    // Write content to file
    fs.writeFileSync(filename, content);
    console.log(`Content written to '${filename}' successfully!`);
  } catch (error) {
    console.error("Error writing to file:", error.message);
  }
}

// Start the application
handleFileOperations();