import { useQuery, useSuspenseQuery, useMutation, UseQueryOptions, UseSuspenseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

type FetchOptions = {
cache?: RequestCache;
next?: NextFetchRequestConfig;
};

            type RequestInit = {
              headers: (HeadersInit & FetchOptions) | FetchOptions;
            };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigFloat: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  Date: { input: any; output: any; }
  Datetime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Opaque: { input: any; output: any; }
  Time: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `Organization` collection */
  deleteFromOrganizationCollection: OrganizationDeleteResponse;
  /** Deletes zero or more records from the `OrganizationMember` collection */
  deleteFromOrganizationMemberCollection: OrganizationMemberDeleteResponse;
  /** Deletes zero or more records from the `Profile` collection */
  deleteFromProfileCollection: ProfileDeleteResponse;
  /** Deletes zero or more records from the `Tournament` collection */
  deleteFromTournamentCollection: TournamentDeleteResponse;
  /** Adds one or more `Organization` records to the collection */
  insertIntoOrganizationCollection?: Maybe<OrganizationInsertResponse>;
  /** Adds one or more `OrganizationMember` records to the collection */
  insertIntoOrganizationMemberCollection?: Maybe<OrganizationMemberInsertResponse>;
  /** Adds one or more `Profile` records to the collection */
  insertIntoProfileCollection?: Maybe<ProfileInsertResponse>;
  /** Adds one or more `Tournament` records to the collection */
  insertIntoTournamentCollection?: Maybe<TournamentInsertResponse>;
  /** Updates zero or more records in the `Organization` collection */
  updateOrganizationCollection: OrganizationUpdateResponse;
  /** Updates zero or more records in the `OrganizationMember` collection */
  updateOrganizationMemberCollection: OrganizationMemberUpdateResponse;
  /** Updates zero or more records in the `Profile` collection */
  updateProfileCollection: ProfileUpdateResponse;
  /** Updates zero or more records in the `Tournament` collection */
  updateTournamentCollection: TournamentUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromOrganizationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrganizationFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromOrganizationMemberCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrganizationMemberFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromProfileCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProfileFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromTournamentCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TournamentFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoOrganizationCollectionArgs = {
  objects: Array<OrganizationInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoOrganizationMemberCollectionArgs = {
  objects: Array<OrganizationMemberInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoProfileCollectionArgs = {
  objects: Array<ProfileInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoTournamentCollectionArgs = {
  objects: Array<TournamentInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateOrganizationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrganizationFilter>;
  set: OrganizationUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateOrganizationMemberCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrganizationMemberFilter>;
  set: OrganizationMemberUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateProfileCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProfileFilter>;
  set: ProfileUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateTournamentCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TournamentFilter>;
  set: TournamentUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type Organization = Node & {
  __typename?: 'Organization';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  organizationMemberCollection?: Maybe<OrganizationMemberConnection>;
};


export type OrganizationOrganizationMemberCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrganizationMemberFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationMemberOrderBy>>;
};

export type OrganizationConnection = {
  __typename?: 'OrganizationConnection';
  edges: Array<OrganizationEdge>;
  pageInfo: PageInfo;
};

export type OrganizationDeleteResponse = {
  __typename?: 'OrganizationDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Organization>;
};

export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  cursor: Scalars['String']['output'];
  node: Organization;
};

export type OrganizationFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<OrganizationFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<OrganizationFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<OrganizationFilter>>;
};

export type OrganizationInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationInsertResponse = {
  __typename?: 'OrganizationInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Organization>;
};

export type OrganizationMember = Node & {
  __typename?: 'OrganizationMember';
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  org_id: Scalars['UUID']['output'];
  organization?: Maybe<Organization>;
  profile?: Maybe<Profile>;
  role: Organization_Role;
  user_id: Scalars['UUID']['output'];
};

export type OrganizationMemberConnection = {
  __typename?: 'OrganizationMemberConnection';
  edges: Array<OrganizationMemberEdge>;
  pageInfo: PageInfo;
};

export type OrganizationMemberDeleteResponse = {
  __typename?: 'OrganizationMemberDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OrganizationMember>;
};

export type OrganizationMemberEdge = {
  __typename?: 'OrganizationMemberEdge';
  cursor: Scalars['String']['output'];
  node: OrganizationMember;
};

export type OrganizationMemberFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<OrganizationMemberFilter>>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<OrganizationMemberFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<OrganizationMemberFilter>>;
  org_id?: InputMaybe<UuidFilter>;
  role?: InputMaybe<Organization_RoleFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type OrganizationMemberInsertInput = {
  org_id?: InputMaybe<Scalars['UUID']['input']>;
  role?: InputMaybe<Organization_Role>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type OrganizationMemberInsertResponse = {
  __typename?: 'OrganizationMemberInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OrganizationMember>;
};

export type OrganizationMemberOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  org_id?: InputMaybe<OrderByDirection>;
  role?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type OrganizationMemberUpdateInput = {
  org_id?: InputMaybe<Scalars['UUID']['input']>;
  role?: InputMaybe<Organization_Role>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type OrganizationMemberUpdateResponse = {
  __typename?: 'OrganizationMemberUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<OrganizationMember>;
};

export type OrganizationOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type OrganizationUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationUpdateResponse = {
  __typename?: 'OrganizationUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Organization>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Profile = Node & {
  __typename?: 'Profile';
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  organizationMemberCollection?: Maybe<OrganizationMemberConnection>;
  role: App_Role;
};


export type ProfileOrganizationMemberCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrganizationMemberFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationMemberOrderBy>>;
};

export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  edges: Array<ProfileEdge>;
  pageInfo: PageInfo;
};

export type ProfileDeleteResponse = {
  __typename?: 'ProfileDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profile>;
};

export type ProfileEdge = {
  __typename?: 'ProfileEdge';
  cursor: Scalars['String']['output'];
  node: Profile;
};

export type ProfileFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProfileFilter>>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProfileFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProfileFilter>>;
  role?: InputMaybe<App_RoleFilter>;
};

export type ProfileInsertInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  role?: InputMaybe<App_Role>;
};

export type ProfileInsertResponse = {
  __typename?: 'ProfileInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profile>;
};

export type ProfileOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  role?: InputMaybe<OrderByDirection>;
};

export type ProfileUpdateInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  role?: InputMaybe<App_Role>;
};

export type ProfileUpdateResponse = {
  __typename?: 'ProfileUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profile>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `Organization` */
  organizationCollection?: Maybe<OrganizationConnection>;
  /** A pagable collection of type `OrganizationMember` */
  organizationMemberCollection?: Maybe<OrganizationMemberConnection>;
  /** A pagable collection of type `Profile` */
  profileCollection?: Maybe<ProfileConnection>;
  /** A pagable collection of type `Tournament` */
  tournamentCollection?: Maybe<TournamentConnection>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryOrganizationCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrganizationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationOrderBy>>;
};


/** The root type for querying data */
export type QueryOrganizationMemberCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrganizationMemberFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationMemberOrderBy>>;
};


/** The root type for querying data */
export type QueryProfileCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProfileFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfileOrderBy>>;
};


/** The root type for querying data */
export type QueryTournamentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TournamentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TournamentOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

export type Tournament = Node & {
  __typename?: 'Tournament';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type TournamentConnection = {
  __typename?: 'TournamentConnection';
  edges: Array<TournamentEdge>;
  pageInfo: PageInfo;
};

export type TournamentDeleteResponse = {
  __typename?: 'TournamentDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Tournament>;
};

export type TournamentEdge = {
  __typename?: 'TournamentEdge';
  cursor: Scalars['String']['output'];
  node: Tournament;
};

export type TournamentFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<TournamentFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<TournamentFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<TournamentFilter>>;
};

export type TournamentInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TournamentInsertResponse = {
  __typename?: 'TournamentInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Tournament>;
};

export type TournamentOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type TournamentUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TournamentUpdateResponse = {
  __typename?: 'TournamentUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Tournament>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export enum App_Role {
  Admin = 'admin',
  User = 'user'
}

/** Boolean expression comparing fields on type "app_role" */
export type App_RoleFilter = {
  eq?: InputMaybe<App_Role>;
  in?: InputMaybe<Array<App_Role>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<App_Role>;
};

export enum Organization_Role {
  Manager = 'manager',
  Member = 'member'
}

/** Boolean expression comparing fields on type "organization_role" */
export type Organization_RoleFilter = {
  eq?: InputMaybe<Organization_Role>;
  in?: InputMaybe<Array<Organization_Role>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Organization_Role>;
};

export type GetOrganizationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrganizationsQuery = { __typename?: 'Query', organizationCollection?: { __typename?: 'OrganizationConnection', edges: Array<{ __typename?: 'OrganizationEdge', node: { __typename?: 'Organization', id: any, name: string, created_at: any } }> } | null };

export type CreateOrganizationMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CreateOrganizationMutation = { __typename?: 'Mutation', insertIntoOrganizationCollection?: { __typename?: 'OrganizationInsertResponse', affectedCount: number } | null };

export type DeleteOrganizationMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type DeleteOrganizationMutation = { __typename?: 'Mutation', deleteFromOrganizationCollection: { __typename?: 'OrganizationDeleteResponse', records: Array<{ __typename?: 'Organization', id: any }> } };



export const GetOrganizationsDocument = `
    query GetOrganizations {
  organizationCollection {
    edges {
      node {
        id
        name
        created_at
      }
    }
  }
}
    `;

export const useGetOrganizationsQuery = <
      TData = GetOrganizationsQuery,
      TError = unknown
    >(
      variables?: GetOrganizationsQueryVariables,
      options?: Omit<UseQueryOptions<GetOrganizationsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetOrganizationsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetOrganizationsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetOrganizations'] : ['GetOrganizations', variables],
    queryFn: fetcher<GetOrganizationsQuery, GetOrganizationsQueryVariables>(GetOrganizationsDocument, variables),
    ...options
  }
    )};

useGetOrganizationsQuery.getKey = (variables?: GetOrganizationsQueryVariables) => variables === undefined ? ['GetOrganizations'] : ['GetOrganizations', variables];

export const useSuspenseGetOrganizationsQuery = <
      TData = GetOrganizationsQuery,
      TError = unknown
    >(
      variables?: GetOrganizationsQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<GetOrganizationsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<GetOrganizationsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<GetOrganizationsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['GetOrganizationsSuspense'] : ['GetOrganizationsSuspense', variables],
    queryFn: fetcher<GetOrganizationsQuery, GetOrganizationsQueryVariables>(GetOrganizationsDocument, variables),
    ...options
  }
    )};

useSuspenseGetOrganizationsQuery.getKey = (variables?: GetOrganizationsQueryVariables) => variables === undefined ? ['GetOrganizationsSuspense'] : ['GetOrganizationsSuspense', variables];


useGetOrganizationsQuery.fetcher = (variables?: GetOrganizationsQueryVariables, options?: RequestInit['headers']) => fetcher<GetOrganizationsQuery, GetOrganizationsQueryVariables>(GetOrganizationsDocument, variables, options);

export const CreateOrganizationDocument = `
    mutation CreateOrganization($name: String!) {
  insertIntoOrganizationCollection(objects: [{name: $name}]) {
    affectedCount
  }
}
    `;

export const useCreateOrganizationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateOrganizationMutation, TError, CreateOrganizationMutationVariables, TContext>) => {
    
    return useMutation<CreateOrganizationMutation, TError, CreateOrganizationMutationVariables, TContext>(
      {
    mutationKey: ['CreateOrganization'],
    mutationFn: (variables?: CreateOrganizationMutationVariables) => fetcher<CreateOrganizationMutation, CreateOrganizationMutationVariables>(CreateOrganizationDocument, variables)(),
    ...options
  }
    )};


useCreateOrganizationMutation.fetcher = (variables: CreateOrganizationMutationVariables, options?: RequestInit['headers']) => fetcher<CreateOrganizationMutation, CreateOrganizationMutationVariables>(CreateOrganizationDocument, variables, options);

export const DeleteOrganizationDocument = `
    mutation DeleteOrganization($id: UUID!) {
  deleteFromOrganizationCollection(filter: {id: {eq: $id}}) {
    records {
      id
    }
  }
}
    `;

export const useDeleteOrganizationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteOrganizationMutation, TError, DeleteOrganizationMutationVariables, TContext>) => {
    
    return useMutation<DeleteOrganizationMutation, TError, DeleteOrganizationMutationVariables, TContext>(
      {
    mutationKey: ['DeleteOrganization'],
    mutationFn: (variables?: DeleteOrganizationMutationVariables) => fetcher<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>(DeleteOrganizationDocument, variables)(),
    ...options
  }
    )};


useDeleteOrganizationMutation.fetcher = (variables: DeleteOrganizationMutationVariables, options?: RequestInit['headers']) => fetcher<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>(DeleteOrganizationDocument, variables, options);
