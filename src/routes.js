import React from 'react';

const Dashboard = React.lazy(() => import('./app/components/dashboard/Dashboard'));
// const Task = React.lazy(() => import('./app/containers/Task/Task'));
const OrderLeads = React.lazy(() => import('./app/containers/OrderLeads/OrderLeads'));
const ManageLeads = React.lazy(() => import('./app/containers/ManageLeads/ManageLeads'));
// const Coupon = React.lazy(() => import('./app/containers/Coupon/Coupon'));
// const AskASpecialist = React.lazy(() => import('./app/containers/AskASpecialist/AskASpecialist'));
const ShoppingCart = React.lazy(() => import('./app/containers/OrderLeads/ShoppingCart'));
const PaymentMethods = React.lazy(() => import('./app/containers/PaymentMethods/PaymentMethods'));
const CheckoutOrder = React.lazy(() => import('./app/containers/OrderLeads/CheckoutOrder/CheckoutOrder'));
const PaymentScreen = React.lazy(() => import('./app/containers/OrderLeads/PaymentScreen'));
const EditLead = React.lazy(() => import('./app/containers/ManageLeads/EditLead'));

const routes = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  // { path: '/task', exact: true, name: 'Task', component: Task },
  { path: '/shoppingcart', name: 'ShoppingCart', component: ShoppingCart },
  { path: '/checkoutorder', exact: true, name: 'Checkout Order', component: CheckoutOrder },
  { path: '/orderleads', exact: true, name: 'OrderLeads', component: OrderLeads },
  { path: '/paymentscreen', exact: true,name: 'PaymentScreen', component: PaymentScreen },
  { path: '/manageleads', exact: true, name: 'ManageLeads', component: ManageLeads },
  // { path: '/coupon', exact: true, name: 'Coupons', component: Coupon },
  // { path: '/askaspecialist', exact: true, name: 'Ask A Specialist', component: AskASpecialist },
  { path: '/paymentmethods', exact: true, name: 'Payment Methods', component: PaymentMethods },
  { path: '/editlead', exact: true, name: 'Edit Lead', component: EditLead },
  ];

export default routes;