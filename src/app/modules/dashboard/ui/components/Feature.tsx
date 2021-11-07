import { Feature as TFeature } from 'app/modules/dashboard/domain/feature';
import { FC } from 'react';

type Props = {
  feature: TFeature;
};

const Feature: FC<Props> = ({ feature }) => {
  return (
    <div style={{ border: '1px solid black', marginBottom: 100 }}>
      <div>
        <table style={{ width: '100%' }}>
          <tr>
            <th>Control</th>
            <th>Dev</th>
            <th>Dev Out Tol</th>
          </tr>
          {feature.parameters.map((parameter, index) => (
            <tr key={`${index}-${parameter.name}`}>
              <td style={{ textAlign: 'center' }}>{parameter.name}</td>
              <td style={{ textAlign: 'center' }}>{parameter.value}</td>
              <td style={{ textAlign: 'center' }}>{parameter.value}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Feature;
