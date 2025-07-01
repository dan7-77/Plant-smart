 document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Limpa mensagens de erro anteriores
            document.getElementById('nameError').textContent = '';
            document.getElementById('emailError').textContent = '';
            document.getElementById('passwordError').textContent = '';
            
            // Validações
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            
            let isValid = true;
            
            // Validação do nome
            if (name === '') {
                document.getElementById('nameError').textContent = 'Por favor, insira seu nome completo';
                isValid = false;
            } else if (name.length < 3) {
                document.getElementById('nameError').textContent = 'O nome deve ter pelo menos 3 caracteres';
                isValid = false;
            }
            
            // Validação do email
            if (email === '') {
                document.getElementById('emailError').textContent = 'Por favor, insira seu e-mail';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                document.getElementById('emailError').textContent = 'Por favor, insira um e-mail válido';
                isValid = false;
            }
            
            // Validação da senha
            if (password === '') {
                document.getElementById('passwordError').textContent = 'Por favor, insira uma senha';
                isValid = false;
            } else if (password.length < 6) {
                document.getElementById('passwordError').textContent = 'A senha deve ter pelo menos 6 caracteres';
                isValid = false;
            }
            
            if (isValid) {
                // Simulação de cadastro - você pode substituir por uma chamada AJAX para seu backend
                const userData = {
                    name: name,
                    email: email,
                    password: password
                };
                
                console.log('Dados para cadastro:', userData);
                alert('Cadastro realizado com sucesso! Bem-vindo(a) ao PlantSmart!');
                
                // Redirecionar para a página de login ou dashboard
                // window.location.href = 'login.html';
            }
        });