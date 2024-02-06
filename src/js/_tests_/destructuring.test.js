// прописать import все файлы JS
import characterInformationOutput from '../Destructuring';
// начать тесты

test('проверка на наличие атак в объекте', () => {
  const character = {
    name: 'Лучник',
    fdfdf: [],
  };
  expect(() => {
    characterInformationOutput(character);
  }).toThrow();
});

test('Обработка атак', () => {
  const character = {
    name: 'Лучник',
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };
  const resFunc = characterInformationOutput(character);
  expect(resFunc).toEqual([
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ]);
});
