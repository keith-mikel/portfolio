import React from 'react';

export default function About() {
  return (
    <div className="container mt-4">
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <img
                src="src/assets/keith.jpg"
                alt="About Me"
                className="about-image img-fluid rounded-circle"
              />
            </div>
            <div className="col-md-8">
              <h1>About Me</h1>
              <p>
                As an experienced ERP consultant, I specialize in selling and implementing ERP solutions for small to mid-sized businesses. My focus is on ensuring process adoption and process improvement, to help my clients achieve their desired outcomes. With my deep knowledge of ERP systems and processes, I am able to guide clients through every step of the implementation process, from initial consultation to post-implementation support. My ultimate goal is to help businesses streamline their operations, improve efficiency, and drive growth through the effective use of technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h1>My Experience</h1>
          <div className="card mb-3">
            <div className="card-body">
              <h2>Owner / Member</h2>
              <h3>Seer Business Systems LLC</h3>
              <h4>Minneapolis, Minnesota, United States</h4>
              <ul>
                <li>Develop, Implement, and support cloud ERP solutions for small and mid-sized businesses</li>
                <li>Create custom ERP systems tailor-made to fit the unique needs of the SMB market</li>
                <li>Develop custom API services to integrate ERP solutions with third-party software</li>
              </ul>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h2>ERP Consultant</h2>
              <h3>Element Five Solutions, Inc.</h3>
              <h4>Minneapolis, Minnesota, United States</h4>
              <ul>
                <li>Implement Cloud-based ERP system (SaaS) for small to mid-sized businesses</li>
                <li>Specialize in SAP Business ByDesign, Odoo, and Acumatica</li>
                <li>Training end-users for the use of business transactions within ERP systems</li>
                <li>Supporting current customers for fine-tuning and troubleshooting of ERP systems.</li>
                <li>Tailor make reports and KPIs to fit customers' needs.</li>
                <li>Lead sales presentations to prospective clients</li>
                <li>Create and Share ERP marketing material</li>
                <li>Develop and implement custom API extensions for ERP systems (Python)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h1>Education and Certificates</h1>
          <div className="card mb-3">
            <div className="card-body">
              <h2>University of Minnesota - Carlson School of Management</h2>
              <h3>Bachelor's degree, Logistics, Materials, and Supply Chain Management</h3>
              <h4>2015 - 2018</h4>
              <p>Grade: 3.0</p>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <h2>Odoo Technical Training Certificate</h2>
              <h3>Odoo</h3>
              <p>Issued Apr 2023</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h2>SAP Certified Application Associate - SAP Business ByDesign Implementation Consultant</h2>
              <h3>SAP</h3>
              <p>Issued Jan 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
