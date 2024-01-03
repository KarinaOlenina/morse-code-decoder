const playMorseCodeSound = async (
  audioRef: React.RefObject<HTMLAudioElement>,
  morseCode: string,
  wpm: number,
  frequency: number
) => {
  if (!audioRef.current) {
    return;
  }

  const dotDuration = 60 / (50 * wpm);
  const dashDuration = 3 * dotDuration;
  const spaceBetweenSymbols = dotDuration;
  const spaceBetweenWords = 7 * dotDuration;

  const audioContext = new (window.AudioContext || window.AudioContext)();
  let time = audioContext.currentTime;

  const playSymbol = (duration: number) => {
    return new Promise((resolve) => {
      const oscillator = audioContext.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(frequency, time);
      oscillator.connect(audioContext.destination);

      oscillator.start(time);
      oscillator.stop(time + duration);
      time += duration;
      time += spaceBetweenSymbols;

      oscillator.onended = resolve;
    });
  };

  const symbols = morseCode.split('');

  for (const symbol of symbols) {
    switch (symbol) {
      case '.':
        await playSymbol(dotDuration);
        break;
      case '-':
        await playSymbol(dashDuration);
        break;
      case ' ':
        time += spaceBetweenWords;
        break;
      default:
        time += spaceBetweenSymbols;
        break;
    }
  }
};

export default playMorseCodeSound;
