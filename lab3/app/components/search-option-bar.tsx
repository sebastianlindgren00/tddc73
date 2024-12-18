interface SearchOptionBarProps {
  selectedLanguage: string;
  setLanguage: (language: string) => void;
}

export default function SearchOptionBar({
  selectedLanguage,
  setLanguage,
}: SearchOptionBarProps) {
  const languages = ["javascript", "typescript", "python", "java", "cpp", "go", "rust", "ruby", "csharp", "swift", "php", "web", "css"];

  return (
    <select
      value={selectedLanguage}
      onChange={(e) => setLanguage(e.target.value)}
    >
      {languages.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  );
}
