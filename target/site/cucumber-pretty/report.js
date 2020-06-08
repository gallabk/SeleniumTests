$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Test1.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TEST: Test1 program \"10/0\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "name": "values 10 and 0",
  "keyword": "Given "
});
formatter.match({
  "location": "Test.values_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "calculate values",
  "keyword": "When "
});
formatter.match({
  "location": "Test.calculate_values()"
});
formatter.result({
  "error_message": "java.lang.IllegalArgumentException: Not dividible\r\n\tat stepdefinations.Test.calculate_values(Test.java:24)\r\n\tat ✽.calculate values(src/test/java/features/Test1.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "result",
  "keyword": "Then "
});
formatter.match({
  "location": "Test.result()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/java/features/Test2.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TEST: Test1 program \"10/5\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "values 10 and 5",
  "keyword": "Given "
});
formatter.match({
  "location": "Test.values_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "calculate values",
  "keyword": "When "
});
formatter.match({
  "location": "Test.calculate_values()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result",
  "keyword": "Then "
});
formatter.match({
  "location": "Test.result()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/java/features/Test3.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TEST: Test1 program \"10/10\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "name": "values 10 and 10",
  "keyword": "Given "
});
formatter.match({
  "location": "Test.values_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "calculate values",
  "keyword": "When "
});
formatter.match({
  "location": "Test.calculate_values()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result",
  "keyword": "Then "
});
formatter.match({
  "location": "Test.result()"
});
formatter.result({
  "status": "passed"
});
});