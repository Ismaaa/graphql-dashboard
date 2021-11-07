import DashboardMother from 'app/modules/dashboard/tests/dashboardDoubles';
import { Dashboard } from 'app/modules/dashboard/domain/dashboard';

export default function memoryDashboardRepository() {
  return {
    getData(): Promise<Dashboard> {
      return new Promise((resolve) => resolve(DashboardMother().create({})));
    },
  };
}
