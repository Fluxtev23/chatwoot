import ApiClient from './ApiClient';

const getTimeOffset = () => -new Date().getTimezoneOffset() / 60;

class ReportsAPI extends ApiClient {
  constructor() {
    super('reports', { accountScoped: true, apiVersion: 'v2' });
  }

  getReports(
    metric,
    since,
    until,
    type = 'account',
    id,
    group_by,
    business_hours
  ) {
    return this.axios.get(`${this.url}`, {
      params: {
        metric,
        since,
        until,
        type,
        id,
        group_by,
        business_hours,
        timezone_offset: getTimeOffset(),
      },
    });
  }

  getSummary(since, until, type = 'account', id, group_by, business_hours) {
    return this.axios.get(`${this.url}/summary`, {
      params: {
        since,
        until,
        type,
        id,
        group_by,
        business_hours,
      },
    });
  }

  getConversationMetric(type = 'account', page = 1) {
    return this.axios.get(`${this.url}/conversations`, {
      params: {
        type,
        page,
      },
    });
  }

  getAgentReports({ from: since, to: until, businessHours }) {
    return this.axios.get(`${this.url}/agents`, {
      params: { since, until, business_hours: businessHours },
    });
  }

  getLabelReports({ from: since, to: until, businessHours }) {
    return this.axios.get(`${this.url}/labels`, {
      params: { since, until, business_hours: businessHours },
    });
  }

  getInboxReports({ from: since, to: until, businessHours }) {
    return this.axios.get(`${this.url}/inboxes`, {
      params: { since, until, business_hours: businessHours },
    });
  }

  getTeamReports({ from: since, to: until, businessHours }) {
    return this.axios.get(`${this.url}/teams`, {
      params: { since, until, business_hours: businessHours },
    });
  }
}

export default new ReportsAPI();
