import { application } from 'app/modules/dashboard/ui/index';
import Part from 'app/modules/dashboard/ui/components/Part';
import { useEffect, useState } from 'react';
import { Dashboard } from 'app/modules/dashboard/domain/dashboard';

const Home = () => {
  const [data, setData] = useState<null | Dashboard>(null);

  useEffect(() => {
    application.getData().then((data) => setData(data));
  }, []);

  if (!data) return null;

  return (
    <div className="my-8 mx-auto max-w-7xl">
      <div className="mx-8 grid gap-4 grid-cols-dashboard justify-center">
        {data.parts.map((part, index) => (
          <Part key={`${index}-${part.name}`} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Home;
