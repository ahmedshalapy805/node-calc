pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'ahmedshalapy850/NewNodeCalculator:v1.0'
        DOCKER_REGISTRY_CREDENTIALS = 'd2d4a8b5-e53a-4c3c-a8b3-69be759633d4' // Jenkins credentials ID for DockerHub
        GITHUB_CREDENTIALS = 'AhmedShalapy805' // Jenkins credentials ID for GitHub
        BRANCH = 'main' // GitHub branch to push changes	
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Clone the GitHub repository
                git branch: "${BRANCH}", credentialsId: "${GITHUB_CREDENTIALS}", url: 'git@github.com:ahmedshalapy805/node-calc.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Log in to DockerHub and push the image
                    sh """
                        echo ${env.DOCKER_PASSWORD} | docker login -u ${env.DOCKER_USERNAME} --password-stdin
                        docker push ${DOCKER_IMAGE}
                    """
                }
            }
        }

        stage('Push Code Changes') {
            steps {
                script {
                    // Configure Git
                    sh """
                        git config user.name "ahmedshalapy"
                        git config user.email "ahmedshalapy805@gmail.com"
                        git add .
                        git commit -m 'Automated update from Jenkins'
                        git push origin ${BRANCH}
                    """
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed!'
        }
    }
}
