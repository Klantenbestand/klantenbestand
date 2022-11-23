// load database from notion
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID;
const response = await notion.databases.query({
    database_id: databaseId,
});

// filter database by status
const roadmap = response.results.filter((page) => {
    return page.properties.Status.select.name === "Roadmap";
}

// sort database by priority
roadmap.sort((a, b) => {
    return a.properties.Priority.number - b.properties.Priority.number;
}

// render database
const roadmapHTML = roadmap.map((page) => {
    return `
        <div class="roadmap-item">
            <h3>${page.properties.Name.title[0].plain_text}</h3>
            <p>${page.properties.Description.rich_text[0].plain_text}</p>
        </div>
    `;
}

// Path: index.js
// render roadmap
const roadmap = await renderRoadmap();
res.send(`
    <html>
        <body>
            <h1>Roadmap</h1>
            ${roadmap}
        </body>
    </html>
`);
