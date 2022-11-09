import Link from "next/link";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  console.log(router.query);

  const blogs = [
    { id: "leo", name: "leonardo" },
    { id: "tyrian", name: "lannister" },
  ];

  return (
    <div>
      Dynamic Client
      <div>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`${Math.floor(Math.random() * 10)}/${blog.id}`}>
                {blog.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// http://localhost:3000/clients/ugkjb
