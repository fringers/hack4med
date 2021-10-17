const steps = [
  {
    content:
      'Cześć, widzę, że jesteś nowym użytkownikiem, poprowadzę Cię przez aplikację, to zajmie tylko chwilę!',
  },
  {
    selector: '[data-tour="two"]',
    content:
      'Aplikacja sprawdza czy na podstawie zebranych danych stan pacjenta jest zagrożony',
  },
  {
    selector: '[data-tour="three"]',
    content: 'Wypełniliśmy już dla Ciebie formularz przykładowymi danymi!',
  },
  {
    selector: '[data-tour="four"]',
    content: 'Więc wystarczy że klikniesz sprawdź, spróbuj',
  },
];

export default steps;
