import React, { Component } from 'react';
import AppNav from './AppNav';
import { Container } from "reactstrap";
import Footer from "./Footer"

class Home extends Component {
    state = {  }
    render() { 
        return ( 
          <div>
          <AppNav />
          <Container>
          <h4>TRY IT OUT: CLICK</h4>
              <hr className="hr-style" />
              <h3>ABOUT THIS APP</h3>
              <p>
                  Expense Tracker was created to keep track of your day-to-day expenses. 
                  This app collects data such as the description, date and location of 
                  where the expense was spent, and are then passed on to the database.  
              </p>
              <h4>THE BACK-END</h4>
              <p>
                 The back-end of this application was implemented with Spring Boot, a Java-based Framework.
                 The app was created using the Repository Design Pattern. The programming logic was divided into 
                 three interconnecting elements, the model, controller, and repository.
              </p>
              <p>
                  The model and the view is where the application manages the data logic and represent the 
                  visualization of these data in the program. However, the main component of the back-end 
                  of this app is the controller. This is where data flows in and out of the application, 
                  and where the application manages all GET, POST, PUT and DELETE requests of the client. 
              </p>
              <h4>The FRONT-END</h4>
              <p>
                  React.js was chosen to be the framework to implement the front-end of the application, because of
                  its ability to handle state changes of each component independenlty.
              </p>
          </Container>
          <div className="footer">
              <Footer />
          </div>               
      </div>

        
        );
    }
}
 
export default Home;