// Simple frontend auth (for prototype purposes)
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

if(signupForm){
  signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({
      name: document.getElementById('signupName').value,
      email: document.getElementById('signupEmail').value,
      password: document.getElementById('signupPassword').value,
      role: 'user' // default role
    });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful! Please login.');
    window.location.href = 'login.html';
  });
}

if(loginForm){
  loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === document.getElementById('loginEmail').value && u.password === document.getElementById('loginPassword').value);
    if(user){
      localStorage.setItem('currentUser', JSON.stringify(user));
      if(user.role === 'admin'){
        window.location.href = 'admin/dashboard.html';
      }else{
        window.location.href = 'index.html';
      }
    }else{
      alert('Invalid credentials!');
    }
  });
}
