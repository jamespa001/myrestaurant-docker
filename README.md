![Docker Image CI](https://github.com/jamespa001/myrestaurant-docker/actions/workflows/docker-build.yml/badge.svg)
[![Cloud Run Deployment](https://img.shields.io/badge/Deployed%20to-Google%20Cloud%20Run-4285F4?style=flat&logo=googlecloud&logoColor=white)](https://myrestaurant-frontend-231710237888.us-central1.run.app/)

# 🍽️ MyRestaurant (Containerized Full-Stack Web Application)

[**🌐 View Live Platform**](https://myrestaurant-frontend-231710237888.us-central1.run.app/) | [**🛠️ GitHub Repository**](https://github.com/jamespa001/myrestaurant-docker)

A production-grade, containerized full-stack restaurant application engineered with **React**, **Vite**, **Tailwind CSS**, and **Node.js/Express**, packaged into multi-stage **Docker** container images and deployed to **Google Cloud Run** via **Google Artifact Registry**.

---

## 🛠️ Engineering Highlights & Architecture

- **Problem & Context:** Ensuring parity between local development and cloud production environments while minimizing deployment container image sizes and build times.
- **Key Technical Decisions:**
  - Optimized containerization using **multi-stage Docker builds** to isolate build dependencies and reduce final runtime image size.
  - Configured **Docker Compose** orchestrating frontend and backend services for seamless local single-command execution.
  - Implemented automated CI/CD via **GitHub Actions** using **Docker Buildx** to build, test, and push images to **Google Artifact Registry** for deployment on **Google Cloud Run**.
- **Results & Metrics:**
  - ⚡ **Minimal Image Footprint:** Multi-stage builds eliminated dev dependencies from production artifacts.
  - 🔄 **100% Environment Parity:** Deterministic builds guarantee identical behavior across local and Cloud Run runtime containers.
  - 🚀 Automated CI/CD pipeline triggering build verification on every push and pull request.

---

## ✨ Features

- **Containerized Micro-Architecture**: Isolated multi-container service setup managed via Docker Compose.
- **High-Performance Frontend**: Built with React and Vite for rapid HMR in development and lightweight static output in production.
- **Interactive Menu & Booking**: Modern responsive layout for menu browsing and reservation scheduling.
- **Automated Cloud Pipeline**: GitHub Actions workflows building and validating Docker images on every commit.

---

## 🛠️ Tech Stack

- **Frontend & App**: React, Vite, JavaScript / TypeScript, Tailwind CSS
- **Containerization**: Docker, Docker Compose, Multi-Stage Build Strategy
- **Cloud Infrastructure**: Google Cloud Run, Google Artifact Registry
- **CI/CD**: GitHub Actions, Docker Buildx

---

## 🚀 Getting Started Locally

### Prerequisites

- [Docker Desktop](https://www.docker.com/) installed and running on your machine.

### Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/jamespa001/myrestaurant-docker.git](https://github.com/jamespa001/myrestaurant-docker.git)
   cd myrestaurant-docker
   ```
