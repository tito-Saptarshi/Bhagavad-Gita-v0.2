
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChapterCardProps } from "@/lib/types"



export function ChapterCard({ chapter }: ChapterCardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-2xl font-bold">Chapter {chapter.id}</h2>
      <h2 className="text-2xl font-bold">Chapter {chapter.name_translated} / {chapter.name}</h2>
      <p><span className="font-bold">Chapter Summary in english - </span> <span className="text-muted-foreground">{chapter.chapter_summary}</span></p>
      {/* <p><span className="font-bold">Chapter Summary in english - </span> <span className="text-muted-foreground">{chapter.chapter_summary_hindi}</span></p> */}
      
      <Button asChild>
        <Link href={`/chapter/${chapter.id}`}>Visit Chapter</Link>
      </Button>
    </div>
  )
}

