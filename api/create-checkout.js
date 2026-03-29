const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method Not Allowed' });
        return;
    }

    try {
        const { cart, successUrl, cancelUrl } = req.body;

        if (!cart || !Array.isArray(cart) || cart.length === 0) {
            res.status(400).json({ error: 'Invalid cart' });
            return;
        }

        const lineItems = cart.map(item => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: `${item.emoji || '🍫'} ${item.name}`,
                    description: item.size ? `Size: ${item.size}` : undefined,
                },
                unit_amount: Math.round(item.price * 100), // Stripe expects cents
            },
            quantity: item.qty || 1,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: cancelUrl,
        });

        res.status(200).json({ sessionId: session.id });
    } catch (err) {
        console.error('Stripe Error:', err.message);
        res.status(500).json({ error: err.message });
    }
};
