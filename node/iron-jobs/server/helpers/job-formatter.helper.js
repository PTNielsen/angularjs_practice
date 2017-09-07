module.exports = function jobFormatter(data) {
  return {
    id: data.id,
    company: data.company,
    link: data.link,
    notes: data.link,
    createTime: data.createTime
  };
};
