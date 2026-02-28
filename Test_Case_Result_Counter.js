var testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
var passCount = 0, failCount = 0, skipCount = 0,passRate=0;
for (var i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        passCount++;
    } else if (testResults[i] === "fail") {
        failCount++;
    } else if (testResults[i] === "skip") {
        skipCount++;
    }
passRate=(passCount/testResults.length)*100;
}
console.log("Total Tests: " + testResults.length);
console.log("Passed: " + passCount);
console.log("Failed: " + failCount);
console.log("Skipped: " + skipCount);
console.log("Pass Rate: " + passRate.toFixed(2) + "%");
if(failCount==0){
    console.log("All passed");
}
else if(failCount <=2){
    console.log("Review failed tests");
}else if (failCount > 2){
    console.log("Block release");
}