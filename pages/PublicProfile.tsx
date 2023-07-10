import { Layout, MyMap, PublicPropertyDamageCard } from '@/components';
import { AccidentCard, Card } from '@/components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function CallHelp() {
  return (
    <div className=" bg-primary flex-1 p-4 text-white border-1 border-dashed bg-gray-300">
      <div className="grid grid-cols-3 gap-4 px-4 py-8">
        <Card></Card>
      </div>
    </div>  
  );
}
