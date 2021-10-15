let restaurant = {
  name: "IB",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatLeft;
  },

  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize;
  },

  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize;
  },
};

restaurant.seatParty(73);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(10);
console.log(restaurant.checkAvailability(4));
