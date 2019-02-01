const enhancer = require('../enhancer');
const { weapons, armours } = require('../items')

const newWeapon = weapons.map(enhancer.success);


describe('testing the success method', () => {
  test('item enhancement increases by 1', () => {
    expect(newWeapon[0]).toEqual(weapons[8])
    expect(newWeapon[1]).toEqual(weapons[9])
    expect(newWeapon[2]).toEqual(weapons[10])
    expect(newWeapon[3]).toEqual(weapons[11])
    expect(newWeapon[4]).toEqual(weapons[12])
    expect(newWeapon[5]).toEqual(weapons[13])
    expect(newWeapon[6]).toEqual(weapons[14])
  });
})

const newArmour = armours.map(enhancer.fail)

describe('testing the fail method', () => {
  test('durabilty decreases', () => {
    expect(newArmour[0]).toEqual(armours[5])
    expect(newArmour[1]).toEqual(armours[6])
  });

  test('enhancement decreases', () => {
    expect(newArmour[2]).toEqual(armours[7])
  });
})