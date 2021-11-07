import { Dashboard } from 'app/modules/dashboard/domain/dashboard';
import PartMother from 'app/modules/dashboard/tests/partDoubles';

const create = (): Dashboard => ({
  parts: Array.from({ length: Math.floor(Math.random() * 6) + 1 }, () =>
    PartMother().create({})
  ),
});

export default function DashboardMother() {
  return {
    create(data: Partial<Dashboard>): Dashboard {
      return { ...create(), ...data };
    },
  };
}
