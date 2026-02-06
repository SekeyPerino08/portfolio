import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // As if Response Data from the Backend
  const BlogData = [
    {
      id: "my-first-blog",
      title: "My First Blog",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: "Clifford",
      publishedDate: "January 31, 2026",
      commentsData: [
        "Hello",
        "Nice",
        "Good Post"
      ]
    },
  ]

  // Check if Index 1 Slug is Comments
  if (slug[1] === "comments") {
    return (
      <div className="container mx-auto px-6 pt-10">
        <Link href="./" className="flex items-center">
          <ArrowLeft />
          Back to Blog
        </Link>
        <h1 className="font-bold mb-4">{BlogData[0].title} Comments</h1>
        <div className="space-y-2">
          {BlogData[0].commentsData.map((comment) => (
            <div key={comment} className="border rounded-md bg-gray-100 p-5">{comment}</div>
          ))}
        </div>
      </div>
    )
  }

  // Validate Blog ID and Show not found if not valid blog
  const isValidBlog: Boolean = BlogData[0].id === slug[0];
  if (!isValidBlog) {
    return (
      <div className="flex justify-center pt-20">
        <p className="font-bold text-2xl text-gray-500">Blog Not Found</p>
      </div>
    )
  }

  // Display actual blog
  return (
    <div className="container mx-auto px-6 pt-10 space-y-4">
      <h1 className="font-bold">{BlogData[0].title}</h1>
      <p>
        {BlogData[0].content}
      </p>

      <div>
        <p>Author: {BlogData[0].author}</p>
        <p>Published Date: {BlogData[0].publishedDate}</p>
      </div>

      <Link href={slug + "/comments "}>
        <Button>View Comments</Button>
      </Link>
    </div>
  )
}