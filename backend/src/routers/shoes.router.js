import { Router } from "express";
import { sample_shoes, sample_sizes } from "../Data.js";

const router = Router();

router.get('/', (req, res) => {
    res.send(sample_shoes);
});

router.get('/sizes', (req, res) => {
    res.send(sample_sizes);
})

router.get('/search/:searchTerm', (req, res) => {
    const {searchTerm} = req.params;
    const shoes = sample_shoes.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    res.send(shoes)
});

router.get('/size/:size', (req, res) => {
    const {size} = req.params;
    const shoes = sample_shoes.filter(item => {
        const itemSize = Number(item.size);

 if (!isNaN(itemSize)) {
     return itemSize === Number(size);
     }

      return false;
    });
    res.send(shoes);
});

router.get('/:shoeId', (req, res) => {
    const {shoeId} = req.params;
    const shoe = sample_shoes.find(item => item.id == shoeId);
    res.send(shoe)
})


export default router;