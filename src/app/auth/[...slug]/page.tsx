import { redirect } from 'next/navigation';

export default function CatchAllAuthPage() {
  redirect('/auth/login');
} 