import Cookies from 'js-cookie'

export default {
  data () {
    return {
      isLogin: false
    }
  },
  mounted () {
    if (Cookies.get('puid') && Cookies.get('token')) {
      this.isLogin = true
    }
  },
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
    },
    signIn () {
      this.$router.push('/login')
    }
  }
}
