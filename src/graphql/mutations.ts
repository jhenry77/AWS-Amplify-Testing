/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    description
    extraDesciprtion
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    name
    description
    extraDesciprtion
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    description
    extraDesciprtion
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    name
    familyName
    email
    address
    applications {
      nextToken
      __typename
    }
    sponsors {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    name
    familyName
    email
    address
    applications {
      nextToken
      __typename
    }
    sponsors {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    name
    familyName
    email
    address
    applications {
      nextToken
      __typename
    }
    sponsors {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createSponsorApplication = /* GraphQL */ `mutation CreateSponsorApplication(
  $input: CreateSponsorApplicationInput!
  $condition: ModelSponsorApplicationConditionInput
) {
  createSponsorApplication(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSponsorApplicationMutationVariables,
  APITypes.CreateSponsorApplicationMutation
>;
export const updateSponsorApplication = /* GraphQL */ `mutation UpdateSponsorApplication(
  $input: UpdateSponsorApplicationInput!
  $condition: ModelSponsorApplicationConditionInput
) {
  updateSponsorApplication(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSponsorApplicationMutationVariables,
  APITypes.UpdateSponsorApplicationMutation
>;
export const deleteSponsorApplication = /* GraphQL */ `mutation DeleteSponsorApplication(
  $input: DeleteSponsorApplicationInput!
  $condition: ModelSponsorApplicationConditionInput
) {
  deleteSponsorApplication(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSponsorApplicationMutationVariables,
  APITypes.DeleteSponsorApplicationMutation
>;
export const createSponsor = /* GraphQL */ `mutation CreateSponsor(
  $input: CreateSponsorInput!
  $condition: ModelSponsorConditionInput
) {
  createSponsor(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSponsorMutationVariables,
  APITypes.CreateSponsorMutation
>;
export const updateSponsor = /* GraphQL */ `mutation UpdateSponsor(
  $input: UpdateSponsorInput!
  $condition: ModelSponsorConditionInput
) {
  updateSponsor(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSponsorMutationVariables,
  APITypes.UpdateSponsorMutation
>;
export const deleteSponsor = /* GraphQL */ `mutation DeleteSponsor(
  $input: DeleteSponsorInput!
  $condition: ModelSponsorConditionInput
) {
  deleteSponsor(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSponsorMutationVariables,
  APITypes.DeleteSponsorMutation
>;
export const createUserSponsor = /* GraphQL */ `mutation CreateUserSponsor(
  $input: CreateUserSponsorInput!
  $condition: ModelUserSponsorConditionInput
) {
  createUserSponsor(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserSponsorMutationVariables,
  APITypes.CreateUserSponsorMutation
>;
export const updateUserSponsor = /* GraphQL */ `mutation UpdateUserSponsor(
  $input: UpdateUserSponsorInput!
  $condition: ModelUserSponsorConditionInput
) {
  updateUserSponsor(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserSponsorMutationVariables,
  APITypes.UpdateUserSponsorMutation
>;
export const deleteUserSponsor = /* GraphQL */ `mutation DeleteUserSponsor(
  $input: DeleteUserSponsorInput!
  $condition: ModelUserSponsorConditionInput
) {
  deleteUserSponsor(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserSponsorMutationVariables,
  APITypes.DeleteUserSponsorMutation
>;
export const createPurchaseItem = /* GraphQL */ `mutation CreatePurchaseItem(
  $input: CreatePurchaseItemInput!
  $condition: ModelPurchaseItemConditionInput
) {
  createPurchaseItem(input: $input, condition: $condition) {
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
    itemId
    itemName
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePurchaseItemMutationVariables,
  APITypes.CreatePurchaseItemMutation
>;
export const updatePurchaseItem = /* GraphQL */ `mutation UpdatePurchaseItem(
  $input: UpdatePurchaseItemInput!
  $condition: ModelPurchaseItemConditionInput
) {
  updatePurchaseItem(input: $input, condition: $condition) {
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
    itemId
    itemName
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePurchaseItemMutationVariables,
  APITypes.UpdatePurchaseItemMutation
>;
export const deletePurchaseItem = /* GraphQL */ `mutation DeletePurchaseItem(
  $input: DeletePurchaseItemInput!
  $condition: ModelPurchaseItemConditionInput
) {
  deletePurchaseItem(input: $input, condition: $condition) {
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
    itemId
    itemName
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePurchaseItemMutationVariables,
  APITypes.DeletePurchaseItemMutation
>;
export const createPurchase = /* GraphQL */ `mutation CreatePurchase(
  $input: CreatePurchaseInput!
  $condition: ModelPurchaseConditionInput
) {
  createPurchase(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePurchaseMutationVariables,
  APITypes.CreatePurchaseMutation
>;
export const updatePurchase = /* GraphQL */ `mutation UpdatePurchase(
  $input: UpdatePurchaseInput!
  $condition: ModelPurchaseConditionInput
) {
  updatePurchase(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePurchaseMutationVariables,
  APITypes.UpdatePurchaseMutation
>;
export const deletePurchase = /* GraphQL */ `mutation DeletePurchase(
  $input: DeletePurchaseInput!
  $condition: ModelPurchaseConditionInput
) {
  deletePurchase(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePurchaseMutationVariables,
  APITypes.DeletePurchaseMutation
>;
