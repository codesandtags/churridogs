import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/layout";
import Date from "../../components/date/date";
import utilStyles from "../../styles/utils.module.css";

import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
   return (
      <Layout>
         <Head>
            <title>{postData.title}</title>
         </Head>
         <article className="w-full flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
               <img
                  src={postData.image}
                  className="w-full h-80 rounded-t pb-6"
               />
               <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                  <Date dateString={postData.date} />
               </p>
               <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                     Romantic
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                     Drama
                  </span>
               </p>
               <h2 className="w-full font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600 px-6">
                  {postData.title}
               </h2>

               <div
                  className="text-gray-800 font-serif text-base px-6 mb-5"
                  dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
               />
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
               <div className="flex items-center justify-between">
                  <img
                     className="w-8 h-8 rounded-full mr-4 avatar"
                     data-tippy-content="Author Name"
                     src="http://i.pravatar.cc/300"
                     alt="Avatar of Author"
                  />
                  <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
               </div>
            </div>
         </article>
      </Layout>
   );
}

export async function getStaticPaths() {
   const paths = getAllPostIds();
   return {
      paths,
      fallback: false,
   };
}

export async function getStaticProps({ params }) {
   const postData = await getPostData(params.id);
   return {
      props: {
         postData,
      },
   };
}
