const router = require('express')();
const ctrl = require('../controller/controller.js');
const registerctrl = require('../controller/registercontroller.js');
const successctrl = require('../controller/successcontroller.js');
const acctctrl = require('../controller/acctdetailscontroller.js');

router.get('/', ctrl.getHome);
router.get('/home', ctrl.getHome);

router.get('/register', registerctrl.getRegister);
router.post('/register', registerctrl.postRegister);
router.get('/getCheckUsername', registerctrl.getCheckUsername);
router.get('/success', successctrl.getSuccess);

router.get('/homeregistered', ctrl.getHomeRegistered);

router.get('/editdetails/:userName', acctctrl.loadDetails);
router.post('/editdetails', acctctrl.editDetails);
router.get('/deleteacct', acctctrl.deleteacct);
router.get('/acctdetails/:userName', acctctrl.getDetails);

router.get('/login', ctrl.getLogin);
router.get('/acctdetailsnoedit', ctrl.getNoEditAcc);
router.get('/acctdetails', ctrl.getAcctDetails);
router.get('/admin_home_page', ctrl.getAdminHomePage);
router.get('/wishlist', ctrl.getWishlist);
router.get('/cart', ctrl.getCart);
router.get('/viewproducts', ctrl.getViewProducts);


module.exports = router;