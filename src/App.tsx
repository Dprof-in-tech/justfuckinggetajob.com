import { useState } from 'react';
import { Coffee, Briefcase, Moon, Sun } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="fixed top-6 right-6 p-3 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <header className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Just Fucking Get A Job
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
              Stop debating. Start working. Think bigger.
            </p>
          </header>

          <hr className="border-gray-300 dark:border-gray-700 mb-12" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
              <Briefcase size={36} />
              The Problem
            </h2>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <p>
                You're wasting 47 hours per week on Twitter arguing which framework will "finally be the one" to solve all your problems. Spoiler: they're all the same.
              </p>
              <p>
                You're crafting 12,000-word Medium essays about whether spaces or tabs are a moral issue, getting 47 views, 3 from your mom.
              </p>
              <p>
                You're in your 47th Discord argument about folder structures. You've memorized every counterpoint. You've been banned twice. You created a new account.
              </p>
              <p>
                You have 47 GitHub repos. All unfinished. All "learning projects." All destined to live forever with a README that says "WIP - coming soon."
              </p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                Meanwhile, you're 47 years old and you've never written code that mattered.
              </p>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700 mb-12" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Solution
            </h2>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Get. A. Fucking. Job.
              </p>
              <p>
                Seriously. That's it. That's the whole thing. You don't need to read further. Go apply. Right now. Close this tab and apply to 5 jobs.
              </p>
              <p>
                When you have a job, something magical happens: you stop caring about the bullshit. Those debates that consumed your existence? They'll look like the waste of time they actually were. You'll be too busy shipping real features to 100,000 users to argue with some random on the internet about their favorite TypeScript strict mode settings.
              </p>
              <p>
                The worst part? You'll realize they weren't even wrong. Neither were you. It literally didn't matter. You could have saved 10 years of debate by just picking one and moving on.
              </p>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700 mb-12" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Get A Job?
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  Your Debates Will Become Irrelevant Overnight
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  You think "Should we use Rust or Go?" matters? It doesn't. You think the fight between Vue and React is important? It's not. You'll be too busy dealing with actual production issues, legacy code, and impossible deadlines to care about hypothetical purity.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  You'll Learn What "Shipped" Actually Means
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Your 47 unfinished GitHub repos taught you nothing. Shipping imperfect code to millions of users teaches you everything. You'll learn that a mediocre solution today beats a perfect solution next year. You'll understand why tech debt exists and why it's not a moral failure.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  You'll Make Money (Novel Concept)
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Money buys houses. Money buys coffee. Money buys freedom from internet arguments. Money lets you ignore 99% of discourse because you actually have skin in the game with real responsibilities. Suddenly that tweet about your tech stack choice doesn't sting because you're not starving.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  You'll Get Humbled By Actual Engineers
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  That senior dev who leaves comments on your PR? They've forgotten more than you'll ever know. That architect who says "we're going with this stack" and ends the discussion? They've been through the wars. One code review from them teaches more than 1,000 YouTube "best practices" videos by influencers who've never shipped anything.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  Your LinkedIn Headline Will Change
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Right now it says "aspiring developer" or "self-taught programmer" or some variation of "still learning." After getting a job, it says something like "Senior Software Engineer at XYZ" and suddenly people take you seriously. Funny how that works.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700 mb-12" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
              <Coffee size={36} />
              Also, Drink Coffee.
            </h2>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Caffeine is the only reason tech works.
              </p>
              <p>
                Studies show coffee reduces the risk of Type 2 diabetes, Parkinson's disease, and liver disease. It's loaded with antioxidants. It boosts your metabolism. It improves cognitive function. But honestly, we don't care about any of that.
              </p>
              <p>
                What we care about is this: coffee turns your brain from a sluggish, mistake-prone mess into a functional problem-solving machine. Without coffee, you'll spend 4 hours debugging an issue that takes 12 minutes after your second cup.
              </p>
              <p>
                Every major tech breakthrough was fueled by coffee. Linux? Coffee. React? Coffee. That time you finally fixed the race condition? Absolutely coffee.
              </p>
              <p>
                Stop with the energy drinks that taste like battery acid and have 47 ingredients that give you anxiety. Stop with the 4-shot vanilla lattes from Starbucks that cost $8. Get a French press. Make real coffee. Drink it black or with a splash of milk. Be normal.
              </p>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700 mb-12" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              "But I'm Learning!"
            </h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  "I need to master everything before I apply."
                </p>
                <p>
                  No you don't. Companies hire people to learn on the job. That's literally what junior positions are for. Apply anyway.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  "I'm building a portfolio."
                </p>
                <p>
                  Cool. Now imagine building that portfolio while getting paid. That's called a job.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  "The job market is tough."
                </p>
                <p>
                  Yeah, so you should probably spend your time applying to jobs instead of arguing about whether semicolons are necessary in JavaScript.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  "I don't drink coffee, I prefer tea."
                </p>
                <p>
                  Fine. Tea is acceptable. Just stay hydrated and caffeinated.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700 mb-12" />

          <section className="mb-16 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Real Talk
            </h2>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <p>
                Look, I get it. The job search is scary. Rejection sucks. Imposter syndrome is real.
              </p>
              <p>
                But you know what's scarier? Being 35 and still "learning" instead of earning. Having 0 years of professional experience because you were too afraid to try.
              </p>
              <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
                You're ready. You just don't know it yet.
              </p>
              <p>
                Apply to 10 jobs today. Get rejected by 9. Learn from the 1 interview you get. Repeat. Eventually, someone will say yes. Then you'll wonder why you waited so long.
              </p>
            </div>
          </section>

          <div className="text-center mb-16">
            <a
              href="https://www.linkedin.com/jobs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              Start Applying →
            </a>
          </div>

          <hr className="border-gray-300 dark:border-gray-700 mb-12" />

          <section className="mb-16 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-30 p-8 rounded-lg border-l-4 border-blue-400 dark:border-blue-600">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Disclaimer
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              If you have a job and you're still spending hours arguing about whether to use tabs or spaces, that's on you. We're not talking about you. You've already won. Enjoy your paycheck and go argue about whatever you want on your own time.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
              This website is for people who want a job but spend all their time debating instead of applying. If that's not you, congrats. If it is, stop reading and apply to 5 jobs right now.
            </p>
          </section>

          <hr className="border-gray-300 dark:border-gray-700 mb-12" />

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              References
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              This page is part of a long tradition of brutalist web design and internet sarcasm. Inspired by:
            </p>
            <div className="space-y-3">
              <p>
                <a
                  href="https://motherfuckingwebsite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  motherfuckingwebsite.com
                </a>
              </p>
              <p>
                <a
                  href="https://bettermotherfuckingwebsite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  bettermotherfuckingwebsite.com
                </a>
              </p>
              <p>
                <a
                  href="https://perfectmotherfuckingwebsite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  perfectmotherfuckingwebsite.com
                </a>
              </p>
              <p>
                <a
                  href="https://justfuckingusehtml.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  justfuckingusehtml.com
                </a>
              </p>
              <p>
                <a
                  href="https://justfuckingusereact.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  justfuckingusereact.com
                </a>
              </p>
              <p>
                <a
                  href="https://justfuckingusetailwind.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  justfuckingusetailwind.com
                </a>
              </p>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700 mb-12" />

          <footer className="text-center text-gray-600 dark:text-gray-400">
            <p className="mb-4">
              Just Fucking Get A Job
            </p>
            <p className="text-sm">
              Now close this tab and update your resume.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
