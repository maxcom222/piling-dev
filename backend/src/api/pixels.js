import DB from 'db';

export default (api) => {
	api.get('/:id', async (req, res) => res.json(await DB.pixel.findUnique({
		where: {
			id: Number(req.params.id)
		}
	})))

	return api
}