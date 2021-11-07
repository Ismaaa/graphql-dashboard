import { application } from 'app/modules/dashboard/ui/index';

const Home = () => {
  const data = application.getData();

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Home;
