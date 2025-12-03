// Resume data extracted from the provided resume document

export const personalInfo = {
    name: "NAGA KRISHNA POORNA CHANDU KOVELAMUDI",
    title: "Data Engineer",
    tagline: "Fortifying Data. Automating Intelligence.",
    phone: "+1 (312)-684-6425",
    email: "nagakrishna.c5@gmail.com",
    linkedin: "https://www.linkedin.com/in/your-profile", // Update with actual LinkedIn
    github: "https://github.com/your-profile", // Update with actual GitHub
};

export const summary = `Results-oriented Data Engineer with 5+ years' experience developing and optimizing end-to-end data solutions on leading cloud platforms (AWS, GCP, Azure). Skilled in Spark, Airflow, Python, and SQL, with growing expertise in AI-integrated data systems leveraging LLMs, vector databases, and RAG pipelines. Proven track record of deploying scalable ETL processes that enhance data accessibility, reduce latency, and support advanced analytics and AI applications. Adept at partnering with cross-functional teams to deliver actionable insights, improve reliability, and create tangible business value.`;

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
        company: "TCS/AIG",
        location: "Milford, OH",
        position: "Data Engineer",
        period: "Dec 2023 - Present",
        responsibilities: [
            "Designed, implemented, and maintained scalable data pipelines using AWS services including S3, Redshift, Glue, Lambda, Kinesis, Athena, and Step Functions to automate ETL workflows and orchestrate end-to-end data processing for enterprise analytics.",
            "Developed and managed data infrastructure including data lakes, data warehouses, and data marts, ensuring optimal data storage, retrieval, and accessibility for business intelligence and reporting needs.",
            "Integrated Unity Catalog with Apache Spark and Delta Lake within Databricks to establish robust data governance, implement data lineage tracking, and ensure traceability from source to destination across all data workflows.",
            "Built end-to-end Retrieval-Augmented Generation (RAG) pipelines using LangChain and LangGraph to power intelligent customer service applications, enabling real-time retrieval of flight information, policies, and operational documentation.",
            "Designed and deployed vector-based search systems using FAISS and Milvus vector databases to enable semantic search across internal documents, SOPs, FAQs, and maintenance logs for context-aware data retrieval.",
            "Developed FastAPI-based microservices to expose AI-powered endpoints integrated with Large Language Models (LLMs) through AWS.",
            "Processed and transformed high-volume datasets including customer support tickets, operational logs, and transactional data for machine learning model training, LLM fine-tuning, and generative AI applications.",
            "Implemented data backup, recovery, and disaster recovery processes using AWS S3 and Redshift Snapshots to ensure data availability, integrity, and compliance with enterprise data retention policies.",
            "Collaborated with cross-functional teams including data scientists, DevOps, and business stakeholders to deliver phased data projects on time and within budget, identifying task dependencies and managing project timelines effectively."
        ],
        technologies: ["S3", "Lambda", "AWS Kinesis", "Amazon Redshift", "AWS Glue", "CloudFormation", "Data Lakes", "Data Warehouses", "Athena", "RAG", "LangChain", "FAISS", "Milvus", "FastAPI"]
    },
    {
        id: 2,
        company: "USAA",
        location: "Plano, TX",
        position: "Data Engineer",
        period: "Jan 2022 – Nov 2022",
        responsibilities: [
            "Implemented data partitioning, compression, and folder structures to optimize storage.",
            "Developed dimensional and normalized data models in Azure Synapse Analytics.",
            "Designed Delta Lake tables with ACID compliance for reliable data processing.",
            "Implemented data retention and archival policies for compliance and cost optimization.",
            "Developed custom UDFs in PySpark to handle complex business rules.",
            "Mentored and guided junior engineers in best practices for Azure data engineering, coding standards, pipeline design, and troubleshooting, fostering knowledge sharing and strengthening the team's technical capabilities.",
            "Leveraged Power BI and Tableau integration with Synapse and Databricks to create dashboards and interactive visualizations that translate complex data into clear insights for executives and operational teams.",
            "Integrated Git and Azure DevOps with ADF and Databricks for version control.",
            "Automated deployment pipelines using YAML and ARM templates.",
            "Designed cost-effective, scalable data solutions by analyzing cloud consumption patterns, optimizing storage tiers, implementing auto-scaling clusters, and applying efficient data partitioning strategies to minimize Azure resource costs.",
            "Implemented data lineage, cataloging, and metadata management using Azure Purview to provide visibility into data flows, improve governance, ensure compliance, and facilitate data discovery across enterprise systems.",
            "Orchestrated machine learning workflows in Databricks integrated with ADF pipelines.",
            "Tuned Spark configurations for optimized cluster resource utilization."
        ],
        technologies: ["Databricks", "ETL/ELT", "Azure Blob Storage", "Data Lake Storage Gen2", "SQL Database", "REST APIs", "Azure Synapse", "Power BI", "Tableau", "Azure DevOps"]
    },
    {
        id: 3,
        company: "Heritage Foods Ltd.",
        location: "Hyderabad",
        position: "Data Engineer",
        period: "Jul 2019 – Nov 2021",
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
        period: "January 2023 - December 2024"
    },
    {
        id: 2,
        institution: "K.L. UNIVERSITY",
        location: "Andhra Pradesh",
        degree: "Bachelor of Technology (B. Tech)",
        period: "June 2015 - May 2019"
    }
];

export const certifications = [
    {
        id: 1,
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        credentialUrl: "#" // Update with actual credential URL
    },
    {
        id: 2,
        title: "AWS Certified Solutions Architect - Associate",
        issuer: "Amazon Web Services",
        date: "2024",
        credentialUrl: "#" // Update with actual credential URL
    },
    {
        id: 3,
        title: "CompTIA Security+",
        issuer: "CompTIA",
        date: "2024",
        credentialUrl: "#" // Update with actual credential URL
    }
];
