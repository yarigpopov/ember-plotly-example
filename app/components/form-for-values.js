import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class FormForValuesComponent extends Component {
  @tracked data = {value:200};
}
