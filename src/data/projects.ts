export interface Project {
    name: string
    year: string
    description: string
    tech: string[]
    link: string
    linkLabel: string
    emoji: string
}

export const projects: Project[] = [
    {
        name: 'DataFlow Engine',
        year: '2025',
        description:
            'An end-to-end data pipeline orchestration tool that automates ETL workflows with built-in monitoring and alerting.',
        tech: ['Python', 'Apache Airflow', 'PostgreSQL', 'Docker'],
        link: '#',
        linkLabel: 'View source',
        emoji: '⚙️',
    },
    {
        name: 'InsightBoard',
        year: '2025',
        description:
            'Interactive analytics dashboard for business intelligence, featuring real-time data streaming and custom visualizations.',
        tech: ['React', 'D3.js', 'FastAPI', 'Redis'],
        link: '#',
        linkLabel: 'Visit site',
        emoji: '📊',
    },
    {
        name: 'MLOps Toolkit',
        year: '2024',
        description:
            'A CLI toolkit for managing machine learning experiment tracking, model versioning, and automated deployment.',
        tech: ['Python', 'MLflow', 'Docker', 'AWS'],
        link: '#',
        linkLabel: 'View source',
        emoji: '🚀',
    },
    {
        name: 'TextMiner',
        year: '2024',
        description:
            'NLP pipeline for extracting insights from unstructured text data, including sentiment analysis and topic modeling.',
        tech: ['Python', 'spaCy', 'Transformers', 'Streamlit'],
        link: '#',
        linkLabel: 'Learn more',
        emoji: '🔍',
    },
    {
        name: 'DataQuality Monitor',
        year: '2023',
        description:
            'Automated data quality framework that validates datasets against predefined rules and generates health reports.',
        tech: ['Python', 'Great Expectations', 'dbt', 'Snowflake'],
        link: '#',
        linkLabel: 'View source',
        emoji: '✅',
    },
    {
        name: 'GeoAnalytics',
        year: '2023',
        description:
            'Geospatial data analysis platform with interactive maps, clustering algorithms, and location-based insights.',
        tech: ['Python', 'GeoPandas', 'Folium', 'PostgreSQL'],
        link: '#',
        linkLabel: 'Learn more',
        emoji: '🗺️',
    },
]
