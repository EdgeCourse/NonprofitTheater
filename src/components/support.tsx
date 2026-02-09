import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Gift, Building2, Check } from 'lucide-react';

export function Support() {
  const [selectedAmount, setSelectedAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');

  const donationAmounts = ['25', '50', '100', '250', '500'];

  const supportWays = [
    {
      icon: Heart,
      title: 'Donate',
      description: 'Your contribution directly supports our productions and community programs.',
      action: 'Give Now',
    },
    {
      icon: Users,
      title: 'Volunteer',
      description: 'Join our global team of passionate theatre enthusiasts and make an impact.',
      action: 'Get Involved',
    },
    {
      icon: Gift,
      title: 'Sponsor',
      description: 'Partner with us to bring transformative theatre to new audiences.',
      action: 'Learn More',
    },
    {
      icon: Building2,
      title: 'Corporate Partnerships',
      description: 'Engage your organization with meaningful cultural philanthropy.',
      action: 'Contact Us',
    },
  ];

  const benefits = [
    'Tax-deductible contribution',
    'Exclusive behind-the-scenes updates',
    'Priority ticket access',
    'Annual impact report',
  ];

  return (
    <section id="support" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-purple-600 uppercase tracking-wider">Support Us</span>
            <h2 className="text-4xl lg:text-5xl text-gray-900 mt-4 mb-6">
              Help Us Share Stories That Matter
            </h2>
            <p className="text-lg text-gray-700">
              Your support empowers artists, enriches communities, and brings world-class
              theatre to audiences everywhere.
            </p>
          </motion.div>
        </div>

        {/* Donation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="donate"
          className="max-w-4xl mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl"
        >
          <h3 className="text-3xl text-white text-center mb-8">Make a Donation Today</h3>
          
          <div className="bg-white rounded-2xl p-8">
            <div className="mb-6">
              <label className="text-gray-900 mb-3 block">Select Amount</label>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`py-3 px-4 rounded-lg border-2 transition-all ${
                      selectedAmount === amount && !customAmount
                        ? 'border-purple-600 bg-purple-50 text-purple-600'
                        : 'border-gray-300 hover:border-purple-400'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="custom-amount" className="text-gray-900 mb-2 block">
                Or Enter Custom Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  id="custom-amount"
                  type="number"
                  placeholder="0"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount('');
                  }}
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="text-gray-900 mb-2 block">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
              />
            </div>

            <div className="bg-purple-50 rounded-lg p-4 mb-6">
              <div className="space-y-2">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" />
              Complete Donation
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Global Stage Theatre is a registered 501(c)(3) non-profit. Your donation is tax-deductible.
            </p>
          </div>
        </motion.div>

        {/* Other Ways to Support */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportWays.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <way.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">{way.title}</h3>
              <p className="text-gray-600 mb-4">{way.description}</p>
              <button className="text-purple-600 hover:text-purple-700 flex items-center gap-1 group">
                {way.action}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
