// Checking usernames: 
//Make a list of five or morenusernames called current user.

// Step 1.

const current_users: string[] = ["Anila", "Mahreen", "Sobia", "Rubab", "Asifa"];

const new_users: string[] = ["Anil", "Mahr", "Sobi", "Rub", "AsIf"];

// Step 2 Function

function CheckUserName(current_users: string[], new_users: string []): void
"
{
    const lowercasedCurrentUsers = current_users.map(user => user. toLowerCase());
    for