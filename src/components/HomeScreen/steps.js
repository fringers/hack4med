import React from 'react';

const steps = [
  {
    content:
      'Cześć, widzę, że nowym użytkownikiem, poprowadzę Cię po aplikacji.',
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
    content: 'Wieć wystarczy że klikniesz wyślij',
  },
  {
    content: (
      <div>
        I aplikacja zwróci jeden z trzech statusów
        <div
          style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            marginTop: 8,
          }}
        >
          <img
            src="ok2.png"
            width={40}
            height={40}
            style={{ margin: 4, marginRight: 12 }}
          />{' '}
          wszystko ok
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
          }}
        >
          <img
            src="warning1.png"
            width={48}
            height={48}
            style={{ marginRight: 8 }}
          />{' '}
          pacjent może wymagać hospitalizacji
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
          }}
        >
          <img
            src="error1.png"
            width={48}
            height={48}
            style={{ marginRight: 8 }}
          />{' '}
          pacjent w stanie zagrożenia
        </div>
      </div>
    ),
  },
];

export default steps;
