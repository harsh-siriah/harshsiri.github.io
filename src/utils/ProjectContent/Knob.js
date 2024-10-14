import {KnobComp,KnobMarket}from '../../assets/ProjectAssets/Knob'
  
const centerImageStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};
  const content = [
    {
      content: (
        <div>
          The Knob is an innovative online platform designed to streamline the acquisition 
          of vintage hardware for historic property rehabilitation and restoration carpenters. 
          It addresses critical challenges in the architectural salvage industry, including limited 
          selection, inconsistent availability, and lack of expert guidance.
          <br />
          <br />
        </div>
      ),
    },
    {
      title: "Key Features",
      content: (
        <div>
          <ul>
            <li>Extensive Online Catalog: Curated by professionals, offering detailed product specifications and high-quality images.</li>
            <li>Global Marketplace: Connecting salvage stores with carpenters worldwide.</li>
            <li>Expert Support: Providing guidance for product selection and restoration techniques.</li>
            <li>Efficient Inventory Management: Real-time tracking of available items.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Value Proposition",
      content: (
        <div>
          <ul>
            <li><strong>For Carpenters:</strong> Access to a diverse selection, efficient inventory tracking, and expert support for historic restorations.</li>
            <li><strong>For Salvage Stores:</strong> Increased visibility, streamlined inventory management, and expanded customer reach.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Market Potential",
      content: (
        <div>
          <ul>
            <li>Serviceable Obtainable Market: 2,000 professional carpenters (10% of U.S. market).</li>
            <li>Estimated annual revenue: $2 million (based on average $10,000 yearly expenses per carpenter).</li>
          </ul>
          <div style={centerImageStyle}>
            <img
              src={KnobMarket}
              alt="Market sizing"
              style={{ width: "40vw" }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Revenue Model",
      content: (
        <div>
          The platform generates revenue through an 8.5% transaction fee on all online sales, along with 
          fixed sign-up and listing fees for salvage stores, creating a sustainable and profitable business model.
          <br />
          <br />
        </div>
      ),
    },
    {
      title: "Competitive Edge",
      content: (
        <div>

          <div>
            The Knob's unique combination of extensive online catalogs, global reach, and expert support distinguishes 
            it from other platforms. Additionally, its focus on sustainability promotes the reuse of vintage materials 
            and supports the circular economy in the construction industry.
          </div>
          <div style={centerImageStyle}>
            <img
              src={KnobComp}
              alt="Market sizing"
              style={{ width: "40vw" }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Conclusion",
      content: (
        <div>
          The Knob fills a crucial gap in the market, promoting sustainable practices in historic preservation. 
          By facilitating easier access to vintage hardware, it contributes to more authentic restorations while 
          reducing waste and supporting the circular economy in the construction industry.
        </div>
      ),
    },
  ];
  
  export default content;
  