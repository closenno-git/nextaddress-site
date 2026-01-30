'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, TrendingUp, MapPin, Phone, Mail } from 'lucide-react';
import StartPlanningModal from '@/components/StartPlanningModal';

export default function About() {
  const [showPlanningModal, setShowPlanningModal] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About NextAddress</h1>
          <p className="text-2xl text-gray-600">Moving made simple.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Moving is consistently rated as one of life's most stressful events. We believe it doesn't have to be that way.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              NextAddress was created to make moving simple, organized, and stress-free by providing free tools, personalized guidance, and local insights for every stage of your move.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-white rounded-xl border shadow p-8">
              <Heart className="h-12 w-12 mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free Forever</h3>
              <p className="text-gray-600">
                Moving is expensive enough. Our tools are free — no catch, no premium tier, no credit card required.
              </p>
            </div>

            <div className="text-center bg-white rounded-xl border shadow p-8">
              <Users className="h-12 w-12 mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">User-First</h3>
              <p className="text-gray-600">
                Every feature is designed based on our users feedback.
              </p>
            </div>

            <div className="text-center bg-white rounded-xl border shadow p-8">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Always Improving</h3>
              <p className="text-gray-600">
                We're constantly building new tools and features based on what movers actually need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            NextAddress was born from personal frustration with the moving process. After multiple moves that involved forgotten tasks, surprise expenses, and unnecessary stress, we realized there had to be a better way.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We started by creating simple checklists and tools for ourselves. When we shared them with friends and family, the response was overwhelming. Everyone had the same pain points, and traditional moving solutions were either expensive or incomplete.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Today, NextAddress helps thousands of people move every month. We're constantly improving based on user feedback, adding new features, and expanding our city guides to help you wherever you're headed.
          </p>
        </div>
      </section>

      {/* About High Impact Leads */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About High Impact Leads, LLC</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            NextAddress is a product of High Impact Leads, LLC, a technology company focused on building practical tools that solve real problems.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We're committed to building products that genuinely help people while maintaining transparency about how we sustain our business through partnerships with service providers.
          </p>
          <Card className="mt-8 border-green-200 shadow-sm">
            <CardContent className="p-6">
              <p className="text-base font-semibold text-gray-900 mb-4">High Impact Leads, LLC</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    5123 W. 98th Street #139<br />
                    Bloomington, MN 55437
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <a href="tel:866-790-2999" className="text-sm text-green-600 hover:text-green-700 font-medium">
                    866-790-2999
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <a href="mailto:support@nextaddress.app" className="text-sm text-green-600 hover:text-green-700 font-medium">
                    support@nextaddress.app
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Planning <span className="text-green-500">Your Move?</span>
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Join thousands of happy movers who made their relocation stress-free
            </p>
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 h-auto"
              onClick={() => setShowPlanningModal(true)}
            >
              Start Planning Your Move <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <StartPlanningModal open={showPlanningModal} onOpenChange={setShowPlanningModal} />
    </div>
  );
}