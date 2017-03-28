import co from 'co'
import Vue from 'vue'
import {SAVE_CATEGORYS} from './mutation-types'


export const loadCategorys = ({commit}) => {
	co(function* (){
		let cats = yield Vue.http.get('/open-php-api/cms/cats')
		commit('SAVE_CATEGORYS',cats);
	})
}


export const loadCategorys1 = function* ({commit},arg){
	let cats = yield Vue.http.get('/open-php-api/cms/cats')
	console.log(arg);
	commit('SAVE_CATEGORYS',cats);
	return cats
}
