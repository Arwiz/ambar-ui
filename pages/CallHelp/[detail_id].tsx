import { Layout, MyMap, PublicPropertyDamageCard } from '@/components';
import { AccidentCard, Card } from '@/components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function IncidentDeail() {
  const router = useRouter();

  const detailId = router.query.detail_id;

  // useEffect(() => {
  
  // }, [name]);

  return (
    <div className=" bg-primary flex-1 p-4 text-white border-1 border-dashed bg-gray-300">
      <h1>Deatil Page: {router.query.detail_id}</h1>
      <h1>Call For Help Deatils </h1>
      <div className="grid grid-cols-3 gap-4 px-4 py-8">
        {detailId}
      </div>
    </div>  
  );
}
