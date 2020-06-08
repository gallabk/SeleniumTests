package stepdefinations;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Test {
	int num1=0;
	int num2=0;
	int result=0;	
	
	@Given("^values (\\d+) and (\\d+)$")
	public void values_and(int number1, int number2) throws Exception {
		num1=number1;
		num2=number2;
	}

	@When("^calculate values$")
	public void calculate_values() throws Exception {
		try {
			result = num1/num2;
			}catch(Exception ex) {				
				System.out.println("Not dividible Result="+result);	
				throw new IllegalArgumentException("Not dividible");
			}	 
	}

	@Then("^result$")
	public void result() throws Exception {		
			System.out.println("Result="+result);			
	}

}
