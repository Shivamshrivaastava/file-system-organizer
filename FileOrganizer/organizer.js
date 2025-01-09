// Import the file system module to work with the file system
const fs = require('fs'); 

// Import the path module to handle file paths
const path = require('path'); 

// Function to organize files in a given folder
function organizeFiles(folderPath) {
  // Check if the folder path is provided
  if (!folderPath) {
    console.log("Please provide a folder path!"); // Prompt user to give a folder path if missing
    return; // Stop the function execution
  }

  // Define the file types and their corresponding folder names
  const types = {
    Images: ['.jpg', '.jpeg', '.png', '.gif'], // Image file extensions
    Documents: ['.pdf', '.doc', '.txt'],       // Document file extensions
    Videos: ['.mp4', '.mkv'],                 // Video file extensions
  };

  // Read all files in the specified folder
  const files = fs.readdirSync(folderPath);

  // Loop through each file in the folder
  files.forEach((file) => {
    // Get the file extension of the current file
    const ext = path.extname(file); 

    // Default folder name if file doesn't match any type
    let folderName = 'Others'; 

    // Check which type the file belongs to
    for (let type in types) {
      // If the extension matches, set folderName to the corresponding type
      if (types[type].includes(ext)) {
        folderName = type; 
        break; // Stop checking further as we've found the type
      }
    }

    // Define the path for the organized folder
    const organizedFolderPath = path.join(folderPath, 'Organized_Files', folderName);

    // Create the folder if it doesn't already exist
    if (!fs.existsSync(organizedFolderPath)) {
      fs.mkdirSync(organizedFolderPath, { recursive: true }); // Create folder and any missing parent folders
    }

    // Define the source path (original location of the file)
    const sourcePath = path.join(folderPath, file);

    // Define the destination path (organized folder location)
    const destinationPath = path.join(organizedFolderPath, file);

    // Move the file from source to destination
    fs.renameSync(sourcePath, destinationPath); 
  });

  // Log success message after organizing all files
  console.log("Files organized successfully!");
}

// Run the function with a test folder
organizeFiles('./test_folder'); 

