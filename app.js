const content = window.RESEARCH_CONTENT || {roles:[], trajectory:[]};

const rolesGrid = document.getElementById('rolesGrid');
content.roles.forEach((role, i) => {
  const el = document.createElement('article');
  el.className = 'role';
  el.innerHTML = `<div class="icon">${role.icon}</div><h3>${role.title}</h3><p>${role.text}</p><small>0${i+1}</small>`;
  rolesGrid.appendChild(el);
});

const trajectoryList = document.getElementById('trajectoryList');
content.trajectory.filter(item => item.visible !== false).forEach(item => {
  const el = document.createElement('div');
  el.className = `trajectory-item${item.placeholder ? ' placeholder' : ''}`;
  const links = [
    item.href ? `<a href="${item.href}" target="_blank" rel="noreferrer">Explore →</a>` : '',
    item.paperHref ? `<a href="${item.paperHref}" target="_blank" rel="noreferrer">Paper →</a>` : ''
  ].filter(Boolean).join(' &nbsp; ');
  el.innerHTML = `<div class="num">${item.number}</div><h3>${item.title}</h3><p>${item.theme}</p><div class="status">${item.status}${links ? `<br><span class="trajectory-links">${links}</span>` : ''}</div>`;
  trajectoryList.appendChild(el);
});