import { EngineeringBranch } from './EngineeringBranch';

export interface EngineeringCategory {
  category: string;
  branches: EngineeringBranch[];
}
