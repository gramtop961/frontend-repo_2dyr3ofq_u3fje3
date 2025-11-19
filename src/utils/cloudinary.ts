import type { CloudinaryUploadResult } from '@/types/models';

export interface UploadParams {
  file: File | Blob | string;
  uploadPreset?: string; // optional override
  folder?: string;
}

export async function uploadToCloudinary({ file, uploadPreset, folder }: UploadParams): Promise<CloudinaryUploadResult> {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string;
  const preset = uploadPreset ?? (import.meta.env.VITE_CLOUDINARY_UNSIGNED_PRESET as string);

  if (!cloudName || !preset) {
    throw new Error('Cloudinary env vars missing: VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UNSIGNED_PRESET');
  }

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;
  const form = new FormData();
  form.append('upload_preset', preset);
  if (folder) form.append('folder', folder);
  form.append('file', file);

  const res = await fetch(url, {
    method: 'POST',
    body: form
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Cloudinary upload failed: ${res.status} ${text}`);
  }

  const data = (await res.json()) as CloudinaryUploadResult;
  return data;
}
