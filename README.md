# React LinkedIn Data Fetcher

## Overview

React LinkedIn Data Fetcher is a web application that allows users to search for job listings using data from LinkedIn via the RapidAPI LinkedIn Data API. It provides a user-friendly interface for searching jobs based on various criteria such as keywords, location, job type, and more.

## Features

- Search for jobs using keywords
- Filter results by location, date posted, job type, salary range, and work arrangement (on-site/remote)
- Display detailed job information including company, location, job type, and benefits

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- A RapidAPI key for the LinkedIn Data API

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/react-linkedin-data-fetcher.git
   cd react-linkedin-data-fetcher
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your RapidAPI key:
   ```
   REACT_APP_RAPIDAPI_KEY=your_rapidapi_key_here
   ```

4. Start the React development server:
   ```
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Use the search form to enter job search criteria:
   - Enter keywords (e.g., "software engineer", "marketing manager")
   - Select a location ID (default is set to a general US location)
   - Choose filters for date posted, job type, salary range, and work arrangement
3. Click the "Search Jobs" button to fetch results.
4. Browse through the list of job postings displayed on the page.
5. Click on "View Job" to open the full job listing on LinkedIn.

## Configuration

- API endpoint: If you need to modify the API endpoint, update it in the `src/LinkedInJobSearch.js` file.
- RapidAPI key: The application uses the RapidAPI key from the `.env` file. Make sure to keep this file secure and do not commit it to version control.

## Troubleshooting

- If you encounter CORS issues, you may need to use a CORS proxy or set up a simple backend server to make the API requests.
- For rate limiting errors, check your RapidAPI usage quota and consider upgrading your plan if necessary.
- If you're experiencing issues with the API, verify your RapidAPI key and check the API's status on the RapidAPI website.

## Contributing

Contributions to the React LinkedIn Data Fetcher are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- LinkedIn for providing the data (via RapidAPI)
- RapidAPI for API access

## Disclaimer

This project is not officially associated with or endorsed by LinkedIn. Ensure that your use of LinkedIn data complies with their terms of service and API usage guidelines.

## Note on API Usage

This application makes direct calls to the RapidAPI LinkedIn Data API from the client-side. In a production environment, it's generally recommended to use a backend server to make API calls to protect your API keys and to handle rate limiting more effectively. Consider implementing a backend if you plan to scale this application or use it in a production setting.
