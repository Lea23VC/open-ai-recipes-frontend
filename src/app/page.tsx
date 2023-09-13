import fetchIngredients from '@/utils/data/fetchIngredients';

export default async function Home() {
  const res = await fetchIngredients();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {res.data.fruits.map((fruit, key) => (
          <div key={key} className="flex flex-col items-center justify-between">
            {fruit}
          </div>
        ))}
      </div>
    </main>
  );
}
