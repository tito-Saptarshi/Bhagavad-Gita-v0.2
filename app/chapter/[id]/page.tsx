import { VerseCard } from "@/components/VerseCard";
import { VerseCardProps } from "@/lib/types";

export default async function AllVerses({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.SECRET_KEY,
      "x-rapidapi-host": process.env.SECRET_HOST,
    },
  };
  let result: VerseCardProps[];
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
        <h1 className="text-4xl font-bold mb-8 text-center">Chapter {id}</h1>
        <div className="space-y-6 md:space-y-8">
          {result.map((verse: VerseCardProps) => (
            <VerseCard key={verse.id} verse={verse} id={id} />
          ))}
        </div>
      </main>
    </div>
  );
}
