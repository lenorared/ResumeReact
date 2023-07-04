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
        <li> Maintained and added new features to Chopra.com, Java Backend with JavaScript Front End, BrightSpot CMS </li>
        <li> Developed custom JavaScript audio and video player to import meditation audio files from the app directly into web  </li>
        <li> Implement new Single Signon for Chopra.com, using Auth0 JavaScript SDK </li>
        <li> Changed Profile page to retrieve data from different Profiles system </li> 
        <li> Developer a paywall CMS page that displayed products if purchased, else sent user to purchase page </li>
        <li> Created new Brightspot CMS Components to meet marketing needs, text with images, promotions, accordions </li>
    </ul>
    </div>

    <div className="job"> 
    <div className="jobTitle"> 
        <span>   Full Stack Web Developer  <br />  PAIGE Fashion, Culver City, CA   </span> 
        <span>  2019 – May 2022 </span>  <br />
    </div> 
    <ul>
        <li>	Worked on a team of 3 developers for an E-commerce fashion website, www.paige.com, created with Angular 4, Typescript, HTML, CSS, JavaScript, Java, Node.js </li>
        <li>	Integrated API calls to our database and hosting vendors BloomReach and Commerce Tools </li>
        <li>	Collaborated with UX Designer to create pixel perfect UIs from her mockups </li>
        <li>	Implemented CSS media queries or flexbox to create responsive UIs for mobile and tablet</li>
        <li>	Developed and improved multiple website features such as Search Bar with suggestions and photos, shop related products, CSS animation, pop for email marketing </li>
        <li>	Integrated our site with UPS APIs to get delivery date or in transit status, also to print shipping label </li>
        <li>	Created custom Order History and Package tracking interface, integrated our site with UPS APIs to get delivery date or in transit status </li>
        <li>	Created Holiday Gift Guide page, with reusable JavaScript objects for next season  </li>
        <li>	Backend - Wrote custom Java nightly cron job to pull current inventory values from OMS into Commerce Tools so website has current supply numbers </li>
        <li>	Backend - Developed and enhanced components in Java backend CMS for designer to use  </li>
        <li>	Implemented and tested tags in Google Tag Manager, consumed by Google Analytics and other 3rd parties </li>
        <li>	Perform code deploys with Jenkins and Rundeck, Git change management and pull requests </li>
        <li>	Wrote Mandrill (related to Mailchimp) transactional emails and Listrak mass email </li>
        <li>	Run Google Lighthouse Report and fix website issues, such as delete unused JavaScript code and improve mobile usability </li>
    </ul>
    </div>
    <div className="job">  
    <div className="jobTitle">
        <span>  Analyst Programmer <br />  Mayo Clinic - Rochester, Minnesota   </span> 
        <span> 2011 – 2019 </span>  <br />
    </div>
    <ul>                       				
        <li>	Worked on an agile team of 5 full stack web developers in Mayo Clinic’s for-profit division </li>
        <li>	Used C#, .NET, Angular 1.5, JavaScript, jQuery </li>
        <li>	Primary developer for internal angular web application to track product sales and clients </li>
        <li>	Trained internal users and operations managers how to use applications, demonstrated new features </li> 
        <li>	Was the informal go-to Developer for user questions and concerns, trained new team members </li>
        <li>	Contributing developer for Real Time Content Delivery, external facing APIs that deliver Mayo’s proprietary medical information to external clients </li>
        <li>	Maintained user interface for Ask Mayo Clinic Online, an algorithm driven medical diagnosis web application </li>
        <li>	Participate in regular code review meetings with other developers to review best practices  </li>
        <li>	Met weekly with PhD researchers and users to gather requirements and communicate progress </li>
        <li>	Developed user interface for web application to collect feedback from Breast Cancer survivors </li>
    </ul>
    </div>

    <div className="job">  
    <div className="jobTitle"> 
        <span> Staff Software Engineer <br /> IBM - Rochester, Minnesota  </span> 
        <span> 2003 - 2010 </span>  <br />
    </div>
    <ul>   
        <li>    Post Sales Level 2 Technical Support for DB2 ans AS/400 server performance </li>                                                      
        <li>	Supported both domestic and international clients in live call center or electronically </li>
        <li>	Helped customers find bug fixes or in extreme cases would log on remotely and patch their server </li>
        <li>	Reviewed communications trace to isolate if bottleneck in client, server, or network </li>
        <li>	Assembled environment to recreate code defects for the Development team to fix </li>
        <li>	Prioritized schedule based on various clients’ needs and problem severity level </li>
        <li>	For severity 1 or system down situation, worked with client 24x7 until problem solved  </li>
    </ul>
    </div>

</div> 
  )
}

export default Experience