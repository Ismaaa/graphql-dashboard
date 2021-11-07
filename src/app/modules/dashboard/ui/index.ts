import app from 'app/modules/dashboard/application';
import httpDashboardRepository from 'app/modules/dashboard/infrastructure/api/httpDashboardRepository';

const repository = () => {
  return {
    api: httpDashboardRepository(),
  };
};

export const application = app({ repository: repository() });
