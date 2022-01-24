tag_and_push() {
    docker tag sw-boardgame:latest 872533758794.dkr.ecr.eu-central-1.amazonaws.com/sw-boardgame:latest
    docker push 872533758794.dkr.ecr.eu-central-1.amazonaws.com/sw-boardgame:latest
}

build_image() {
    cd ./frontend
    docker build -t sw-boardgame .
    cd ..
}

main() {
    build_image
    tag_and_push
    docker rmi sw-boardgame:latest
}

main
