import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

export default function Affiliate() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Affiliate Disclosure</h1>
          <p className="text-lg text-gray-600">How NextAddress stays free for everyone</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency First</h3>
                  <p className="text-gray-700">
                    NextAddress is completely free to use. We sustain our service through partnerships with moving-related companies. This page explains how that works.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Affiliate Relationships?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you use NextAddress to connect with service providers (like internet companies, moving companies, or storage facilities), we may receive a commission if you choose to purchase their services. This is at no additional cost to you.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These partnerships allow us to keep NextAddress completely free while continuing to improve our tools and resources.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Affiliate Partners</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We work with carefully selected partners in the following categories:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong className="font-semibold">Internet Providers</strong> - When you set up internet service at your new home</li>
                <li><strong className="font-semibold">Moving Companies</strong> - Professional movers and truck rental services</li>
                <li><strong className="font-semibold">Storage Facilities</strong> - Self-storage and portable storage solutions</li>
                <li><strong className="font-semibold">Home Services</strong> - Utilities, security systems, and other essential services</li>
                <li><strong className="font-semibold">Moving Supplies</strong> - Boxes, packing materials, and moving equipment</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to You</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Despite these affiliate relationships, we are committed to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong className="font-semibold">Honest Recommendations:</strong> We only recommend services we believe are valuable. Our partnerships do not influence our editorial content or Zippy's recommendations.</li>
                <li><strong className="font-semibold">Transparent Pricing:</strong> You always pay the same price (or less) when booking through NextAddress compared to going directly to the provider.</li>
                <li><strong className="font-semibold">Multiple Options:</strong> Where possible, we provide multiple provider options so you can compare and choose what's best for you.</li>
                <li><strong className="font-semibold">User-First:</strong> If a service isn't right for you, we won't push it. Our goal is a successful move, not maximizing commissions.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Editorial Independence</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our moving guides, resources, and educational content are created independently of our affiliate relationships. We do not allow partners to dictate or influence our editorial content.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Zippy, our AI assistant, is programmed to provide the best recommendations for your specific situation, regardless of affiliate relationships.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">FTC Compliance</h2>
              <p className="text-gray-700 leading-relaxed">
                In compliance with Federal Trade Commission (FTC) guidelines, we disclose that NextAddress has financial relationships with some of the products and services mentioned on this website. We may be compensated if you click on links to these products or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Choice</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You are never required to use our affiliate links. You can always:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Research and contact providers directly</li>
                <li>Use our tools without connecting to service providers</li>
                <li>Compare multiple providers before making a decision</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                NextAddress will remain free and fully functional regardless of whether you use our affiliate links.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about our affiliate relationships or how we make money, please contact us at support@nextaddress.app. We're happy to explain how any specific partnership works.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Disclosure</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Affiliate Disclosure as we add new partners or change our business model. We will always maintain transparency about how we sustain NextAddress.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                If you have questions about our affiliate relationships, please contact us:
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