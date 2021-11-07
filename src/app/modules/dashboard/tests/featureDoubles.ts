import faker from 'faker';
import {
  Feature,
  Parameter,
  Quality,
} from 'app/modules/dashboard/domain/feature';
import { oneOf } from 'app/shared/tests/one-of';

const parameters = ['x', 'y', 'z', 'Length', 'Diameter'];

const createParameter = (): Parameter => ({
  name: oneOf(parameters),
  value: faker.datatype.number({
    max: 50,
  }),
});

const create = (): Feature => ({
  name: oneOf<string>(['Seam', 'Slot', 'Hole']),
  quality: oneOf<Quality>(['high', 'medium', 'low']),
  parameters: Array.from(
    { length: Math.floor(Math.random() * parameters.length) + 1 },
    () => createParameter()
  ),
});

export default function FeatureMother() {
  return {
    create(data: Partial<Feature>): Feature {
      return { ...create(), ...data };
    },
  };
}
