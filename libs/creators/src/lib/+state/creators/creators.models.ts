import { SocialCount } from '@jbm-creator-network/ui';

/**
 * Interface for the 'Creators' data
 */
export interface CreatorsEntity {
  id: string;
  name: string;
  twitch: string;
  email: string;
  description?: string;
  instagram?: string;
  twitter?: string;
  tiktok?: string;
  youtube?: string;
  facebook?: string;
  socialCounts?: SocialCount[];
}
