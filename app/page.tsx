import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Chapter } from "@/lib/types";
import { Separator } from "@/components/ui/separator";

export default async function Home() {
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
    <div className="flex flex-col min-h-screen">
      <header className="  py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            The Great Adventure
          </h1>
        </div>
      </header>
      <Separator />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="https://www.jagranimages.com/images/newimg/10092022/10_09_2022-bhagawad_geeta_updesh_23058803.webp"
              alt="Book Cover"
              width={500}
              height={600}
              className="rounded-lg shadow-lg mx-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Bhagavad Gita - The Cosmic Wisdom
            </h2>
            <p className="text-muted-foreground mb-6">
              Welcome to a sacred digital haven where the profound teachings of
              the Bhagavad Gita come alive. Immerse yourself in the timeless
              wisdom of this ancient scripture, as we present the complete
              Bhagavad Gita for you to explore and contemplate. Our mission is
              to make this spiritual treasure accessible to seekers around the
              world, fostering a journey of self-discovery, inner peace, and
              spiritual enlightenment. Dive into the verses that encapsulate the
              essence of life, duty, and the path to self-realization, and let
              the Bhagavad Gita be your guide on the journey to a more profound
              understanding of existence. Join us on this enlightening voyage
              through the words that have inspired generations and continue to
              illuminate the path to a harmonious and meaningful life.
            </p>
            <Button asChild>
              <Link href="/all-chapters">All chapters</Link>
            </Button>
          </div>
        </div>

        <section id="chapters" className="mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Chapters</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {result.map((chapter: Chapter) => (
              <Card key={chapter.id}>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Chapter - {chapter.id}
                  </h3>
                  <h3 className="text-lg font-semibold mb-2">
                    {chapter.name_translated} / {chapter.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {chapter.name_meaning}
                  </p>
                  <Button variant="default" asChild>
                    <Link href={`/chapter/${chapter.id}`}>Read Chapter</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-muted py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} The Great Adventure. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
