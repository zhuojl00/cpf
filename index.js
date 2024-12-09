<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chelsea Piers Fitness</title>
    <style>
        /* General Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        /* Header */
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            background-color: white;
            border-bottom: 1px solid #ddd;
        }

        .navbar span {
            font-size: 1.2rem;
            font-weight: bold;
        }

        .menu-icon {
            font-size: 1.5rem;
            cursor: pointer;
        }

        /* Main Section */
        .status-section {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 2rem;
        }

        .status-icon {
            background-color: #28a745;
            border-radius: 50%;
            width: 150px;
            height: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 1rem;
        }

        .checkmark {
            font-size: 5rem;
            color: white;
        }

        .status-text h1 {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }

        .status-text p {
            font-size: 1.2rem;
            margin-bottom: 0.2rem;
        }

        /* Footer */
        .cookie-banner {
            background-color: #000;
            color: white;
            padding: 1rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .cookie-banner p {
            margin-bottom: 1rem;
        }

        .cookie-buttons button {
            padding: 0.5rem 1rem;
            margin: 0 0.5rem;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            border-radius: 5px;
        }

        .cookie-settings {
            background-color: #00bfff;
            color: white;
        }

        .accept {
            background-color: #007bff;
            color: white;
        }
    </style>
</head>
<body>
    <header>
        <div class="navbar">
            <span>chelsea piers fitness</span>
            <div class="menu-icon">&#9776;</div>
        </div>
    </header>

    <main>
        <div class="status-section">
            <div class="status-icon">
                <div class="checkmark">&#10004;</div>
            </div>
            <div class="status-text">
                <h1>Cleared to Enter</h1>
                <p>12/9/2024</p>
                <p>3:39:00 PM</p>
            </div>
        </div>
    </main>

    <footer>
        <div class="cookie-banner">
            <p>
                This site uses cookies to improve your experience. We'll assume you're okay with this, but you can opt out if you wish.
            </p>
            <div class="cookie-buttons">
                <button class="cookie-settings">Cookie Settings</button>
                <button class="accept">Accept</button>
            </div>
        </div>
    </footer>
</body>
</html>
