import { title } from '@/components/primitives';
import PortalEditor from './components/portaleditor';
import PortalViewer from './components/portalviewer';

export default function PlaygroundPage() {
  return (
    <div className="flex flex-col justify-start w-full">
      <div className="mb-12">
        <h1 className={title()}>Playground</h1>
      </div>
      <div className="flex flex-row w-full py-8 border-gray-700 divide-x-2 divide-sky-700 border-y-2">
        <div className="flex flex-row justify-center w-2/3">
          <PortalViewer />
        </div>
        <div className="w-1/3 min-w-[400px]">
          <PortalEditor />
        </div>
      </div>
    </div>
  );
}
