import Link from "next/link"

export default function Contact() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-medium">CONTACT</h1>

      <div className="space-y-8">
        <p className="text-lg leading-relaxed">
          For those interested in joining our company, please apply by emailing{" "}
          <Link href="mailto:join@ithaca.xyz" className="text-blue-400 underline">
            join@ithaca.xyz
          </Link>
          . We do not require prior experience in crypto engineering, but it helps.
        </p>

        <p className="text-lg leading-relaxed">
          If you are looking to build on{" "}
          <Link href="#" className="text-blue-400 underline">
            Odyssey
          </Link>
          , please{" "}
          <Link href="#" className="text-blue-400 underline">
            fill in this form
          </Link>
          .
        </p>

        <p className="text-lg leading-relaxed">
          For other inquiries please email us at{" "}
          <Link href="mailto:comms@ithaca.xyz" className="text-blue-400 underline">
            comms@ithaca.xyz
          </Link>
          .
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-medium">ROLES</h2>

        <p className="text-lg leading-relaxed">
          We are looking for engineers who are looking for a place that will challenge them. We expect you to be able to
          turn around a medium- hard-level ticket in a few days, scope appropriately, have tight review cycles, and
          ship.
        </p>

        <p className="text-lg leading-relaxed">We're looking for engineers for:</p>

        <ol className="space-y-4 ml-6 list-decimal">
          <li className="text-lg pl-2">
            <span className="font-medium">Rollup Development:</span> You'd work on{" "}
            <Link href="#" className="text-blue-400 underline">
              Odyssey
            </Link>{" "}
            and improving the{" "}
            <Link href="#" className="text-blue-400 underline">
              OP Stack
            </Link>
            .
          </li>
          <li className="text-lg pl-2">
            <span className="font-medium">Core Protocol Development:</span> You'd work on improving Ethereum L1.
          </li>
          <li className="text-lg pl-2">
            <span className="font-medium">Reth SDK Development:</span> You'd work on making Reth easier to consume as a
            library.
          </li>
        </ol>
      </div>
    </div>
  )
}

