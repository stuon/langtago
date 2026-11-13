const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const path = require('path');
const fs = require('fs');
const os = require('os');

const PROPERTY_ID = process.env.GA4_PROPERTY_ID || '559281732';
const KEY_FILE = process.env.GA4_CREDENTIALS_PATH || path.join(os.homedir(), '.gemini/credentials/google-analytics.json');

if (!fs.existsSync(KEY_FILE)) {
    console.error(`[ERROR] Credentials file not found at: ${KEY_FILE}`);
    process.exit(1);
}

const analyticsDataClient = new BetaAnalyticsDataClient({
    keyFilename: KEY_FILE,
});

async function runReport() {
    console.log(`[INFO] Querying Google Analytics 4 for Langtago (Property: ${PROPERTY_ID})...`);
    try {
        // 1. Overview Metrics (Last 7 Days)
        const [overviewResponse] = await analyticsDataClient.runReport({
            property: `properties/${PROPERTY_ID}`,
            dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
            metrics: [
                { name: 'activeUsers' },
                { name: 'sessions' },
                { name: 'screenPageViews' },
                { name: 'bounceRate' },
                { name: 'averageSessionDuration' },
            ],
        });

        // 2. Top Landing Pages / Language Guides / Tools
        const [topPagesResponse] = await analyticsDataClient.runReport({
            property: `properties/${PROPERTY_ID}`,
            dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
            dimensions: [{ name: 'pagePath' }],
            metrics: [
                { name: 'screenPageViews' },
                { name: 'activeUsers' },
                { name: 'bounceRate' },
            ],
            orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
            limit: 15,
        });

        // 3. Traffic Channels
        const [sourcesResponse] = await analyticsDataClient.runReport({
            property: `properties/${PROPERTY_ID}`,
            dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
            dimensions: [{ name: 'sessionSourceMedium' }],
            metrics: [
                { name: 'sessions' },
                { name: 'activeUsers' },
            ],
            orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
            limit: 10,
        });

        const overview = overviewResponse.rows?.[0]?.metricValues || [];
        const reportData = {
            propertyId: PROPERTY_ID,
            site: 'Langtago',
            generatedAt: new Date().toISOString(),
            dateRange: 'Last 7 Days',
            summary: {
                activeUsers: overview[0]?.value || '0',
                sessions: overview[1]?.value || '0',
                pageViews: overview[2]?.value || '0',
                bounceRate: overview[3]?.value ? `${(parseFloat(overview[3].value) * 100).toFixed(1)}%` : '0%',
                avgSessionDuration: overview[4]?.value ? `${parseFloat(overview[4].value).toFixed(1)}s` : '0s',
            },
            topPages: (topPagesResponse.rows || []).map(r => ({
                path: r.dimensionValues[0].value,
                views: parseInt(r.metricValues[0].value, 10),
                users: parseInt(r.metricValues[1].value, 10),
                bounceRate: `${(parseFloat(r.metricValues[2].value) * 100).toFixed(1)}%`,
            })),
            trafficSources: (sourcesResponse.rows || []).map(r => ({
                sourceMedium: r.dimensionValues[0].value,
                sessions: parseInt(r.metricValues[0].value, 10),
                users: parseInt(r.metricValues[1].value, 10),
            })),
        };

        const outputDir = path.join(process.cwd(), 'docs/growth');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        const outputPath = path.join(outputDir, 'daily_analytics_report.json');
        fs.writeFileSync(outputPath, JSON.stringify(reportData, null, 2));

        console.log('[SUCCESS] Langtago GA4 query successful!');
        console.log(`[METRICS] Active Users (7d): ${reportData.summary.activeUsers}`);
        console.log(`[METRICS] Page Views (7d): ${reportData.summary.pageViews}`);
        console.log(`[OUTPUT] Saved report to: ${outputPath}`);

        return reportData;
    } catch (error) {
        console.error('[ERROR] Failed to fetch Langtago GA4 data:', error.message || error);
        throw error;
    }
}

if (require.main === module) {
    runReport().catch(() => process.exit(1));
}

module.exports = { runReport };

