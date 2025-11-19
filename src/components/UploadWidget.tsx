import { FC, useId, useRef, useState } from 'react';
import { uploadToCloudinary } from '@/utils/cloudinary';

export interface UploadWidgetProps {
  onUploaded: (url: string) => void;
}

export const UploadWidget: FC<UploadWidgetProps> = ({ onUploaded }) => {
  const id = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    setError(null);
    try {
      const res = await uploadToCloudinary({ file, folder: 'playful-paradox' });
      onUploaded(res.secure_url);
    } catch (err: any) {
      setError(err?.message || 'Upload failed');
    } finally {
      setLoading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">Upload result (image)</label>
      <input
        ref={inputRef}
        id={id}
        type="file"
        accept="image/*"
        onChange={onChange}
        className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-orange-50 file:px-3 file:py-2 file:text-orange-700 hover:file:bg-orange-100"
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {loading && <p className="text-sm text-slate-500">Uploading...</p>}
      {error && <p id={`${id}-error`} className="text-sm text-red-600" role="alert">{error}</p>}
    </div>
  );
};

export default UploadWidget;
