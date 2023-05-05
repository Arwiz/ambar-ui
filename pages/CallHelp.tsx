import { Layout, MyMap, PublicPropertyDamageCard } from '@/components';
import { AccidentCard, Card } from '@/components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function CallHelp() {
  const router = useRouter();

  const name = router.query.name;

  useEffect(() => {
    if (name) {
      console.log('Name is: ' + name);
    }
  }, [name]);

  return (
    <div className=" bg-primary flex-1 p-4 text-white border-1 border-dashed bg-gray-300">
      <h1>Page: {router.query.name}</h1>
      <h1>Call For Help</h1>
      <div className="grid grid-cols-3 gap-4 px-4 py-8">
        <AccidentCard></AccidentCard>
        <PublicPropertyDamageCard></PublicPropertyDamageCard>
        <MyMap></MyMap>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>  
  );
}
