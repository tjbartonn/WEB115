function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function generateMealPlan() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let mealPlan = '';

    days.forEach((day, index) => {
        const breakfast = document.getElementById(`${day}Breakfast`).value || 'N/A';
        const snack1 = document.getElementById(`${day}Snack1`).value || 'N/A';
        const lunch = document.getElementById(`${day}Lunch`).value || 'N/A';
        const snack2 = document.getElementById(`${day}Snack2`).value || 'N/A';
        const dinner = document.getElementById(`${day}Dinner`).value || 'N/A';

        mealPlan += `
            <tr>
                <td>${dayNames[index]}</td>
                <td>${breakfast}</td>
                <td>${snack1}</td>
                <td>${lunch}</td>
                <td>${snack2}</td>
                <td>${dinner}</td>
            </tr>`;
    });

    document.write(`
        <html>
        <head>
            <title>Weekly Meal Plan</title>
        </head>
        <body style="font-family: monospace;">
            <h1>${name}'s Weekly Meal Plan</h1>
            <h2>Goal: ${goal}</h2>
            <table border="1" style="margin: 0 auto;">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Breakfast</th>
                        <th>Snack</th>
                        <th>Lunch</th>
                        <th>Snack</th>
                        <th>Dinner</th>
                    </tr>
                </thead>
                <tbody>
                    ${mealPlan}
                </tbody>
            </table>
            <br>
            <button onclick="window.print()">Print</button>
            <button onclick="window.location.href='finalProject.html'">Go Back</button>
        </body>
        </html>
    `);
}
