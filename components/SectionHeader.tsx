interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ icon, title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">{icon}</div>
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">{title}</h2>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};
export default SectionHeader
