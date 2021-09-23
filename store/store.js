import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'
import pokemon from './modules/pokemon'
let secure = false
if(process.env.NODE_ENV == 'production') {
	secure = true
}
export const store = new Vuex.Store({
	plugins : [createPersistedState({
		storage : {
			getItem : key => Cookies.get(key),
			setItem : (key, value) => Cookies.set(key, value, { expires : 3,
				secure  : secure }),
			removeItem : key => Cookies.remove(key)
		}
	}),
	],
	modules : {
		pokemon
	}
})