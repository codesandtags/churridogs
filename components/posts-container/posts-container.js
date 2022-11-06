import Link from 'next/link';

function getOneColumn(post) {
   return (
      <div
         key={post.title}
         className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
      >
         <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <Link
               href={post.url}
               className="flex flex-wrap no-underline hover:no-underline"
            >
               <img src={post.image} className="h-64 w-full rounded-t pb-6" />
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
            </Link>
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
      </div>
   );
}

function getTwoColumns(post) {
   return (
      <div
         key={post.title}
         className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink"
      >
         <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <Link
               href={post.url}
               className="flex flex-wrap no-underline hover:no-underline"
            >
               <img src={post.image} className="h-full w-full rounded-t pb-6" />
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
            </Link>
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
      </div>
   );
}

export default function PostsContainer({ posts }) {
   return (
      <div className="flex flex-wrap justify-between pt-12 -mx-6">
         {posts.map((post, index) => {
            if (index !== 0 && (index % 4 === 0 || index % 5 === 0)) {
               return getTwoColumns(post);
            }
            return getOneColumn(post);
         })}
      </div>
   );
}
