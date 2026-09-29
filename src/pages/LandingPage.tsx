import { Button } from '../components/Button';

export function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="text-center flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-[var(--foreground)]">Welcome to Expense Tracker</h1>
        <Button size="md">
          Get Started
        </Button>
      </div>
    </div>
  );
}