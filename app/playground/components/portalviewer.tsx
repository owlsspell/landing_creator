'use client';

import useRemoteColorStore from './remoteColorStore';

export default function PortalViewer() {
  const remoteColor = useRemoteColorStore((state) => state.remoteColor);

  return (
    <>
      <div className="flex flex-col justify-center w-48 h-48 border-2 border-sky-700 rounded-2xl">
        <div className={`text-xl font-bold text-${remoteColor}`}>LogoCard Title</div>
        <div className="font-light text-teal-600 text-medium">LogoCard Text</div>
      </div>
    </>
  );
}
