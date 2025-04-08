import ProfileSidebar from '@/app/components/ProfileSidebar';

export default function ProfileLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <ProfileSidebar userId={params.id} />
        </div>
        <div className="md:col-span-3">
          {children}
        </div>
      </div>
    </div>
  );
} 