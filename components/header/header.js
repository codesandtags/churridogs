import Image from "next/image";
import Link from "next/link";

import utilStyles from "../../styles/utils.module.css";
import styles from "../layout.module.css";

export default function Header({ children, home, name }) {
   return (
      <header className={styles.header}>
         {home ? (
            <>
               <div
                  className="w-full m-0 p-0 bg-cover bg-bottom"
                  style={{
                     backgroundImage: "url('https://images.unsplash.com/photo-1511561415413-c643d4969838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",
                     backgroundPosition: 'center center',
                     height: "60vh",
                     maxHeight: "460px",
                  }}
               >
                  <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
                     <p className="text-white font-extrabold text-3xl md:text-5xl mb-2">
                        🐶 Welcome to {name}
                     </p>
                     <span className="text-xl md:text-2xl text-white bg-cyan-500 p-2">
                        The ultimate professional website for dogs with amazing skills.
                     </span>
                  </div>
               </div>
            </>
         ) : (
            <> 
            <nav className="w-full bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link href="/" className="flex items-center no-underline hover:no-underline">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">🐶 {name}</span>
                    </Link>
                </div>
            </nav>
            </>
         )}
      </header>
   );
}
