import Layout from "../../components/layout/layout";
import PageTitle from "../../components/pageTitle";
import Link from "next/link";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout
      title="Address Management App | TOP"
      description="This is mail address management application."
    >
      <PageTitle title="Address book." />
      <div className="alert alert-primary text-center">
        <p className="text-end">LOGINED:</p>
        <p className="h2 mb-5">please login...</p>
        <hr className="divider" />
        <Link href="/address/add">
          <a className="btn btn-primary">Add address</a>
        </Link>
      </div>
    </Layout>
  );
}
