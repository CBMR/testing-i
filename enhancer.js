const enhancedLevels = ['PRI', 'DUO', 'TRI', 'TET', 'PEN']

const success = (successItem) => {
  let successEnhancement = successItem.enhancement;
  let successName = successItem.name;
  if (successEnhancement < 15) {
    successEnhancement++
  } else if (successEnhancement === 15) {
    successEnhancement = 'PRI'
  } else {
    const indexOfEnhanced = enhancedLevels.indexOf(successEnhancement);
    successEnhancement = enhancedLevels[indexOfEnhanced + 1]
  }

  successName = successEnhancement <= 15 ? `[+${successEnhancement}]` + successName : `[${successEnhancement}]` + successName;

  return {
    ...successItem,
    enhancement: successEnhancement,
    name: successName
  }
}

const fail = (failItem) => {
  let failEnhancement = failItem.enhancement;
  let failName = failItem.name;
  let failDurability = failItem.durability;

  if(enhancedLevels.includes(failEnhancement)) {
    const indexOfCurrentEnhancement = enhancedLevels.indexOf(failEnhancement)
    failEnhancement === 'PRI' ? failEnhancement = 15 : failEnhancement = enhancedLevels[indexOfCurrentEnhancement - 1]
  }

  if(failEnhancement < 15) {
    failDurability = failDurability - 5;
  } else {
    failDurability = failDurability - 10;
  };

  failName = failEnhancement <= 15 ? `[+${failEnhancement}]` + failName : `[${failEnhancement}]` + failName;

  return {
    ...failItem,
    durability: failDurability,
    enhancement: failEnhancement,
    name: failName
  } ;
}
module.exports = {
  success,
  fail,
}