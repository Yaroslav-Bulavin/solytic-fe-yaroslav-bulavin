import { mount } from '@vue/test-utils';
import AppInput from '@/elements/AppInput.vue';

describe('AppInput', () => {
  it('renders label and input with correct props', () => {
    const wrapper = mount(AppInput, {
      props: {
        name: 'username',
        label: 'Username',
        placeholder: 'Your user email',
      },
    });

    expect(wrapper.find('label').text()).toBe('Username');
    expect(wrapper.find('input').attributes('name')).toBe('username');
    expect(wrapper.find('input').attributes('placeholder')).toBe('Your user email');
  });

  it('handles input changes and blur events', async () => {
    const wrapper = mount(AppInput, {
      props: {
        name: 'username',
        label: 'Username',
        placeholder: 'Your user email',
      },
    });

    const input = wrapper.find('input');
    await input.setValue('new');

    expect(input.element.value).toBe('new');

    await input.trigger('blur');
    expect(wrapper.find('.app-input__message').exists()).toBeTruthy();
  });

  it('shows error message when input is invalid', async () => {
    const wrapper = mount(AppInput, {
      props: {
        name: 'username',
        label: 'Username',
        placeholder: 'Your user email',
      },
    });

    const input = wrapper.find('input');
    await input.setValue('invalid email');

    expect(input.element.value).toBe('invalid email');

    await input.trigger('blur');
    await input.trigger('blur');

    expect(wrapper.find('.app-input__message').text()).toBeDefined();
  });
});
