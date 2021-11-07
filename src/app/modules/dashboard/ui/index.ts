import memoryDashboardRepository from 'app/modules/dashboard/infrastructure/api/memoryDashboardRepository';
import app from 'app/modules/dashboard/application';

const repository = () => {
  return {
    api: memoryDashboardRepository(),
  };
};

export const application = app({ repository: repository() });
