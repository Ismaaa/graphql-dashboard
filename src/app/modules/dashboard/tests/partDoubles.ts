import { Part } from 'app/modules/dashboard/domain/part';

import faker from 'faker';
import FeatureMother from 'app/modules/dashboard/tests/featureDoubles';

const create = (): Part => ({
  name: faker.random.word(),
  features: Array.from({ length: Math.floor(Math.random() * 6) + 1 }, () =>
    FeatureMother().create({})
  ),
});

export default function PartMother() {
  return {
    create(data: Partial<Part>): Part {
      return { ...create(), ...data };
    },
  };
}
