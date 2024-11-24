
import { Button } from "@/components/ui/button"
import { VerseCardProps } from "@/lib/types";
import Link from "next/link";
interface VerseCardComponentProps {
    verse: VerseCardProps;
    id: number // Single verse
  }
  
export function VerseCard({ verse, id }: VerseCardComponentProps) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 space-y-4">
      
      <h2 className="text-xl font-bold">Verse {verse.verse_number}</h2>
      <h2 className=" font-bold">{verse.text}</h2>
      <p><span className="font-bold">Verse Meaning in {verse.translations[0].language} </span> <span className="">{verse.translations[0].description} </span></p>
    <p>by - {verse.translations[0].author_name}</p>
      {/* <p><span className="font-bold">Chapter Summary in english - </span> <span className="text-muted-foreground">{chapter.chapter_summary_hindi}</span></p> */}
      
      <Button asChild>
        <Link href={`/chapter/${id}/${verse.verse_number}`}>Read More</Link>
      </Button>
    </div>
  )
}

