tag_and_push() {
    docker tag sw-boardgame:0.1.0 872533758794.dkr.ecr.eu-central-1.amazonaws.com/sw-boardgame:0.1.0
    docker push 872533758794.dkr.ecr.eu-central-1.amazonaws.com/sw-boardgame:0.1.0
}

build_image() {
    cd ./frontend
    docker build -t sw-boardgame .
    cd ..
}

main() {
    build_image
    tag_and_push
    docker rmi sw-boardgame:0.1.0
    docker rmi 872533758794.dkr.ecr.eu-central-1.amazonaws.com/sw-boardgame
}

main
