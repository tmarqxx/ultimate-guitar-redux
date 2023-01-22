import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Button } from "../components/ui/Button";
import { Text } from "../components/ui/Text";
import { Toolbar } from "../components/ui/Toolbar";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const navLinks = [
    {
      label: "Tabs",
      href: "./explore",
    },
    {
      label: "Shots",
      href: "./shots",
    },
  ];

  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center bg-neutral-900">
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full max-w-screen-xl flex-col">
        <Toolbar app>
          <Toolbar.Start>
            <div className="flex flex-row">
              <Text className="pr-4" variant="xl/semibold" color="primary">
                GuitarTabs
              </Text>

              <nav className="flex flex-row items-center gap-3">
                {navLinks.map((nav) => (
                  <Link
                    className="px-2 py-1 target:text-teal-600"
                    key={nav.label}
                    href={""}
                  >
                    <Text variant="lg/semibold" color="white">
                      {nav.label}
                    </Text>
                  </Link>
                ))}
              </nav>
            </div>
          </Toolbar.Start>

          <Toolbar.End>
            <Button>Sign Up</Button>

            <Button type="white" outlined>
              Log In
            </Button>
          </Toolbar.End>
        </Toolbar>

        <main className="flex min-h-screen w-full flex-col items-center justify-center">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="flex flex-col items-end font-bold text-white md:text-7xl">
              <div className="">
                Go from{" "}
                <span className="font-normal italic text-teal-600">zero</span>{" "}
                to
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
                Juke Box Hero
              </div>
            </h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
              <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://create.t3.gg/en/usage/first-steps"
                target="_blank"
              >
                <h3 className="text-2xl font-bold">First Steps →</h3>
                <div className="text-lg">
                  Just the basics - Everything you need to know to set up your
                  database and authentication.
                </div>
              </Link>
              <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://create.t3.gg/en/introduction"
                target="_blank"
              >
                <h3 className="text-2xl font-bold">Documentation →</h3>
                <Text variant="lg/normal" color="secondary">
                  Learn more about Create T3 App, the libraries it uses, and how
                  to deploy it.
                </Text>
              </Link>
            </div>
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-2">
                <Button>Primary</Button>
                <Button outlined>Primary</Button>
                <Button loading>Primary</Button>
                <Button outlined loading>
                  Primary
                </Button>
                <Button disabled>Primary</Button>
                <Button outlined disabled>
                  Primary
                </Button>
              </div>
              <div className="flex gap-2">
                <Button type="secondary">Secondary</Button>
                <Button type="secondary" outlined>
                  Secondary
                </Button>
                <Button type="secondary" loading>
                  Secondary
                </Button>
                <Button type="secondary" outlined loading>
                  Secondary
                </Button>
                <Button type="secondary" disabled>
                  Secondary
                </Button>
                <Button type="secondary" outlined disabled>
                  Secondary
                </Button>
              </div>
              <div className="flex gap-2">
                <Button type="pro">Pro</Button>
                <Button type="pro" outlined>
                  Pro
                </Button>
                <Button type="pro" loading>
                  Pro
                </Button>
                <Button type="pro" outlined loading>
                  Pro
                </Button>
                <Button type="pro" disabled>
                  Pro
                </Button>
                <Button type="pro" outlined disabled>
                  Pro
                </Button>
              </div>
              <div className="flex gap-2">
                <Button type="white">White</Button>
                <Button type="white" outlined>
                  White
                </Button>
                <Button type="white" loading>
                  White
                </Button>
                <Button type="white" outlined loading>
                  White
                </Button>
                <Button type="white" disabled>
                  White
                </Button>
                <Button type="white" outlined disabled>
                  White
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;