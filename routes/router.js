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
const reviewcodectrl = require('../controller/reviewcodecontroller.js'); // for editing code a review; first step in editing
const revieweditctrl = require('../controller/revieweditcontroller.js'); // for main editing a review; second step in editing
const reviewdeletectrl = require('../controller/reviewdeletecontroller.js'); // for deleting editing a review; second step in editing
const addreviewctrl = require('../controller/reviewaddcontroller.js');
const wishctrl = require('../controller/wishlistcontroller.js');
const cartctrl = require('../controller/cartcontroller.js');
const product_listingctrl = require('../controller/product_listingcontroller.js')
const validation = require('../helpers/validation.js');
const validationCheckOut = require('../helpers/validation-checkout.js');
const validationAdminAddProd = require('../helpers/validation-adminaddprod.js');
const validationAdminDeleteProd = require('../helpers/validation-admindeleteprod.js');
const validationAdminEditCodeProd = require('../helpers/validation-admineditcode.js');
const validationAdminEditMainProd = require('../helpers/validation-admineditmainprod.js');
const validationReviewCode = require('../helpers/validation-reviewcode.js');
const validationReviewEdit = require('../helpers/validation-reviewedit.js');
const validationReviewDelete = require('../helpers/validation-reviewdelete.js');
const validationReviewAdd = require('../helpers/validation-reviewadd.js');

router.get('/', ctrl.getHome);
router.get('/home', ctrl.getHome);
router.get('/about', ctrl.getAbout);

//add review related
router.get('/addreview/:pNum', addreviewctrl.getAddReview);
router.post('/addreview', validationReviewAdd.postReviewAddValidation(),addreviewctrl.postAddReview); // main editing happens here

//edit review related
router.get('/editreviewcode/:userName', reviewcodectrl.getEditReviewCode);
router.post('/editreviewcode/:userName', validationReviewCode.postReviewCodeValidation(), reviewcodectrl.postEditReviewCode);
router.get('/getCheckNumCode', reviewcodectrl.getRevNumCode);
//main edit review
router.get('/editreview/:userName', revieweditctrl.getEditReview);
router.post('/editreview/:userName', validationReviewEdit.postReviewEditValidation(), revieweditctrl.postEditMainReview);
router.get('/getCheckNumEdit', revieweditctrl.getRevNumEdit);

// review delete related
router.get('/reviewdelete/:userName', reviewdeletectrl.getReviewDelete);
router.post('/reviewdelete/:userName', validationReviewDelete.postReviewDeleteValidation(), reviewdeletectrl.postReviewDelete);
router.get('/getCheckReviewDelete', reviewdeletectrl.getCheckReviewDelete);

//admin add product related
router.get('/admin_product_add/:userName', addprodctrl.getAdminProdAdd);
router.post('/admin_product_add/:userName', validationAdminAddProd.postAdminAddProdValidation(), addprodctrl.postAddProd);
router.get('/getCheckNumAdd', addprodctrl.getCheckNumAdd);

//admin delete product related
router.get('/admin_product_delete/:userName', deleteprodctrl.getAdminProdDelete);
router.post('/admin_product_delete/:userName', validationAdminDeleteProd.postAdminDeleteProdValidation(), deleteprodctrl.postDeleteProd);
router.get('/getCheckNumDelete', deleteprodctrl.getCheckNumDelete);

//admin edit product code related
router.get('/admin_product_code/:userName', editcodeprodctrl.getAdminProdCode);
router.post('/admin_product_code/:userName', validationAdminEditCodeProd.postAdminEditCodeValidation(), editcodeprodctrl.postCodeProd);
router.get('/getCheckNumCodeProd', editcodeprodctrl.getEditCodeProd);
//admin MAIN edit product related 
router.get('/admin_product_edit/:userName', maineditprodctrl.getAdminProdMainEdit); 
router.post('/admin_product_edit/:userName', validationAdminEditMainProd.postAdminEditMainValidation(),maineditprodctrl.postAdminProdMainEdit); // main editing happens here
router.get('/getCheckNumCodeMainProd', maineditprodctrl.getEditCodeMainProd);

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

//ACCOUNT RELATED
router.post('/editdetails', acctctrl.editDetails);
router.get('/acctdetails/:userName', acctctrl.getDetails);


router.get('/delete/:userName', deletectrl.getDeletePage);
router.post('/delete_account', deletectrl.deleteAccount);

router.get('/viewdetails/:userName', acctctrl.getNoEditDetailsView);

router.get('/logout', logoutctrl.getLogOut);

router.get('/acctdetailsnoedit', ctrl.getNoEditAcc);
router.get('/acctdetails', ctrl.getAcctDetails);
router.get('/admin_home_page/:userName', ctrl.getAdminHomePage);

router.get('/checkout/:userName', acctctrl.getCheckOutDetails);
router.post('/checkout', validationCheckOut.postCheckOutValidation(), checkoutctrl.postCheckOut);
router.get('/confirmation/:userName', checkoutctrl.getConfirmationPage);

router.get('/search', ctrl.getSearch);
router.get('/LoggedInSearch', ctrl.getLoggedInSearch);
router.get('/viewproducts', ctrl.getViewProducts);
router.get('/LoggedInViewProducts/:userName', ctrl.getLoggedInViewProducts);

//PRODUCT LISTING RELATED
router.get('/product_listing/:pNum', product_listingctrl.getProduct_Listing);
router.get('/getAddWishlist', product_listingctrl.getAddWishlist);
router.get('/getAddCart', product_listingctrl.getAddCart);

//WISHLIST RELATED
router.get('/wishlist/:userName', wishctrl.getWishlist);
router.get('/addAlltoCart', wishctrl.getAddAlltoCart);
router.get('/addToCart', wishctrl.getAddtoCart);
router.get('/deleteWish', wishctrl.getDeleteWish);

//CART RELATED
router.get('/cart/:userName', cartctrl.getCart);
router.get('/deleteItem', cartctrl.getDeleteItem);


module.exports = router;
