import DashboardMother from 'app/modules/dashboard/tests/dashboardDoubles';

export default function memoryDashboardRepository() {
  return {
    getData() {
      return DashboardMother().create({});
    },
  };
}
