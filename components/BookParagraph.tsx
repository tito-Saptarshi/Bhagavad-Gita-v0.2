import Link from 'next/link'

interface BookParagraphProps {
  title: string
  content: string
  link: string
}

export default function BookParagraph({ title, content, link }: BookParagraphProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
      <Link href={link} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
        Read More
      </Link>
    </div>
  )
}

