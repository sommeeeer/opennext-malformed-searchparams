export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const q = (await searchParams).q;

  return (
    <>
      <div>q: {q}</div>
    </>
  );
}
