const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "شمال ایران",
      description: "ویلاهای زیبا در جنگل و کنار دریا",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
      properties: 150,
      rating: 4.8
    },
    {
      id: 2,
      name: "اصفهان",
      description: "اقامتگاه‌های سنتی در قلب تاریخ",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      properties: 89,
      rating: 4.7
    },
    {
      id: 3,
      name: "شیراز",
      description: "ویلاهای مدرن در شهر شعر و ادب",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      properties: 120,
      rating: 4.9
    },
    {
      id: 4,
      name: "یزد",
      description: "اقامتگاه‌های کویری و سنتی",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      properties: 67,
      rating: 4.6
    },
    {
      id: 5,
      name: "کیش",
      description: "ویلاهای لوکس در جزیره زیبا",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
      properties: 95,
      rating: 4.8
    },
    {
      id: 6,
      name: "تبریز",
      description: "اقامتگاه‌های سنتی آذربایجان",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      properties: 78,
      rating: 4.7
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            مقاصد محبوب
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            زیباترین نقاط ایران را برای اقامت انتخاب کنید
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="group relative overflow-hidden rounded-2xl shadow-lg card-hover">
              {/* Destination Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-gray-200 mb-4">{destination.description}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-semibold">{destination.rating}</span>
                    </div>
                    <div className="text-sm">
                      {destination.properties} اقامتگاه
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#34eb71]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-[#34eb71] font-bold py-3 px-6 rounded-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  مشاهده اقامتگاه‌ها
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Destinations */}
        <div className="text-center mt-12">
          <button className="btn-secondary text-lg py-3 px-8">
            مشاهده همه مقاصد
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations; 