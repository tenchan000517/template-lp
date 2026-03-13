import { sampleData } from "@/data/sample";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-text-primary)] text-white py-8">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-400">
          {sampleData.company.name}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          &copy; {new Date().getFullYear()} {sampleData.company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
