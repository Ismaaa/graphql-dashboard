import { Feature as TFeature } from 'app/modules/dashboard/domain/feature';
import { FC } from 'react';
import { BiCheckCircle, BiCircle, BiErrorCircle } from 'react-icons/bi';
import { FaRegTimesCircle } from 'react-icons/fa';

type Props = {
  feature: TFeature;
};

const Feature: FC<Props> = ({ feature }) => {
  const getQualityClass = () => {
    switch (feature.quality) {
      case 'high':
        return 'bg-green-500';
      case 'medium':
        return 'bg-yellow-300';
      default:
        return 'bg-red-500';
    }
  };

  const QualityIcon = () => {
    switch (feature.quality) {
      case 'high':
        return <BiCheckCircle color="white" size="24px" />;
      case 'medium':
        return <BiErrorCircle color="white" size="24px" />;
      default:
        return <FaRegTimesCircle color="white" size="24px" />;
    }
  };

  const DeviationIcon = ({
    accumulatedDeviation,
  }: {
    accumulatedDeviation: number;
  }) => {
    switch (true) {
      case accumulatedDeviation > 35:
        return <FaRegTimesCircle color="red" size="24px" />;
      case accumulatedDeviation > 15:
        return <BiErrorCircle color="orange" size="24px" />;
      default:
        return <BiCheckCircle color="green" size="24px" />;
    }
  };

  return (
    <div className="flex flex-col">
      <div className={`flex p-2 ${getQualityClass()}`}>
        <BiCircle color="white" size="24px" />
        <h3 className="ml-6 mr-auto text-white font-medium">
          {feature.name.toUpperCase()}
        </h3>
        <QualityIcon />
      </div>
      <div className="bg-gray-300">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Control</th>
              <th>Dev</th>
              <th>Dev Out Tol</th>
            </tr>
          </thead>

          <tbody>
            {feature.parameters.map((parameter, index) => (
              <tr key={`${index}-${parameter.name}`}>
                <td className="text-center">{parameter.name}</td>
                <td className="text-center">{parameter.value}</td>
                <td className="text-center">
                  {parameter.value + parameter.accumulatedValue}
                </td>
                <td className="text-center">
                  <DeviationIcon
                    accumulatedDeviation={parameter.accumulatedValue}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Feature;
