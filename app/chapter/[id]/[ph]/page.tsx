import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default async function BookPage({
  params,
}: {
  params: { id: string; ph: string };
}) {
  const ph = params.ph;
  const id = params.id;

  const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/${ph}/`;
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
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <div className="space-y-1">
            <h2 className="font-medium leading-none text-muted-foreground py-4">
              Chapter {id}, Phrase {ph}
            </h2>
            <CardTitle className="text-2xl font-bold">{result.text}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="">{result.translations[0]?.description}</p>
          <Separator />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Explanation</h3>
            <div className="space-y-4">
              {result.commentaries?.map((phrase: any, index: number) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">
                      {phrase.author_name || "Unknown Author"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      {phrase.description || "No description available."}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">
                    Dr. Jane Smith, Astrophysicist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    This line encapsulates the scientific understanding of the
                    universe origins. It alludes to the initial singularity and
                    the subsequent rapid expansion that led to the formation of
                    galaxies, stars, and planets.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">
                    Prof. John Doe, Mythologist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    The author draws parallels to various creation myths across
                    cultures. This opening sets the stage for a narrative that
                    bridges scientific theory with mythological storytelling,
                    creating a unique perspective on th beginning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
