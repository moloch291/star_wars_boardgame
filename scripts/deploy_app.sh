delete_previous_version() {
    kubectl delete deployment sw-boardgame-deployment
    kubectl delete svc sw-boardgame-service
    helm delete sw-bg
}

redeploy() {
    helm install sw-bg ./helm/
}

main() {
    delete_previous_version
    redeploy
}

main
