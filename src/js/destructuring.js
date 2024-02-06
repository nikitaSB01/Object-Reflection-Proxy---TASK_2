function characterInformationOutput(characterObject) {
  const result = [];
  for (let i = 0; i < characterObject.special.length; i += 1) {
    result.push({});
    for (const [key, value] of Object.entries(characterObject.special[i])) {
      result[i][`${key}`] = value;
    }
    if (!characterObject.special[i].description) {
      result[i].description = 'Описание недоступно';
    }
  }
  return result;
}
/* const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
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
    {
      id: 34344,
      name: 'Нокаутирующий ',
      icon: 'http://...',
    },
    {
      id: 8909890,
      name: ' удар',
      icon: 'http://...',
      description: 'двойной урон',
    },
  ],
}; */
//  characterInformationOutput(character);

export default characterInformationOutput;
