
const weapons = [
  //test cases for weapons
  {
    name: 'longsword',
    type: 'weapon',
    durability: 100,
    enhancement: 0,
  },

  {
    name: 'kunai',
    type: 'weapon',
    durability: 100,
    enhancement: 7,
  },
  
  {
    name: 'kama',
    type: 'weapon',
    durability: 100,
    enhancement: 15,
  },

  {
    name: 'kama',
    type: 'weapon',
    durability: 100,
    enhancement: 'PRI',
  },

  {
    name: 'kama',
    type: 'weapon',
    durability: 100,
    enhancement: 'DUO',
  },

  {
    name: 'kama',
    type: 'weapon',
    durability: 100,
    enhancement: 'TRI',
  },

  {
    name: 'kama',
    type: 'weapon',
    durability: 100,
    enhancement: 'TET',
  },

  {
    name: 'kama',
    type: 'weapon',
    durability: 100,
    enhancement: 'PEN',
  },

  //test cases for the name
  {
    name: '[+1]longsword',
    type: 'weapon',
    durability: 100,
    enhancement: 1,
  },
  
  {
    name: '[+8]kunai',
    type: 'weapon',
    durability: 100,
    enhancement: 8,
  },
  {
    name: '[PRI]kama',
    type: 'weapon',
    durability: 100,
    enhancement: 'PRI',
  },

  {
    name: '[DUO]kama',
    type: 'weapon',
    durability: 100,
    enhancement: 'DUO',
  },

  {
    name: '[TRI]kama',
    type: 'weapon',
    durability: 100,
    enhancement: 'TRI',
  },

  {
    name: '[TET]kama',
    type: 'weapon',
    durability: 100,
    enhancement: 'TET',
  },

  {
    name: '[PEN]kama',
    type: 'weapon',
    durability: 100,
    enhancement: 'PEN',
  },
]

const armours = [
  //expects
  {
    name: 'japanese',
    type: 'armour',
    durability: 100,
    enhancement: 9,
  },
  
  {
    name: 'roman',
    type: 'armour',
    durability: 100,
    enhancement: 15,
  },
  
  {
    name: 'egyptian',
    type: 'armour',
    durability: 100,
    enhancement: 'TRI',
  },
  
  {
    name: 'nordic',
    type: 'armour',
    durability: 20,
    enhancement: 7,
  },

  {
    name: 'chinese',
    type: 'armour',
    durability: 5,
    enhancement: 9,
  },

  //toEqual
  {
    name: '[+9]japanese',
    type: 'armour',
    durability: 95,
    enhancement: 9,
  },
  
  {
    name: '[+15]roman',
    type: 'armour',
    durability: 90,
    enhancement: 15,
  },
  {
    name: '[DUO]egyptian',
    type: 'armour',
    durability: 90,
    enhancement: 'DUO',
  },
]

module.exports = {
  weapons,
  armours
}