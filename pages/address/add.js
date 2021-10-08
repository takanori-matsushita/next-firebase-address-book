import Layout from "../../components/layout/layout";
import PageTitle from "../../components/pageTitle";
import Link from "next/link";
import Input from "../../components/input";

export default function Add() {
  return (
    <Layout
      title="Address Management App | add address"
      description="Add address in my address book."
    >
      <PageTitle title="Address book." />
      <div className="alert alert-primary">
        <p className="h2 mb-5 text-center">add address</p>
        <Input id="name" label="Name:" />
        <Input id="mail" label="Mail:" type="mail" />
        <Input id="tel" label="Tel:" />
        <Input id="memo" label="Memo:" />
        <div className="text-center">
          <Link href="/address/add">
            <a className="btn btn-primary me-3">Add address</a>
          </Link>
          <Link href="/address">
            <a className="btn btn-outline-danger">Add Go back</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
