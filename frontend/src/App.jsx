import { useState } from 'react';
import { CreditCard, UserCircle, Mail, Briefcase } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    jobCategory: 'QA'
  });

  return (
    <div 
      className="min-h-screen p-6 md:p-8 lg:p-12 flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url('/assets/gif.webp')`, // Replace with actual path: '/path-to/gif.webp'
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay to ensure content readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      
      <div className="w-full max-w-6xl relative z-10">
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          <div className="lg:col-span-2 flex flex-col justify-center items-center mb-8 lg:mb-0">
            <div className="text-center relative">
              <div className="inline-block p-6 bg-white rounded-3xl shadow-[0_12px_24px_rgba(0,0,0,0.12)] mb-6 transform hover:scale-105 transition-transform duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white rounded-3xl transform rotate-6 scale-105 -z-10"></div>
                <img 
                  src="/assets/TrendingJobs4All.png" 
                  alt="TrendingJobs4All Logo" 
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h1 className="text-4xl font-bold text-white">
                Premium Subscription
              </h1>
              <p className="text-gray-200 mt-4 text-lg">Join our exclusive community</p>
            </div>
          </div>

          <div className="lg:col-span-3 relative">
            {/* Form background with proper image path */}
            <div 
              className="absolute inset-0 rounded-3xl bg-cover bg-center opacity-20"
              style={{
                backgroundImage: `url('/assets/background.webp')`, 
                filter: 'blur(2px)'
              }}
            ></div>
            
            {/* Enhanced gradient overlays for better readability */}
            <div className="absolute inset-0 bg-white/70 rounded-3xl transform rotate-2 scale-105 -z-10 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-white/90 rounded-3xl transform -rotate-2 scale-105 -z-10"></div>
            
            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_16px_32px_rgba(0,0,0,0.12)] p-8 md:p-10 relative transform hover:translate-y-[-4px] transition-all duration-300">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Full Name Field */}
                <div className="space-y-2">
                  <label className="text-base md:text-lg font-medium text-gray-700 flex items-center gap-3">
                    <UserCircle className="w-5 h-5 text-purple-500" />
                    Full Name
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full pl-5 pr-5 py-3 text-lg border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-purple-200 bg-white/90"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-base md:text-lg font-medium text-gray-700 flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-500" />
                    Email
                  </label>
                  <div className="relative group">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-3 text-lg border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-purple-200 bg-white/90"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Job Category Field */}
                <div className="space-y-2">
                  <label className="text-base md:text-lg font-medium text-gray-700 flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-purple-500" />
                    Job Category
                  </label>
                  <div className="relative group">
                    <select
                      value={formData.jobCategory}
                      onChange={(e) => setFormData({...formData, jobCategory: e.target.value})}
                      className="w-full px-5 py-3 text-lg border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-purple-200 appearance-none bg-white/90"
                    >
                      <option value="QA">QA Engineer</option>
                    </select>
                  </div>
                </div>

                {/* Subscription Price Field */}
                <div className="space-y-2">
                  <label className="text-base md:text-lg font-medium text-gray-700 flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-purple-500" />
                    Price
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value="Rs 199"
                      className="w-full px-5 py-3 text-lg bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-500 font-medium"
                      disabled
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2 mt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-2xl hover:opacity-90 transform hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-lg"
                  >
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}