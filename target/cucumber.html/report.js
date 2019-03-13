$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Mail ID",
  "description": "",
  "id": "login;mail-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User in Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter mail id and pw",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user go to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_in_login_page()"
});
formatter.result({
  "duration": 274197274,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enter_mail_id_and_pw()"
});
formatter.result({
  "duration": 161420,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_go_to_home_page()"
});
formatter.result({
  "duration": 460467,
  "status": "passed"
});
});