
import { Router, Request, Response } from 'express'

const router = Router();

/**
 * Servicio rest get
 */
router.get('/mensajes',(req: Request,res: Response) => {
    res.json({
        ok: true,
        mensjae: 'Todo esta bien !!'
    })
})

/**
 * Servicio rest post
 */
router.post('/mensajes',(req: Request,res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;

    res.json({
        ok: true,
        cuerpo,
        de
    })
})

/**
 * Servicio rest post con parametros en la url
 */
router.post('/mensajes/:id',(req: Request,res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id     = req.params.id;

    res.json({
        ok: true,
        cuerpo,
        de,
        id
    })
})



export default router;