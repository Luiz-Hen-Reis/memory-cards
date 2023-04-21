export default function toCapitalize(word: string) {
    if (word.includes(' ')) {
      const arrayOfString = word.split(' ');
      const formattedWords = arrayOfString.map((word) => {
        const firstLetter = word.charAt(0);
        const remainingLetters = word.slice(1);
  
        return `${firstLetter.toUpperCase()}${remainingLetters}`;
      });
      const newWord = formattedWords.toString().replace(',', ' ');
  
      return newWord;
    }
    const firstLetter = word.charAt(0);
    const remainingLetters = word.slice(1);
  
    return `${firstLetter.toUpperCase()}${remainingLetters}`;
  }