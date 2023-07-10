
// export default BlogListComponent;
// 'use client';

import React, { useState }  from "react";
import dynamic from 'next/dynamic';
import { useRouter } from "next/router";



const CreateBlogComponent = () => {
  const Editor = dynamic(() => import("./../../components/ck5"), { ssr: false });
  const router = useRouter();

   
  const createNewBlog = () => {
    router.push('/blogs/create_blog');

  };

  const contentChange = () => {
  };
  return (
    <>
      <Editor
        value={"Foo"}
        onChange={contentChange} 
     />
     </>
)};

export default CreateBlogComponent;
