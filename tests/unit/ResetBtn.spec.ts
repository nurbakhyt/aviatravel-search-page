import { shallowMount } from '@vue/test-utils';
import ResetBtn from '@/components/ResetBtn.vue';

describe('ResetBtn.vue', () => {
  it('рендерит переданные через слот данные', () => {
    const label = 'Reset';

    const wrapper = shallowMount(ResetBtn, {
      slots: { default: label },
    });

    expect(wrapper.text()).toMatch(label);
  });

  it('по умолчанию показывает svg', () => {
    const wrapper = shallowMount(ResetBtn);

    expect(wrapper.find('svg').exists()).toBeTruthy();
  });

  it('принимает атрибут', () => {
    const title = 'Reset all filters';

    const wrapper = shallowMount(ResetBtn, {
      attrs: { title },
    });

    expect(wrapper.attributes('title')).toMatch(title);
  });

  it('вызывает click при нажатии', () => {
    const onClick = jest.fn();

    const wrapper = shallowMount(ResetBtn, {
      listeners: {
        click: onClick,
      },
    });

    wrapper.trigger('click');
    expect(onClick).toHaveBeenCalled();
  });
});
