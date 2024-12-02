//<!-- temporary script -->
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
                <button type="submit" class="btn">Login</button>
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
                <button type="submit" class="btn">Sign Up</button>
            `;
            toggleLink.textContent = "Already have an account? Login";
        }
    });