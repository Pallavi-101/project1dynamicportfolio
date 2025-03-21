// Developed  by Bhukele Ishwar (EPL)
                                 // Developed By Vaishnavi  Dhadray (EPL)



        // Function to show the update form
        function showForm() {
            document.getElementById('updateForm').style.display = 'block';
        }

        // Function to add a project
        function addProject() {
            const projectName = document.getElementById('projectName').value;
            const projectLink = document.getElementById('projectLink').value;

            if (projectName && projectLink) {
                const portfolioContent = document.getElementById('portfolioContent');

                const projectCard = document.createElement('div');
                projectCard.className = 'row';

                const projectImage = document.createElement('img');
                projectImage.src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSs40WuwSMIA1KsqOPWKS1ewo57Vr2bzeG6YZ9njpBfTAdKSsoM";
                projectImage.alt = projectName;

                const projectLayer = document.createElement('div');
                projectLayer.className = 'layer';

                const projectTitle = document.createElement('h5');
                projectTitle.innerText = projectName;

                const projectDescription = document.createElement('p');
                projectDescription.innerText = "Check out the project:" +projectName;

                const projectLinkElement = document.createElement('a');
                projectLinkElement.href = projectLink;
                projectLinkElement.target = "_blank"; // Open link in new tab
                projectLinkElement.innerHTML = '<i class="bx bx-link-external"></i>';

                projectLayer.appendChild(projectTitle);
                projectLayer.appendChild(projectDescription);
                projectLayer.appendChild(projectLinkElement);

                projectCard.appendChild(projectImage);
                projectCard.appendChild(projectLayer);

                portfolioContent.appendChild(projectCard);

                // Clear the form fields
                document.getElementById('projectName').value = '';
                document.getElementById('projectLink').value = '';
            } else {
                alert('Please fill in both Project Name and Project Link.');
            }
        }

        // Function to download the portfolio as a PDF
        function downloadPortfolio() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            // Add content to the PDF
            doc.text("Portfolio", 10, 10);
            doc.text("Name:" + document.getElementById('userName').innerText, 10, 20);
            doc.text("Bio:" + document.getElementById('userBio').innerText, 10, 30);
            doc.text("About:" + document.getElementById('aboutDetails').innerText, 10, 40);

            // Save the PDF
            doc.save("portfolio.pdf");
        }

        // Update Portfolio
        document.getElementById('portfolioForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Update Home Section
            const name = document.getElementById('name').value;
            const bio = document.getElementById('bio').value;
            const image = document.getElementById('image').value;
            document.getElementById('userName').innerText = name;
            document.getElementById('userBio').innerText = bio;
            document.getElementById('userImage').src = image;

            // Update About Section
            const post = document.getElementById('post').value;
            const education = document.getElementById('education').value;
            const skills = document.getElementById('skills').value;
            const personalInfo = document.getElementById('personalInfo').value;
            const aboutImageUrl = document.getElementById('aboutImageUrl').value; // Get the About Image URL

            // Split skills into an array (assuming skills are separated by commas)
            const skillsList = skills.split(',').map(skill => skill.trim());

            // Format the skills as a comma-separated string
            const formattedSkills = skillsList.join(', ');

            // Update the about section with bold titles and new lines
            document.getElementById('aboutName').innerText = name; // Use the same name from the home section
            document.getElementById('aboutDetails').innerHTML = `
                Hello, I'm <span>${name}</span>.<br><br>
            `;

            // Update About Section Content
            document.getElementById('aboutPost').innerText = post;
            document.getElementById('aboutEducation').innerText = education;
            document.getElementById('aboutSkills').innerText = formattedSkills;
            document.getElementById('aboutPersonalInfo').innerText = personalInfo;

            // Update About Image
            document.getElementById('aboutImage').src = aboutImageUrl;

            // Show the about content section
            document.getElementById('aboutContent').style.display = 'block';

            // Update Services Section
            const service1Title = document.getElementById('service1TitleInput').value;
            const service1Desc = document.getElementById('service1DescInput').value;
            const service2Title = document.getElementById('service2TitleInput').value;
            const service2Desc = document.getElementById('service2DescInput').value;
            const service3Title = document.getElementById('service3TitleInput').value;
            const service3Desc = document.getElementById('service3DescInput').value;
            document.getElementById('service1Title').innerText = service1Title;
            document.getElementById('service1Desc').innerText = service1Desc;
            document.getElementById('service2Title').innerText = service2Title;
            document.getElementById('service2Desc').innerText = service2Desc;
            document.getElementById('service3Title').innerText = service3Title;
            document.getElementById('service3Desc').innerText = service3Desc;

            // Update Contact Section
            const contactEmail = document.getElementById('contactEmail').value;
            const contactNumber = document.getElementById('contactNumber').value;
            const facebookUrl = document.getElementById('facebookUrl').value;
            const twitterUrl = document.getElementById('twitterUrl').value;
            const instagramUrl = document.getElementById('instagramUrl').value;
            const linkedinUrl = document.getElementById('linkedinUrl').value;
            document.getElementById('contactEmailDisplay').innerText = contactEmail;
            document.getElementById('contactNumberDisplay').innerText = contactNumber;
            document.getElementById('facebookLink').href = facebookUrl;
            document.getElementById('twitterLink').href = twitterUrl;
            document.getElementById('instagramLink').href = instagramUrl;
            document.getElementById('linkedinLink').href = linkedinUrl;

            // Hide the form after submission
            document.getElementById('updateForm').style.display = 'none';

            // Show the download button and hide the update button
            document.getElementById('downloadBtn').style.display = 'inline-block';
            document.querySelector('.createbtn').style.display = 'none';
        });

        // Contact Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            document.getElementById('successMessage').style.display = 'block';
        });

        // Scroll to Top
        document.getElementById('topBtn').addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Toggle Menu
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('show');
        }