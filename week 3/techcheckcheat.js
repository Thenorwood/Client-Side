// Function to fetch DNA mapping data from the API
async function fetchDNAMap() {
    try {
        const response = await fetch('https://prog2700.onrender.com/dna/dnaMap.json'); // Send a request to the API
        const data = await response.json(); // Parse the JSON response
        return data; // Return the parsed data
    } catch (error) {
        console.error("Error fetching DNA map data:", error);
    }
}

// Function to print details of a specific amino acid by its abbreviation
function printAminoAcidDetails(data, abbr) {
    const aminoAcid = data.find(amino => amino.abbr === abbr); // Find the amino acid by abbreviation
    if (aminoAcid) {
        console.log(`Details of ${aminoAcid.name}:`, aminoAcid); // Print its details if found
    } else {
        console.log(`Amino acid with abbreviation ${abbr} not found.`); // Indicate if not found
    }
}

// Function to add a new amino acid to the data array
function addAminoAcid(data, newAminoAcid) {
    data.push(newAminoAcid); // Add the new amino acid to the data array
    console.log(`Added new amino acid: ${newAminoAcid.name}`); // Confirmation message
}

// Function to remove an amino acid from the data array by its abbreviation
function removeAminoAcid(data, abbr) {
    const index = data.findIndex(amino => amino.abbr === abbr); // Find the index of the amino acid to remove
    if (index !== -1) {
        data.splice(index, 1); // Remove the amino acid if found
        console.log(`Removed amino acid: ${abbr}`); // Print a confirmation message
    } else {
        console.log(`Amino acid with abbreviation ${abbr} not found.`); // Indicate if not found
    }
}

// Function to find and print amino acids by codon
function findAminoAcidByCodon(data, codon) {
    const aminoAcids = data.filter(amino => amino.codons.includes(codon)); // Filter amino acids by codon
    if (aminoAcids.length > 0) {
        console.log(`Amino acids with codon ${codon}:`, aminoAcids.map(amino => amino.name).join(', ')); // Print found amino acids
    } else {
        console.log(`No amino acids found with codon ${codon}.`); // Indicate if none found
    }
}

// Function to print all amino acids that have at least one codon
function printAminoAcidsWithCodons(data) {
    const aminoAcids = data.filter(amino => amino.codons.length > 0); // Filter amino acids with at least one codon
    console.log("Amino acids with at least one codon:", aminoAcids.map(amino => amino.name).join(', ')); // Print these amino acids
}

// Function to extract and print a specific range of amino acids from the list
function printAminoAcidRange(data, start, end) {
    const range = data.slice(start, end); // Extract a range of amino acids
    console.log("Amino acids in range:", range.map(amino => amino.name).join(', ')); // Print the range
}

// Function to print all amino acids that start with the letter 'B'
function printAminoAcidsStartingWithB(data) {
    const aminoAcids = data.filter(amino => amino.name.startsWith('B'));
    console.log("Amino acids starting with 'B':", aminoAcids.map(amino => amino.name).join(', '));
}



// Main function to demonstrate functionalities
async function main() {
    const data = await fetchDNAMap(); // Fetch the DNA mapping data

    if (!data) {
        console.log("Failed to fetch DNA data.");
        return;
    }
     // Add the amino acid "Barftime" to the array
     addAminoAcid(data, { name: "Barftime", abbr: "Bft", codons: ["BFT", "BFM"] });
    
     // List all amino acids that start with the letter 'B'
     printAminoAcidsStartingWithB(data);

    // Demonstrating function usage with examples
    printAminoAcidDetails(data, 'Ala'); // Print details of Alanine
    const newAminoAcid = { name: "Example Amino Acid", abbr: "ExA", codons: ["XXX", "XXY"] }; // New amino acid to add
    addAminoAcid(data, newAminoAcid); // Add the new amino acid
    removeAminoAcid(data, 'ExA'); // Remove the newly added amino acid
    findAminoAcidByCodon(data, 'GCT'); // Find amino acids by codon
    printAminoAcidsWithCodons(data); // Print amino acids that have codons
    printAminoAcidRange(data, 0, 5); // Print a range of amino acids
}

main(); // Execute the main function to run the program
