type Theme = {
    accent: string;

    surface: string;
    surfaceVariant: string;

    text: string;
    textStrong: string;
    textWeak: string;
};

const lightTheme: Theme = {
    accent: '#286c93',

    surface: '#ebebeb',
    surfaceVariant: '#dedede',

    text: '#3c3c3c',
    textStrong: '#2c2c2c',
    textWeak: '#7c7c7c'
};

const darkTheme: Theme = {
    accent: '#286c93',

    surface: '#3c3c3c',
    surfaceVariant: '#323232',

    text: '#dbdbdb',
    textStrong: '#ebebeb',
    textWeak: '#cbcbcb'
};

export type { Theme };
export { lightTheme, darkTheme };
