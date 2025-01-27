const express = require("express");
const router = express.Router();
module.exports = router;

const prisma = require("../prisma");

// TODO: routes!
router.get("/", async (req, res, next) => {
  try {
    const playlists = await prisma.playlist.findMany();
    res.json(playlists);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    // We can throw an error instead of checking for a null playlist
    const playlist = await prisma.playlist.findUniqueOrThrow({
      where: { id: +id },
      include: { playlists: true },
    });
    res.json(playlist);
  } catch (e) {
    next(e);
  }
});

router.post("/:id/playlists", async (req, res, next) => {
  const { id } = req.params;
  const { username, playlist } = req.body;
  try {
    // ownerId have been converted to numbers
    const playlist = await prisma.playlist.create({
      data: { name, description, ownerId: +id },
    });
    res.status(201).json(playlist);
  } catch (e) {
    next(e);
  }
});
