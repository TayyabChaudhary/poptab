import Head from "next/head";
import DashboardHeader from "../../../Dashboard/Header/header";
import VenueDetailsSec from "./venuedetailssec";
export default function VenueDetailsMain() {
  return (
    <div>
      <Head>
        <title>Venue Details 2</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0="
        />
      </Head>

      <DashboardHeader />

      <VenueDetailsSec />
    </div>
  );
}
