export interface Chapter {
  id: number;
  name: string;
  name_transliterated: string;
  name_translated: string;
  verses_count: number;
  chapter_number: number;
  name_meaning: string;
  chapter_summary: string;
  chapter_summary_hindi: string;
}

export interface ChapterCardProps {
  chapter: Chapter;
}

export interface Description {
    description : string;
}
export interface Translation {
    translation: Description;
    description: string;
    author_name: string;
    language: string;
}
export interface VerseCardProps {
    id: number;
    text: string;
    verse_number: number;
    translations: Translation[];
    description: string;
    translations1: string;
   
}
export interface Verses {
    verse: VerseCardProps[];
    
}








