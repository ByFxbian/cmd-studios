export function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200">
      <div className="container mx-auto max-w-7xl p-6 text-zinc-600">
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
            <p className="text-sm">&copy; {new Date().getFullYear()} CMD Studios. Alle Rechte vorbehalten.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-zinc-900 transition-colors">Impressum</a>
            <a href="#" className="text-sm hover:text-zinc-900 transition-colors">Datenschutz</a>
            </div>
        </div>
      </div>
    </footer>
  );
}