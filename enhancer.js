const enhancedLevels = ['PRI', 'DUO', 'TRI', 'TET', 'PEN']

const success = (successItem) => {
  let {enhancement, name} = successItem;
  if (enhancement < 15) {
    enhancement++
  } else if (enhancement === 15) {
    enhancement = 'PRI'
  } else {
    const indexOfEnhanced = enhancedLevels.indexOf(enhancement);
    enhancement = enhancedLevels[indexOfEnhanced + 1]
  }

  name = enhancement <= 15 ? `[+${enhancement}]` + name : `[${enhancement}]` + name;

  return {
    ...successItem,
    enhancement: enhancement,
    name: name
  }
}

const fail = (failItem) => {
  let {enhancement, name, durability} = failItem;

  if(enhancedLevels.includes(enhancement)) {
    const indexOfCurrentEnhancement = enhancedLevels.indexOf(enhancement)
    enhancement === 'PRI' ? enhancement = 15 : enhancement = enhancedLevels[indexOfCurrentEnhancement - 1]
  }

  if(enhancement < 15) {
    durability =durability - 5;
  } else {
    durability =durability - 10;
  };

  name = enhancement <= 15 ? `[+${enhancement}]` + name : `[${enhancement}]` + name;

  return {
    ...failItem,
    durability:durability,
    enhancement: enhancement,
    name: name
  } ;
}
module.exports = {
  success,
  fail,
}