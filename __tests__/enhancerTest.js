const enhancer = require('../enhancer');

// const newWeapon = weapons.map(enhancer.success);
const Weapons = {
  name: 'longsword',
  type: 'weapon',
  durability: 100,
  enhancement: 0,
  }

describe('testing the success method', () => {
  test('item enhancement increases by 1', () => {
    const weapon = Weapons;
    expect(enhancer.success(weapon).enhancement).toEqual(1)
  });

  test('when enhancement goes from 15 to PRI', () => {
    const weapon = Weapons;
    weapon.enhancement = 15;
    expect(enhancer.success(weapon).enhancement).toEqual('PRI')
  });

  test('that enhances goes from one string level to the other', () => {
    const weapon = Weapons;
    weapon.enhancement = 'PRI'
    expect(enhancer.success(weapon).enhancement).toEqual('DUO')
  });

  test('that the name reflects the enhancement level with sub 15 levels', () => {
    const weaponOne = Weapons;
      weaponOne.enhancement = 6;
      console.log(weaponOne);
      expect(enhancer.success(weaponOne).name).toEqual('[+7]longsword');
    })
    
    test('that the name reflects the enhancement level with levels above 15', () => {
      const weapon = Weapons;
      weapon.enhancement = 'DUO'
      expect(enhancer.success(weapon).name).toBe('[TRI]longsword')
  })
})


describe('testing the fail method', () => {
  test('durabilty decreases', () => {
    expect(newArmour[0]).toEqual(armours[5])
    expect(newArmour[1]).toEqual(armours[6])
  });

  test('enhancement decreases', () => {
    expect(newArmour[2]).toEqual(armours[7])
  });
})


describe('testing the repair method', () => {
  test('when an item is returned item goes to 100 durability', () => {
    expect(repairArmour[3]).toEqual(repairArmour[8])
  })
})