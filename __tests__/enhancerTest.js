const enhancer = require('../enhancer');
const { weapons, armours } = require('../items')

const newWeapon = weapons.map(
  enhancer.success);

describe('testing the success method', () => {
  test('item enhancement increases by 1', () => {
      expect(newWeapon[0]).toEqual(weapons[8])
      expect(newWeapon[1]).toEqual(weapons[9])
      expect(newWeapon[2]).toEqual(weapons[3])
      expect(newWeapon[3]).toEqual(weapons[4])
      expect(newWeapon[4]).toEqual(weapons[5])
      expect(newWeapon[5]).toEqual(weapons[6])
      expect(newWeapon[6]).toEqual(weapons[7])
  })
})