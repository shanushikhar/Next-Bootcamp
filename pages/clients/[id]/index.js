import Link from "next/link";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  console.log(router.query);

  const blogs = [
    { id: "leo", name: "leonardo" },
    { id: "tyrian", name: "lannister" },
  ];

  function loadProjectHandler() {
    // if put /jon/snow => will give error so put it like /clients/jon/snow ******* BEST Approach ******
    // if put jon/snow => will append clients here
    // router.push("jon/snow");
    // or
    //router.push("/clients/jon/snow");
    router.push({
      pathname: "/clients/[id]/[randomName]",
      query: { id: "khalisee", randomName: "Mother of Dragon" },
    });
  }

  return (
    <div>
      Dynamic Client
      <div>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link
                href={`/clients/${Math.floor(Math.random() * 10)}/${blog.id}`}
              >
                {blog.name}
              </Link>
              <br />
              <Link
                href={{
                  pathname: "/clients/[id]/[randomName]",
                  // or
                  //pathname: "[id]/[randomName]",
                  query: { id: blog.id, randomName: blog.name },
                }}
              >
                {blog.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={loadProjectHandler}>Click</button>
    </div>
  );
}

// http://localhost:3000/clients/ugkjb
