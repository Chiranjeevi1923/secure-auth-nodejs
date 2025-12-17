import { eq } from "drizzle-orm";
import db from "../db/index.js";
import { userTable } from "../db/schema.js";
import { hashPassword, verifyPassword } from "../utils/hashing.js";

export const userSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !name.trim()) {
            return res.status(400).json({ error: "Name is required" });
        }

        if (!email || !email.trim()) {
            return res.status(400).json({ error: "Email is required" });
        }

        if (!password || !password.trim()) {
            return res.status(400).json({ error: "Password is required" });
        }

        // Check if user with the same email already exists
        const [existingUser] = await db.select()
            .from(userTable)
            .where(eq(userTable.email, email));

        if (existingUser) {
            return res.status(409).json({ error: "User with this email already exists" });
        }

        // Hash the password
        const { hash, salt } = await hashPassword(password);

        // Insert the new user into the database
        const [newUser] = await db.insert(userTable)
            .values({
                name,
                email,
                password: hash,
                salt
            })
            .returning({
                id: userTable.id,
            });

        res.status(201)
            .json({
                message: "User registered successfully",
                userId: newUser.id
            });

    } catch (error) {
        console.error("Error during user signup:", error);
        res.status(500).json({ error: "Internal server error" });
    }


}

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !email.trim()) {
            return res.status(400).json({ error: "Email is required" });
        }

        if (!password || !password.trim()) {
            return res.status(400).json({ error: "Password is required" });
        }

        const [user] = await db
            .select({
                id: userTable.id,
                password: userTable.password,
                salt: userTable.salt
            })
            .from(userTable)
            .where(eq(userTable.email, email));
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Verify password
        const isPasswordValid = await verifyPassword(password, user.salt, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        res.status(200).json({ message: "Login successful", userId: user.id });
    } catch (error) {
        console.error("Error during user login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}