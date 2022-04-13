const express = require('express')
const stripe = require('stripe')(
  'sk_test_51Ko4uLGkU7gaJtLiXRvr0ArFyQ9PunVLTA2ns90VEGIuMsSubN1BxoMAPRqeT4Dk1uNXTmqLUNo9ZucRkNmDCcvi005sbdDs67'
)
const PORT = 3000
YOUR_DOMAIN = 'http://localhost:3000'
const app = express()

app.use(express.static('public'))

app.post('/create-checkout-session', async (req, res) => {
  try {
    const prices = await stripe.prices.list()
    // console.log("🚀 ~ prices", prices)
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: prices.data[0].id,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${YOUR_DOMAIN}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    })

    res.redirect(303, session.url)
  } catch (error) {
    console.error(error)
  }
})

app.listen(PORT, console.log('サーバーが起動しました'))
