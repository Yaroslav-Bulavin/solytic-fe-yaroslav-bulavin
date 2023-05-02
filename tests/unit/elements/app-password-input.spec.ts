import { mount } from '@vue/test-utils';
import AppPasswordInput from '@/elements/AppPasswordInput.vue';

describe('AppPasswordInput', () => {
  it('renders the label prop', () => {
    const label = 'Password';
    const wrapper = mount(AppPasswordInput, {
      props: {
        label,
        name: 'password',
      },
    });
    expect(wrapper.find('.app-password-input__label').text()).toBe(label);
  });

  it('toggles input type between password and text', async () => {
    const wrapper = mount(AppPasswordInput, {
      props: {
        name: 'password',
      },
    });
    const button = wrapper.find('.app-password-input__button');
    const input = wrapper.find('.app-password-input__input');

    expect(input.attributes('type')).toBe('password');

    await button.trigger('click');
    expect(input.attributes('type')).toBe('text');

    await button.trigger('click');
    expect(input.attributes('type')).toBe('password');
  });

  it('shows error message when errorMessage prop is set', async () => {
    const errorMessage = 'Invalid password';
    const wrapper = mount(AppPasswordInput, {
      props: {
        errorMessage,
        name: 'password',
      },
    });
    expect(wrapper.find('.app-password-input__message').text()).toBeDefined();
  });
});
