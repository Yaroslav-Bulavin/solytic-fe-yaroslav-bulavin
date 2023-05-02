import { mount } from '@vue/test-utils';
import AppButton from '@/elements/AppButton.vue';

describe('AppButton', () => {
  it('renders a button element with default type', () => {
    const wrapper = mount(AppButton);
    expect(wrapper.find('button').attributes('type')).toBe('button');
  });

  it('renders a button element with given type', () => {
    const wrapper = mount(AppButton, {
      props: { type: 'submit' },
    });
    expect(wrapper.find('button').attributes('type')).toBe('submit');
  });

  it('renders a button element with default disabled state', () => {
    const wrapper = mount(AppButton);
    expect(wrapper.find('button').attributes('disabled')).toBeUndefined();
  });

  it('renders a disabled button element', () => {
    const wrapper = mount(AppButton, {
      props: { disabled: true },
    });
    expect(wrapper.find('button').attributes('disabled')).toBeDefined();
  });

  it('renders slot content', () => {
    const wrapper = mount(AppButton, {
      slots: { default: 'Click me!' },
    });
    expect(wrapper.text()).toBe('Click me!');
  });

  it('emits a click event when clicked', async () => {
    const wrapper = mount(AppButton);
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });
});
