'use client';

import { ArrowLeftFromLine } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className="w-fit border border-gray-300 dark:border-gray-500 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 text-sm px-3 py-1.5"
      onClick={() => router.back()}
    >
      <ArrowLeftFromLine className="w-5 h-5" />
    </button>
  );
}
