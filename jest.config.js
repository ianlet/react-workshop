module.exports =  {
    "testEnvironment": "enzyme",
    "setupFilesAfterEnv": [
        "jest-enzyme",
        "./test/setupTest.ts"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.ts",
        "\\.(scss|css|less)$": "<rootDir>/__mocks__/styleMock.ts"
    },
    "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"],
    "globals": {
        "ts-jest": {
            "tsConfig": "tsconfig.test.json"
        }
    }
}
