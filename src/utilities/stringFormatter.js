const formatString = str => {
    return str
      .split('-')           // Split the string into an array using hyphens as separators
      .map(word =>          // Map each word in the array
        word
          .charAt(0)         // Get the first character of the word
          .toUpperCase()    // Convert it to uppercase
        + word.slice(1)     // Concatenate the rest of the word (from index 1)
      )
      .join(' ');           // Join the modified words back into a string using spaces
};

export default formatString;