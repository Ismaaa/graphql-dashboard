import type { NextApiRequest, NextApiResponse } from 'next';
import { gql, ApolloServer } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import DashboardMother from 'app/modules/dashboard/tests/dashboardDoubles';

const typeDefs = gql`
  type Parameter {
    name: String!
    value: Int!
    accumulatedValue: Int!
  }

  type Feature {
    name: String!
    quality: String!
    parameters: [Parameter!]!
  }

  type Part {
    name: String!
    features: [Feature!]!
  }

  type DashboardData {
    parts: [Part!]!
  }

  type Query {
    getDashboardData: DashboardData
  }
`;

const resolvers = {
  Query: {
    getDashboardData: () => {
      return DashboardMother().create({});
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
