export const myMixin = {
  data () {
    return {
      a: 'atguigu',
    }
  },
  
  computed: {
    length () {
      return this.a.length
    }
  }
}

export const otherMixin = {

}
