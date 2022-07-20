import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Contact = {
  __typename?: 'Contact';
  fullName: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  seeds: Array<Seed>;
};

export type Seed = {
  __typename?: 'Seed';
  contact: Contact;
  description: Scalars['String'];
  name: Scalars['ID'];
};

export type GetSeedsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSeedsQuery = { __typename?: 'Query', seeds: Array<{ __typename?: 'Seed', name: string }> };


export const GetSeedsDocument = gql`
    query getSeeds {
  seeds {
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getSeeds(variables?: GetSeedsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSeedsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSeedsQuery>(GetSeedsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSeeds', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;