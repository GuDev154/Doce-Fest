// Funções para o banner rotativo
        let currentSlide = 0;
        let autoRotate = true;
        let rotateInterval;
        const slides = document.querySelectorAll('.slide');
        const dotsContainer = document.getElementById('sliderDots');
        const prevBtn = document.getElementById('prevSlide');
        const nextBtn = document.getElementById('nextSlide');

        // Criar dots para o slider
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.slider-dots span');

        function showSlide(index) {
            // Esconder todos os slides
            slides.forEach(slide => slide.classList.remove('active'));
            
            // Remover a classe active de todos os dots
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Mostrar o slide atual
            slides[index].classList.add('active');
            
            // Ativar o dot correspondente
            dots[index].classList.add('active');
            
            currentSlide = index;
        }

        function nextSlide() {
            let nextIndex = currentSlide + 1;
            if (nextIndex >= slides.length) {
                nextIndex = 0;
            }
            showSlide(nextIndex);
        }

        function prevSlide() {
            let prevIndex = currentSlide - 1;
            if (prevIndex < 0) {
                prevIndex = slides.length - 1;
            }
            showSlide(prevIndex);
        }

        function goToSlide(index) {
            showSlide(index);
        }

        function startRotation() {
            if (autoRotate) {
                rotateInterval = setInterval(nextSlide, 5000);
            }
        }

        function stopRotation() {
            clearInterval(rotateInterval);
        }

        // Iniciar o slider
        showSlide(currentSlide);
        startRotation();

        // Event listeners
        prevBtn.addEventListener('click', () => {
            stopRotation();
            prevSlide();
            startRotation();
        });

        nextBtn.addEventListener('click', () => {
            stopRotation();
            nextSlide();
            startRotation();
        });

        // Pausar a rotação quando o mouse está sobre o slider
        document.querySelector('.hero-slider').addEventListener('mouseenter', stopRotation);
        document.querySelector('.hero-slider').addEventListener('mouseleave', startRotation);

        // Testimonials slider
        const testimonials = document.querySelectorAll('.testimonial');
        const testimonialNav = document.getElementById('testimonialNav');
        let currentTestimonial = 0;

        // Criar dots para o slider de depoimentos
        testimonials.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.addEventListener('click', () => showTestimonial(index));
            testimonialNav.appendChild(dot);
        });

        const testimonialDots = document.querySelectorAll('.testimonial-nav span');

        function showTestimonial(index) {
            // Esconder todos os depoimentos
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            
            // Remover a classe active de todos os dots
            testimonialDots.forEach(dot => dot.classList.remove('active'));
            
            // Mostrar o depoimento atual
            testimonials[index].classList.add('active');
            
            // Ativar o dot correspondente
            testimonialDots[index].classList.add('active');
            
            currentTestimonial = index;
        }

        function nextTestimonial() {
            let nextIndex = currentTestimonial + 1;
            if (nextIndex >= testimonials.length) {
                nextIndex = 0;
            }
            showTestimonial(nextIndex);
        }

        // Iniciar o slider de depoimentos
        showTestimonial(currentTestimonial);
        setInterval(nextTestimonial, 8000);

        // Menu mobile
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Fechar o menu ao clicar em um link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Header scroll effect
        const header = document.getElementById('header');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scrolling para âncoras
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Form submission
        const contactForm = document.getElementById('contactForm');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simular envio do formulário
            const name = document.getElementById('name').value;
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
            
            // Resetar o formulário
            contactForm.reset();
        });