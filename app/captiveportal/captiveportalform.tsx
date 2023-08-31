import React, { useState } from 'react';
import CaptiveInputs from '@/components/captiveportal/form/captiveinputs';
import CaptiveSubmitButton from '@/components/captiveportal/form/captivesubmitbutton';
import CaptiveTitles from '@/components/captiveportal/form/captivetitles';
import HeroTitle from '@/components/captiveportal/hero/hero';
import BackgroundSettings from '@/components/captiveportal/background/captiveoverlay';
import CaptiveFont from '@/components/captiveportal/font/captivefont';
import { AccordionSample } from '@/components/accordion';
import CaptiveSuccessPage from '@/components/captiveportal/success/success';
import CaptiveNoticePage from '@/components/captiveportal/success/notices';
import { useBoundStore } from '@/store/state';
import axios from 'axios';
import { useAuth } from '@clerk/nextjs';
import GalleryButton from '@/components/gallery/gallerybutton';
import { Label } from '@/components/ui/label';

const CaptivePortalForm = () => {
  const store = useBoundStore((state) => state)

  const logoImage = useBoundStore((state) => state.logoImage);
  const updateLogoImage = useBoundStore((state) => state.updateLogoImage);
  const heroImageUrl = useBoundStore((state) => state.heroImageUrl);
  const updateHeroImage = useBoundStore((state) => state.updateHeroImage);

  const { orgId } = useAuth();
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const json = {
      fonts: store.fonts,
      hero: {
        title: store.heroTitle,
        image: store.heroImage,
        overlay: { classes: store.heroOverlay },
        div: { classes: store.heroDiv },
      },
      background: {
        overlay: {
          classes: store.backgroundOverlay,
        }
      },
      headings: {
        signin: store.signin,
        success: [{
          text: store.successText,
          classes: store.successClasses
        }]
      },
      notices: store.notices,
      form: {
        submit: {
          content: store.submitText,
          classes: store.submitClasses,
        },
        fields: {
          standard: store.fields,
        }
      }
    }

    axios.post('/api/database', { orgId, json, logoUrl: logoImage, heroUrl: heroImageUrl })
      .then(function (response) {
        console.log('response', response);
      })
      .catch(function (error) {
        console.log(error);
      }).finally(function () {
        setLoading(false)
      })
  }


  const checkConditions = (width: number) => {
    if (width < 1200) {
      return "Image must be at least 1200 pixels"
    } else {
      return ""
    }
  }

  return (
    <form className="flex flex-col text-left gap-y-4 w-64 md:w-96 overflow-auto px-1" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold">Form Editor</h1>
      <AccordionSample title="General" textSize="text-xl text-left">
        <div className="flex flex-col text-left gap-y-4 overflow-auto px-1">
          <Label>Image: logo </Label>
          <GalleryButton saveImage={(url) => updateLogoImage(url)} directory="logo" />
          <Label>Image: background (transparent) </Label>
          <GalleryButton saveImage={(url) => updateHeroImage(url)} checkConditions={checkConditions} widthForLoading={1500} directory="hero" />
        </div>
        <AccordionSample title="Fonts" textSize="text-lg">
          <CaptiveFont />
        </AccordionSample>
        <AccordionSample title="Hero section" textSize="text-lg">
          <HeroTitle />
        </AccordionSample>
        <AccordionSample title="Background settings" textSize="text-lg">
          <BackgroundSettings />
        </AccordionSample>
      </AccordionSample>

      <AccordionSample title="Sign-on Page" textSize="text-xl text-left">
        <AccordionSample title="Headings" textSize="text-lg">
          <CaptiveTitles />
        </AccordionSample>
        <AccordionSample title="Inputs" textSize="text-lg">
          <CaptiveInputs />
        </AccordionSample>
        <AccordionSample title="Submit button" textSize="text-lg">
          <CaptiveSubmitButton />
        </AccordionSample>
      </AccordionSample>

      <AccordionSample title="Success Page" textSize="text-xl text-left">
        <AccordionSample title="Title" textSize="text-lg">
          <CaptiveSuccessPage />
        </AccordionSample>
        <AccordionSample title="Notices" textSize="text-lg">
          <CaptiveNoticePage />
        </AccordionSample>
      </AccordionSample>

      <button
        className="px-6 py-3 mt-4 font-bold text-green-100 bg-green-400 border rounded hover:bg-green-600 text-md disabled:bg-slate-400"
        type="submit"
        disabled={loading}
      >
        {!loading ? "Submit Form" : "Loading..."}
      </button>
    </form>
  );
};

export default CaptivePortalForm;

