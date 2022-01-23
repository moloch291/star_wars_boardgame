#!/bin/bash

kubectl_install_process() {
    apt-get update
    apt-get install -y apt-transport-https ca-certificates curl
    curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg
    echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
    apt-get update
    apt-get install -y kubectl
}

minikube_install_process() {
    apt-get update -y
    apt-get install apt-transport-https
    apt-get upgrade -y
    apt install Virtualbox virtualbox-ext-pack
    wget https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
    cp minikube-linux-amd64 /usr/local/bin/minikube
    chmod 755 /usr/local/bin/minikube
}

handle_minikube() {
    minikube version
    if [ $? -ne 0 ]; then
        minikube_install_process
        if [ $? -eq 0 ]; then
            echo "minikube installed!"
            minikube version
        else
            echo "Installation was unsuccessful..."
        fi
    else
        echo "* 'minikube' already installed, skipping this step... *"
        echo "$(minikube version)"
    fi

}

handle_kubectl() {
    kubectl version --client
    if [ $? -ne 0 ]; then
        kubectl_install_process
        if [ $? -eq 0 ]; then
            echo "kubectl installed!"
            kubectl version --client
        else
            echo "Installation was unsuccessful..."
        fi
    else
        echo "* 'kubectl' already installed! skipping this step... *"
    fi
}

main() {
    STEP=1
    echo "Building dependecies..."
    echo "*** STEP $STEP: ***"
    handle_minikube
    STEP=$(( $STEP + 1 ))
    echo "*** STEP $STEP: ***"
    handle_kubectl
    STEP=$(( $STEP + 1 ))
}

main