'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, ClipboardList, Wrench, TrendingUp, Sparkles, CheckCircle2, Armchair, DollarSign } from 'lucide-react';
import StartPlanningModal from '@/components/StartPlanningModal';

export default function HowItWorks() {
  const [showPlanningModal, setShowPlanningModal] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            How NextAddress Works
          </h1>
          <p className="text-xl text-gray-600">
            Your complete moving guide — from planning to unpacking
          </p>
        </div>
      </section>

      {/* Step 1: Create Your Move */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-green-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl mr-4">
                  1
                </div>
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Create Your Move
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Enter where you're moving from and to, your move date, and whether you'll be renting or owning. NextAddress instantly creates a personalized moving plan just for you.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">No account needed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Takes less than 30 seconds</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Completely free forever</span>
                </li>
              </ul>
            </div>
            <div>
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-gray-900">Start Planning Your Move</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-600 font-medium">Moving from</label>
                        <input type="text" placeholder="ZIP" className="mt-1 w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-700 text-sm" />
                      </div>
                      <div>
                        <label className="text-sm text-gray-600 font-medium">Moving to</label>
                        <input type="text" placeholder="ZIP" className="mt-1 w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-700 text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 font-medium">Move date</label>
                      <input type="text" placeholder="mm/dd/yyyy" className="mt-1 w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-700 text-sm" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 font-medium block text-center mb-3">Will you rent or own?</label>
                      <div className="flex justify-center gap-6">
                        <label className="flex items-center gap-2 text-sm">
                          <input type="radio" name="housing" defaultChecked className="w-4 h-4" /> Rent
                        </label>
                        <label className="flex items-center gap-2 text-sm">
                          <input type="radio" name="housing" className="w-4 h-4" /> Own
                        </label>
                      </div>
                    </div>
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg">
                      Start Planning
                    </Button>
                    <p className="text-xs text-gray-500 text-center">No account needed • Free forever</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Build Your Checklists */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-green-200">
                  <CardContent className="p-4">
                    <div className="text-2xl mb-2">✓</div>
                    <h4 className="font-semibold text-sm text-gray-900">General Moving Tasks</h4>
                  </CardContent>
                </Card>
                <Card className="border-green-200">
                  <CardContent className="p-4">
                    <Armchair className="h-6 w-6 text-green-600 mb-2" />
                    <h4 className="font-semibold text-sm text-gray-900">Inventory</h4>
                  </CardContent>
                </Card>
                <Card className="border-green-200">
                  <CardContent className="p-4">
                    <div className="text-2xl mb-2">📞</div>
                    <h4 className="font-semibold text-sm text-gray-900">Who to Call</h4>
                  </CardContent>
                </Card>
                <Card className="border-green-200">
                  <CardContent className="p-4">
                    <div className="text-2xl mb-2">🛒</div>
                    <h4 className="font-semibold text-sm text-gray-900">Packing Supplies</h4>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl mr-4">
                  2
                </div>
                <ClipboardList className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Build Your Checklists
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Start organizing with our four default checklists: General Moving Tasks, Inventory, Who to Call, and Packing Supplies. Need something custom? Create any checklist from scratch to fit your unique situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Enhance with Powerful Tools */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl mr-4">
                3
              </div>
              <Wrench className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enhance with Powerful Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take your planning to the next level with our specially designed tools:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">📅</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Drag-and-Drop Calendar</h3>
                <p className="text-sm text-gray-600">
                  Schedule tasks, set reminders, and track your progress
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-6">
                <Armchair className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">Inventory Builder</h3>
                <p className="text-sm text-gray-600">
                  Decide what happens to each item: keep, store, sell, donate, or junk
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🏷️</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Box Packer</h3>
                <p className="text-sm text-gray-600">
                  Create custom labels with contents, destination room, truck placement, and special notes. Scan QR codes to instantly see what's in each box.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">Expense Tracker</h3>
                <p className="text-sm text-gray-600">
                  Track all moving costs and stay within budget
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Step 4: Track Your Progress */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-green-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl mr-4">
                  4
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Track Your Progress
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                As you complete tasks, check them off and track your completion. Stay organized with visual progress indicators that show what's done and what's left.
              </p>
            </div>
            <div>
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">General Moving Tasks</span>
                        <span className="text-sm font-medium text-green-600">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Who to Call</span>
                        <span className="text-sm font-medium text-green-600">60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                        <span className="text-sm font-medium text-green-600">68%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5: Meet Zippy */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="text-8xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Zippy</h3>
                  <p className="text-gray-600">Your Moving Buddy</p>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl mr-4">
                  5
                </div>
                <Sparkles className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Zippy, Your Moving Buddy
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Zippy is here to help! Our friendly moving assistant provides personalized tips, answers your moving questions, and helps you navigate every step of your relocation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 shadow-xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Get Started?
              </h2>
              <p className="text-lg mb-8 text-gray-300">
                Join thousands who've made their move stress-free with NextAddress
              </p>
              <Button
                onClick={() => setShowPlanningModal(true)}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white text-base font-medium px-12 py-6 h-auto rounded-lg"
              >
                Start Planning Your Move
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Modal */}
      <StartPlanningModal open={showPlanningModal} onOpenChange={setShowPlanningModal} />
    </div>
  );
}