import { application } from 'app/modules/dashboard/ui/index';
import Part from 'app/modules/dashboard/ui/components/Part';

const Home = () => {
  const data = application.getData();

  return (
    <div>
      {data.parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </div>
  );
};

export default Home;
