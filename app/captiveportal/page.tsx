'use client';

import { title } from '@/components/primitives';
import SamplePortal from './sampleportal';
import CaptivePortalForm from './captiveportalform';
import SlowpokePortal from './slowpokesportal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from 'react';
import { fontsList } from '@/store/data/fontsList';
import { useAuth, useOrganizationList } from '@clerk/nextjs';
import axios from 'axios';
import { useBoundStore } from '@/store/state';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function CaptivePortalPage() {

  const { userId, orgId, sessionId } = useAuth();
  const updateState = useBoundStore((state) => state.updateState)
  const router = useRouter()
  const [, setLoading] = useState(false)
  const { organizationList, setActive } = useOrganizationList()

  useEffect(() => {
    if (organizationList !== null && organizationList?.length === 0) return
    if (orgId === null && organizationList) setActive({ session: sessionId, organization: organizationList[0].organization.id })
  }, [orgId, organizationList])

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
    if (userId === null || orgId === null) return
    setLoading(true)
    axios.get('/api/database', { params: { orgId } })
      .then(function (response) {
        console.log('response', response);
        updateState(response.data)
      })
      .catch(function (error) {
        console.log(error);
      }).finally(function () {
        setLoading(false)
      })

  }, [orgId])

  function goToCreateOrganization() {
    router.push("/create-organization")
  }

  return (
    <div className='w-full'>
      {orgId === null ? <>
        <p className="mb-4">Create your organization</p>
        <Button onClick={goToCreateOrganization}>Create</Button>
      </> :
        <>
          <h1 className={title()}>Captive Portal Editor</h1>
          <div className="flex flex-row p-4 mt-8 border-2 border-gray-700 rounded-lg gap-x-2 lg:gap-x-8 max-h-screen w-full">
            <Tabs defaultValue="portal" className='w-full overflow-hidden' >
              <div className=''>
                <TabsList >
                  <TabsTrigger value="portal">Sign-on Page</TabsTrigger>
                  <TabsTrigger value="success">Success Page</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="portal" className='overflow-scroll h-full min-h-[calc(100%-65px)]'>
                <SlowpokePortal />
              </TabsContent>
              <TabsContent value="success" className='overflow-scroll h-full'>
                <SamplePortal />
              </TabsContent>
            </Tabs>
            <CaptivePortalForm />
          </div>
        </>}
    </div>
  );
}
