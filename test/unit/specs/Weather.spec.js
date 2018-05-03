import Vuex from 'vuex'
import { createLocalVue, shallow } from 'vue-test-utils'
import Weather from '@/components/Weather'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Weather.vue', () => {
  let actions, store, getters

  beforeEach(() => {
    actions = {
      getData: jest.fn()
    }
    getters = {
      getCards: jest.fn(),
      isLoading: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      actions,
      getters
    })
  })

  it('should call isLoading when it is created', () => {
    shallow(Weather, {
      localVue,
      store
    })
    expect(getters.isLoading).toHaveBeenCalled()
  })

  it('should call getData when it is created', () => {
    shallow(Weather, {
      localVue,
      store
    })
    expect(actions.getData).toHaveBeenCalled()
  })

  it('should render the logo', () => {
    const el = shallow(Weather, {
      localVue,
      store
    })
    const img = el.find('img')

    expect(img.element.alt).toEqual('Weather Logo')
  })
})
