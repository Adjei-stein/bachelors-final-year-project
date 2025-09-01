# ShopInn - eCommerce Application

ShopInn is a robust and user-friendly eCommerce application built with Django. It provides a platform for customers to browse products, add them to their cart, and place orders. It also includes a customer dashboard to view order history and manage their profile.

## Features

*   User authentication (registration and login)
*   Customer dashboard for order history and profile management
*   Product browsing and searching
*   Shopping cart functionality
*   Order placement and checkout
*   Admin panel for managing products, orders, and customers

## Technologies Used

*   **Backend:**
    *   Python
    *   Django
    *   Django REST Framework
*   **Frontend:**
    *   HTML
    *   CSS
    *   JavaScript
*   **Database:**
    *   SQLite (default)
    *   PostgreSQL (optional)
    *   MySQL (optional)
*   **Libraries:**
    *   `django-crispy-forms`
    *   `django-filter`
    *   `Pillow`

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/bachelors-final-year-project.git
    cd bachelors-final-year-project/ShopInn-Original-Work
    ```

2.  **Create a virtual environment and activate it:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3.  **Install the dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Run the database migrations:**
    ```bash
    python manage.py migrate
    ```

5.  **Create a superuser:**
    ```bash
    python manage.py createsuperuser
    ```

6.  **Run the development server:**
    ```bash
    python manage.py runserver
    ```














    

The application will be available at `http://127.0.0.1:8000/`.

## User Credentials

*   **Super Admin:**
    *   **Username:** adjei
    *   **Password:** adminpass
*   **Normal User:**
    *   **Username:** david
    *   **Password:** bankupass