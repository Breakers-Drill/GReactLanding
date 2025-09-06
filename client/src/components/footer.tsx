export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold gradient-text" data-testid="text-footer-logo">
              GReact
            </span>
            <p className="text-muted-foreground mt-2" data-testid="text-footer-tagline">
              Магия современной разработки
            </p>
          </div>
          <div className="text-muted-foreground text-sm" data-testid="text-footer-copyright">
            © 2024 GReact. Начало удивительного путешествия.
          </div>
        </div>
      </div>
    </footer>
  );
}
