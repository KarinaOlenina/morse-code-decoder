const playMorseCodeSound = (
    audioRef: React.RefObject<HTMLAudioElement>,
    morseCode: string,
    wpm: number,
    frequency: number,
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
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, time);
    oscillator.connect(audioContext.destination);

    oscillator.start(time);
    oscillator.stop(time + duration);
    time += duration;
    time += spaceBetweenSymbols;
  };

  const symbols = morseCode.split('');

  symbols.forEach((symbol) => {

    switch (symbol) {
      case '.':
        playSymbol(dotDuration);
        break;
      case '-':
        playSymbol(dashDuration);
        break;
      case ' ':
        time += spaceBetweenWords;
        break;
      default:
        time += spaceBetweenSymbols;
        break;
    }
  });
  console.log(audioContext)
};

export default playMorseCodeSound;
