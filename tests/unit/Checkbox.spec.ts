import { shallowMount, Wrapper } from '@vue/test-utils';
import Checkbox from '@/components/Checkbox.vue';

describe('Checkbox.vue', () => {
  const propsData: {
    item: FilterOption,
    value: string[],
  } = {
    item: {
      code: '3',
      value: 'three',
    },
    value: [],
  };

  // @ts-ignore
  let wrapper: Wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Checkbox, {
      propsData,
    });
  });

  it('принимает проп `item`', () => {
    expect(wrapper.find('label').text()).toContain(propsData.item.value);

    expect(wrapper.find('input').attributes('id')).toMatch(propsData.item.code);

    expect(wrapper.find('input').attributes('value')).toMatch(propsData.item.code);
  });

  it('при нажатии эмитит input', () => {
    wrapper.trigger('click');

    expect(wrapper.emitted('input')[0][0]).toStrictEqual([propsData.item.code]);
  });
});
