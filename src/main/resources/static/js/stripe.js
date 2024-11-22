const stripe = Stripe('pk_test_51QB5ncRtIbhUREMPbq2HGF4Q8wY8lHx4MnD5PqJ1GSsMItvukN74FENK9o5yYDsDrkf1je6jKwv1ra65lF4KCv1j00OUkhhXwj');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
	stripe.redirectToCheckout({
		sessionId: sessionId
	})
});
	