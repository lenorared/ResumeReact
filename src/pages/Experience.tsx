import './Experience.css'

const Experience = () => {
  return (
    <div className="profExp"> 
    <div className="job">  
    <div className="jobTitle">
        <span> Full Stack Web Developer  <br />  Chopra Global  </span> 
        <span>  May 2022 – April 2023 </span>  <br />
    </div>
    <ul>
        <li>  Developed custom hybrid audio and video player for Chopra.com that shared backend media files with the
        Chopra app, generating new sales for meditation playlists on the website </li>
        <li> Upgraded existing sign-on to use OAuth Single Sign-on for Chopra.com, using Auth0 JavaScript SDK,
        changed user profile page to retrieve data from Auth0 using React components </li>
        <li> Integrated the CMS with a Subscription service GraphQL API to create a paywall page which displayed
        content if purchased, else directed user to a sales page to increase revenue </li>
        <li> Created custom BrightSpot CMS Components from our designer’s Figma mockups using Java, JavaScript,
        HTML and CSS, to meet marketing needs for Chopra.com </li>
    </ul>
    </div>

    <div className="job"> 
    <div className="jobTitle"> 
        <span>   Full Stack Web Developer  <br />  PAIGE Fashion, Culver City, CA   </span> 
        <span>  2019 – May 2022 </span>  <br />
    </div> 
    <ul>
        <li> Created new Order History UI on paige.com, integrated with our Order Management API (Commerce
        Tools) to display order status received or shipped, used UPS API to display transit status or delivery date </li> 
        <li> Developed new Returns Interface, integrated with our OMS to start the return and used UPS shipping API to
        create a printable mailing label </li> 
        <li> Enhanced existing search bar to listen to user input, then call Product API and displayed results of suggested
        search terms and product images below the search bar, to increase conversion </li> 
        <li> Built a Shop the Look component for product page, which displayed a carousel of related items </li> 
        <li> Created Holiday Gift Guide page, so that on category button click, it changed hero image and product list 
        API parameter, with reusable JavaScript class for next season </li> 
        <li> Implemented and debugged tags in Google Tag Manager, also used Google Analytics and Google 
        Lighthouse reports to find and fix website issues </li> 
        <li> Wrote Mandrill (related to Mailchimp) transactional emails to send customers retail sales receipts, online
        order received and order shipped emails </li> 
        <li> Developed responsive page layouts for tablet and mobile with media queries or CSS flexbox </li> 
        <li> Co-wrote and scheduled nightly Java cron job to calculate new inventory numbers available for website </li> 
    </ul>
    </div>
    <div className="job">  
    <div className="jobTitle">
        <span>  Analyst Programmer <br />  Mayo Clinic - Rochester, Minnesota   </span> 
        <span> 2011 – 2019 </span>  <br />
    </div>
    <ul>                       				
       <li> Developed web application to enter and save heart surgery data using HTML, jQuery, JavaScript and SASS
        DB. It was used to certify Mayo Clinic for insurance and conduct research studies </li>
        <li> Created user interface for web application to collect feedback from breast cancer survivors </li>
        <li> Contributing developer for an external facing search API for medical information, written in C# .NET </li>
        <li> Created SSL Certificates and API keys to store in AWS, helped users connect and use our API </li>
        <li> Developed internal Angular web app to track API sales and clients </li>
        <li> Contributing developer to create new .NET PC app for orthopedic surgery database, in C# and Linq </li> 
        <li> Met with PhD researchers and users to gather requirements, communicate progress and demo new features </li>
    </ul>
    </div>

    <div className="job">  
    <div className="jobTitle"> 
        <span> Staff Software Engineer <br /> IBM - Rochester, Minnesota  </span> 
        <span> 2003 - 2010 </span>  <br />
    </div>
    <ul>   
       <li> Provided technical support to domestic and international IBM clients in live call center for iSeries Database
        and server performance issues (DB2 for AS/400) </li>
        <li> Assisted clients with database locking and commitment control issues, worst case if a rollback was too big
        and server became unusable, would log on and patch the system to cancel it </li>
        <li> Helped clients take Database Monitors and System Performance tools, analyzed the results to see where
        slowdown was happening. It could be at a DB level and customer could create a new SQL Index, or at
        server level and customer may have to replace a disk, add more CPU or schedule jobs to run at separate
        times </li>
        <li> In the case of IBM code defect, assembled recreate environment for the Development team to fix </li>
        <li> helped users “undelete” records in a file by removing journaled changes (only worked if customer kept
        separate journal objects) </li>
        <li> For severity 1 or system down situation, worked with client 24x7 until problem solved </li>
    </ul>
    </div>

</div> 
  )
}

export default Experience