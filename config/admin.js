module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fa417919af5622af9e28b64696da8e8e'),
  },
});
