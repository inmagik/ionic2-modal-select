import {Page, NavController} from 'ionic/ionic';
import {ModalSelect} from '../../components/modal-select/modal-select';


@Page({
    templateUrl: 'build/pages/home/home.html',
    directives: [ModalSelect]
})
export class HomePage {
  constructor(nav: NavController) {
    this.selectables = [1,2,3];
  }

}
