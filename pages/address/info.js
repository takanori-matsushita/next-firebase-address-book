import Input from "../../components/input";
import Layout from "../../components/layout/layout";
import PageTitle from "../../components/pageTitle";
import Link from "next/link";

export default function Info() {
  return (
    <Layout
      title="Address Management App | info messages"
      description="Send to messages."
    >
      <PageTitle title="Info & messages." />
      <div className="alert alert-primary">
        <p className="h2 mb-5 text-center">address info</p>
        <div>Name:</div>
        <div>Mail:</div>
        <div>Tel:</div>
        <div>Memo:</div>
        <hr className="divider" />
        <form>
          <Input id="message" label="Message" />
          <div className="text-center">
            <btn type="submit" className="btn btn-primary me-3">
              Add address
            </btn>
            <Link href="/address">
              <a className="btn btn-outline-danger">Go back</a>
            </Link>
          </div>
        </form>
      </div>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </Layout>
  );
}
