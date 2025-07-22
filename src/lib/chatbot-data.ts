// Chatbot script data
export type ChatBranch = {
  branch: string;
  trigger_phrases: string[];
  response: string;
};

export type ChatScript = {
  initialGreeting: string[];
  branches: {
    [key: string]: string[];
  };
  faqs: ChatBranch[];
};

export const chatbotScript: ChatScript = {
  initialGreeting: [
    "Hello and very Good Morning Sir, May I speak with Mr. Pratik Jadhav?"
  ],
  branches: {
    "1.0": [
      "Hello and very Good Morning Sir, May I speak with Mr. Pratik Jadhav?"
    ],
    "1.1": [
      "My name is Veena and I am an Executive calling on behalf of ValuEnable Life Insurance Co. Ltd. This is a service call regarding your life insurance policy. Is this the right time to speak to you regarding the renewal of your policy?"
    ],
    "1.2": [
      "May I know your relationship with Mr. Pratik Jadhav?"
    ],
    "1.3": [
      "Do you handle Mr. Pratik Jadhav's life insurance policy number VL12345678? Are you aware of the details of this policy?"
    ],
    "1.4": [
      "It will take just 2 minutes of your time. Can we discuss it right now or should I reschedule your call at a better time?"
    ],
    "2.0": [
      "Let me start by confirming your policy details. Your policy is ValuEnable Life \"Secure Future Plan\", policy number VL12345678, started on 10-July-2020. You've paid ₹45,000 so far. The premium of ₹5,500 due on 15-July-2025 is still pending, and your policy is currently in \"Discontinuance\" status, with no life insurance cover. Could you please let me know why you haven't been able to pay the premium?"
    ],
    "2.1": [
      "I would like to inform you that the due date for renewal premium payment for your policy was on 15-July-2025. The grace period is over due to non-payment, and you are losing the benefit of your plan. Would you like to know what benefits you could get if you resume paying premiums?"
    ],
    "2.2": [
      "Sir, you will get maximum Allocation in the Invested Fund — a higher percentage of your premium will go into your selected funds. Renewal premium allocation is higher than first-year, giving better investment value. You'll also receive Loyalty Units which enhance returns, and renewal payments qualify for tax savings under Section 80C and 10(10D) of Indian Income Tax Act. Does this help you make a more informed decision about your policy?"
    ],
    "3.0": [
      "When would be a convenient time to call you again to provide the information about your policy with us? Please can you give a time and date?",
      "Thank you sir/ma'am, I will arrange your call back at the given time."
    ],
    "4.0": [
      "You can download the policy bond through WhatsApp. Please send a message from your registered mobile number to **8806727272** and you will be able to download the policy bond."
    ],
    "5.0": [
      "May I know how you plan to make the payment? Will it be via cash, cheque, or online?"
    ],
    "5.1": [
      "If you wish, you can pay online now. We'll send you a link, or you can visit our website. Use debit card, credit card, net banking, PhonePe, WhatsApp or Google Pay to pay."
    ],
    "5.2": [
      "You can conveniently pay the premium from home without visiting the branch. I'm here to assist you with the digital payment process."
    ],
    "5.3": [
      "I'm noting your preference. I'll send you a payment link for easy processing."
    ],
    "5.4": [
      "As confirmed, you'll pay the premium on 5-Oct-2025 at 10:00 AM via online transfer. Please ensure timely payment to maintain your policy benefits. We'll call to confirm the payment status."
    ],
    "6.0": [
      "Thank you for making the payment. May I know when you made the payment?"
    ],
    "6.1": [
      "May I know where you made the payment (online, cheque, or cash)?"
    ],
    "6.2": [
      "Could you please provide the transaction ID or reference number? For cheque payments, we'll need the cheque number. I can help track it."
    ],
    "7.0": [
      "I understand your concern. To achieve your financial goals, staying invested is key. You can pay via credit card, EMI, or change your payment mode to monthly. Can you arrange the premium to continue benefits?"
    ],
    "8.0": [
      "You can opt for Partial Withdrawal after completing 5 years (lock-in period). If premiums stop before that, the policy discontinues and growth drops to 4–4.5%. You also lose your sum assured of ₹5,00,000. If you choose to continue, you may receive ₹2,40,000 at maturity (as per fund value). Would you be willing to pay your premium now?"
    ],
    "9.0": [
      "For any further assistance with your policy, feel free to call our helpline at **1800 209 7272**, message us on WhatsApp at **8806 727272**, email us, or visit our website. Thank you for your valuable time. Have a great day ahead."
    ]
  },
  faqs: [
    {
      "branch": "renewal_date",
      "trigger_phrases": [
        "when is my policy renewal"
      ],
      "response": "Your policy renewal date is 12th August. Please pay the premium before that date."
    },
    {
      "branch": "nominee_update",
      "trigger_phrases": [
        "can I update my nominee"
      ],
      "response": "Yes, you can change the nominee. You will need to fill a nominee change form and submit it with a valid ID proof."
    },
    {
      "branch": "policy_documents",
      "trigger_phrases": [
        "can I get my documents",
        "email me document"
      ],
      "response": "Sure. The policy document will be sent to your registered email within 24 hours."
    },
    {
      "branch": "loan_eligibility",
      "trigger_phrases": [
        "can I take a loan against my policy"
      ],
      "response": "Yes, if your policy is eligible, you can take a loan against it. The loan amount depends on your policy value."
    },
    {
      "branch": "premium_payment_modes",
      "trigger_phrases": [
        "how can I pay premium"
      ],
      "response": "You can pay your premium online, via cheque, or through net banking."
    },
    {
      "branch": "late_payment_penalty",
      "trigger_phrases": [
        "what happens if I pay late"
      ],
      "response": "There may be a penalty for late payment and your policy could risk getting lapsed."
    },
    {
      "branch": "policy_lapse",
      "trigger_phrases": [
        "how to revive lapsed policy"
      ],
      "response": "You can revive your policy if you request within 180 days of lapse. There may be a penalty and medical check-up required."
    },
    {
      "branch": "policy_benefits",
      "trigger_phrases": [
        "what are the benefits of this policy"
      ],
      "response": "This policy offers life cover, maturity benefit, and annual bonus."
    },
    {
      "branch": "address_update",
      "trigger_phrases": [
        "can I update my address"
      ],
      "response": "You can update your address by submitting a form along with address proof."
    },
    {
      "branch": "email_update",
      "trigger_phrases": [
        "update my email"
      ],
      "response": "To update your email, contact customer care or log in to the online portal."
    },
    {
      "branch": "mobile_update",
      "trigger_phrases": [
        "update phone number"
      ],
      "response": "You can update your mobile number after OTP verification."
    },
    {
      "branch": "claim_process",
      "trigger_phrases": [
        "how to file a claim"
      ],
      "response": "To file a claim, you need to submit the death certificate, ID proof, and a claim form."
    },
    {
      "branch": "claim_status",
      "trigger_phrases": [
        "status of my claim"
      ],
      "response": "Your claim is under process. You will receive an update within 7 working days."
    },
    {
      "branch": "policy_term",
      "trigger_phrases": [
        "term of my policy"
      ],
      "response": "Your policy term is 20 years."
    },
    {
      "branch": "premium_amount",
      "trigger_phrases": [
        "what is the premium amount"
      ],
      "response": "Your premium amount is ₹12,000 annually."
    },
    {
      "branch": "agent_contact",
      "trigger_phrases": [
        "agent contact"
      ],
      "response": "Your agent is Ramesh Kumar. Contact: 9876543210."
    },
    {
      "branch": "policy_portal_help",
      "trigger_phrases": [
        "login me problem"
      ],
      "response": "You can log in to the customer portal. If there's an issue, try the 'Forgot Password' option."
    },
    {
      "branch": "policy_loan_interest",
      "trigger_phrases": [
        "what is the loan interest"
      ],
      "response": "The interest rate on the policy loan is 9% annually."
    },
    {
      "branch": "sms_alerts",
      "trigger_phrases": [
        "disable message alerts"
      ],
      "response": "You can request customer care to disable SMS alerts for you."
    },
    {
      "branch": "auto_debit",
      "trigger_phrases": [
        "set up ECS for premium"
      ],
      "response": "To set up auto-debit, fill the ECS form and get it verified by your bank."
    },
    {
      "branch": "policy_upgrade",
      "trigger_phrases": [
        "can I switch to better policy"
      ],
      "response": "To upgrade your policy, you will need to submit a fresh application with a new proposal."
    },
    {
      "branch": "bonus_info",
      "trigger_phrases": [
        "bonus amount"
      ],
      "response": "A bonus of ₹5,000 has been added to your policy this year."
    },
    {
      "branch": "tax_benefits",
      "trigger_phrases": [
        "how much tax rebate"
      ],
      "response": "You can claim up to ₹1.5 lakh under section 80C for tax benefits."
    },
    {
      "branch": "maturity_date",
      "trigger_phrases": [
        "when will I get maturity"
      ],
      "response": "Your policy will mature on 5th May 2030."
    },
    {
      "branch": "survival_benefit",
      "trigger_phrases": [
        "what is survival payout"
      ],
      "response": "Survival benefit is a periodic payout given if the policyholder survives the policy term."
    },
    {
      "branch": "surrender_policy",
      "trigger_phrases": [
        "cancel my policy"
      ],
      "response": "To surrender your policy, submit a surrender form and ID proof. You'll receive an amount based on policy value."
    },
    {
      "branch": "refund_status",
      "trigger_phrases": [
        "check refund status"
      ],
      "response": "Your refund is being processed and will be credited to your bank account within 5 working days."
    },
    {
      "branch": "customer_care_escalation",
      "trigger_phrases": [
        "complaint register"
      ],
      "response": "You can escalate your issue to customer care for further assistance. They will connect you with a senior officer if needed."
    }
  ]
};

export const initialMessage = "Hello and very Good Morning Sir, May I speak with Mr. Pratik Jadhav?";