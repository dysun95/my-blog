import Cookies from 'js-cookie'

export default {
  methods: {
    goList () {
      this.$router.push('/home/list')
    },
    goWrite () {
      this.$router.push('/home/editor')
    },
    signOut () {
      Cookies.set('puid', '', {domain: '.dysun95.tk'})
      Cookies.set('token', '', {domain: '.dysun95.tk'})
      this.$router.push('/login')
    }
  }
}
