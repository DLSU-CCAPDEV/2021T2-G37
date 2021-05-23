const router = require('express')();
const ctrl = require('../controller/controller.js');
const registerctrl = require('../controller/registercontroller.js');
const successctrl = require('../controller/successcontroller.js');
const acctctrl = require('../controller/acctdetailscontroller.js');
const loginctrl = require('../controller/logincontroller.js');
const logoutctrl = require('../controller/logoutcontroller.js');
const deletectrl = require('../controller/deletecontroller.js');
const checkoutctrl = require('../controller/checkoutcontroller.js');
const addprodctrl = require('../controller/admin_product_addcontroller.js'); // for adding product
const deleteprodctrl = require('../controller/admin_product_deletecontroller.js'); // for deleting product
const editcodeprodctrl = require('../controller/admin_product_editcodecontroller.js'); // first step in editing a product; concerned only with the product code
const maineditprodctrl = require('../controller/admin_product_maineditcontroller.js'); // second step in editing a product, concerned with the MAIN editing
const validation = require('../helpers/validation.js');
const validationCheckOut = require('../helpers/validation-checkout.js');

router.get('/', ctrl.getHome);
router.get('/home', ctrl.getHome);
router.get('/', ctrl.setHome);
router.get('/home', ctrl.setHome);
router.get('/about', ctrl.getAbout);

//router.get('/search', searchctrl.getSearch);
// router.get('/search', searchctrl.);

//admin add product related
router.get('/admin_product_add', addprodctrl.getAdminProdAdd);
router.post('/admin_product_add', addprodctrl.postAddProd);
router.get('/getCheckNum', addprodctrl.getCheckNum);

//admin delete product related
router.get('/admin_product_delete', deleteprodctrl.getAdminProdDelete);
router.post('/admin_product_delete', deleteprodctrl.postDeleteProd);
router.get('/getCheckNumDelete', deleteprodctrl.getCheckNumDelete);

//admin edit product code related
router.get('/admin_product_code', editcodeprodctrl.getAdminProdCode);
router.post('/admin_product_code', editcodeprodctrl.postCodeProd);
//admin MAIN edit product related 
//NOT YET DONE
router.post('/editproduct/:pNum', maineditprodctrl.postAdminProdEdit);

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

router.get('/logout', logoutctrl.getLogOut);

router.get('/acctdetailsnoedit', ctrl.getNoEditAcc);
router.get('/acctdetails', ctrl.getAcctDetails);
router.get('/admin_home_page', ctrl.getAdminHomePage);
router.get('/wishlist', ctrl.getWishlist);
router.get('/cart', ctrl.getCart);
router.get('/viewproducts', ctrl.getViewProducts);

router.get('/checkout/:userName', acctctrl.getCheckOutDetails);
router.post('/checkout', validationCheckOut.postCheckOutValidation(), checkoutctrl.postCheckOut);
router.get('/confirmation/:userName', checkoutctrl.getConfirmationPage);

module.exports = router;
