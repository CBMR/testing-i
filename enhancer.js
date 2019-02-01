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
    enhancement === 'PRI' ? null : enhancement = enhancedLevels[indexOfCurrentEnhancement - 1]
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

const repair = (repairItem) => {
  let {enhancement, name, durability} = repairItem;

  name = enhancement <= 15 ? `[+${enhancement}]` + name : `[${enhancement}]` + name;
  durability = 100;

  return {
    ...repairItem,
    name: name,
    durability: durability
  }
}
module.exports = {
  success,
  fail,
  repair
}