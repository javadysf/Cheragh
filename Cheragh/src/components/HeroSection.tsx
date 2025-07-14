import { useState } from 'react';

const HeroSection = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#34eb71] via-[#2dd65f] to-[#28c955] dark:from-[#1a5f2e] dark:via-[#134d25] dark:to-[#0d3a1c]">
      {/* Background with Green Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#34eb71] via-[#2dd65f] to-[#28c955] dark:from-[#1a5f2e] dark:via-[#134d25] dark:to-[#0d3a1c]"></div>
        
        {/* Animated Lamp */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-40 animate-lamp-sway">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Lamp Base */}
            <rect x="85" y="160" width="30" height="40" fill="#4A5568" rx="5" />
            
            {/* Lamp Stand */}
            <rect x="95" y="120" width="10" height="40" fill="#2D3748" />
            
            {/* Lamp Shade */}
            <ellipse cx="100" cy="110" rx="25" ry="15" fill="#F7FAFC" opacity="0.9" />
            <ellipse cx="100" cy="105" rx="20" ry="12" fill="#E2E8F0" opacity="0.8" />
            
            {/* Light Bulb */}
            <circle cx="100" cy="100" r="8" fill="#FFD700" className="animate-light-glow" />
            <circle cx="100" cy="100" r="5" fill="#FFF" />
            
            {/* Light Rays */}
            <path d="M100 90 L95 70 L105 70 Z" fill="#FFD700" opacity="0.6" className="animate-light-glow" />
            <path d="M100 90 L85 75 L95 75 Z" fill="#FFD700" opacity="0.4" className="animate-light-glow" style={{animationDelay: '0.5s'}} />
            <path d="M100 90 L115 75 L105 75 Z" fill="#FFD700" opacity="0.4" className="animate-light-glow" style={{animationDelay: '1s'}} />
            
            {/* Additional Light Rays */}
            <path d="M100 90 L80 80 L90 80 Z" fill="#FFD700" opacity="0.3" className="animate-light-glow" style={{animationDelay: '1.5s'}} />
            <path d="M100 90 L120 80 L110 80 Z" fill="#FFD700" opacity="0.3" className="animate-light-glow" style={{animationDelay: '2s'}} />
            
            {/* Decorative Elements */}
            <circle cx="90" cy="140" r="2" fill="#FFD700" className="animate-bounce" />
            <circle cx="110" cy="140" r="2" fill="#FFD700" className="animate-bounce" style={{animationDelay: '0.5s'}} />
            <circle cx="100" cy="150" r="2" fill="#FFD700" className="animate-bounce" style={{animationDelay: '1s'}} />
            
            {/* Lamp Cord */}
            <path d="M100 120 Q100 110 100 100" stroke="#2D3748" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-white/10 dark:bg-white/5 rounded-full animate-float"></div>
        <div className="absolute top-40 right-40 w-12 h-12 bg-white/10 dark:bg-white/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-40 w-8 h-8 bg-white/10 dark:bg-white/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/15 dark:bg-white/8 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-white/10 dark:bg-white/5 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/20 dark:border-white/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-white/20 dark:border-white/10 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        
        {/* Additional geometric elements */}
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-white/15 dark:border-white/8 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
      
          <span className="block text-white drop-shadow-lg">با <span className='text-ghasem text-[#34eb71]'>چراغ</span> پیدا کنید</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 dark:text-white/80 max-w-2xl mx-auto drop-shadow-md">
          تجربه‌ای منحصر به فرد در زیباترین نقاط ایران با امکانات لوکس و خدمات عالی
        </p>

        {/* Search Form */}
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl max-w-4xl mx-auto border border-white/20 dark:border-gray-700/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Location */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-right">
                مقصد
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="کجا می‌خواهید بروید؟"
                  className="w-full pr-10 pl-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#34eb71] focus:border-transparent text-right bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Check-in Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-right">
                تاریخ ورود
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#34eb71] focus:border-transparent text-right bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Check-out Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-right">
                تاریخ خروج
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#34eb71] focus:border-transparent text-right bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-right">
                تعداد مهمان
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#34eb71] focus:border-transparent text-right bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">انتخاب کنید</option>
                <option value="1">1 مهمان</option>
                <option value="2">2 مهمان</option>
                <option value="3">3 مهمان</option>
                <option value="4">4 مهمان</option>
                <option value="5">5 مهمان</option>
                <option value="6+">6+ مهمان</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-6">
            <button className="w-full bg-[#34eb71] hover:bg-[#2dd65f] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              جستجو در ویلاها
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-white/90 dark:text-white/80">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>تضمین کیفیت</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>پشتیبانی 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>پرداخت امن</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection; 