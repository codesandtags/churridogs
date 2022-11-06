import Head from "next/head";
import Alert from "../components/alert/alert";
import Layout, { siteTitle } from "../components/layout";
import LeadCard from "../components/lead-card/lead-card";
import PostsContainer from "../components/posts-container/posts-container";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
   const allPostsData = getSortedPostsData();
   return {
      props: {
         allPostsData,
      },
   };
}

export default function Home({ allPostsData }) {
  let firstPost;
  let otherPosts = [];

  if (Array.isArray(allPostsData) && allPostsData.length > 0) {
    firstPost = allPostsData[0];
    otherPosts = allPostsData.slice(1);
  }

   return (
      <Layout home>
         <Head>
            <title>{siteTitle}</title>
         </Head>

         <section className={utilStyles.headingMd}>
            <LeadCard post={firstPost}></LeadCard>
            <PostsContainer posts={otherPosts}></PostsContainer>
         </section>
      </Layout>
   );
}
