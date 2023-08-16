'use client';

import { title } from '@/components/primitives';
import SamplePortal from './sampleportal';
import CaptivePortalForm from './captiveportalform';
import SlowpokePortal from './slowpokesportal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useBoundStore } from '@/store/state';
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import { fontsList } from '@/store/data/fontsList';

export default function CaptivePortalPage() {
  const fonts = useBoundStore((state) => state.fonts);

  useEffect(() => {
    if (window) {
      WebFont.load({
        google: {
          families: fontsList
        },
        active: function () {
          console.log('fonts loaded');
        },
        loading: () => console.log('loading')
      });
    }
  }, [])

  return (
    <div>
      <h1 className={title()}>Captive Portal Editor</h1>

      <div className="flex flex-row p-4 mt-8 border-2 border-gray-700 rounded-lg gap-x-8 max-h-screen	w-full ">
        <Tabs defaultValue="portal" className='w-full' >
          <div className=''>
            <TabsList >
              <TabsTrigger value="portal">Slowpoke</TabsTrigger>
              <TabsTrigger value="success">Slowpoke success</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="portal">
            <SlowpokePortal />
          </TabsContent>
          <TabsContent value="success">
            <SamplePortal />
          </TabsContent>
        </Tabs>
        <CaptivePortalForm />
      </div>
    </div>
  );
}
