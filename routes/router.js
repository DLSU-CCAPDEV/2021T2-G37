const router = require('express')();
const ctrl = require('../controller/controller.js');
const registerctrl = require('../controller/registercontroller.js');
const successctrl = require('../controller/successcontroller.js');
const acctctrl = require('../controller/acctdetailscontroller.js');
const loginctrl = require('../controller/logincontroller.js');
const deletectrl = require('../controller/deletecontroller.js');

router.get('/', ctrl.getHome);
router.get('/home', ctrl.getHome);
router.get('/', ctrl.setHome);
router.get('/home', ctrl.setHome);

const addprodctrl = require('../controller/admin_product_addcontroller.js'); // for ading product

//router.get('/search', searchctrl.getSearch);
// router.get('/search', searchctrl.);

router.get('/admin_product_add', addprodctrl.getAdminProdAdd);
router.post('/admin_product_add', addprodctrl.postAddProd);
router.get('/getCheckNum', addprodctrl.getCheckNum);


// REGISTER RELATED
router.get('/register', registerctrl.getRegister);
router.post('/register', registerctrl.postRegister);
router.get('/getCheckUsername', registerctrl.getCheckUsername);
router.get('/getCheckEmail', registerctrl.getCheckEmail);
router.get('/success', successctrl.getSuccess);

router.get('/login', loginctrl.getLoginPage);
router.post('/postlogin', loginctrl.findUser);
router.post('/LoggedInHome:/userName', ctrl.getHomeLoggedIn);
router.get('/LoggedInHome', ctrl.getHomeLoggedIn);

//ACCOUNT RELATED
router.get('/editdetails/:userName', acctctrl.loadDetails);
router.post('/editdetails', acctctrl.editDetails);
router.get('/deleteacct', acctctrl.deleteacct);
router.get('/acctdetails/:userName', acctctrl.getDetails);

router.get('/delete/:userName', deletectrl.getDeletePage);
router.post('/delete_account', deletectrl.deleteAccount);

router.get('/viewdetails/:userName', acctctrl.getNoEditDetailsView);
//router.get('/acctdetailsnoedit/:userName', acctctrl.getNoEditDetailsView);



router.get('/login', ctrl.getLogin);
router.get('/acctdetailsnoedit', ctrl.getNoEditAcc);
router.get('/acctdetails', ctrl.getAcctDetails);
router.get('/admin_home_page', ctrl.getAdminHomePage);
router.get('/wishlist', ctrl.getWishlist);
router.get('/cart', ctrl.getCart);
router.get('/viewproducts', ctrl.getViewProducts);


module.exports = router;
