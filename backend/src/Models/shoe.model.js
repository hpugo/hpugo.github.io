import { model, Schema} from 'mongoose';

export const ShoeSchema = new Schema (
    {
        name: {type: String, required: true},
        price: { type: Number, required: true},
        sizes: {type: [String]},
        imageUrl: { type: String, required: true},
        condition: {type: String, required: true}
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
    }
);

export const ShoeModel = model('shoe', ShoeSchema);