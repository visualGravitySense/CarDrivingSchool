import axios from 'axios'

export const state = () => ({
  postsLoaded: [],
  certificatesLoaded: [],
  // token: null
})

export const mutations = {
   addPost (state, promotion) {
     console.log(promotion)
     state.postsLoaded.push(promotion)
   },
   addGift (state, certificate) {
     console.log(certificate)
     state.certificatesLoaded.push(certificate)
   },

  setPosts (state, promotions) {
    state.postsLoaded = promotions
  },
  setCertificates (state, certificates) {
    state.certificatesLoaded = certificates
  },
  //
  // editPost (state, categoryEdit) {
  //   const postIndex = state.postsLoaded.findIndex(category => category.id === categoryEdit.id)
  //   state.postsLoaded[postIndex] = categoryEdit
  // },
  // setToken (state, token) {
  //   state.token = token
  // }
}

export const actions = {
  nuxtServerInit ({commit}, contex) {
    return axios.get('https://viktoria-f5e86-default-rtdb.europe-west1.firebasedatabase.app/promotions.json')
      .then(res => {
        const postsArray = []
        for (let key in res.data) {
          postsArray.push( { ...res.data[key], id: key } )
        }
        // Res
        commit('setPosts', postsArray)
      })
      .catch(e => console.log(e))
  },

  //
  // addUser ({commit}, user) {
  //
  // },
  //
  addPost ({commit}, promotion) {
    console.log(promotion)
     return axios.post('https://viktoria-f5e86-default-rtdb.europe-west1.firebasedatabase.app/promotions.json', promotion)
       .then(res => {
         console.log(res)
         commit('addPost', { ...promotion, id: res.data.name })
       })
       .catch(e => console.log(e))
  },
  addGift ({commit}, certificate) {
    console.log(certificate)
     return axios.post('https://viktoria-f5e86-default-rtdb.europe-west1.firebasedatabase.app/certificates.json', certificate)
       .then(res => {
         console.log(res)
         commit('addGift', { ...certificate, id: res.data.name })
       })
       .catch(e => console.log(e))
  },
  // editPost ({commit, state}, category) {
  //   return axios.put(`https://viktoria-f5e86-default-rtdb.europe-west1.firebasedatabase.app/categories/${category.id}.json`, category)
  //     .then(res => {
  //       commit('editPost', category)
  //     })
  //     .catch(e => console.log(e))
  // },
  //
  // authUser ({commit}, authData) {
  //   const key = 'AIzaSyA3g3b0fnrA_L5QzXH-Jy4Ue9GM528GnEQ'
  //   return axios.category(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, {
  //     email: authData.email,
  //     password: authData.password,
  //     returnSecureToken: true
  //   })
  //     .then((res) => { commit('setToken', res.data.idToken) })
  //     .catch(e => console.log(e))
  // },
  //
  // addComment (comment) {
  //   return axios.category('https://viktoria-f5e86-default-rtdb.europe-west1.firebasedatabase.app/comments.json', comment)
  //     .catch(e => console.log(e))
  // }
}

export const getters = {
  getPostsLoaded (state) {
    return state.postsLoaded
  },
  getCertificatesLoaded (state) {
    return state.certificatesLoaded
  },
  // checkAuthUser (state) {
  //   return state.token != null
  // }
}
