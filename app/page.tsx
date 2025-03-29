"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 md:px-6 flex h-16 items-center justify-center mx-auto">
          <div className="flex items-center justify-between w-full max-w-7xl px-0">
            <div>
              <Link href="/" className="flex items-center">
                <Image
                  src="https://divizend.com/divizend.svg"
                  alt="Divizend Logo"
                  width={40}
                  height={12}
                  className="h-3.5 w-auto mr-2"
                />
                <span className="font-bold text-sm text-amber-800 dark:text-amber-300">
                  Live
                </span>
              </Link>
            </div>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="https://live.divizend.com/stream"
                className="transition-colors hover:text-primary cursor-pointer"
              >
                Twitch
              </Link>
              <Link
                href="#companion"
                className="transition-colors hover:text-primary cursor-pointer"
              >
                Companion
              </Link>
              <Link
                href="#calendar"
                className="transition-colors hover:text-primary cursor-pointer"
              >
                Calendar
              </Link>
              <Link
                href="#participate"
                className="transition-colors hover:text-primary cursor-pointer"
              >
                Participate
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Warm amber gradient */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-100 to-amber-50/50 dark:from-amber-950 dark:to-amber-900/30 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] opacity-5"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-3 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Participatory Wealth, Live in Action.
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our mission is to increase global financial health, both
                  digitally and socially. We invite you to join our community
                  fostering financial flourishing, financial independence and
                  more intelligent financial decision-making structures.
                </p>
              </div>
              <div id="live" className="w-full max-w-md space-y-2 mt-8">
                <Card className="w-full mx-auto bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-amber-700 dark:text-amber-300">
                      All Our Decision-Making Happens Live on Twitch
                    </CardTitle>
                    <CardDescription className="mx-auto max-w-md">
                      Do join our planning meetings, community conversations and
                      collective learning sessions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center gap-2">
                    <Link
                      href="https://twitch.tv/divizend"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-bold w-full cursor-pointer"
                      >
                        <span className="flex items-center justify-center w-full">
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
                            className="mr-2"
                          >
                            <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
                          </svg>
                          Watch Divizend Live
                        </span>
                      </Button>
                    </Link>
                    <Link
                      href="https://docs.google.com/presentation/d/1h6CmdySjttuiQN9nzBaSkbWCvegpO8tbclm_8Ot-bu4/edit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button
                        variant="outline"
                        className="border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/30 w-full cursor-pointer"
                      >
                        <span className="flex justify-center w-full">
                          Explore the Strategy Deck
                        </span>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section - Rose gradient with subtle pattern */}
        <section
          id="companion"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-rose-50 to-white dark:from-rose-900/30 dark:to-background flex items-center justify-center relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,207,232,0.15),transparent_70%)]"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Step 1: Subscribe to the Divizend Companion
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Together we build the Divizend Companion, containing tools to
                  support your growth journey toward financial independence,
                  available for both iOS and Android devices. All open source on
                  GitHub. Membership for €20/month. The membership gives you
                  access to everything, no tiers ever.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 mt-8 justify-center items-center">
                <Link
                  href="https://apps.apple.com/de/app/divizend-companion/id6670220715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center"
                >
                  <Image
                    src="/appstore.svg"
                    alt="Download on the App Store"
                    width={180}
                    height={60}
                    className="h-14 w-auto"
                  />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.divizend.companion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center"
                >
                  <Image
                    src="/googleplay.svg"
                    alt="Get it on Google Play"
                    width={200}
                    height={60}
                    className="h-14 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Calendar Section - Orange with subtle texture */}
        <section
          id="calendar"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-orange-50 dark:from-background dark:to-orange-950/20 flex items-center justify-center relative border-t border-orange-100 dark:border-orange-900/20"
        >
          <div className="absolute inset-0 bg-[url('/subtle-dots.png')] opacity-5"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Upcoming Events Calendar
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Divizend Live is not only an app, it is also an event hub.
                  Join our scheduled streams, workshops, and community events.
                </p>
              </div>

              <div className="mt-4 flex justify-center mb-4">
                <Link
                  href="https://calendar.google.com/calendar/u/0?cid=Y19jZDYwYWYzNmVhZGE3ZmUyYjVkOWY2OThjNTZmYzliMzAwYTZiZmQwOTgzYzQzZDQ3ZmNlNjZlY2EyNDliMDc0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex items-center border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-900/30 w-full cursor-pointer"
                  >
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
                      className="mr-2"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span className="flex justify-center w-full">
                      Subscribe to the Divizend Live Calendar
                    </span>
                  </Button>
                </Link>
              </div>

              <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-lg border bg-background shadow">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=c_cd60af36eada7fe2b5d9f698c56fc9b300a6bfd0983c43d47fce66eca249b074%40group.calendar.google.com&ctz=Europe%2FLisbon"
                  style={{ border: 0 }}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Participation Section - Warm gradient with angle */}
        <section
          id="participate"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-rose-50 dark:from-orange-950/20 dark:to-rose-950/20 flex items-center justify-center relative border-t border-amber-100 dark:border-amber-900/20"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(254,215,170,0.1),transparent_60%)]"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
              <div className="space-y-3 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Participation By Default
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Divizend Live is not only of an app and an event hub, but it
                  also pioneers a radical new approach for a fundamentally
                  democratic way of making decisions about how to distribute
                  money. If you have a Divizend membership, you like a
                  shareholder in Divizend Live. If you participate, you and your
                  business can grow with us.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto">
              {/* Decision Making */}
              <Card className="border-amber-200 dark:border-amber-800 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-amber-800 dark:text-amber-300">
                    Collective Decision Making
                  </CardTitle>
                  <CardDescription className="mx-auto">
                    With participatory budgeting, <i>you</i> decide over where
                    the money you pay for the Divizend membership in the
                    Companion should go.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    It's not just your voice that matters, but you also directly
                    influence budgeting.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <Link
                    href="https://pol.is/8knthjekds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-200 dark:bg-amber-900/20 dark:hover:bg-amber-900/30 dark:text-amber-100 dark:border-amber-800 cursor-pointer">
                      <span className="flex justify-center w-full">
                        Participate in Polis Discussions
                      </span>
                    </Button>
                  </Link>
                  <Link
                    href="https://dreaming.now/divizend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-200 dark:bg-amber-900/20 dark:hover:bg-amber-900/30 dark:text-amber-100 dark:border-amber-800 cursor-pointer">
                      <span className="flex justify-center w-full">
                        Distribute Funds on dreaming.now
                      </span>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Open Source Development */}
              <Card className="border-orange-200 dark:border-orange-800 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-orange-800 dark:text-orange-300">
                    Open-Source Collaboration
                  </CardTitle>
                  <CardDescription className="mx-auto">
                    The infrastructure around Divizend Live, including the
                    Companion itself, is open source and GPL-licensed by design.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    Whether you're a developer, designer, or have thoughtful
                    suggestions, your contributions would be most welcome.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfiNXkzQBOsRNp4q9vvtwSczwgHkK3rSA6KfgqdBRhcbwttgA/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-orange-100 hover:bg-orange-200 text-orange-900 border-orange-200 dark:bg-orange-900/20 dark:hover:bg-orange-900/30 dark:text-orange-100 dark:border-orange-800 cursor-pointer">
                      <span className="flex justify-center w-full">
                        Propose Development Ideas
                      </span>
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/divizend/companion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-orange-100 hover:bg-orange-200 text-orange-900 border-orange-200 dark:bg-orange-900/20 dark:hover:bg-orange-900/30 dark:text-orange-100 dark:border-orange-800 cursor-pointer">
                      <span className="flex justify-center w-full">
                        Collaborate on GitHub
                      </span>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Workshop Sessions */}
              <Card className="border-rose-200 dark:border-rose-800 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-rose-800 dark:text-rose-300">
                    Beyond Capital Workshops
                  </CardTitle>
                  <CardDescription className="mx-auto">
                    "Beyond Capital" is Divizend's workshop series for all
                    topics which are beyond the mainstream financial realm.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    Financial health isn't only about finance, it's a lifestyle.
                    We regularly invite domain experts and professional
                    facilitators giving you new inspiration for life.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLScTievr8TyWnFY1PIu8XhyZhtw77m4r5qIAO5fbwx3FMDtgFA/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-rose-100 hover:bg-rose-200 text-rose-900 border-rose-200 dark:bg-rose-900/20 dark:hover:bg-rose-900/30 dark:text-rose-100 dark:border-rose-800 cursor-pointer">
                      <span className="flex justify-center w-full">
                        Propose a Workshop Session
                      </span>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Friendships Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-rose-50 to-orange-50 dark:from-rose-950/20 dark:to-orange-950/20 flex items-center justify-center relative border-t border-amber-100 dark:border-amber-900/20">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(254,215,170,0.1),transparent_60%)]"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
              <div className="space-y-3 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Building Friendships Around Finance
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We believe that financial flourishing happens in community.
                  Our approach combines deep human connection with innovative
                  financial tools.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
              {/* Microsolidarity */}
              <Card className="border-amber-200 dark:border-amber-800 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full max-w-sm w-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-amber-800 dark:text-amber-300">
                    Microsolidarity
                  </CardTitle>
                  <CardDescription className="mx-auto">
                    A community building framework that helps people develop
                    deep trust relationships
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    Microsolidarity creates support structures through small
                    groups ("crews") that foster mutual aid and collective
                    intelligence. We use this framework to build meaningful
                    connections that support financial flourishing.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://microsolidarity.cc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-200 dark:bg-amber-900/20 dark:hover:bg-amber-900/30 dark:text-amber-100 dark:border-amber-800 cursor-pointer">
                      <span className="flex justify-center w-full">
                        Explore Microsolidarity
                      </span>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* dreaming.now */}
              <Card className="border-rose-200 dark:border-rose-800 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full max-w-sm w-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-rose-800 dark:text-rose-300">
                    dreaming.now
                  </CardTitle>
                  <CardDescription className="mx-auto">
                    Empowering dreams through collective action and
                    participatory budgeting
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    The dreaming.now system is our revolutionary approach to
                    crowdfunding and collaborative funding, making the
                    allocation of funds a core pillar of the democratic process.
                    It enables transparency, accountability, and financial
                    grassroots democracy.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://github.com/hermesloom/dreaming.now"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-rose-100 hover:bg-rose-200 text-rose-900 border-rose-200 dark:bg-rose-900/20 dark:hover:bg-rose-900/30 dark:text-rose-100 dark:border-rose-800 cursor-pointer">
                      <span className="flex justify-center w-full">GitHub</span>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section - Subtle amber gradient */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-b from-rose-50 to-amber-50 dark:from-rose-950/20 dark:to-amber-950/30 flex items-center justify-center relative border-t border-amber-100 dark:border-amber-900/20">
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-3 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  This is only the beginning
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Real-life events, physical community hubs, support crews,
                  joint political action, and that's only a fraction of what's
                  waiting for you. The Divizend membership in the Companion will
                  give you access to all of it. For any questions, collaboration
                  proposals, requests from philanthropic organizations and
                  individuals, thoughts, ideas or anything else, do reach out.
                </p>
                <Link
                  href="mailto:live@divizend.com"
                  className="inline-flex items-center justify-center mt-4 text-lg font-medium text-amber-800 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-200 transition-colors group"
                >
                  <span className="border-b-2 border-amber-300 dark:border-amber-700 group-hover:border-amber-500 dark:group-hover:border-amber-500 pb-0.5">
                    live@divizend.com
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Solid amber background */}
      <footer className="border-t border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/50">
        <div className="container flex flex-col md:flex-row items-center justify-between py-8 px-4 md:px-6 mx-auto">
          <div className="flex items-center gap-4 mb-4 md:mb-0 justify-center md:justify-start">
            <div className="flex items-center">
              <Image
                src="https://divizend.com/divizend.svg"
                alt="Divizend Logo"
                width={35}
                height={10}
                className="h-3 w-auto"
              />
              <span className="ml-1.5 font-bold text-xs text-amber-800 dark:text-amber-300">
                Live
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              A global community for financial flourishing.
            </p>
          </div>
          <div className="flex gap-4 text-xs text-muted-foreground justify-center md:justify-end items-center">
            <Link
              href="https://github.com/divizend"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-800 dark:hover:text-amber-300 transition-colors flex items-center"
              aria-label="Divizend GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 mr-2"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>GitHub</span>
            </Link>
            <Link
              href="https://divizend.com/impressum"
              className="hover:underline"
            >
              Imprint
            </Link>
            <Link
              href="https://divizend.com/datenschutz"
              className="hover:underline"
            >
              Data Protection
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
