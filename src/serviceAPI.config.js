const BASEURL = "https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/"
const LOCALURL = "http://localhost:3000/"
const URL = {
  getShoppingMallInfo: BASEURL + 'index',
  getGoodsInfo: BASEURL + 'getGoodsInfo',
  registerUser: LOCALURL + 'user/register', // 用户注册接口
  login: LOCALURL + 'user/login',  // 用户登录接口
  getDetailGoodsInfo: LOCALURL +'goods/getDetailGoodsInfo',  //商品详情数据
  getCategoryList: LOCALURL +'goods/getCategoryList',  //商品大分类数据
  getCategorySubList: LOCALURL +'goods/getCategorySubList',  //商品小分类数据
  getGoodsListByCategorySubID: LOCALURL + 'goods/getGoodsListByCategorySubID',  //获取小分类数据
}

module.exports = URL