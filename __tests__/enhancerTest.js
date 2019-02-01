const enhancer = require('../enhancer');

// const newWeapon = weapons.map(enhancer.success);
const Weapons = {
  name: 'longsword',
  type: 'weapon',
  durability: 100,
  enhancement: 0,
  }

const Armor = {
  name: 'japanese',
  type: 'armour',
  durability: 100,
  enhancement: 0,
}

describe('testing the success method', () => {
  describe('testing that the enhancement increases by one', () => {
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
  })

  describe('tests that the name reflects the new enhancement level', () => {
    test('that the name reflects the enhancement level with sub 15 levels', () => {
      const weaponOne = Weapons;
        weaponOne.enhancement = 6;
        expect(enhancer.success(weaponOne).name).toEqual('[+7]longsword');
      })
      
      test('that the name reflects the enhancement level with levels above 15', () => {
        const weapon = Weapons;
        weapon.enhancement = 'DUO'
        expect(enhancer.success(weapon).name).toBe('[TRI]longsword')
      })
    })
  })

describe('testing the fail method', () => {
  describe('testing that the durability decreases depening on enhancement level', () => {
    test('durabilty decreases by 5 when enhancement is less than 15', () => {
      const armor = Armor;
      armor.enhancement = 8
      expect(enhancer.fail(armor).durability).toBe(95)
    });
  
    test('durability decreeses by 10 when enhancement is 15', () =>{
      const armor = Armor;
      armor.enhancement = 15;
      expect(enhancer.fail(armor).durability).toBe(90)
    })
  
    test('durabilty decreases by 10 when enhancement is above 15', () =>{
      const armor = Armor;
      armor.enhancement = 'TRI';
      expect(enhancer.fail(armor).durability).toBe(90)
    })
  });

  describe('testing that enhancement decreases when on a certain enhancement level', () => {
    test('the ehancement does not decrease when enhancement is less or equal to 15', () => {
      const armor = Armor;
      armor.enhancement = 9;
      expect(enhancer.fail(armor).enhancement).toBe(9);
    });

    test('the enhancement does not decrease when ehancement is PRI', () => {
      const armor = Armor;
      armor.enhancement = 'PRI'
      expect(enhancer.fail(armor).enhancement).toBe('PRI');
    })

    test('the ehancement decreases when the enhancement is at 16 (DUO) or above', () => {
      const armor = Armor;
      armor.enhancement = 'TET';
      expect(enhancer.fail(armor).enhancement).toBe('TRI');
    })
  })
})


describe('testing the repair method', () => {
  test('when an item is returned item goes to 100 durability', () => {
    const armor = Armor;
    armor.durability = 45;
    expect(enhancer.repair(armor).durability).toBe(100);
  })
})