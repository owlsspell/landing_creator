'use client';

import { title } from '@/components/primitives';
import SamplePortal from './sampleportal';
import CaptivePortalForm from './captiveportalform';
import SlowpokePortal from './slowpokesportal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CaptivePortalPage() {

  return (
    <div>
      <h1 className={title()}>Captive Portal Editor</h1>

      <div className="flex flex-row p-4 mt-8 border-2 border-gray-700 rounded-lg gap-x-8 max-h-screen	 ">
        <Tabs defaultValue="portal" >
          <div className=''>
            <TabsList >
              <TabsTrigger value="portal">Slowpoke</TabsTrigger>
              <TabsTrigger value="success">Slowpoke success</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="portal" className=""><SlowpokePortal /></TabsContent>
          <TabsContent value="success" className="">  <SamplePortal /></TabsContent>
        </Tabs>
        <CaptivePortalForm />
      </div>
    </div>
  );
}
