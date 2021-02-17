export const state = () => ({
  authUser: null
})

export const getters = {
  isLoggedIn: state => !!state.authUser
}

export const actions = {
  async onAuthStateChangedAction({ commit, dispatch }, { authUser, claims }) {
    if (!authUser) {
      commit('RESET_USER')

      return
    }

    const { uid, email, emailVerified, displayName } = authUser

    commit('SET_USER', {
      uid,
      email,
      emailVerified,
      displayName,
      photoURL: claims.picture,
      isAdmin: claims.custom_claim
    })
  },
  async nuxtServerInit({ dispatch }, { res,req }) {
    if (res && res.locals && res.locals.user) {
      const { allClaims: claims, idToken: token, ...authUser } = res.locals.user

      await dispatch('onAuthStateChangedAction', {
        authUser,
        claims,
        token
      })
    }
  }
}

export const mutations = {
  SET_USER(state, payload) {
    state.authUser = payload;
  },
  RESET_USER(state) {
    state.authUser = null
  }
}
