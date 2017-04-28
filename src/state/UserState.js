import { observable } from 'mobx';

class UserState {
  id = Math.random();
  @observable uid = '';
  @observable userInfo = {};
  @observable inc = 0;

  increment() {
    this.inc += 1;
    return this.inc;
  }
}

export default UserState;
