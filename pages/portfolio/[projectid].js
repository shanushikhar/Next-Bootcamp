import { useRouter } from "next/router";

export default function projectid() {
  const router = useRouter();
  // console.log({ router });
  console.log(router.query);
  console.log(router.pathname);

  return <div>project id page</div>;
}
// http://localhost:3000/portfolio/22dfsds
