export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const q = (await searchParams).q;

  console.log("here we have q: ", {q})
  return (
    <>
      <div>q: {q}</div>
    </>
  );
}
