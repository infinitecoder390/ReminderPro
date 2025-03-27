import { Link } from "react-router-dom";
import { BellRing, Calendar, AlarmCheckIcon } from "lucide-react";
import { Button } from "../components/ui/button";
function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className=" border-b ">
        <div className="w-full container flex mx-auto h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <BellRing className="w-8 h-8" />
            <span className="text-xl font-bold">ReminderPro</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#features"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 ">
        <section className="w-full container mx-auto py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Never Forget Important Tasks Again
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  ReminderPro helps you stay organized with timely email
                  notifications for all your important events and tasks.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/signup">
                    <Button size="lg" className="w-full sm:w-auto">
                      Get Started
                    </Button>
                  </Link>
                  <a href="#how-it-works">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto"
                    >
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative h-[350px] lg:h-[500px] rounded-lg overflow-hidden bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="https://imgs.search.brave.com/1I-bLtcp06w_OmWtOkqIidJs4vfMoVYrNYbeOXNaoGk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGUk92/aV9RN28vMS8wLzE2/MDB3L2NhbnZhLXRl/YWwtcGluay1tb3Rp/dmF0aW9uYWwtcmVt/aW5kZXItaWctcG9z/dC1YS3FYM2xreWhM/QS5qcGc"
                    alt="ReminderPro Dashboard Preview"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full container mx-auto py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Key Features
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to stay on top of your schedule
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg">
                <div className="p-3 bg-primary/10 rounded-full">
                  <BellRing className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold">Email Notifications</h3>
                <p className="text-center text-muted-foreground">
                  Receive timely email reminders exactly when you need them.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Calendar className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold">Easy Scheduling</h3>
                <p className="text-center text-muted-foreground">
                  Create and manage multiple reminders with just a few clicks.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg">
                <div className="p-3 bg-primary/10 rounded-full">
                  <AlarmCheckIcon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold">Dashboard Overview</h3>
                <p className="text-center text-muted-foreground">
                  View all your upcoming reminders in one organized dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="w-full container mx-auto py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How It Works
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simple steps to never miss an important event again
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  1
                </div>
                <h3 className="text-xl font-bold">Create an Account</h3>
                <p className="text-center text-muted-foreground">
                  Sign up for free and set up your personal profile.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  2
                </div>
                <h3 className="text-xl font-bold">Add Reminders</h3>
                <p className="text-center text-muted-foreground">
                  Create reminders with titles, descriptions, and scheduled
                  times.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  3
                </div>
                <h3 className="text-xl font-bold">Get Notified</h3>
                <p className="text-center text-muted-foreground">
                  Receive email notifications when your reminders are due.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full container mx-auto py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple Pricing
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that works for you
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col p-6 border rounded-lg">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-muted-foreground">
                    Perfect for getting started
                  </p>
                </div>
                <div className="mt-4 mb-8">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Up to 10 reminders</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Email notifications</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Basic dashboard</span>
                  </li>
                </ul>
                <Link to="/signup" className="mt-auto">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
              <div className="flex flex-col p-6 border rounded-lg bg-primary text-primary-foreground">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-primary-foreground/80">For power users</p>
                </div>
                <div className="mt-4 mb-8">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-primary-foreground/80">/month</span>
                </div>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Unlimited reminders</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Priority email delivery</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Advanced dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Recurring reminders</span>
                  </li>
                </ul>
                <Link to="/signup" className="mt-auto">
                  <Button variant="secondary" className="w-full">
                    Upgrade to Pro
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col p-6 border rounded-lg">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">
                    For teams and businesses
                  </p>
                </div>
                <div className="mt-4 mb-8">
                  <span className="text-4xl font-bold">$29.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Admin dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Priority support</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto">
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <BellRing className="w-5 h-5" />
            <span className="text-lg font-semibold">ReminderPro</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 ReminderPro. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
