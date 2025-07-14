const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "علی احمدی",
      location: "تهران",
      rating: 5,
      comment: "تجربه‌ای فوق‌العاده داشتیم. ویلا کاملاً مطابق با تصاویر بود و خدمات عالی ارائه شد. حتماً دوباره از چراغ استفاده خواهم کرد.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      name: "فاطمه محمدی",
      location: "اصفهان",
      rating: 5,
      comment: "اقامتگاه سنتی در یزد واقعاً زیبا بود. فضای آرام و دلنشین داشت و صاحب خانه بسیار مهمان‌نواز بود. پیشنهاد می‌کنم.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      name: "محمد رضایی",
      location: "شیراز",
      rating: 4,
      comment: "ویلای مدرن در شیراز امکانات عالی داشت. استخر و سالن ورزش واقعاً عالی بود. فقط کمی گران بود ولی ارزشش را داشت.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      name: "زهرا کریمی",
      location: "تبریز",
      rating: 5,
      comment: "کلبه چوبی در ارومیه تجربه‌ای متفاوت بود. طبیعت زیبا و هوای پاک داشت. برای فرار از شلوغی شهر عالی بود.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            نظرات مشتریان ما
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ببینید مشتریان ما درباره تجربه‌شان در چراغ چه می‌گویند
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-6 card-hover">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* User Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#34eb71] mb-2">10,000+</div>
            <div className="text-gray-600">مشتری راضی</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#34eb71] mb-2">500+</div>
            <div className="text-gray-600">ویلا و اقامتگاه</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#34eb71] mb-2">4.8</div>
            <div className="text-gray-600">امتیاز کلی</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#34eb71] mb-2">24/7</div>
            <div className="text-gray-600">پشتیبانی</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 