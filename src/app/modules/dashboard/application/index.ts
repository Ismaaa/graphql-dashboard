import { DashboardRepository } from 'app/modules/dashboard/domain/dashboard';
import { getData } from 'app/modules/dashboard/application/dashboard';

type Dependencies = {
  repository: {
    api: DashboardRepository;
  };
};

const app = ({ repository: { api: apiRepository } }: Dependencies) => {
  return {
    get getData() {
      return getData(apiRepository);
    },
  };
};

export default app;
