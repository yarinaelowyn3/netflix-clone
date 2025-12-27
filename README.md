# Netflix Clone CI/CD Deployment using Jenkins & Docker on AWS EC2

This project demonstrates a complete DevOps CI/CD pipeline that automates the build and deployment of a containerized application using Jenkins, Docker, and AWS EC2.

The focus of this project is DevOps automation and real-world deployment practices, not frontend complexity.

---

## Project Objective

To design and implement a CI/CD pipeline that:
- Pulls source code from GitHub
- Builds a Docker image
- Runs the application as a Docker container
- Deploys automatically on an AWS EC2 instance using Jenkins

---

## Architecture

Developer  
↓  
GitHub Repository  
↓  
Jenkins Pipeline  
↓  
Docker Build & Run  
↓  
AWS EC2  

---

## Tech Stack

- GitHub – Source code management  
- Jenkins – CI/CD automation  
- Docker – Containerization  
- AWS EC2 – Application hosting  
- Linux – Server operating system  

---

## CI/CD Pipeline Stages

1. **Source Code Checkout**
   - Jenkins pulls the application code from GitHub

2. **Docker Image Build**
   - Jenkins builds a Docker image using a Dockerfile

3. **Docker Container Run**
   - Existing container is stopped (if any)
   - New container is launched with the latest image

4. **Application Deployment**
   - Application becomes accessible via EC2 public IP and exposed port

---

## Key Challenges & Learnings

### Jenkins–Docker Permission Issue
- Encountered a permission denied error when Jenkins tried to access Docker
- Root cause: Jenkins user lacked access to Docker socket
- Solution: Added Jenkins user to Docker group and restarted services

This provided real-world experience in Linux permissions and CI/CD troubleshooting.

---

## Final Outcome

- Fully automated CI/CD pipeline
- Dockerized application deployed on AWS EC2
- No manual deployment required
- Pipeline can be reused and rebuilt on any new EC2 instance

---

## Project Status

✅ Completed  
✅ Learning objectives achieved  
✅ Infrastructure intentionally terminated (servers are disposable in DevOps)

---

## Note

The application UI used in this project is minimal.  
The primary goal is to demonstrate DevOps automation, not frontend development.


# netflix-clone
minimal react netflix clone for devsecops project
