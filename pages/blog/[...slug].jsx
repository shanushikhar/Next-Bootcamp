// Catching all routes
import {useRouter} from 'next/router'

export default function BlogPost() {

    const router = useRouter()
    console.log(router.query)

  return (
    <div>BlogPost</div>
  )
}

// http://localhost:3000/blog/hello/23