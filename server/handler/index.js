module.exports = {
  getUser: require('./user/getUser'),
  login: require('./user/login'),
  register: require('./user/register'),
  addBlog: require('./blog/addBlog'),
  getBlogList: require('./blog/getBlogList'),
  getBlogListAll: require('./blog/getBlogListAll'),
  getBlogListAllByType: require('./blog/getBlogListAllByType'),
  getBlog: require('./blog/getBlog'),
  editBlog: require('./blog/editBlog'),
  removeBlog: require('./blog/removeBlog')
}
