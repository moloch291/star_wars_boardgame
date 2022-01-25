@Library('github.com/releaseworks/jenkinslib') _

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Check availability of dependencies:
                sh "sh ./scripts/check_dependencies.sh"
                // Build updated image and push to ECS repository:
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'awsAccessKey', usernameVariable: 'AWS_ACCESS_KEY_ID', passwordVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                    sh "aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 872533758794.dkr.ecr.eu-central-1.amazonaws.com"
                    sh "sh ./scripts/update_docker_image.sh"
                    sh "aws eks update-kubeconfig --region eu-central-1 --name sw-bg-cluster-YxcyrMjN"
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deployment....'
            }
        }
    }
}