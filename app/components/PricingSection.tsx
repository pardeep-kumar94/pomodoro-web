import Link from "next/link";

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with focused work",
      features: [
        "3-day full feature trial",
        "10 tasks per day",
        "25-minute Pomodoro only",
        "Desktop notifications",
        "Always-on-top overlay",
        "Available for macOS & Windows",
      ],
      cta: "Download Now",
      downloadLink: "#",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "per month",
      description: "Unlock your full productivity potential",
      features: [
        "Unlimited tasks",
        "All Pomodoro intervals (15/25/30/45 min)",
        "Historical tracking",
        "Advanced analytics",
        "Custom timer sounds",
        "Priority support",
      ],
      cta: "Download Now",
      downloadLink: "#",
      highlighted: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#3d3d3d] mb-4">
            Download MindAnchor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free desktop application for macOS and Windows.
            No subscription. No hidden fees. Just productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-[#ff9d5c] to-[#ff8040] text-white shadow-2xl scale-105"
                  : "bg-gray-50 border border-gray-200"
              } transition-all duration-300 hover:shadow-xl`}
            >
              {plan.highlighted && (
                <div className="inline-block bg-white text-[#ff9d5c] text-sm font-bold px-4 py-1 rounded-full mb-4">
                  MOST POPULAR
                </div>
              )}

              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? "text-white" : "text-[#3d3d3d]"
                }`}
              >
                {plan.name}
              </h3>

              <div className="mb-4">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span
                  className={`text-lg ml-2 ${
                    plan.highlighted ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <p
                className={`mb-6 ${
                  plan.highlighted ? "text-white/90" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>

              <a
                href={plan.downloadLink}
                className={`block w-full py-3 px-6 rounded-full font-medium text-center mb-8 transition-all ${
                  plan.highlighted
                    ? "bg-white text-[#ff9d5c] hover:shadow-lg"
                    : "bg-[#ff9d5c] text-white hover:bg-[#ff8040]"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className={`w-6 h-6 mr-3 flex-shrink-0 ${
                        plan.highlighted ? "text-white" : "text-[#ff9d5c]"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={
                        plan.highlighted ? "text-white/90" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            System requirements: macOS 10.15+ or Windows 10/11. 100MB disk space.
          </p>
        </div>
      </div>
    </section>
  );
}
