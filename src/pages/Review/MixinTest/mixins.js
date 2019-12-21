export const myMixin = {
  
  data() {
    return {
      a: 'a111',
    }
  },

  computed: {
    length() {
      return this.a.length
    }
  }
}

export const otherMixin = {

}