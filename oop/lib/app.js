const _knock = Symbol('knock')
 class FamilyHouse {
    constructor (fullName, boysRoom, girlsRoom, masterBedRoom, guestRoom, knock){
      this.name = fullName;
      this.boysRoom=boysRoom;
      this.girlsRoom=girlsRoom;
      this.masterBedRoom=masterBedRoom
      this.GuestRoom = guestRoom;
      this.entrance = 0;
      this.dressing = false;
      this.reason = ['general', 'urgent','critical']
      this[_knock]= knock;
    }
    familyMember(fullName, knock) {
      if(fullName === this.name && knock === this[_knock]){
        this.entrance =1;
        return 'welcome back home';
      }
      else if (fullName === this.name && knock !== this[_knock]) {
        return 'who is that! and who do wish to see'
      }
      else {
        return 'not identified';
      }
    } 
}

export class Rooms extends FamilyHouse {
   constructor (fullName, boysRoom, girlsRoom, masterBedRoom, guestRoom, knock){
     super (fullName, boysRoom, girlsRoom, masterBedRoom, guestRoom, knock)
   }

    familyMember(fullName, knock) {
      if(fullName === this.name && knock === this[_knock]){
        this.entrance = 1;
          console.log(this.name)
        return 'welcome back home';
      }
      else {
        return `pls wait in the ${this.GuestRoom}`;
      }
    }
    enterBoysRoom(fullName, room, boysKnock) {
      
      if(this.entrance === 1) {
        if (fullName === this.name && boysKnock === this[_knock] 
        && room !== this.boysRoom) {
          return `you are heading for the wrong room, this is ${this.boysRoom}`
        }
        else if (fullName === this.name && boysKnock === this[_knock]){
          return` ${this.name} you are welcome to ${this.boysRoom}`;
        }
        else {
          return `you are not allowed in`
        }
      }
      else {
        return `you are not a member of the family, pls wait in the ${this.GuestRoom}`
      }
    }

    
    enterGirlsRoom(fullName,girlsKnock,room) {
      if(this.entrance === 1) {
        if(this.dressing) {
          return `pls check back later curently dressing up`
        }
        
        else if (fullName === this.name && girlsKnock !== 4){
          return `hmmmmm doesnt sound like a member of this room`
        }
       
        else if (fullName === this.name && girlsKnock === 4
          && room !== this.girlsRoom) {
            return `you are heading for the wrong room, this is ${this.girlsRoom}`
          }
          else if (fullName === this.name && girlsKnock === 4){
            return` ${this.name} you are welcome to ${this.boysRoom}`;
          }
          else {
            return `you are not allowed in`
          }
      }
       else {
          return `you are not a member of the family, pls wait in the ${this.GuestRoom}`
        }
    }
    enterMasterBedRoom(fullName, room, masterKnock) {
      if(this.entrance ===1) {
        if(fullName === this.name && room !== this.masterBedRoom) {
          return `head for the right room this the ${this.masterBedRoom} room`
        }
        else if (fullName === this.name && masterKnock !== this[_knock] 
        && room === this.masterBedRoom){
          return `${this.name} you do not have access to this room`
        }
        else if (fullName === this.name && room === this.masterBedRoom 
        && masterKnock === this[_knock]){
          return `welcome to your room ${this.name}`
        }
        else {
          return `you are not allowed in here`
        }
      }
      else{
        return `you are not a family member pls wait in the ${this.GuestRoom}`
      }
    }
    stateReason (reason){
      if(typeof reason === String){
        if (reason) {
          let myReason = '';
          for(let i = 0; i < this.reason.length; i++){
            if(reason === this.reason[0]) {
              myReason = `hold on! would call you soon`;
            }
            if(reason === this.reason[1]) {
              myReason = `come in! whats the issue?`;
             }
            if(reason === this.reason[2]) {
               myReason = `come in quicly dear! whats the issue??`
             }
          }
          return myReason;
        }
        else {
          return `There is no reason.... can i please just come in!`
        }
      }
      else {
        return `reason should be in word format!`
      }
    }
    isDressing() {
      this.dressing = true;
    }
}
export class NotAMember extends Rooms {
  constructor (fullName, boysRoom, girlsRoom,masterBedRoom, guestRoom, knock){
    super (fullName, boysRoom, girlsRoom, masterBedRoom, guestRoom, knock)
  }
    enterMasterBedRoom(fullName, room, masterKnock) {
      if(this.entrance ===1) {
        if(fullName === this.name && room !== this.masterBedRoom) {
          return `head for the right room this the ${this.masterBedRoom} room`
        }
        else if (fullName === this.name && masterKnock !== this[_knock] 
        && room === this.masterBedRoom){
          return `${this.name} you do not have access to this room`
        }
        else if (fullName === this.name && room === this.masterBedRoom 
        && masterKnock === this[_knock]){
          return `welcome to your room ${this.name}`
        }
        else {
          return `you are not allowed in here`
        }
      }
      else{
        return `you are not a family member pls wait in the ${this.GuestRoom}`
      }
  }
    enterGuestRoom(fullName, room){
        if(fullName === this.name && room === this.GuestRoom){
          return `welcome ${this.name}, feel at home.`
       }
        else if (fullName === this.name && room !== this.GuestRoom){
          return `pls note that you are a guest and you are supposed to in the ${this.GuestRoom}`
        }
       else {
         return `Pls identify yourself and your purpose`
       }
      
    }
}

export default FamilyHouse;