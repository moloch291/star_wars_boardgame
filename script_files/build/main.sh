#!/bin/bash

. install_kubectl.sh

main() {
    echo "Building dependecies..."
    sh install_kubectl.sh
}

main