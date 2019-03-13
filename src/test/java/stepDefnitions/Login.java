package stepDefnitions;


import org.junit.runner.RunWith;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

public class Login {
	
	@Given("^User in Login page$")
    public void user_in_login_page() throws Throwable {
      System.out.println("Enter into login page");
      System.out.println("Enter into login page");
    }

    @When("^user enter mail id and pw$")
    public void user_enter_mail_id_and_pw() throws Throwable {
    	System.out.println("Entered Usermail and Password");
    	System.out.println("Entered Usermail and Password");
    }

    @Then("^user go to home page$")
    public void user_go_to_home_page() throws Throwable {
    	System.out.println("Enter into home page");
    	System.out.println("Enter into home page");
    }
    

}
