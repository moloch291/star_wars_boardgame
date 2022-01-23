#!/bin/bash

handle_minikube() {
    minikube version
    if [ $? -ne 0 ]; then
        apt-get update -y
        apt-get upgrade -y
        apt-get install apt-transport-https
        apt install virtualbox virtualbox-ext-pack
        wget https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
        cp minikube-linux-amd64 /usr/local/bin/minikube
        chmod 755 /usr/local/bin/minikube
        echo "minikube installed!"
        minikube version
    else
        echo "* 'minikube' already installed, skipping this step... *"
        echo "$(minikube version)"
    fi

}

handle_kubectl() {
    kubectl version --client
    if [ $? -ne 0 ]; then
        apt-get update
        apt-get install -y apt-transport-https ca-certificates curl
        curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg
        echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
        apt-get update
        apt-get install -y kubectl
        echo "kubectl installed!"
    else
        echo "* 'kubectl' already installed! skipping this step... *"
        echo "$(kubectl version --client)"
    fi
}

main() {
    echo "Building dependecies..."
    handle_minikube
    handle_kubectl
}

main