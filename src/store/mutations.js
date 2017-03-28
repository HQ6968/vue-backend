import {SAVE_CATEGORYS} from './mutation-types'
export default {
	[SAVE_CATEGORYS](state,categorys){
		state.categorys = categorys	
	}
}