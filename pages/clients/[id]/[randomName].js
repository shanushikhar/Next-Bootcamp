import { useRouter } from "next/router";

export default function RandomName() {
  const router = useRouter();
  console.log(router.query);
  return <div>RandomName</div>;
}

// http://localhost:3000/clients/ugkjb/67567
