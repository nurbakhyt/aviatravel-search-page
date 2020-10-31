import { shallowMount } from '@vue/test-utils';
import Container from '@/components/Container.vue';

describe('Container.vue', () => {
  it('рендерит переданные данные через слот', () => {
    const msg = 'Container content';
    const wrapper = shallowMount(Container, {
      slots: { default: msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
