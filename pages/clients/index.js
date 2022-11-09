import Link from "next/link";

export default function index() {
  const blogs = [
    { id: "leo", name: "leonardo" },
    { id: "tyrian", name: "lannister" },
  ];

  return (
    <div>
      Client page
      <div>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link
                href={`clients/${Math.floor(Math.random() * 10)}/${blog.id}`}
              >
                {blog.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// http://localhost:3000/clients
