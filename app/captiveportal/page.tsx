'use client';

import { title } from '@/components/primitives';
import SamplePortal from './sampleportal';
import CaptivePortalForm from './captiveportalform';

export default function CaptivePortalPage() {
  return (
    <div>
      <h1 className={title()}>Captive Portal Editor</h1>
      <div className="flex flex-row p-4 mt-8 border-2 border-gray-700 rounded-lg gap-x-8">
        <SamplePortal />
        <CaptivePortalForm />
      </div>
    </div>
  );
}
