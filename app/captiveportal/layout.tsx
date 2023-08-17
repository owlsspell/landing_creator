export default function CaptiePortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-4">
      <div className="justify-center inline-block text-center w-full">
        {children}
      </div>
    </section>
  );
}
