import { Layout, MyMap, PublicPropertyDamageCard } from '@/components';
import { AccidentCard, Card } from '@/components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function IncidentDeail() {
  const router = useRouter();
  const detailId = router.query.name;
  const user_id = router.query.name;
   const data = router.query.data ? JSON.parse(router.query.data) : null;


  useEffect(() => {
    if (user_id) {
      console.log("user_id=>", user_id,);    
    }
    console.log("user_id=>", user_id,);    
  }, [user_id]);

  return (
    <div className=" bg-blue-100 flex flex-col min-h-screen justify-" >
      <h1>Deatil Page: {router.query.detail_id}</h1>
      <h1>Call For Help Deatils </h1>
      <div className="flex-1">
        {detailId} {data.first_name}
      </div>
       <div className=" bg-slate-500 ">
         <button className="bg-blue-800 m-10 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 justify-center"
        type="button">Inform Family</button>
      </div>
    </div>  
  );
}
