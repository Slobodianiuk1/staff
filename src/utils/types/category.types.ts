export interface ICategoriesData {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

export interface ICategoriesState {
  list: ICategoriesData[];
  isLoading: boolean,
  error: any
}

