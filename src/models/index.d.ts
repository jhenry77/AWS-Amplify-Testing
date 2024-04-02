import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly familyName: string;
  readonly email: string;
  readonly address: string;
  readonly applications?: (SponsorApplication | null)[] | null;
  readonly sponsors?: (UserSponsor | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly familyName: string;
  readonly email: string;
  readonly address: string;
  readonly applications: AsyncCollection<SponsorApplication>;
  readonly sponsors: AsyncCollection<UserSponsor>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerSponsorApplication = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SponsorApplication, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly user?: User | null;
  readonly sponsorId: string;
  readonly sponsor?: Sponsor | null;
  readonly reason: string;
  readonly additionalInfo: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySponsorApplication = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SponsorApplication, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly user: AsyncItem<User | undefined>;
  readonly sponsorId: string;
  readonly sponsor: AsyncItem<Sponsor | undefined>;
  readonly reason: string;
  readonly additionalInfo: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SponsorApplication = LazyLoading extends LazyLoadingDisabled ? EagerSponsorApplication : LazySponsorApplication

export declare const SponsorApplication: (new (init: ModelInit<SponsorApplication>) => SponsorApplication) & {
  copyOf(source: SponsorApplication, mutator: (draft: MutableModel<SponsorApplication>) => MutableModel<SponsorApplication> | void): SponsorApplication;
}

type EagerSponsor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sponsor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly applications?: (SponsorApplication | null)[] | null;
  readonly users?: (UserSponsor | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySponsor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sponsor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly applications: AsyncCollection<SponsorApplication>;
  readonly users: AsyncCollection<UserSponsor>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sponsor = LazyLoading extends LazyLoadingDisabled ? EagerSponsor : LazySponsor

export declare const Sponsor: (new (init: ModelInit<Sponsor>) => Sponsor) & {
  copyOf(source: Sponsor, mutator: (draft: MutableModel<Sponsor>) => MutableModel<Sponsor> | void): Sponsor;
}

type EagerUserSponsor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserSponsor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly user?: User | null;
  readonly sponsorId: string;
  readonly sponsor?: Sponsor | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserSponsor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserSponsor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly user: AsyncItem<User | undefined>;
  readonly sponsorId: string;
  readonly sponsor: AsyncItem<Sponsor | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserSponsor = LazyLoading extends LazyLoadingDisabled ? EagerUserSponsor : LazyUserSponsor

export declare const UserSponsor: (new (init: ModelInit<UserSponsor>) => UserSponsor) & {
  copyOf(source: UserSponsor, mutator: (draft: MutableModel<UserSponsor>) => MutableModel<UserSponsor> | void): UserSponsor;
}