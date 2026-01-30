'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import StartPlanningModal from './StartPlanningModal';
import ComingSoonModal from './ComingSoonModal';

const toolsDropdown = [
  { name: 'Box Packer', href: '/tools/box-packer' },
  { name: 'State Comparison', href: '/tools/state-comparison' },
  { name: 'Expense Tracker', href: '/tools/expense-tracker' },
  { name: 'Calendar & Timeline', href: '/tools/calendar' }
];

const resourcesDropdown = [
  { name: 'Before You Move', href: '/resources/before-you-move' },
  { name: 'Packing & Organizing', href: '/resources/packing-organizing' },
  { name: 'Change of Address', href: '/resources/change-of-address' },
  { name: 'Utilities & Services', href: '/resources/utilities-services' },
  { name: 'Moving Day', href: '/resources/moving-day' },
  { name: 'After You Move', href: '/resources/after-you-move' }
];

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPlanningModal, setShowPlanningModal] = useState(false);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-gray-900">Next</span>
                <span className="text-green-500 mx-0.5">&gt;</span>
                <span className="text-green-500">Address</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/how-it-works" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                How It Works
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors font-medium">
                  Tools <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {toolsDropdown.map((item, idx) => (
                    <DropdownMenuItem key={idx} asChild>
                      <Link href={item.href}>{item.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors font-medium">
                  Resources <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {resourcesDropdown.map((item, idx) => (
                    <DropdownMenuItem key={idx} asChild>
                      <Link href={item.href}>{item.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/states" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Changing States?
              </Link>

              <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50" onClick={() => setShowComingSoonModal(true)}>
                Get the App
              </Button>

              <Button className="bg-green-500 hover:bg-green-600 text-white" onClick={() => setShowPlanningModal(true)}>
                Start Planning →
              </Button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link href="/how-it-works" className="text-gray-700 hover:text-green-600 font-medium">How It Works</Link>
                <div className="space-y-2">
                  <div className="font-semibold text-sm text-gray-500">Tools</div>
                  {toolsDropdown.map((item, idx) => (
                    <Link key={idx} href={item.href} className="block pl-4 text-gray-700 hover:text-green-600">{item.name}</Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-sm text-gray-500">Resources</div>
                  {resourcesDropdown.map((item, idx) => (
                    <Link key={idx} href={item.href} className="block pl-4 text-gray-700 hover:text-green-600">{item.name}</Link>
                  ))}
                </div>
                <Link href="/states" className="text-gray-700 hover:text-green-600 font-medium">Changing States</Link>
                <div className="flex flex-col gap-2 pt-4">
                  <Button variant="outline" className="w-full border-green-500 text-green-600" onClick={() => setShowComingSoonModal(true)}>Get the App</Button>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={() => setShowPlanningModal(true)}>Start Planning →</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-gray-900 text-gray-300 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Tools</h3>
              <ul className="space-y-2">
                {toolsDropdown.map((item, idx) => (
                  <li key={idx}><Link href={item.href} className="hover:text-green-400 transition-colors">{item.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                {resourcesDropdown.map((item, idx) => (
                  <li key={idx}><Link href={item.href} className="hover:text-green-400 transition-colors">{item.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Changing States</h3>
              <ul className="space-y-2">
                <li><Link href="/states" className="hover:text-green-400 transition-colors">View All 50 States</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-green-400 transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-green-400 transition-colors">Terms of Service</Link></li>
                <li><Link href="/affiliate" className="hover:text-green-400 transition-colors">Affiliate Disclosure</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold tracking-tight">
                <span className="text-white">Next</span>
                <span className="text-green-500 mx-0.5">&gt;</span>
                <span className="text-green-500">Address</span>
              </div>
              <p className="text-sm text-center flex-1">© 2026 NextAddress.app — A High Impact Leads Property</p>
              <div className="w-[200px]"></div>
            </div>
          </div>
        </div>
      </footer>

      <StartPlanningModal open={showPlanningModal} onOpenChange={setShowPlanningModal} />
      <ComingSoonModal open={showComingSoonModal} onOpenChange={setShowComingSoonModal} />
    </div>
  );
}