#!/bin/bash

handle_kubectl() {
    kubectl version --client
    if [ $? -ne 0 ]; then
        apt-get update
        apt-get install -y apt-transport-https ca-certificates curl
        curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg
        echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
        apt-get update
        apt-get install -y kubectl
    else
        echo "kubectl already installed..."
    fi
}

main() {
    handle_kubectl
}

main