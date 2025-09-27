import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-background to-secondary/30">
        <div className="text-center animate-fade-in">
          <h1 className="mb-6 text-4xl lg:text-6xl font-bold text-primary">
            Seven MTA Server
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
            بهترین سرور ام تی ای ایران
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105">
              دانلود بازی
            </button>
            <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
              ورود به انجمن
            </button>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
