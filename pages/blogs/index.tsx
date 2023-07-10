
// export default BlogListComponent;

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { SubmitButton } from '../../components/SubmitButton';

export async function getStaticProps() {
  try {
    const response = await axios.get('http://localhost:3001/blog');
    const data = response.data;
    console.log('data ', data);
    return {
      props: {
        data
      }
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: []
      }
    };
  }
}


interface BlogContent {
    title: string;
    content: string;
}

const BlogListComponent = (props: any) => {

  const { data } = props;
     const router = useRouter();
     const [blogs, setBlogs] = useState<BlogContent[]>([]);
  
    useEffect(() => { 
      if (data?.length > 0) {
        setBlogs(data);
      }

    }, [data]);
 
   const navigateToCreateBlog = () => {
    router.push('/blogs/create_blog');

  };

    return (
    <div className="max-w-xl mx-auto py-4">
      <h2 className="text-2xl font-bold mb-4">Blogs</h2>
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
          <p className="text-gray-600">{blog.content}</p>
        </div>
      ))}
        <SubmitButton onClick={navigateToCreateBlog} title="Create New Blog"></SubmitButton>
    </div>
    )
};



export default BlogListComponent;
