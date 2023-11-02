import { IResults } from "@/types/MovieData";

type IProps = {
  results: IResults[];
};

export default function Results({ results }: IProps) {
  return (
    <div>
      {results?.map((result) => (
        <div key={result?.id}>{result?.original_title}</div>
      ))}
    </div>
  );
}
