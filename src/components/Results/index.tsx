import { IResult } from "@/types/MovieData";
import Card from "../Card";

type IProps = {
  results: IResult[];
};

export default function Results({ results }: IProps) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results?.map((result) => (
        <Card key={result?.id} result={result} />
      ))}
    </div>
  );
}
