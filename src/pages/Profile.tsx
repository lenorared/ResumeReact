import './Profile.css'

const Profile = () => {
  return (
    <div className="myProfile"> 
    <p> 
        Hello and thanks for visiting my online Resume! 
    </p>
    <p>
        I am a Full Stack Web Developer currently based in Los Angeles (mid-city/Fairfax area). 
        I have 9 years Software Development experience in a broad array of web technologies. 
        My roles ranged from requirements gathering, coding UIs from designer’s mockups, programming in frontend 
        and backend, code reviews, writing tests, presenting the UI to stakeholders, to deploying to production and
         fixing bugs.
    </p>
    <p> 
        In my recent role at Chopra, I implemented a new Auth0 SSO login to authenticate and redirect users back to the site, and store a bearer token to use to connect and retrieve user profile data from another system. I wrote a custom hybrid Audio/Video player to import meditation files from the backend shared with our mobile app. I also wrote a paywall page that gave access only to users who had purchased certain playlists, which utilized APIs and a custom Java component in our backend CMS.
    </p>
    <p> 
        In my previous position at Paige Fashion, the company implemented Ship from Store, which opened up web sales to be shipped not only from warehouse but also from store inventory. I developed a new Orders History page, breaking down possible multiple shipments per order and displaying tracking status for each package by connecting to UPS tracking APIs. I also wrote a new Returns Interface which allowed users to select an order they wanted to return and print a mailing label by using the UPS shipping APIs.
    </p>
    <p>
        At Mayo Clinic I worked closely with PhDs on smaller databases to store their surgical or research data. The projects ranged from cardiac surgery data to cancer survivor survey data. They were mostly Web applications, using HTML/CSS/JavaScript/Angular but also heavy on JQuery. I also used C#/.NET when I worked on a team that wrote a medical data search API to sell to external customers.
    </p>
    <p>
        I’m looking for a FullStack or Frontend role, either remote or hybrid in Los Angeles. Please be in touch if you think we’d be a good fit for each other.
    </p>
    <p> Thank you, <br/> Renee Mason </p>
</div> 
  )
}

export default Profile