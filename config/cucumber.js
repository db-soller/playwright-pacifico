module.exports = {
    default: {
        timeout: 30000,
        tags: process.env.npm_config_tags || "",
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "src/features/*.feature"
        ],
        dryRun: false,
        require: [
            "src/stepDefinitions/*.ts",
            "src/hooks/*.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:./test-results/reports/cucumber-report.html",
            "json:./test-results/reports/cucumber-report.json"
        ],
        parallel: 1
    }
}