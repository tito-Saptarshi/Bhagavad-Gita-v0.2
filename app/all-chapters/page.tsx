import { ChapterCard } from "@/components/ChapterCard";
import { Chapter } from "@/lib/types";

export default async function BookChapters() {
  const url =
    "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.SECRET_KEY,
      "x-rapidapi-host": process.env.SECRET_HOST,
    },
  };
  let result;
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    result = await response.json(); // Parsing as JSON since the API likely returns JSON
    console.log(result);
  } catch (error) {
    console.error("Error fetching chapters:", error);
    result = {
      error: "Failed to fetch chapters data. Please try again later.",
    };
  }
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">All Chapters</h1>
        <div className="space-y-6 md:space-y-8">
          {result.map((chapter: Chapter ) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </main>
    </div>
  );
}
