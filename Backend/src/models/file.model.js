import mongoose from "mongoose";
const fileSchema = mongoose.Schema(
    {
        url: {
            type: String,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        public_id: {
            type: String,
        },
        uploadTimestamp: { type: Date, default: Date.now },

        expiryTimestamp: Date,
    },
    { timestamps: true }
);

export const File = mongoose.model("File", fileSchema);
