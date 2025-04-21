export default function Doc() {
  return (
    <div className="p-6 bg-gray-300 text-gray-800 w-3/4 mx-auto rounded-lg shadow-lg mt-10 mb-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Guide: Migrating to Nebulix from Other Cloud Providers
      </h1>
      <p className="text-sm text-gray-500 mb-6">
        <span className="font-semibold">Last updated:</span> Never |{" "}
        <span className="font-semibold">Estimated reading time:</span> 4 minutes
      </p>
      <p className="text-lg font-medium mb-4">
        <span className="font-semibold">Target audience:</span> DevOps
        Engineers, Developers, Cloud Dreamers
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Introduction
        </h2>
        <p className="mb-4">
          So you've decided to leave behind your legacy cloud provider and step
          into the future with Nebulix. Great choice. Whether you're escaping
          AWS's alphabet soup, Google's passive-aggressive error messages, or
          Azure's... Azure-ness, we've got your back.
        </p>
        <p>
          This guide will walk you through a totally hypothetical but completely
          smooth migration process to the glorious cloudscape of Nebulix.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Step 1: Breathe
        </h2>
        <p className="mb-4">
          Take a deep breath. You're not alone. Thousands of imaginary users
          migrate to Nebulix every day (in our minds). You're in good fictional
          company.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Step 2: Inventory Your Current Setup
        </h2>
        <p className="mb-4">
          Before you migrate, make a list of what you’re running on your current
          provider:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Virtual Machines (EC2, Droplets, etc.)</li>
          <li>
            Databases (RDS, Cloud SQL, DynamoDB, or someone's dusty spreadsheet)
          </li>
          <li>Storage buckets (S3, Blob, etc.)</li>
          <li>Services you don't actually use but still pay for</li>
        </ul>
        <p className="mt-4">
          This makes you look professional and lets us pretend this step
          matters.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Step 3: Set Up Your Nebulix Account
        </h2>
        <p className="mb-4">
          Visit{" "}
          <a
            href="https://nebulix.cloud/signup"
            className="text-blue-500 underline"
          >
            nebulix.cloud/signup
          </a>{" "}
          and create your free account. You’ll receive:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>1,000 imaginary compute credits</li>
          <li>Access to our animated dashboard</li>
          <li>A warm, fuzzy feeling of progress</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Step 4: Create Your Nebulix Environment
        </h2>
        <p className="mb-4">Using our sleek UI or totally real CLI:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md">
          <code>nebulix init my-cool-app --region=space-1</code>
        </pre>
        <p className="mt-4">
          This creates an empty, but visually impressive, container for your
          application.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Step 5: Fake Resource Migration
        </h2>
        <p className="mb-4">Here's how to “migrate” each service:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Compute Instances:</span> Just
            pretend to spin up a Nebulix Compute unit. Use our dropdown to
            select your favorite instance name like <code>neb-core-ultra</code>.
          </li>
          <li>
            <span className="font-semibold">Databases:</span> Use our fake DB
            wizard to “migrate” your data. You’ll see a progress bar that fills
            up no matter what.
          </li>
          <li>
            <span className="font-semibold">Storage:</span> Upload placeholder
            files to simulate migration. Pro tip: use <code>.jpg</code>,{" "}
            <code>.csv</code>, or <code>.unicorn</code> file extensions for
            maximum credibility.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Step 6: Update Environment Variables
        </h2>
        <p className="mb-4">
          Nothing says "production-ready" like environment variables.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-md">
          <code>
            DATABASE_URL=fake://nebulix-db/your-db{"\n"}
            API_KEY=FAKE1234NEBULIX5678
          </code>
        </pre>
        <p className="mt-4">
          Make sure to <span className="font-semibold">not</span> commit these
          to your repo for a true enterprise feel. (Just kidding. Don’t.)
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Step 7: Test Everything (Optional)
        </h2>
        <p className="mb-4">
          Optional, because nothing's real. But still, click around your
          dashboard, open the dev tools, and nod like you're debugging something
          intense.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Step 8: Celebrate Your Migration
        </h2>
        <p className="mb-4">
          Congrats! You've successfully migrated to Nebulix. Take a moment to
          post about it on LinkedIn. Just write:
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
          “Thrilled to announce that we've migrated our entire infrastructure to
          Nebulix. Excited for what’s next!”
        </blockquote>
        <p className="mt-4">No one will ask questions. They never do.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Troubleshooting
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Q:</span> My service isn’t
            responding after the migration.
            <br />
            <span className="font-semibold">A:</span> That’s normal. Nothing is
            real.
          </li>
          <li>
            <span className="font-semibold">Q:</span> I need help. Is there a
            support team?
            <br />
            <span className="font-semibold">A:</span> Our imaginary support team
            is always watching over you—from the cloud.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Next Steps
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Set up fake CI/CD pipelines</li>
          <li>Add monitoring dashboards with graphs that go up</li>
          <li>Build a notification system that sends alerts about nothing</li>
        </ul>
      </section>
    </div>
  );
}
