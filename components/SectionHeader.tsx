interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ icon, title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground [&_svg]:size-5">{icon}</span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>
      {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
    </div>
  );
};
export default SectionHeader
