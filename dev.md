




### router

1. 动态router问题 ， link( route ) diloag ( router ) , page的打开方式可以自行选择

2.store 共享分类数据

3.Compoents  访问Store 


====================

vuex

##状态树
State {}

## 突变 ，纯函数 直接改变原 State , 
Mutation  (State , ...args) => {}



## 分发action


Context {
	State, Commit, RootState
}

Action ( Context , ...args) => { // commit('xxxx')  }
Action ( {State, Commit, RootState} , ...args) => { // commit('xxxx')  }


Dispatch （ ActionName , ...args ）=> {}  
Dispatch （ {ActionName , ...args} ）=> {}  


Store {
	State ,
	Mutation ,
	Getter ,
	Dispatch 
}


### 异步action ， 无回调

actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // 等待 actionA 完成
    commit('gotOtherData', await getOtherData())
  }
}





