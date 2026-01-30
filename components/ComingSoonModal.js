'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ComingSoonModal({ open, onOpenChange }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onOpenChange(false);
      setSubmitted(false);
      setEmail('');
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Coming Soon!</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-gray-600">
                Our app is currently in development. Enter your email to be notified when it launches.
              </p>
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                Notify Me
              </Button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="text-4xl mb-3">✓</div>
              <p className="text-green-600 font-semibold">Thanks! We'll notify you soon.</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}