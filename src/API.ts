/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  extraDesciprtion?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  extraDesciprtion?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  extraDesciprtion?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  extraDesciprtion?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  familyName: string,
  email: string,
  address: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  familyName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  familyName: string,
  email: string,
  address: string,
  applications?: ModelSponsorApplicationConnection | null,
  sponsors?: ModelUserSponsorConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSponsorApplicationConnection = {
  __typename: "ModelSponsorApplicationConnection",
  items:  Array<SponsorApplication | null >,
  nextToken?: string | null,
};

export type SponsorApplication = {
  __typename: "SponsorApplication",
  id: string,
  userId: string,
  user?: User | null,
  sponsorId: string,
  sponsor?: Sponsor | null,
  reason: string,
  additionalInfo: string,
  createdAt: string,
  updatedAt: string,
};

export type Sponsor = {
  __typename: "Sponsor",
  id: string,
  name: string,
  applications?: ModelSponsorApplicationConnection | null,
  users?: ModelUserSponsorConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserSponsorConnection = {
  __typename: "ModelUserSponsorConnection",
  items:  Array<UserSponsor | null >,
  nextToken?: string | null,
};

export type UserSponsor = {
  __typename: "UserSponsor",
  id: string,
  userId: string,
  user?: User | null,
  sponsorId: string,
  sponsor?: Sponsor | null,
  points: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  familyName?: string | null,
  email?: string | null,
  address?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateSponsorApplicationInput = {
  id?: string | null,
  userId: string,
  sponsorId: string,
  reason: string,
  additionalInfo: string,
};

export type ModelSponsorApplicationConditionInput = {
  userId?: ModelIDInput | null,
  sponsorId?: ModelIDInput | null,
  reason?: ModelStringInput | null,
  additionalInfo?: ModelStringInput | null,
  and?: Array< ModelSponsorApplicationConditionInput | null > | null,
  or?: Array< ModelSponsorApplicationConditionInput | null > | null,
  not?: ModelSponsorApplicationConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateSponsorApplicationInput = {
  id: string,
  userId?: string | null,
  sponsorId?: string | null,
  reason?: string | null,
  additionalInfo?: string | null,
};

export type DeleteSponsorApplicationInput = {
  id: string,
};

export type CreateSponsorInput = {
  id?: string | null,
  name: string,
};

export type ModelSponsorConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSponsorConditionInput | null > | null,
  or?: Array< ModelSponsorConditionInput | null > | null,
  not?: ModelSponsorConditionInput | null,
};

export type UpdateSponsorInput = {
  id: string,
  name?: string | null,
};

export type DeleteSponsorInput = {
  id: string,
};

export type CreateUserSponsorInput = {
  id?: string | null,
  userId: string,
  sponsorId: string,
  points: number,
};

export type ModelUserSponsorConditionInput = {
  userId?: ModelIDInput | null,
  sponsorId?: ModelIDInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelUserSponsorConditionInput | null > | null,
  or?: Array< ModelUserSponsorConditionInput | null > | null,
  not?: ModelUserSponsorConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserSponsorInput = {
  id: string,
  userId?: string | null,
  sponsorId?: string | null,
  points?: number | null,
};

export type DeleteUserSponsorInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  extraDesciprtion?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  familyName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  address?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSponsorApplicationFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  sponsorId?: ModelIDInput | null,
  reason?: ModelStringInput | null,
  additionalInfo?: ModelStringInput | null,
  and?: Array< ModelSponsorApplicationFilterInput | null > | null,
  or?: Array< ModelSponsorApplicationFilterInput | null > | null,
  not?: ModelSponsorApplicationFilterInput | null,
};

export type ModelSponsorFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSponsorFilterInput | null > | null,
  or?: Array< ModelSponsorFilterInput | null > | null,
  not?: ModelSponsorFilterInput | null,
};

export type ModelSponsorConnection = {
  __typename: "ModelSponsorConnection",
  items:  Array<Sponsor | null >,
  nextToken?: string | null,
};

export type ModelUserSponsorFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  sponsorId?: ModelIDInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelUserSponsorFilterInput | null > | null,
  or?: Array< ModelUserSponsorFilterInput | null > | null,
  not?: ModelUserSponsorFilterInput | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  extraDesciprtion?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  familyName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionSponsorApplicationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  sponsorId?: ModelSubscriptionIDInput | null,
  reason?: ModelSubscriptionStringInput | null,
  additionalInfo?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSponsorApplicationFilterInput | null > | null,
  or?: Array< ModelSubscriptionSponsorApplicationFilterInput | null > | null,
};

export type ModelSubscriptionSponsorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSponsorFilterInput | null > | null,
  or?: Array< ModelSubscriptionSponsorFilterInput | null > | null,
};

export type ModelSubscriptionUserSponsorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  sponsorId?: ModelSubscriptionIDInput | null,
  points?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionUserSponsorFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserSponsorFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    extraDesciprtion?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    extraDesciprtion?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    extraDesciprtion?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    familyName: string,
    email: string,
    address: string,
    applications?:  {
      __typename: "ModelSponsorApplicationConnection",
      nextToken?: string | null,
    } | null,
    sponsors?:  {
      __typename: "ModelUserSponsorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    familyName: string,
    email: string,
    address: string,
    applications?:  {
      __typename: "ModelSponsorApplicationConnection",
      nextToken?: string | null,
    } | null,
    sponsors?:  {
      __typename: "ModelUserSponsorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    familyName: string,
    email: string,
    address: string,
    applications?:  {
      __typename: "ModelSponsorApplicationConnection",
      nextToken?: string | null,
    } | null,
    sponsors?:  {
      __typename: "ModelUserSponsorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSponsorApplicationMutationVariables = {
  input: CreateSponsorApplicationInput,
  condition?: ModelSponsorApplicationConditionInput | null,
};

export type CreateSponsorApplicationMutation = {
  createSponsorApplication?:  {
    __typename: "SponsorApplication",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      familyName: string,
      email: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsorId: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    reason: string,
    additionalInfo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSponsorApplicationMutationVariables = {
  input: UpdateSponsorApplicationInput,
  condition?: ModelSponsorApplicationConditionInput | null,
};

export type UpdateSponsorApplicationMutation = {
  updateSponsorApplication?:  {
    __typename: "SponsorApplication",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      familyName: string,
      email: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsorId: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    reason: string,
    additionalInfo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSponsorApplicationMutationVariables = {
  input: DeleteSponsorApplicationInput,
  condition?: ModelSponsorApplicationConditionInput | null,
};

export type DeleteSponsorApplicationMutation = {
  deleteSponsorApplication?:  {
    __typename: "SponsorApplication",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      familyName: string,
      email: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsorId: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    reason: string,
    additionalInfo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSponsorMutationVariables = {
  input: CreateSponsorInput,
  condition?: ModelSponsorConditionInput | null,
};

export type CreateSponsorMutation = {
  createSponsor?:  {
    __typename: "Sponsor",
    id: string,
    name: string,
    applications?:  {
      __typename: "ModelSponsorApplicationConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserSponsorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSponsorMutationVariables = {
  input: UpdateSponsorInput,
  condition?: ModelSponsorConditionInput | null,
};

export type UpdateSponsorMutation = {
  updateSponsor?:  {
    __typename: "Sponsor",
    id: string,
    name: string,
    applications?:  {
      __typename: "ModelSponsorApplicationConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserSponsorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSponsorMutationVariables = {
  input: DeleteSponsorInput,
  condition?: ModelSponsorConditionInput | null,
};

export type DeleteSponsorMutation = {
  deleteSponsor?:  {
    __typename: "Sponsor",
    id: string,
    name: string,
    applications?:  {
      __typename: "ModelSponsorApplicationConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserSponsorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserSponsorMutationVariables = {
  input: CreateUserSponsorInput,
  condition?: ModelUserSponsorConditionInput | null,
};

export type CreateUserSponsorMutation = {
  createUserSponsor?:  {
    __typename: "UserSponsor",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      familyName: string,
      email: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsorId: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserSponsorMutationVariables = {
  input: UpdateUserSponsorInput,
  condition?: ModelUserSponsorConditionInput | null,
};

export type UpdateUserSponsorMutation = {
  updateUserSponsor?:  {
    __typename: "UserSponsor",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      familyName: string,
      email: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsorId: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserSponsorMutationVariables = {
  input: DeleteUserSponsorInput,
  condition?: ModelUserSponsorConditionInput | null,
};

export type DeleteUserSponsorMutation = {
  deleteUserSponsor?:  {
    __typename: "UserSponsor",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      familyName: string,
      email: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsorId: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    extraDesciprtion?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      extraDesciprtion?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    familyName: string,
    email: string,
    address: string,
    applications?:  {
      __typename: "ModelSponsorApplicationConnection",
      nextToken?: string | null,
    } | null,
    sponsors?:  {
      __typename: "ModelUserSponsorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      familyName: string,
      email: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSponsorApplicationQueryVariables = {
  id: string,
};

export type GetSponsorApplicationQuery = {
  getSponsorApplication?:  {
    __typename: "SponsorApplication",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      familyName: string,
      email: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsorId: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    reason: string,
    additionalInfo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSponsorApplicationsQueryVariables = {
  filter?: ModelSponsorApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSponsorApplicationsQuery = {
  listSponsorApplications?:  {
    __typename: "ModelSponsorApplicationConnection",
    items:  Array< {
      __typename: "SponsorApplication",
      id: string,
      userId: string,
      sponsorId: string,
      reason: string,
      additionalInfo: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSponsorQueryVariables = {
  id: string,
};

export type GetSponsorQuery = {
  getSponsor?:  {
    __typename: "Sponsor",
    id: string,
    name: string,
    applications?:  {
      __typename: "ModelSponsorApplicationConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserSponsorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSponsorsQueryVariables = {
  filter?: ModelSponsorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSponsorsQuery = {
  listSponsors?:  {
    __typename: "ModelSponsorConnection",
    items:  Array< {
      __typename: "Sponsor",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserSponsorQueryVariables = {
  id: string,
};

export type GetUserSponsorQuery = {
  getUserSponsor?:  {
    __typename: "UserSponsor",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      familyName: string,
      email: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsorId: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserSponsorsQueryVariables = {
  filter?: ModelUserSponsorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserSponsorsQuery = {
  listUserSponsors?:  {
    __typename: "ModelUserSponsorConnection",
    items:  Array< {
      __typename: "UserSponsor",
      id: string,
      userId: string,
      sponsorId: string,
      points: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    extraDesciprtion?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    extraDesciprtion?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    extraDesciprtion?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    familyName: string,
    email: string,
    address: string,
    applications?:  {
      __typename: "ModelSponsorApplicationConnection",
      nextToken?: string | null,
    } | null,
    sponsors?:  {
      __typename: "ModelUserSponsorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    familyName: string,
    email: string,
    address: string,
    applications?:  {
      __typename: "ModelSponsorApplicationConnection",
      nextToken?: string | null,
    } | null,
    sponsors?:  {
      __typename: "ModelUserSponsorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    familyName: string,
    email: string,
    address: string,
    applications?:  {
      __typename: "ModelSponsorApplicationConnection",
      nextToken?: string | null,
    } | null,
    sponsors?:  {
      __typename: "ModelUserSponsorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSponsorApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionSponsorApplicationFilterInput | null,
};

export type OnCreateSponsorApplicationSubscription = {
  onCreateSponsorApplication?:  {
    __typename: "SponsorApplication",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      familyName: string,
      email: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsorId: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    reason: string,
    additionalInfo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSponsorApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionSponsorApplicationFilterInput | null,
};

export type OnUpdateSponsorApplicationSubscription = {
  onUpdateSponsorApplication?:  {
    __typename: "SponsorApplication",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      familyName: string,
      email: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsorId: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    reason: string,
    additionalInfo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSponsorApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionSponsorApplicationFilterInput | null,
};

export type OnDeleteSponsorApplicationSubscription = {
  onDeleteSponsorApplication?:  {
    __typename: "SponsorApplication",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      familyName: string,
      email: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsorId: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    reason: string,
    additionalInfo: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSponsorSubscriptionVariables = {
  filter?: ModelSubscriptionSponsorFilterInput | null,
};

export type OnCreateSponsorSubscription = {
  onCreateSponsor?:  {
    __typename: "Sponsor",
    id: string,
    name: string,
    applications?:  {
      __typename: "ModelSponsorApplicationConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserSponsorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSponsorSubscriptionVariables = {
  filter?: ModelSubscriptionSponsorFilterInput | null,
};

export type OnUpdateSponsorSubscription = {
  onUpdateSponsor?:  {
    __typename: "Sponsor",
    id: string,
    name: string,
    applications?:  {
      __typename: "ModelSponsorApplicationConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserSponsorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSponsorSubscriptionVariables = {
  filter?: ModelSubscriptionSponsorFilterInput | null,
};

export type OnDeleteSponsorSubscription = {
  onDeleteSponsor?:  {
    __typename: "Sponsor",
    id: string,
    name: string,
    applications?:  {
      __typename: "ModelSponsorApplicationConnection",
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserSponsorConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSponsorSubscriptionVariables = {
  filter?: ModelSubscriptionUserSponsorFilterInput | null,
};

export type OnCreateUserSponsorSubscription = {
  onCreateUserSponsor?:  {
    __typename: "UserSponsor",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      familyName: string,
      email: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsorId: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSponsorSubscriptionVariables = {
  filter?: ModelSubscriptionUserSponsorFilterInput | null,
};

export type OnUpdateUserSponsorSubscription = {
  onUpdateUserSponsor?:  {
    __typename: "UserSponsor",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      familyName: string,
      email: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsorId: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSponsorSubscriptionVariables = {
  filter?: ModelSubscriptionUserSponsorFilterInput | null,
};

export type OnDeleteUserSponsorSubscription = {
  onDeleteUserSponsor?:  {
    __typename: "UserSponsor",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      familyName: string,
      email: string,
      address: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    sponsorId: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
