import { characters } from './сharacters';

class MorseCode {
  public reverseRosettaStone: { [key: string]: string } =
    this.createReverseRosettaStone(characters);
  private createReverseRosettaStone(original: { [key: string]: string }): {
    [key: string]: string;
  } {
    return Object.fromEntries(
      Object.entries(original).map(([key, value]) => [value, key])
    );
  }
  public translateToMorseCode = (toTranslate: string): string => {
    return toTranslate
      .toLowerCase()
      .split('')
      .map((letter) => characters[letter] ?? letter)
      .join(' ')
      .replace(/\s+/g, ' ');
  };

  public translateFromMorseCode = (morseCode: string): string => {
    return morseCode
      .split(' ')
      .map((char) => {
        const curr = this.reverseRosettaStone[char];
        console.log(curr);
        return curr ?? '#';
      })
      .join('')
      .trim();
  };
}

export const morseCodeTranslator = new MorseCode();
