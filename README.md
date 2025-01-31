
# Messaging Slack - Frontend

This is the frontend for the **Messaging Slack** application, built using React, Vite, and Atomic Design methodology. It provides a seamless messaging experience with real-time chat capabilities, file uploads, and a clean UI for users.

## Tech Stack
- **Frontend**: React.js (with Vite and Atomic Design methodology)
- **Styling**: TailwindCSS SadCN
- **API Communication**: Axios (for API requests)
- **Real-Time Communication**: Socket.IO
- **Data Fetching**: React Query (TanStack Query)

## Features
- **Real-Time Chat**: Real-time messaging using Socket.IO.
- **JoinCode CRUD Operation**: You can join anyother workspace and delete , update,edit Workspace.
- **File Uploads**: Upload images to AWS using pre-signed URLs.
- **Channel and Worksapce**: Create your own Channel and Workspace.
- **Responsive UI**: Fully responsive and mobile-friendly design.
- **Authentication**: JWT-based authentication and authorization.

## Project Structure (Atomic Design)
The project follows the **Atomic Design** methodology, which splits the UI into five levels:
- **Atoms**: Basic UI elements like buttons, input fields, icons.
- **Molecules**: Combos of atoms, like form controls and buttons.
- **Organisms**: Complex components, such as the message list or chat window.
- **Templates**: Layouts that define the structure.
- **Pages**: Finalized components that are rendered to the screen (e.g., Login, Dashboard).

## Setup & Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate into the frontend directory:

   ```bash
   cd messaging-slack-frontend
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the project and add the following environment variables:

   ```
   VITE_API_URL=<your-api-url>
   VITE_SOCKET_URL=<your-socket-url>
   ```

5. Run the application in development mode:

   ```bash
   npm run dev
   ```

6. Open your browser and visit `http://localhost:3000` to view the application.



## Future Features
- **Rate Limiting & Caching**: Implement rate limiting for API requests and caching mechanisms.
- **Payment Integration**: Add Razorpay payment gateway for premium features.

## Contributing
Feel free to open issues or submit pull requests. For any questions Contact Me At linkedIN.

