'use client';

import { title } from '@/components/primitives';
import SamplePortal from './sampleportal';
import CaptivePortalForm from './captiveportalform';
import SlowpokePortal from './slowpokesportal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from 'react';
import { fontsList } from '@/store/data/fontsList';
import { useAuth } from '@clerk/nextjs';
import axios from 'axios';
import { useBoundStore } from '@/store/state';

export default function CaptivePortalPage() {

  const { userId } = useAuth();
  const updateState = useBoundStore((state) => state.updateState)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const isServer = () => typeof window === 'undefined'

    if (!isServer()) {
      import('webfontloader').then(imported => {
        imported.load({
          google: {
            families: fontsList
          },
          active: function () {
            console.log('fonts loaded');
          },
          loading: () => console.log('loading')
        });
      })
    }

  }, [])
  useEffect(() => {
    if (userId === null) return
    setLoading(true)
    axios.get('/api/database', { params: { userId } })
      .then(function (response) {
        console.log('response', response);
        updateState(response.data)
      })
      .catch(function (error) {
        console.log(error);
      }).finally(function () {
        setLoading(false)
      })

  }, [userId])

  return (
    <div className='w-full'>
      {loading ? "Loading..." : <>
        <h1 className={title()}>Captive Portal Editor</h1>

        <div className="flex flex-row p-4 mt-8 border-2 border-gray-700 rounded-lg gap-x-8 max-h-screen	w-full ">
          <Tabs defaultValue="portal" className='w-full overflow-hidden' >
            <div className=''>
              <TabsList >
                <TabsTrigger value="portal">Slowpoke</TabsTrigger>
                <TabsTrigger value="success">Slowpoke success</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="portal" className='overflow-scroll h-full'>
              <SlowpokePortal />
            </TabsContent>
            <TabsContent value="success" className='overflow-scroll h-full'>
              <SamplePortal />
            </TabsContent>
          </Tabs>
          <CaptivePortalForm />
        </div></>
      }</div>
  );
}
