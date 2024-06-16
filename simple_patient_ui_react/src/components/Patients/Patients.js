import Layout from "../Layout.js";
import PatientsTable from "../PatientsTable.js";

const Patients = () => {
  return (
    <Layout>
      <main>
        <section>
          <PatientsTable />
        </section>
      </main>
    </Layout>
  );
};

export default Patients;
