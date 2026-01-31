'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function StartPlanningModal({ open, onOpenChange }) {
  const [fromZip, setFromZip] = useState('');
  const [toZip, setToZip] = useState('');
  const [moveDate, setMoveDate] = useState('');
  const [housingType, setHousingType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = 'https://app.nextaddress.app';
    const params = new URLSearchParams();
    if (fromZip) params.append('from', fromZip);
    if (toZip) params.append('to', toZip);
    if (moveDate) params.append('date', moveDate);
    if (housingType) params.append('type', housingType);
    if (params.toString()) url += '?' + params.toString();
    window.location.href = url;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">Start Planning Your Move</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Moving from</label>
              <Input placeholder="ZIP" value={fromZip} onChange={(e) => setFromZip(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Moving to</label>
              <Input placeholder="ZIP" value={toZip} onChange={(e) => setToZip(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Move date</label>
            <Input type="date" value={moveDate} onChange={(e) => setMoveDate(e.target.value)} />
          </div>
          <div className="text-center">
            <label className="block text-sm font-medium text-gray-700 mb-2">Will you rent or own?</label>
            <div className="flex gap-6 justify-center">
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="housing" value="rent" className="mr-2" onChange={(e) => setHousingType(e.target.value)} />
                <span className="text-gray-700">Rent</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="housing" value="own" className="mr-2" onChange={(e) => setHousingType(e.target.value)} />
                <span className="text-gray-700">Own</span>
              </label>
            </div>
          </div>
          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
            Continue to App →
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}