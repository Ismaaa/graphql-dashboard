import { DashboardRepository } from 'app/modules/dashboard/domain/dashboard';

export const getData = (repo: DashboardRepository) => () => repo.getData();
