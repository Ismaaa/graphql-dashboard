import { Part } from 'app/modules/dashboard/domain/part';

export type DashboardRepository = {
  getData: () => Promise<Dashboard>;
};

export type Dashboard = {
  parts: Part[];
};
