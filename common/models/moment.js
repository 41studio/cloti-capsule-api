module.exports = function(Moment) {

  var isStatic = true;
  Moment.disableRemoteMethod("findOne", isStatic);
  Moment.disableRemoteMethod('count', isStatic);
  Moment.disableRemoteMethod('createChangeStream', isStatic);
  Moment.disableRemoteMethod("exists", isStatic);

  Moment.observe('before save', function event(ctx, next) {
    var loopbackToken = ctx.options.remoteCtx.req.accessToken;
    console.log(loopbackToken);
    if (loopbackToken) {
      ctx.instance.authorId = loopbackToken.userId;
    }
    next();
  });

};