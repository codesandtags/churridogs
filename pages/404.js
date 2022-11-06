import Link from "next/link";
import Image from "next/image";
import errorPage from "../styles/error-page.module.css";

export default function PageNotFound() {
   return (
      <>
         <main className={errorPage.errorWrapper}>
            <div className="text-center	">
               <Image
                  priority
                  src="https://media.tenor.com/IHdlTRsmcS4AAAAC/404.gif"
                  height={400}
                  width={400}
                  alt="Page not found"
               ></Image>
               <h1 title="404" className={errorPage.pageNotFound}>
                  Upps this page does not exist, sorry.
               </h1>
               <Link className={"text-base"} href="/">
                  Go back home
               </Link>
            </div>
         </main>
      </>
   );
}
