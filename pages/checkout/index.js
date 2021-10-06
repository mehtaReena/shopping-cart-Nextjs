import CheckOutForm from '../../component/CheckOutForm';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Router from "next/router";

function CheckOut() {
  const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

  return(
  <Elements stripe={stripePromise}>
            <CheckOutForm
            price={'100'}
            onSuccessfulCheckout={() => Router.push("/success")}

            />
          </Elements>

)
}


export default CheckOut;

