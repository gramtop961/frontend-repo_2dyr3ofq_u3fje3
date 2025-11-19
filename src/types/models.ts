export interface Activity {
  id: string;
  title: string;
  shortDescription: string;
  ageRange: string;
  durationMinutes: number;
  tags: string[];
  coverImage?: string;
  materials?: string[];
  steps: string[];
  culturalContext?: string;
  reflectionPrompts: string[];
  printableUrl?: string; // optional offline PDF
}

export interface UserProfile {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL?: string | null;
}

export interface ActivityResult {
  id: string; // doc id
  userId: string;
  activityId: string;
  reflection: string;
  mediaUrl?: string;
  createdAt: number; // epoch ms
}

export interface CloudinaryUploadResult {
  asset_id: string;
  public_id: string;
  secure_url: string;
  original_filename?: string;
}
