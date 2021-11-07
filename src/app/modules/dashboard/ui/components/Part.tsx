import { Part as TPart } from 'app/modules/dashboard/domain/part';
import { FC } from 'react';
import Feature from 'app/modules/dashboard/ui/components/Feature';

type Props = {
  part: TPart;
};

const Part: FC<Props> = ({ part }) => {
  return (
    <div>
      <h1>Part {part.name}</h1>

      {part.features.map((feature) => (
        <Feature key={feature.name} feature={feature} />
      ))}
    </div>
  );
};

export default Part;
