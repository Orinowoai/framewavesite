"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY 
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

interface StripeCheckoutProps {
  priceId: string;
  buttonText: string;
  className?: string;
}

export default function StripeCheckout({ priceId, buttonText, className = "" }: StripeCheckoutProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    
    try {
      if (!stripePromise) {
        // Fallback to email contact if Stripe is not configured
        window.location.href = "mailto:hello@framewave.studio?subject=Strategy Call Booking - Framewave Studio";
        return;
      }

      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error("Stripe failed to load");
      }

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}/contact`,
        }),
      });

      const { sessionId } = await response.json();

      if (!sessionId) {
        throw new Error("Failed to create checkout session");
      }

      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error("Stripe checkout error:", error);
        alert("Payment failed. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Payment failed. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${className}`}
    >
      {loading ? (
        <>
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
          Processing...
        </>
      ) : (
        <>
          {buttonText}
          <ChevronRightIcon className="w-5 h-5 ml-2" />
        </>
      )}
    </button>
  );
}
