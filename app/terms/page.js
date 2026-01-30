import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Terms() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using NextAddress.app, you agree to be bound by these Terms of Service. 
                If you disagree with any part of these terms, you may not access the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Service</h2>
              <p className="text-gray-700 leading-relaxed">
                NextAddress is a free moving planning platform that provides tools, checklists, guides, 
                and AI-powered assistance (Zippy) to help you plan and execute your move.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Service</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Permitted Use</h3>
              <p className="text-gray-700 leading-relaxed mb-3">You may use NextAddress to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Plan your personal or household move</li>
                <li>Access moving resources and guides</li>
                <li>Use our tools (Box Packer, Expense Tracker, etc.)</li>
                <li>Get recommendations from Zippy</li>
                <li>Connect with service providers</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Prohibited Use</h3>
              <p className="text-gray-700 leading-relaxed mb-3">You may NOT:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Use the service for any illegal purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Scrape, copy, or duplicate our content without permission</li>
                <li>Impersonate others or provide false information</li>
                <li>Interfere with the proper functioning of the service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Accounts</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                While NextAddress can be used without an account, creating an account allows you to sync 
                your data across devices. You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Providers</h2>
              <p className="text-gray-700 leading-relaxed">
                NextAddress may connect you with third-party service providers (movers, internet companies, 
                etc.). We are not responsible for the services provided by these third parties. Any agreements 
                you enter into with service providers are between you and them.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Content and Intellectual Property</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Content</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                All content on NextAddress (text, graphics, logos, images, software) is owned by High Impact 
                Leads, LLC or our licensors and is protected by copyright and trademark laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Content</h3>
              <p className="text-gray-700 leading-relaxed">
                You retain ownership of any content you create using NextAddress (packing lists, notes, etc.). 
                By using our service, you grant us a license to store and process this content to provide the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                NextAddress is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either 
                express or implied. We do not guarantee that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>The service will be uninterrupted or error-free</li>
                <li>All information provided is accurate or complete</li>
                <li>Any defects will be corrected</li>
                <li>The service is free from viruses or harmful components</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                High Impact Leads, LLC shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of or inability to use the service. In no event shall 
                our total liability exceed $100.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify and hold harmless High Impact Leads, LLC from any claims, damages, 
                losses, or expenses arising from your use of NextAddress or violation of these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Service</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any part of NextAddress at any time 
                without notice. We are not liable for any modification, suspension, or discontinuation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms of Service from time to time. Continued use of the service after 
                changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by the laws of the State of Minnesota, United States, without 
                regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                For questions about these Terms of Service, contact us:
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