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
               <Link href="/">
                  <Image
                     priority
                     src="/images/dog-profile-2.webp" // Route of the image file
                     className={utilStyles.borderCircle}
                     height={108}
                     width={108}
                     alt=""
                  />
               </Link>
               <h2 className={utilStyles.headingLg}>
                  <Link href="/" className={utilStyles.colorInherit}>
                     {name}
                  </Link>
               </h2>
            </>
         )}
      </header>
   );
}
