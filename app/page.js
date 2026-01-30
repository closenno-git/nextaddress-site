'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Star } from 'lucide-react';
import StartPlanningModal from '@/components/StartPlanningModal';
import ComingSoonModal from '@/components/ComingSoonModal';

export default function Home() {
  const [fromZip, setFromZip] = useState('');
  const [toZip, setToZip] = useState('');
  const [moveDate, setMoveDate] = useState('');
  const [showPlanningModal, setShowPlanningModal] = useState(false);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

  const handleStartPlanning = () => {
    let url = 'https://app.nextaddress.app';
    const params = new URLSearchParams();
    if (fromZip) params.append('from', fromZip);
    if (toZip) params.append('to', toZip);
    if (moveDate) params.append('date', moveDate);
    if (params.toString()) url += '?' + params.toString();
    window.open(url, '_blank');
  };

  return (
    <div>
      {/* Section 1: Split Hero */}
      <section className="bg-gradient-to-br from-green-100 via-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ✨ 100% Free Moving Assistant
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Make Your Next Move <span className="text-green-500">Simple & Stress-Free</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Plan, pack, and track your move — all in one place.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {['Complete Moving Toolkit', 'Free Forever', 'No Sign-up Required'].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-semibold">{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6" onClick={() => setShowPlanningModal(true)}>
                  Start Planning Your Move <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button asChild size="lg" variant="outline" className="border-gray-300 text-gray-700 text-lg px-8 py-6">
                  <Link href="/how-it-works">See How It Works</Link>
                </Button>
              </div>
            </div>
            <div>
              <Card className="shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Planning Your Move</h3>
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Moving from</label>
                        <Input placeholder="ZIP" value={fromZip} onChange={(e) => setFromZip(e.target.value)} className="text-lg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Moving to</label>
                        <Input placeholder="ZIP" value={toZip} onChange={(e) => setToZip(e.target.value)} className="text-lg" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Move date</label>
                      <Input type="date" value={moveDate} onChange={(e) => setMoveDate(e.target.value)} className="text-lg" />
                    </div>
                    <div className="text-center">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Will you rent or own?</label>
                      <div className="flex gap-6 justify-center">
                        <label className="flex items-center cursor-pointer">
                          <input type="radio" name="housing" value="rent" className="mr-2" />
                          <span className="text-gray-700">Rent</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input type="radio" name="housing" value="own" className="mr-2" />
                          <span className="text-gray-700">Own</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <Button onClick={handleStartPlanning} className="w-full bg-green-500 hover:bg-green-600 text-white text-lg h-14 rounded-xl">
                    Start Planning <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="mt-4 text-center text-sm text-gray-500">🔒 No account needed • Free forever</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Feature Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need for a Smooth Move</h2>
            <p className="text-xl text-gray-600">From packing to settling in, we've got you covered every step of the way</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Smart Personalization', desc: 'Custom checklists tailored to your destination, situation, and timeline' },
              { icon: '📅', title: 'Moving Calendar', desc: 'Never miss a deadline with our intelligent drag-and-drop calendar' },
              { icon: '📦', title: 'Box Packer', desc: 'Organize and track every box with QR codes, photos, labels, and room assignments' },
              { icon: '💰', title: 'Budget Tracking', desc: 'Monitor expenses and stay on budget with our expense tracker' },
              { icon: '📍', title: 'Local Recommendations', desc: 'Navigate your new neighborhood like a local — from day one' },
              { icon: '⚡', title: 'AI Assistant (Zippy)', desc: 'Get instant answers and moving tips from Zippy, your AI moving buddy' },
            ].map((feature, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: '📍', title: 'Enter Your Move Details', desc: "Tell us where you're moving from and to" },
              { icon: '✅', title: 'Get Your Personalized Plan', desc: 'Checklist, timeline, and local tips from Zippy' },
              { icon: '🔌', title: 'Connect Services & Save', desc: 'Internet, movers, utilities — all in one place' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="bg-green-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              <Link href="/how-it-works">Learn More About How It Works →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 4: Resource Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Moving Resources</h2>
            <p className="text-xl text-gray-600">Expert guides to help you every step of the way</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { tag: 'Before You Move', tagColor: 'text-blue-600', title: 'How to Give Notice to Your Landlord', desc: 'Learn the proper way to give notice and avoid losing your security deposit.', href: '/resources/before-you-move' },
              { tag: 'Packing & Organizing', tagColor: 'text-purple-600', title: 'The Ultimate Packing Checklist', desc: 'Room-by-room guide to packing everything you own efficiently.', href: '/resources/packing-organizing' },
              { tag: 'Change of Address', tagColor: 'text-green-600', title: 'Complete USPS Change of Address Guide', desc: 'Step-by-step instructions for forwarding your mail to your new address.', href: '/resources/change-of-address' },
              { tag: 'Utilities & Services', tagColor: 'text-yellow-600', title: 'Setting Up Internet at Your New Home', desc: 'Compare providers and get connected before you move in.', href: '/resources/utilities-services' },
              { tag: 'Moving Day', tagColor: 'text-orange-600', title: 'What to Expect on Moving Day', desc: 'Timeline and checklist for a smooth moving day experience.', href: '/resources/moving-day' },
              { tag: 'After You Move', tagColor: 'text-pink-600', title: 'Your First Week in a New Home', desc: 'Essential tasks to tackle in your first seven days.', href: '/resources/after-you-move' },
            ].map((resource, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`text-xs font-semibold ${resource.tagColor} mb-2`}>{resource.tag}</div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{resource.desc}</p>
                  <Link href={resource.href} className="text-green-600 hover:text-green-700 font-semibold text-sm inline-flex items-center">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/resources">View All Resources →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 5: PWA Promotion */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-500 rounded-3xl p-12 text-center text-white">
            <div className="text-6xl mb-6">📱</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Take NextAddress With You</h2>
            <p className="text-xl mb-8 text-green-50">Plan your move on any device. Works offline.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Download for iOS', 'Download for Android', 'Add to Home Screen'].map((text, i) => (
                <Button key={i} className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-6" onClick={() => setShowComingSoonModal(true)}>
                  {text}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Trusted by Thousands of Movers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "NextAddress made my cross-country move so much easier! The checklist kept me organized and I didn't forget a single thing.", name: 'Sarah T.', location: 'Austin, TX' },
              { quote: "The Box Packer tool was a game changer. I knew exactly what was in each box and unpacking was a breeze!", name: 'Michael R.', location: 'Seattle, WA' },
              { quote: "I love that it works offline! I could access my moving checklist even when my internet was disconnected.", name: 'Jennifer L.', location: 'Denver, CO' },
            ].map((testimonial, i) => (
              <Card key={i} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Planning <span className="text-green-500">Your Move?</span>
            </h2>
            <p className="text-xl mb-8 text-gray-300">Join thousands of happy movers who made their relocation stress-free</p>
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-xl px-12 py-8 h-auto" onClick={() => setShowPlanningModal(true)}>
              Start Planning Your Move <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      <StartPlanningModal open={showPlanningModal} onOpenChange={setShowPlanningModal} />
      <ComingSoonModal open={showComingSoonModal} onOpenChange={setShowComingSoonModal} />
    </div>
  );
}