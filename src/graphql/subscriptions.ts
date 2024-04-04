/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    name
    familyName
    email
    address
    applications {
      nextToken
      startedAt
      __typename
    }
    sponsors {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    name
    familyName
    email
    address
    applications {
      nextToken
      startedAt
      __typename
    }
    sponsors {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    name
    familyName
    email
    address
    applications {
      nextToken
      startedAt
      __typename
    }
    sponsors {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateSponsorApplication = /* GraphQL */ `subscription OnCreateSponsorApplication(
  $filter: ModelSubscriptionSponsorApplicationFilterInput
) {
  onCreateSponsorApplication(filter: $filter) {
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    sponsorId
    sponsor {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    reason
    additionalInfo
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSponsorApplicationSubscriptionVariables,
  APITypes.OnCreateSponsorApplicationSubscription
>;
export const onUpdateSponsorApplication = /* GraphQL */ `subscription OnUpdateSponsorApplication(
  $filter: ModelSubscriptionSponsorApplicationFilterInput
) {
  onUpdateSponsorApplication(filter: $filter) {
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    sponsorId
    sponsor {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    reason
    additionalInfo
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSponsorApplicationSubscriptionVariables,
  APITypes.OnUpdateSponsorApplicationSubscription
>;
export const onDeleteSponsorApplication = /* GraphQL */ `subscription OnDeleteSponsorApplication(
  $filter: ModelSubscriptionSponsorApplicationFilterInput
) {
  onDeleteSponsorApplication(filter: $filter) {
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    sponsorId
    sponsor {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    reason
    additionalInfo
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSponsorApplicationSubscriptionVariables,
  APITypes.OnDeleteSponsorApplicationSubscription
>;
export const onCreateSponsor = /* GraphQL */ `subscription OnCreateSponsor($filter: ModelSubscriptionSponsorFilterInput) {
  onCreateSponsor(filter: $filter) {
    id
    name
    applications {
      nextToken
      startedAt
      __typename
    }
    users {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSponsorSubscriptionVariables,
  APITypes.OnCreateSponsorSubscription
>;
export const onUpdateSponsor = /* GraphQL */ `subscription OnUpdateSponsor($filter: ModelSubscriptionSponsorFilterInput) {
  onUpdateSponsor(filter: $filter) {
    id
    name
    applications {
      nextToken
      startedAt
      __typename
    }
    users {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSponsorSubscriptionVariables,
  APITypes.OnUpdateSponsorSubscription
>;
export const onDeleteSponsor = /* GraphQL */ `subscription OnDeleteSponsor($filter: ModelSubscriptionSponsorFilterInput) {
  onDeleteSponsor(filter: $filter) {
    id
    name
    applications {
      nextToken
      startedAt
      __typename
    }
    users {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSponsorSubscriptionVariables,
  APITypes.OnDeleteSponsorSubscription
>;
export const onCreateUserSponsor = /* GraphQL */ `subscription OnCreateUserSponsor(
  $filter: ModelSubscriptionUserSponsorFilterInput
) {
  onCreateUserSponsor(filter: $filter) {
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    sponsorId
    sponsor {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSponsorSubscriptionVariables,
  APITypes.OnCreateUserSponsorSubscription
>;
export const onUpdateUserSponsor = /* GraphQL */ `subscription OnUpdateUserSponsor(
  $filter: ModelSubscriptionUserSponsorFilterInput
) {
  onUpdateUserSponsor(filter: $filter) {
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    sponsorId
    sponsor {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSponsorSubscriptionVariables,
  APITypes.OnUpdateUserSponsorSubscription
>;
export const onDeleteUserSponsor = /* GraphQL */ `subscription OnDeleteUserSponsor(
  $filter: ModelSubscriptionUserSponsorFilterInput
) {
  onDeleteUserSponsor(filter: $filter) {
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    sponsorId
    sponsor {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSponsorSubscriptionVariables,
  APITypes.OnDeleteUserSponsorSubscription
>;
