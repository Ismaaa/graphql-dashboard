import { Part as TPart } from 'app/modules/dashboard/domain/part';
import { FC } from 'react';
import Feature from 'app/modules/dashboard/ui/components/Feature';

type Props = {
  part: TPart;
};

const Part: FC<Props> = ({ part }) => {
  return (
    <>
      {part.features.map((feature, index) => (
        <Feature key={`${index}-${feature.name}`} feature={feature} />
      ))}
    </>
  );
};

export default Part;
