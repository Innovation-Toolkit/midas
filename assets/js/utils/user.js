var _ = require('underscore');

// Wrapper for server User class
class User {
  constructor(data) {
      // initialize with data that comes from server, backendUser or /user/:id
      // to be compatible with prior usage of raw object
      for (var i in data) {
        this[i] = data[i];
      }
  }
  get agency() {
    var agencyTag = _(this.tags).findWhere({ type: 'agency' });

    if (!agencyTag) agencyTag = {};

    // ideally this would be its own object
    return { id: agencyTag.id,
             name: agencyTag.name,
             abbr: agencyTag.data ? agencyTag.data.abbr : '',
             domain: agencyTag.data ? agencyTag.data.domain[0] : '',
             slug: agencyTag.data ? agencyTag.data.abbr.toLowerCase() : '',
             allowRestrictAgency: agencyTag.data ? agencyTag.data.allowRestrictAgency : false
           }
  }

}

export default User;
