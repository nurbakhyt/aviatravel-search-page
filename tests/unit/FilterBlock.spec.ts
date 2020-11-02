import { shallowMount } from '@vue/test-utils';
import FilterBlock from '@/components/FilterBlock.vue';

describe('FilterBlock.vue', () => {
  const title = 'Filters';

  it('принимает проп title', () => {
    const wrapper = shallowMount(FilterBlock, {
      propsData: { title },
    });

    expect(wrapper.text()).toMatch(title);
  });

  it('имеет слот `reset-button`', () => {
    const wrapper = shallowMount(FilterBlock, {
      propsData: { title },
      slots: {
        'reset-button': '<button>Reset</button>',
      },
    });

    expect(wrapper.find('button').exists()).toBeTruthy();
  });

  it('имеет дефолтный слот', () => {
    const wrapper = shallowMount(FilterBlock, {
      propsData: { title },
      slots: {
        default: '<button>Reset</button>',
      },
    });

    expect(wrapper.find('button').exists()).toBeTruthy();
  });
});
