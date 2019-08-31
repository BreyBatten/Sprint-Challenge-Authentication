What is the purpose of using sessions?

Sessions are a way to persist a users data over requests. Once you register/login, the session will hold onto your info so that you don't have to re-login everytime you attempt to go to a path that requires authentication

What does bcrypt do to help us store passwords in a secure manner.

bcrypt is a popular algorithm used to hash a password in the database. It takes the password in plain text and runs it through the algorithm multiple times to make it harder to crack, or find in a rainbow-table.

What does bcrypt do to slow down attackers?

Because bcrypt hashes the password multiple times, the hacker would have to have the original hash, know the algorithm that was used, and how many times the password was hashed to figure it out. Bcrypt is a Key Derivation Function, which means it adds time to the hash to make it even harder.

What are the three parts of the JSON Web Token?

The header- it contains the algorithm used and the token type
The payload- includes permissions and other data, like a user id
The signature- a string by base64 encoding the header and payload together and then signing it with a secret