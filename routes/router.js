const router = require('express')();
const ctrl = require('../controller/controller.js');
const registerctrl = require('../controller/registercontroller.js');
const successctrl = require('../controller/successcontroller.js');
const acctctrl = require('../controller/acctdetailscontroller.js');
const loginctrl = require('../controller/logincontroller.js');
const deletectrl = require('../controller/deletecontroller.js');
const addprodctrl = require('../controller/admin_product_addcontroller.js'); // for adding product
const deleteprodctrl = require('../controller/admin_product_deletecontroller.js'); // for deleting product
const validation = require('../helpers/validation.js');


router.get('/', ctrl.getHome);
router.get('/home', ctrl.getHome);
router.get('/', ctrl.setHome);
router.get('/home', ctrl.setHome);

//router.get('/search', searchctrl.getSearch);
// router.get('/search', searchctrl.);

//admin add product related
router.get('/admin_product_add', addprodctrl.getAdminProdAdd);
router.post('/admin_product_add', addprodctrl.postAddProd);
router.get('/getCheckNum', addprodctrl.getCheckNum);

//admin delete product related
router.get('/admin_product_delete', deleteprodctrl.getAdminProdDelete);
router.post('/admin_product_delete', deleteprodctrl.postDeleteProd);
router.get('/getCheckNumDelete', deleteprodctrl.getCheckNum);

// REGISTER RELATED
router.get('/register', registerctrl.getRegister);
router.post('/register', validation.postRegisterValidation(), registerctrl.postRegister);
router.get('/getCheckUsername', registerctrl.getCheckUsername);
router.get('/getCheckContactNum', registerctrl.getCheckContactNum);
router.get('/getCheckEmail', registerctrl.getCheckEmail);
router.get('/success', successctrl.getSuccess);


router.get('/login', ctrl.getLogin);
router.post('/postlogin', loginctrl.findUser);
router.get('/LoggedInHome/:userName', loginctrl.getLoggedInHome);
router.get('/LoggedInHome', ctrl.getHomeLoggedIn);

router.get('/adminlogin', ctrl.getAdminLoginPage);
router.post('/postadminlogin', loginctrl.findAdmin);
router.get('/AdminLoggedInHome/:userName', loginctrl.getAdminLoggedInHome);
router.get('/admin_home', ctrl.getAdminHomeLoggedIn);

//ACCOUNT RELATED
router.post('/editdetails', acctctrl.editDetails);
router.get('/acctdetails/:userName', acctctrl.getDetails);
// router.get('/acctdetails/:userName', acctctrl.getDetails);


router.get('/delete/:userName', deletectrl.getDeletePage);
router.post('/delete_account', deletectrl.deleteAccount);

router.get('/viewdetails/:userName', acctctrl.getNoEditDetailsView);
//router.get('/acctdetailsnoedit/:userName', acctctrl.getNoEditDetailsView);



router.get('/acctdetailsnoedit', ctrl.getNoEditAcc);
router.get('/acctdetails', ctrl.getAcctDetails);
router.get('/admin_home_page', ctrl.getAdminHomePage);
router.get('/wishlist', ctrl.getWishlist);
router.get('/cart', ctrl.getCart);
router.get('/viewproducts', ctrl.getViewProducts);

module.exports = router;
