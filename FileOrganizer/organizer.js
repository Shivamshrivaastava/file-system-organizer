
const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

// MongoDB connection URL
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'fileOrganizer'; 

// Function to organize files in a given folder
async function organizeFiles(folderPath) {
    if (!folderPath) {
        console.log("Please provide a folder path!");
        return;
    }

    const types = {
        Images: ['.jpg', '.jpeg', '.png', '.gif'],
        Documents: ['.pdf', '.doc', '.txt'],
        Videos: ['.mp4', '.mkv'],
    };

    const files = fs.readdirSync(folderPath);

    // Connect to MongoDB
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db(dbName);
        const collection = db.collection('organizedFiles');

        // Loop through each file in the folder
        for (let file of files) {
            const ext = path.extname(file);
            let folderName = 'Others';

            for (let type in types) {
                if (types[type].includes(ext)) {
                    folderName = type;
                    break;
                }
            }

            const organizedFolderPath = path.join(folderPath, 'Organized_Files', folderName);
            if (!fs.existsSync(organizedFolderPath)) {
                fs.mkdirSync(organizedFolderPath, { recursive: true });
            }

            const sourcePath = path.join(folderPath, file);
            const destinationPath = path.join(organizedFolderPath, file);
            fs.renameSync(sourcePath, destinationPath);

            // Insert organized file info into MongoDB
            await collection.insertOne({
                fileName: file,
                folder: folderName,
                organizedAt: new Date()
            });
        }

        console.log("Files organized successfully!");
    } catch (error) {
        console.error("Error organizing files:", error);
    } finally {
        await client.close();
    }
}

organizeFiles('./test_folder');
