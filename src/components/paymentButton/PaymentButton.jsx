import "./paymentButton.scss";

const PaymentButton = ({amount, title}) => {
    const beBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    const handlePayment = async () => {

        try {
            const response = await fetch(`${beBaseUrl}/stripe/create-checkout-session`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount, title }),
            });

            if (!response.ok) {
                throw new Error('Failed to create Checkout session');
            }

            const data = await response.json();
            window.location.href = data.sessionUrl;
        } catch (error) {
            console.error('Error initiating payment:', error);
            // Handle error appropriately
        }
    };

    return (
        <button className="pay-button disable-click" onClick={handlePayment}>Запази си място</button>
    );
};

export default PaymentButton;