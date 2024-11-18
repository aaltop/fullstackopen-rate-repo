import SignIn from "../../components/SignIn";

import { screen, render, waitFor, userEvent } from "@testing-library/react-native";


describe("Sign-in form", () => {

    const testUsers = [
        {
            username: "kalle",
            password: "password"
        }
    ];

    it("passes the correct values to onSubmit", async () => {
        // Occasionally complains about act(), but no way of wrapping
        // anything in that seems to actually help; tests pass all the same

        const user = userEvent.setup();
        const onSubmit = jest.fn();

        render(<SignIn onSubmit={onSubmit} />);

        const userDetails = testUsers[0];

        await user.type(
            screen.getByPlaceholderText("Username"),
            userDetails.username
        );
        await user.type(
            screen.getByPlaceholderText("Password"),
            userDetails.password
        )
        await user.press(screen.getByText("Login"));


        await waitFor(() => {
            expect(onSubmit.mock.calls).toHaveLength(1);

            const passedDetails = onSubmit.mock.calls[0][0];
            expect(passedDetails).toEqual(userDetails);
        });
    });
});