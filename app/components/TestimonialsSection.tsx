export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Tech Startup",
      avatar: "SC",
      text: "MindAnchor has completely transformed how I work. The web-based timer is always accessible, and I love how I can track my progress across devices!",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Freelance Designer",
      company: "Self-Employed",
      avatar: "MR",
      text: "As a freelancer, staying focused is crucial. MindAnchor's customizable Pomodoro intervals fit perfectly with my workflow. No installation needed!",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Content Writer",
      company: "Marketing Agency",
      avatar: "EW",
      text: "I've tried many productivity apps, but MindAnchor is the only one I actually stick with. It's simple, beautiful, and works right in my browser!",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Product Manager",
      company: "SaaS Company",
      avatar: "DK",
      text: "Managing multiple projects used to overwhelm me. MindAnchor's task list combined with the timer keeps me organized and focused. True game changer!",
      rating: 5,
    },
    {
      name: "Jessica Martinez",
      role: "PhD Student",
      company: "University",
      avatar: "JM",
      text: "Writing my dissertation seemed impossible until I found MindAnchor. The structured work sessions help me make consistent progress every day!",
      rating: 5,
    },
    {
      name: "Alex Thompson",
      role: "Entrepreneur",
      company: "Startup Founder",
      avatar: "AT",
      text: "Running a startup means juggling countless tasks. MindAnchor helps me prioritize and execute. The mini-window feature is perfect for multitasking!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#3d3d3d] mb-4">
            Loved by Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of users who have transformed their productivity with MindAnchor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#ff9d5c]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff9d5c] to-[#ff8040] rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-[#3d3d3d]">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-white rounded-full px-12 py-6 shadow-lg">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#ff9d5c]">10K+</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#ff9d5c]">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="h-12 w-px bg-gray-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#ff9d5c]">95%</div>
              <div className="text-sm text-gray-600">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
