handle_kubectl() {
    kubectl version
    $?
}

main() {
    echo "Building dependecies..."
    handle_kubectl
}

main