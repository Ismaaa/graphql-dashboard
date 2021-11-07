import { application } from 'app/modules/dashboard/ui/index';
import Part from 'app/modules/dashboard/ui/components/Part';

const Home = () => {
  const data = application.getData();

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
