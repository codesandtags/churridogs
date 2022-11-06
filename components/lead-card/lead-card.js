import PostsContainer from "../posts-container/posts-container";
import Link from "next/link";

export default function LeadCard({ post }) {
   console.log(post);
   return (
      <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
         <Link
            href={post.url}
            className="flex flex-wrap no-underline hover:no-underline"
         >
            <div className="w-full md:w-2/3 rounded-t">
               <img src={post.image} className="h-full w-full shadow" />
            </div>

            <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
               <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                  <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">
                     <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        Romantic
                     </span>
                     <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        Drama
                     </span>
                  </p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">
                     {post.title}
                  </div>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5">
                     {post.excerpt}
                  </p>
               </div>

               <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                  <div className="flex items-center justify-between">
                     <img
                        className="w-8 h-8 rounded-full mr-4 avatar"
                        data-tippy-content="Author Name"
                        src="http://i.pravatar.cc/300"
                        alt="Avatar of Author"
                     />
                     <p className="text-gray-600 text-xs md:text-sm">
                        1 MIN READ
                     </p>
                  </div>
               </div>
            </div>
         </Link>
      </div>
   );
}
