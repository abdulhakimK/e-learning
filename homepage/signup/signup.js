//<!-- temporary script -->
function enroll() {
    // Check if the user came from the "View All Courses" button
    const params = new URLSearchParams(window.location.search);
    const from = params.get('from');

    if (from === 'hero') {
      // If they came from "View All Courses," go to the sign-up page
    window.location.href = '../../courselist/courselist.html?redirect=fromhome';
    } else {
      // Otherwise, go to the default sign-up flow
    window.location.href = 'signup.html?redirect=courses';
    }
} 
const formTitle = document.getElementById("form-title");
    const authForm = document.getElementById("auth-form");
    const toggleLink = document.getElementById("toggle-link");
    toggleLink.addEventListener("click", () => {
        if (formTitle.textContent === "Sign Up") {
            formTitle.textContent = "Login";
            authForm.innerHTML = `
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required>
                </div>
                <button type="submit" class="btn" onclick = "enroll()">Login</button>
            `;
            toggleLink.textContent = "Don't have an account? Sign Up";
        } else {
            formTitle.textContent = "Sign Up";
            authForm.innerHTML = `
                <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required>
            </div>
            <button type="submit" class="btn" onclick = "enroll()">Sign Up</button>
            `;
            toggleLink.textContent = "Already have an account? Login";
        }
    });
