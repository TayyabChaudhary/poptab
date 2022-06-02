import Header from "../Header/header";
import SectionOne from "./SectionOne/section_one";
import SectionTwo from "./SectionTwo/section_two";
import Head from "next/head";

function Main() {
  return (
    <div>
      <Head>
        <title>How It's Works</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        />
      </Head>
      <SectionOne />
      <SectionTwo />
    </div>
  );
}
export default Main;
