const options = {
    theme: 'bootstrap' as const,
    jsonFile: 'reports/cucumber-report.json',
    output: 'reports/cucumber-report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
      "Test Environment": "Local",
      "Browser": "Chromium",
      "Platform": process.platform,
      "Executed": "Local"
    }
  };
  