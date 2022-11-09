import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  console.log(router.query);

  return <div>Dynamic Client</div>;
}

// http://localhost:3000/clients/ugkjb
