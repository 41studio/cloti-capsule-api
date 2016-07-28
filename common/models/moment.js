var loopback = require('loopback');

module.exports = function(Moment) {

  Moment.observe('before save', function event(ctx, next) {
    var loopbackToken = ctx.options.remoteCtx.req.accessToken;
    console.log(loopbackToken);
    if (loopbackToken) {
      ctx.instance.authorId = loopbackToken.userId;
    }
    next();
  });

};
