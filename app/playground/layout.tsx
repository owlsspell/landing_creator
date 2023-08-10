export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center gap-4 justify-top">
      <div className="justify-center inline-block w-full text-center">
        {children}
      </div>
    </section>
  );
}
