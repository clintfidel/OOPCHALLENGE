import chai from 'chai'
const assert = chai.assert

import { FamilyHouse, Rooms, NotAMember } from '../lib/app'

let myHouse = new FamilyHouse('debbyNkwocha', 'BoysRoom', 'GirlsRoom', 'mumAndDads', 'visitorsRoom', 4)

describe('Test methods in FamilyHouse class', () => {
  describe('A familyMember', () => {
    it(" should return 'welcome back home' for familyMember() ", () => {
      assert(myHouse.familyMember(), 'welcome back home')
    });
    it("should return 'who is that! and who do wish to see'", () => {
      const notMember = myHouse.familyMember('debbyNkwocha', 3)
      assert.equal(notMember, 'who is that! and who do you wish to see?')
    });
    it("should return 'not identified'", () => {
      const notRecgonized = myHouse.familyMember('debby', 3)
      assert.equal(notRecgonized, 'not identified')
    });
  });
});

describe('Test method in Rooms class', () => {
  describe('', () => {
    it('', () => {
      assert()
    })
  })
})
