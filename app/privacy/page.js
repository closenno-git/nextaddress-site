import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Privacy() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                High Impact Leads, LLC ("we," "our," or "us") operates NextAddress.app. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and application.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information You Provide</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Move details (origin, destination, move date)</li>
                <li>Email address (if you choose to create an account)</li>
                <li>Moving preferences and selections</li>
                <li>Box inventory and packing information</li>
                <li>Budget and expense tracking data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Device information and IP address</li>
                <li>Browser type and version</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Provide and improve our moving planning services</li>
                <li>Personalize your experience with Zippy, our AI assistant</li>
                <li>Send you relevant moving tips and updates (if you opt in)</li>
                <li>Connect you with service providers in your area</li>
                <li>Analyze usage patterns to improve our platform</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage</h2>
              <p className="text-gray-700 leading-relaxed">
                NextAddress is designed to work offline. Much of your data is stored locally on your device. If you create an account, certain data is synced to our servers to enable access across devices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sharing Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong className="font-semibold">Service Providers:</strong> When you request quotes or services, we share relevant information with those providers (internet companies, movers, etc.)</li>
                <li><strong className="font-semibold">Analytics Partners:</strong> We use Google Analytics and similar services to understand how our platform is used</li>
                <li><strong className="font-semibold">Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We do not sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze usage, and serve relevant content. You can control cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Export your data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                NextAddress is not intended for children under 13. We do not knowingly collect information from children under 13.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <Card className="mt-6 border-green-200 shadow-sm">
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
          </div>
        </div>
      </section>
    </div>
  );
}