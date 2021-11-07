import { apolloClient } from 'app/shared/core/apollo';
import { gql } from '@apollo/client';

export default function httpDashboardRepository() {
  return {
    getData() {
      return apolloClient
        .query({
          query: gql`
            {
              getDashboardData {
                parts {
                  name
                  features {
                    name
                    quality
                    parameters {
                      name
                      value
                      accumulatedValue
                    }
                  }
                }
              }
            }
          `,
        })
        .then(({ data }) => data.getDashboardData);
    },
  };
}
