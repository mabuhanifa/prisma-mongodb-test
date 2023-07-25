interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  posts?: Post[];
}

interface Post {
  id: string;
  slug: string;
  title: string;
  body: string;
  author: User;
  authorId: string;
}
