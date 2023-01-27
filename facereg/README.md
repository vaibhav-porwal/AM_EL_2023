# FACEREG - A Face Recognition based Attendance System

### part of EL submission by Tarun Srivatsa V S (1RV19IS059), Arun Kumar S L (1RV19IS009), Shivanand (1RV19IS050) and Nikita S Rao (1RV19IS033)

Steps to setup the project:
1. Clone the git repo. Make sure python is installed.
2. Create a virtual environment in the current folder using "python3 -m venv env" (env being the name of the venv).
3. Start the venv using "source ./env/bin/activate".
4. Install dependencies from requirements.txt using "pip install -r requirements.txt".

Now the virtual environment is ready to provide the runtime for the server.


To run the Django server:
1. Create a superuser/admin for the server using "python manage.py createsuperuser".
2. Start the server using "python manage.py runserver".