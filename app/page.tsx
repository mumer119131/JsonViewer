import { JsonViewer } from './components/json_viewer/json_viewer';
import { Analytics } from '@vercel/analytics/next';

export default function Home() {
  

  return (
    <div className='bg-gray-900'>
       <Analytics />
      <div className='container mx-auto'>
        <JsonViewer />
      </div>
    </div>
  );
}
