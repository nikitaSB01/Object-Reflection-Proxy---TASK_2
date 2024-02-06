function characterInformationOutput(characterObject) {
  if (!characterObject.special) {
    throw new Error('Отсутствуют атаки');
  }
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

//  characterInformationOutput(character);

export default characterInformationOutput;
