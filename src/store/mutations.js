export default {
  pushCardsToState (state, payload) {
    state.cards = payload.list
  },
  setUpdatedAtTime (state, payload) {
    state.updatedAt = payload
  },
  setIsLoading (state, payload) {
    state.isLoading = payload
  }
}
