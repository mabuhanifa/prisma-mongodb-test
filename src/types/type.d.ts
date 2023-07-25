interface User {
  id?: string | undefine;
  name: string;
  email: string;
  password: string | undefine;
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
