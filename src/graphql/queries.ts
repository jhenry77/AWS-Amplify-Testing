/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    extraDesciprtion
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      extraDesciprtion
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    familyName
    email
    address
    applications {
      items{
        id
        reason
      }
      nextToken
      __typename
    }
    sponsors {
      items {
        id
        points
        sponsor {
          id
          name
        }
        purchases {
          items {
            id
            purchaseDate
            totalAmount
            items {
              items {
                id
                itemId
                itemName
                price
              }
              nextToken
            }
          }
          nextToken
        }
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      familyName
      email
      address
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getSponsorApplication = /* GraphQL */ `query GetSponsorApplication($id: ID!) {
  getSponsorApplication(id: $id) {
    id
    userId
    user {
      id
      name
      familyName
      email
      address
      createdAt
      updatedAt
      __typename
    }
    sponsorId
    sponsor {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    reason
    additionalInfo
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSponsorApplicationQueryVariables,
  APITypes.GetSponsorApplicationQuery
>;
export const listSponsorApplications = /* GraphQL */ `query ListSponsorApplications(
  $filter: ModelSponsorApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  listSponsorApplications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      user {
        id
        name
        familyName
        email
        address
        createdAt
        updatedAt
        __typename
      }
      sponsorId
      reason
      additionalInfo
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSponsorApplicationsQueryVariables,
  APITypes.ListSponsorApplicationsQuery
>;
export const sponsorApplicationsByUserIdAndId = /* GraphQL */ `query SponsorApplicationsByUserIdAndId(
  $userId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSponsorApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  sponsorApplicationsByUserIdAndId(
    userId: $userId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      sponsorId
      reason
      additionalInfo
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SponsorApplicationsByUserIdAndIdQueryVariables,
  APITypes.SponsorApplicationsByUserIdAndIdQuery
>;
export const getSponsor = /* GraphQL */ `query GetSponsor($id: ID!) {
  getSponsor(id: $id) {
    id
    name
    applications {
      nextToken
      __typename
    }
    users {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSponsorQueryVariables,
  APITypes.GetSponsorQuery
>;
export const listSponsors = /* GraphQL */ `query ListSponsors(
  $filter: ModelSponsorFilterInput
  $limit: Int
  $nextToken: String
) {
  listSponsors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSponsorsQueryVariables,
  APITypes.ListSponsorsQuery
>;
export const getUserSponsor = /* GraphQL */ `query GetUserSponsor($id: ID!) {
  getUserSponsor(id: $id) {
    id
    userId
    user {
      id
      name
      familyName
      email
      address
      createdAt
      updatedAt
      __typename
    }
    sponsorId
    sponsor {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    points
    purchases {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserSponsorQueryVariables,
  APITypes.GetUserSponsorQuery
>;
export const listUserSponsors = /* GraphQL */ `query ListUserSponsors(
  $filter: ModelUserSponsorFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserSponsors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      user {
        id
        name
        familyName
        email
        address
        createdAt
        updatedAt
        __typename
      }
      sponsorId
      points
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserSponsorsQueryVariables,
  APITypes.ListUserSponsorsQuery
>;
export const userSponsorsByUserIdAndId = /* GraphQL */ `query UserSponsorsByUserIdAndId(
  $userId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelUserSponsorFilterInput
  $limit: Int
  $nextToken: String
) {
  userSponsorsByUserIdAndId(
    userId: $userId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      sponsorId
      points
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserSponsorsByUserIdAndIdQueryVariables,
  APITypes.UserSponsorsByUserIdAndIdQuery
>;
export const getPurchaseItem = /* GraphQL */ `query GetPurchaseItem($id: ID!) {
  getPurchaseItem(id: $id) {
    id
    purchaseId
    purchase {
      id
      userSponsorId
      purchaseDate
      totalAmount
      createdAt
      updatedAt
      __typename
    }
    itemName
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPurchaseItemQueryVariables,
  APITypes.GetPurchaseItemQuery
>;
export const listPurchaseItems = /* GraphQL */ `query ListPurchaseItems(
  $filter: ModelPurchaseItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listPurchaseItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      purchaseId
      itemName
      price
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPurchaseItemsQueryVariables,
  APITypes.ListPurchaseItemsQuery
>;
export const purchaseItemsByPurchaseIdAndId = /* GraphQL */ `query PurchaseItemsByPurchaseIdAndId(
  $purchaseId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPurchaseItemFilterInput
  $limit: Int
  $nextToken: String
) {
  purchaseItemsByPurchaseIdAndId(
    purchaseId: $purchaseId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      purchaseId
      itemId
      itemName
      price
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PurchaseItemsByPurchaseIdAndIdQueryVariables,
  APITypes.PurchaseItemsByPurchaseIdAndIdQuery
>;
export const getPurchase = /* GraphQL */ `query GetPurchase($id: ID!) {
  getPurchase(id: $id) {
    id
    userSponsorId
    userSponsor {
      id
      userId
      sponsorId
      points
      createdAt
      updatedAt
      __typename
    }
    purchaseDate
    totalAmount
    items {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPurchaseQueryVariables,
  APITypes.GetPurchaseQuery
>;
export const listPurchases = /* GraphQL */ `query ListPurchases(
  $filter: ModelPurchaseFilterInput
  $limit: Int
  $nextToken: String
) {
  listPurchases(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userSponsorId
      purchaseDate
      totalAmount
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPurchasesQueryVariables,
  APITypes.ListPurchasesQuery
>;
export const purchasesByUserSponsorIdAndId = /* GraphQL */ `query PurchasesByUserSponsorIdAndId(
  $userSponsorId: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPurchaseFilterInput
  $limit: Int
  $nextToken: String
) {
  purchasesByUserSponsorIdAndId(
    userSponsorId: $userSponsorId
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userSponsorId
      purchaseDate
      totalAmount
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PurchasesByUserSponsorIdAndIdQueryVariables,
  APITypes.PurchasesByUserSponsorIdAndIdQuery
>;
