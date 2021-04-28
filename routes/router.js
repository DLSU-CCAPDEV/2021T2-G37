const router = require('express')();
const ctrl = require('../controller/controller.js');
const registerctrl = require('../controller/registercontroller.js');
const successctrl = require('../controller/successcontroller.js');
const acctctrl = require('../controller/acctdetailscontroller.js');
const searchctrl = require('../controller/searchcontroller.js');
const homectrl = require('../controller/homecontroller.js');
const addprodctrl = require('../controller/admin_product_addcontroller.js'); // for ading product

router.get('/', ctrl.getHome);
router.get('/home', ctrl.getHome);

router.get('/register', registerctrl.getRegister);
router.post('/register', registerctrl.postRegister);
router.get('/getCheckUsername', registerctrl.getCheckUsername);


router.get('/acctdetails/:userName', acctctrl.getDetails);
router.get('/success', successctrl.getSuccess);

router.get('/login', ctrl.getLogin);
router.get('/acctdetailsnoedit', ctrl.getNoEditAcc);
router.get('/acctdetails', ctrl.getAcctDetails);
router.get('/admin_home_page', ctrl.getAdminHomePage);
router.get('/wishlist', ctrl.getWishlist);
router.get('/cart', ctrl.getCart);
router.get('/viewproducts', ctrl.getViewProducts);

router.get('/search', searchctrl.getSearch);
// router.get('/search', searchctrl.);

router.get('/admin_product_add', addprodctrl.getAdminProdAdd);
router.post('/admin_product_add', addprodctrl.postAddProd);
router.get('/getCheckNum', addprodctrl.getCheckNum);

module.exports = router;