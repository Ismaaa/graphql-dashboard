import { Part } from 'app/modules/dashboard/domain/part';

export type DashboardRepository = {
  getData: () => Dashboard;
};

export type Dashboard = {
  parts: Part[];
};
