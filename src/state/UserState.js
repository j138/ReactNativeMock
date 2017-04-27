import { observable } from 'mobx';

class UserState {
  id = Math.random();
  @observable uid = '';
  @observable userInfo = {};
}

export default UserState;
