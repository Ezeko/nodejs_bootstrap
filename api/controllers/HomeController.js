exports.home = ( async (req, res) => {
    return res.status(200).json({
        status : true,
        data: {},
        message: "Working Successfully"
    })
})