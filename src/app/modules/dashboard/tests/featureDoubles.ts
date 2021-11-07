import faker from 'faker';
import {
  Feature,
  Parameter,
  Quality,
} from 'app/modules/dashboard/domain/feature';
import { oneOf } from 'app/shared/tests/one-of';

const parameters = ['x', 'y', 'z', 'Length', 'Diameter'];

const createParameter = (data: Partial<Parameter>): Parameter => ({
  name: oneOf(parameters),
  value: faker.datatype.number({
    max: 15,
  }),
  accumulatedValue: faker.datatype.number({
    max: 50,
  }),
  ...data,
});

const create = (): Feature => ({
  name: oneOf<string>(['Seam', 'Slot', 'Hole']),
  quality: oneOf<Quality>(['high', 'medium', 'low']),
  parameters: Array.from(
    { length: Math.floor(Math.random() * (parameters.length * 2)) + 1 },
    (_, i) => {
      const index = i >= parameters.length ? i - parameters.length : i;

      return createParameter({
        name: parameters[index],
      });
    }
  ),
});

export default function FeatureMother() {
  return {
    create(data: Partial<Feature>): Feature {
      return { ...create(), ...data };
    },
  };
}
