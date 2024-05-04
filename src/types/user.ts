export interface GetUsersServerModel {
  users: {
    profile: string | null;
    name: string;
    birth: string;
    id: string;
    createdDate: string;
    location: string;
    group: string;
    job: string;
    recommender: string | null;
  }[];
}
