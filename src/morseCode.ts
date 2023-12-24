class MorseCode {
    public rosettaStone: { [key: string]: string } = {
        a: '.-',
        b: '-...',
        c: '-.-.',
        d: '-..',
        e: '.',
        f: '..-.',
        g: '--.',
        h: '....',
        i: '..',
        j: '.---',
        k: '-.-',
        l: '.-..',
        m: '--',
        n: '-.',
        o: '---',
        p: '.--.',
        q: '--.-',
        r: '.-.',
        s: '...',
        t: '-',
        u: '..-',
        v: '...-',
        w: '.--',
        x: '-..-',
        y: '-.--',
        z: '--..',
        0: '-----',
        1: '.----',
        2: '..---',
        3: '...--',
        4: '....-',
        5: '.....',
        6: '-....',
        7: '--...',
        8: '---..',
        9: '----.',
        '.': '.-.-.-',
        ',': '--..--',
        '?': '..--..',
        '!': '-.-.--',
        '`': '.----.',
        '/': '-..-.',
        '&': '.-...',
        ':': '---...',
        ';': '-.-.-.',
        '=': '-...-',
        '+': '.-.-.',
        '-': '-....-',
        '(': '-.--.',
        ')': '-.--.-',
        '_': '..--.-',
        '"': '.-..-.',
        '$': '...-..-',
        '@': '.--.-.',
        '': ''
    };

    public reverseRosettaStone: { [key: string]: string } = this.createReverseRosettaStone(this.rosettaStone);

    private createReverseRosettaStone(original: { [key: string]: string }): { [key: string]: string } {
        return Object.fromEntries(Object.entries(original).map(([key, value]) => [value, key]));
    }

    public translateToMorseCode = (toTranslate: string): string => {
        return toTranslate
            .toLowerCase()
            .split('')
            .map((letter) => this.rosettaStone[letter] ?? letter)
            .join(' ')
            .replace(/\s+/g, ' ');
    };


    public translateFromMorseCode = (morseCode: string): string => {
        return morseCode.split(' ')
            .map((char) => {
                const curr = this.reverseRosettaStone[char];
                console.log(curr);
                return curr ?? '#';
            })
            .join('').trim();
    };
}

export const morseCodeTranslator = new MorseCode();
