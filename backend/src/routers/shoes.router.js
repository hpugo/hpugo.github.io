import { Router } from "express";
import { ShoeModel } from "../models/shoe.model.js";
import handler from "express-async-handler";

const router = Router();

router.get('/', handler (async (req, res) => {
    const shoes = await ShoeModel.find({});
    res.send(shoes);
})
);

router.get('/sizes', handler (async (req, res) => {
    const sizes = await ShoeModel.aggregate([
        {
            $unwind: '$sizes',
        },
        {
            $group: {
                _id: '$sizes',
                count: { $sum: 1 },
            },
        },
        {$project :{
            _id: 0,
            name: '$_id',
            count: '$count',
        },},
    ]).sort({ count: -1 });

    res.send(sizes);
    })
);

router.get('/search/:searchTerm', handler(async (req, res) => {
    const {searchTerm} = req.params;
    const searchRegex = new RegExp(searchTerm, 'i');

    const shoes = await ShoeModel.find ({ name: {$regex: searchRegex}});
    res.send(shoes)
    })
);

router.get('/size/:size', handler (async (req, res) => {
    const {size} = req.params;
    const shoes = await ShoeModel.find({ sizes: size});
    res.send(shoes);
})
);

router.get('/:shoeId',handler( async (req, res) => {
    const {shoeId} = req.params;
    const shoe = await ShoeModel.findById(shoeId);
    res.send(shoe)
})
);


export default router;