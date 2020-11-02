import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import App from '@/App.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App.vue', () => {
  it('вызывает `loadAll` после создания компонента', () => {
    const actions = {
      loadAll: jest.fn(),
    };

    const store = new Vuex.Store({ actions });

    shallowMount(App, {
      store,
      localVue,
    });

    expect(actions.loadAll).toHaveBeenCalled();
  });
});
