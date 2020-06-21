import MyButton from '../index.js';
import { mount } from '@vue/test-utils';

describe('Button', () => {
  it('create primary button', () => {
    const wrapper = mount({
      render: h => h(MyButton),
    });
    expect(wrapper.contains('.my-button')).toBe(true);
  });
});
