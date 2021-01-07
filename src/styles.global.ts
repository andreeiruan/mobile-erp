interface ThemeProtocol {
  backgroundLinear: string[]
  backgroundBox: string
  backgroundModal: string
  primaryColorLinear: string[]
  secondaryColorLinear: string[]

  inputBackgroundColor: string
  primaryColor: string
  secondaryColor: string

  primaryFontColor: string
  titleFontColor: string
  secondaryFontColor: string
  highlightedFontColor: string
  errorFontColor: string

  menuColor: string
  menuActiveFontColor: string
}

const darkTheme: ThemeProtocol = {
  backgroundLinear: ['#363645', '#30303e', '#292935', '#23232d'],
  backgroundBox: '#363645',
  backgroundModal: '#363645',
  primaryColorLinear: ['#4BB3F8', '#33A4EF', '#2092DD', '#0676C0'],
  secondaryColorLinear: ['#E0E0E0', '#F8F3F3', '#E0E0E0', '#E2E2E2'],

  inputBackgroundColor: '#FFF',
  primaryColor: '#33A4EF',
  secondaryColor: '#347497',

  primaryFontColor: '#b9b9be',
  titleFontColor: '#0676C0',
  secondaryFontColor: '#393948',
  highlightedFontColor: '#FEFEFE',
  errorFontColor: '#C81C1C',

  menuColor: '#393948',
  menuActiveFontColor: '#0676C0',
};

const lightTheme: ThemeProtocol = {
  backgroundLinear: ['#fff', '#fff', '#fff', '#fff'],
  backgroundBox: '#efefef',
  backgroundModal: '#EFEFEF',
  primaryColorLinear: ['#4BB3F8', '#33A4EF', '#2092DD', '#0676C0'],
  secondaryColorLinear: ['#E0E0E0', '#F8F3F3', '#E0E0E0', '#E2E2E2'],

  inputBackgroundColor: '#FFF',
  primaryColor: '#33A4EF',
  secondaryColor: '#347497',

  primaryFontColor: '#555555',
  titleFontColor: '#0676C0',
  secondaryFontColor: '#393948',
  highlightedFontColor: '#FFF',
  errorFontColor: '#C81C1C',

  menuColor: '#FFFF',
  menuActiveFontColor: '#0676C0',
};

const colors = lightTheme;

export { colors, darkTheme, lightTheme };
