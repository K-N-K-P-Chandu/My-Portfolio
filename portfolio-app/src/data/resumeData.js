export const personalInfo = {
    name: "NAGA KRISHNA POORNA CHANDU KOVELAMUDI",
    title: "Data Engineer",
    tagline: "Fortifying Data. Automating Intelligence.",
    phone: "+1 (312)-684-6425",
    email: "nagakrishna.c5@gmail.com",
    linkedin: "https://www.linkedin.com/in/naga-krishna-p-c-kovelamudi-8b532936b",
    github: "https://github.com/K-N-K-P-Chandu",
};

export const summary = `Results-oriented Data Engineer with 5+ years' experience developing and optimizing end-to-end data solutions on leading cloud platforms (AWS, GCP, Azure). Skilled in Spark, Airflow, Python, and SQL, with growing expertise in AI-integrated data systems leveraging LLMs, vector databases, and RAG pipelines. Proven track record of deploying scalable ETL processes and AI solutions—including production RAG systems using Azure Prompt Flow—that enhance data accessibility, reduce latency, and support advanced analytics and AI applications. Adept at partnering with cross-functional teams to deliver actionable insights, improve reliability, and create tangible business value.`;

export const skills = {
    "Programming Languages": ["Python", "SQL", "Scala", "R"],
    "AI & ML Frameworks": [
        "Generative AI",
        "Retrieval-Augmented Generation (RAG)",
        "OpenAI API",
        "LangChain",
        "LangGraph",
        "Fine-tuning LLMs",
        "Natural Language Processing (NLP)",
        "AWS Bedrock",
        "Moldflow",
        "Crew AI"
    ],
    "Big Data Technologies": [
        "Apache Spark (RDD, Spark-SQL, Data Frames)",
        "Hadoop",
        "Kafka",
        "Apache Flink"
    ],
    "Cloud Platforms": [
        "AWS (S3, Redshift, Lambda, Glue, EMR, SageMaker, EC2, Step Functions, Bedrock, SQS, SNS, Neptune, CloudWatch, Kinesis, Athena)",
        "Azure (Synapse Analytics, Data Factory, Blob Storage)",
        "GCP (BigQuery, Dataflow, Cloud Storage)"
    ],
    "Databases": [
        "Amazon RDS",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Google BigQuery",
        "SQL Lite",
        "SQL Server"
    ],
    "Data Integration": [
        "Informatica Power Centre",
        "Azure Data Factory",
        "Sqoop",
        "Talend",
        "AWS Glue",
        "Apache Airflow",
        "Google Dataflow",
        "Snowflake",
        "Databricks",
        "Apache NiFi"
    ],
    "Data Processing": [
        "PySpark",
        "Spark SQL",
        "Spark Streaming",
        "Apache Airflow",
        "Azure Synapse Analytics",
        "AWS Glue",
        "dbt",
        "ETL processes"
    ],
    "Data Visualization": [
        "Tableau",
        "Power BI",
        "Google Data Studio",
        "Python (Pandas, NumPy, Plotly, Seaborn, Bokeh)"
    ],
    "Version Control": [
        "Git/GitHub",
        "GitLab",
        "Azure DevOps",
        "Docker",
        "Kubernetes",
        "Jenkins"
    ],
    "Operating Systems": ["Linux (Ubuntu, CentOS)", "Windows"]
};

export const experience = [
    {
        id: 1,
        company: "TCS",
        location: "",
        position: "Data Engineer (Contract)",
        period: "Nov 2025 - Present",
        responsibilities: [
            "Built Smart Search Tools: Developed RAG (Retrieval-Augmented Generation) systems using Python that allow users to ask natural language questions and get accurate answers from internal documents.",
            "Connected AI Agents: Implemented the Model Context Protocol (MCP) to standardize how AI agents securely access and read our company's data, making integration faster and safer.",
            "Automated Data Pipelines: Wrote Python scripts to automatically collect, clean, and move data from various sources into our databases for AI analysis.",
            "Organized Data for AI: Processed and stored text data in Vector Databases (like FAISS or ChromaDB) so that AI models can easily find and understand the information.",
            "Created Fast APIs: Built lightweight web services using FastAPI to connect our data pipelines with user-facing applications and AI models.",
            "Ensured Data Quality: Wrote code to constantly check data accuracy, ensuring that the AI models are learning from clean and reliable information.",
            "Collaborated with Teams: Worked closely with data scientists to prepare the specific datasets they needed to train and test their machine learning models."
        ],
        technologies: ["Python", "RAG", "MCP", "FAISS", "ChromaDB", "FastAPI"]
    },
    {
        id: 2,
        company: "Model Earth",
        location: "",
        position: "AI Data Engineer",
        period: "Feb 2025 - Oct 2025",
        responsibilities: [
            "Built Interactive Visualizations: Designed and developed the \"LocalSite\" web interface using D3.js and Leaflet to visualize complex environmental data (like Carbon Dioxide emissions) on interactive timelines and maps.",
            "Automated Data Collection: Created automated workflows using Azure Data Factory and Python to fetch, clean, and organize data from Google Data Commons so it is ready for analysis.",
            "Managed Cloud Data: Set up and maintained secure storage systems using Azure Blob Storage and Synapse Analytics to keep large datasets organized and easily accessible for the team.",
            "Developed AI Features: Built smart \"Chat with Data\" tools using LangChain (RAG) that allow users to ask natural language questions and get accurate answers from internal documents.",
            "Improved Search Systems: Implemented Vector Search (using FAISS) to help users find specific information inside reports and logs much faster than traditional search methods.",
            "Created API Services: Built fast and reliable web services using FastAPI to connect the front-end graph interface with backend AI models and databases."
        ],
        technologies: ["D3.js", "Leaflet", "Azure Data Factory", "Python", "Azure Blob Storage", "Synapse Analytics", "LangChain", "RAG", "FAISS", "FastAPI"]
    },
    {
        id: 3,
        company: "Meta",
        location: "",
        position: "Data Engineer",
        period: "Jan 2022 - Nov 2022",
        responsibilities: [
            "Optimized Performance & Cost: Tuned Spark configurations, implemented auto-scaling, and applied efficient partitioning/compression strategies to minimize Azure resource costs.",
            "Architected Data Models: Designed dimensional models in Azure Synapse and ACID-compliant Delta Lake tables, using custom PySpark UDFs for complex business logic.",
            "Enforced Governance: Implemented Azure Purview for data lineage and cataloging, alongside automated retention policies for compliance.",
            "Automated CI/CD: Built deployment pipelines using Azure DevOps, Git, YAML, and ARM templates for version control across ADF and Databricks.",
            "Delivered BI Insights: Integrated Synapse/Databricks with Power BI and Tableau to create scalable executive dashboards.",
            "Orchestrated ML Workflows: Integrated Databricks machine learning models into Azure Data Factory pipelines for automated execution.",
            "Mentored Team: Guided junior engineers on Azure best practices, pipeline design, and troubleshooting standards."
        ],
        technologies: ["Databricks", "ETL/ELT", "Azure Blob Storage", "Data Lake Storage Gen2", "SQL Database", "REST APIs", "Azure Synapse", "PySpark", "Azure Purview", "Azure DevOps", "Power BI", "Tableau"]
    },
    {
        id: 4,
        company: "Heritage Foods Ltd",
        location: "",
        position: "Data Engineer",
        period: "Jul 2019 - Dec 2021",
        responsibilities: [
            "Implemented AI/ML model deployments using TensorFlow/Keras for real-time predictions on streaming data, collaborating closely with data scientists to optimize model performance.",
            "Automated the deployment and scaling of data processing applications using Docker and Kubernetes, ensuring resilience and fault tolerance in cloud environments.",
            "Created and maintained data catalog entries for structured and unstructured data to improve discoverability and accessibility.",
            "Wrote test cases using JUnit and PyTest to validate data processing logic and ensure the stability of data pipelines.",
            "Automated data workflows using Apache Airflow, integrating with Docker and Kubernetes for seamless deployment of data processing tasks.",
            "Developed automated data validation scripts to ensure data integrity and consistency across various stages of the ETL pipeline.",
            "Integrated data from multiple sources including AWS S3, AWS Redshift, and AWS RDS into a centralized data lake, improving data accessibility.",
            "Implemented data storage solutions using AWS DynamoDB, providing high-performance and low-latency data access.",
            "Extensively worked with PySpark / Spark SQL for data cleansing and generating Data Frames and RDDs."
        ],
        technologies: ["Apache Kafka", "Apache Flink", "Python", "SQL", "Amazon S3", "Tableau", "TensorFlow", "Keras", "Docker", "Kubernetes", "Apache Airflow", "PyTest", "JUnit", "Jenkins", "Git"]
    }
];

export const education = [
    {
        id: 1,
        institution: "ILLINOIS INSTITUTE OF TECHNOLOGY",
        location: "Chicago, IL",
        degree: "Master of Computer Science",
        period: "Jan 2023 - Dec 2024"
    },
    {
        id: 2,
        institution: "K.L. UNIVERSITY",
        location: "Andhra Pradesh",
        degree: "Bachelor of Technology (E.C.E)",
        period: "June 2015 - May 2019"
    }
];

export const certifications = [
    {
        id: 1,
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        credentialUrl: "#"
    },
    {
        id: 2,
        title: "AWS Certified Solutions Architect - Associate",
        issuer: "Amazon Web Services",
        date: "2024",
        credentialUrl: "#"
    },
    {
        id: 3,
        title: "CompTIA Security+",
        issuer: "CompTIA",
        date: "2024",
        credentialUrl: "#"
    }
];
