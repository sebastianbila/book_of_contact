/* To show alert from vuex */
export default function showAlert (commit, text, type) {
  commit('showAlert', {
    text,
    type
  })
}
