import Vuex from 'vuex'
import { createLocalVue, shallow, mount } from '@vue/test-utils'
import Card from '@/components/Card'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Card.vue', () => {
  let store, getters, computed, propsData

  beforeEach(() => {
    getters = {
      getUpdatedAtTime: jest.fn()
    }
    computed = {
      getTemperature: jest.fn(),
      getHumidity: jest.fn(),
      getPressure: jest.fn(),
      isCold: jest.fn(),
      isMedium: jest.fn(),
      isHot: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      getters,
      computed
    })
    propsData = {
      showHumidityAndPressure: true,
      card: {
        coord: {
          lon: -51.72,
          lat: 64.18
        },
        sys: {
          type: 0,
          id: 0,
          message: 0.0071,
          country: 'GL',
          sunrise: 1525330311,
          sunset: 1525391880
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        main: {
          temp: -11.29,
          pressure: 996.43,
          humidity: 100,
          temp_min: -11.29,
          temp_max: -11.29,
          sea_level: 1013.41,
          grnd_level: 996.43
        },
        wind: {
          speed: 2.42,
          deg: 41.5047
        },
        clouds: {
          all: 0
        },
        dt: 1525310450,
        id: 3421319,
        name: 'Nuuk'
      }
    }
  })

  it('should show the name of the city', () => {
    const el = shallow(Card, {
      localVue,
      store,
      propsData
    })
    const name = el.find('.card__title').text()
    expect(name).toEqual(
      propsData.card.name + ', ' + propsData.card.sys.country
    )
  })

  it('should show the temperature of the city', () => {
    const el = shallow(Card, {
      localVue,
      store,
      propsData
    })
    expect(el.vm.getTemperature).toBe(Math.round(-11.29))
  })

  it('show humidity and pressure if it is true', () => {
    const el = mount(Card, {
      localVue,
      store,
      propsData
    })
    expect(el.find('.card__humidity-and-pressure').isVisible()).toBe(true)
  })

  it('should not show humidity and pressure if it is false', () => {
    const el = mount(Card, {
      localVue,
      store,
      propsData
    })
    el.setProps({ showHumidityAndPressure: false })
    expect(el.find('.card__humidity-and-pressure').exists()).toBe(false)
  })

  it('should show updated at', () => {
    shallow(Card, {
      localVue,
      store,
      propsData
    })
    expect(getters.getUpdatedAtTime).toHaveBeenCalled()
  })

  it('should show blue temperature if it is equal or lower than 5', () => {
    const el = mount(Card, {
      localVue,
      store,
      propsData
    })
    el.setProps({
      card: {
        coord: {
          lon: -51.72,
          lat: 64.18
        },
        sys: {
          type: 0,
          id: 0,
          message: 0.0071,
          country: 'GL',
          sunrise: 1525330311,
          sunset: 1525391880
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        main: {
          temp: 4,
          pressure: 996.43,
          humidity: 100,
          temp_min: -11.29,
          temp_max: -11.29,
          sea_level: 1013.41,
          grnd_level: 996.43
        },
        wind: {
          speed: 2.42,
          deg: 41.5047
        },
        clouds: {
          all: 0
        },
        dt: 1525310450,
        id: 3421319,
        name: 'Nuuk'
      }
    })
    expect(el.find('.card__temperature--cold').exists()).toBe(true)
  })

  it('should show medium temperature if it is higher than 6 and lower than 25', () => {
    const el = mount(Card, {
      localVue,
      store,
      propsData
    })
    el.setProps({
      card: {
        coord: {
          lon: -51.72,
          lat: 64.18
        },
        sys: {
          type: 0,
          id: 0,
          message: 0.0071,
          country: 'GL',
          sunrise: 1525330311,
          sunset: 1525391880
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        main: {
          temp: 22,
          pressure: 996.43,
          humidity: 100,
          temp_min: -11.29,
          temp_max: -11.29,
          sea_level: 1013.41,
          grnd_level: 996.43
        },
        wind: {
          speed: 2.42,
          deg: 41.5047
        },
        clouds: {
          all: 0
        },
        dt: 1525310450,
        id: 3421319,
        name: 'Nuuk'
      }
    })
    expect(el.find('.card__temperature--medium').exists()).toBe(true)
  })

  it('should show hot temperature if it is higher than 26', () => {
    const el = mount(Card, {
      localVue,
      store,
      propsData
    })
    el.setProps({
      card: {
        coord: {
          lon: -51.72,
          lat: 64.18
        },
        sys: {
          type: 0,
          id: 0,
          message: 0.0071,
          country: 'GL',
          sunrise: 1525330311,
          sunset: 1525391880
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n'
          }
        ],
        main: {
          temp: 30,
          pressure: 996.43,
          humidity: 100,
          temp_min: -11.29,
          temp_max: -11.29,
          sea_level: 1013.41,
          grnd_level: 996.43
        },
        wind: {
          speed: 2.42,
          deg: 41.5047
        },
        clouds: {
          all: 0
        },
        dt: 1525310450,
        id: 3421319,
        name: 'Nuuk'
      }
    })
    expect(el.find('.card__temperature--hot').exists()).toBe(true)
  })
})
