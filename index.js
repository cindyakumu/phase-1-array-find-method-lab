// code your solution here
// index.js

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    // Add other years as needed
  ];
  
  function superbowlWin(record) {
    // Use find to locate the year of a win
    const winYear = record.find(entry => entry.result === "W");
    
    // Return the year if a win was found, otherwise return undefined
    return winYear ? winYear.year : undefined;
  }
  
  // Example usage
  const winYear = superbowlWin(record);
  console.log(winYear); // Outputs the year of the win, or undefined if no win was found
  
