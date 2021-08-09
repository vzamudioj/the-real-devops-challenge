db.createUser(
    {
        user: "myuser",
        pwd: "1234",
        roles: [
            {
                role: "readWrite",
                db: "test"
            }
        ]
    }
);