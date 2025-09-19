// Functions.

function render_project(project_name,
    figure_path,
    title_name,
    author_list,
    material_list,
    award_name = null) {
    if (document.getElementsByName(project_name).length === 0) {
        return;
    }

    var img = document.createElement('img');
    img.src = figure_path;
    img.setAttribute('style',
        'width: 100%; max-height: 120px; object-fit: cover;');

    var title = document.createElement('div');
    title.setAttribute('class', 'title');
    title.innerHTML = title_name;

    var author = document.createElement('div');
    author.setAttribute('class', 'author');
    author.innerHTML = '';
    for (var idx = 0; idx < author_list.length; idx++) {
        if (idx < author_list.length - 1 &&
            (author_list[idx + 1] == 'equal' ||
                author_list[idx + 1] == 'corresponding')) {
            author.innerHTML += (
                '<span name="' +
                author_list[idx] +
                '" title="' +
                author_list[idx + 1] +
                '"></span>');
            idx++
        } else {
            author.innerHTML += (
                '<span name="' +
                author_list[idx] +
                '" title="' +
                '"></span>');
        }
        if (idx < author_list.length - 1) {
            author.innerHTML += ', ';
        }
    }

    var material = document.createElement('div');
    material.setAttribute('class', 'material');
    material_list.innerHTML = '';
    for (var idx = 0; idx < material_list.length; idx++) {
        material.innerHTML += (
            '<a href="' +
            material_list[idx][1] +
            '" target="_blank">' +
            material_list[idx][0] +
            '</a>');
        if (idx < material_list.length - 1) {
            material.innerHTML += ' / ';
        }
    }

    if (award_name) {
        var award = document.createElement('div');
        award.setAttribute('class', 'award');
        award.innerHTML = award_name;
    }

    var row = document.getElementsByName(project_name)[0];
    var cell = row.insertCell(0);
    cell.setAttribute('width', '25%');
    cell.appendChild(img);
    cell = row.insertCell(1);
    cell.appendChild(title);
    cell.appendChild(author);
    cell.appendChild(material);
    if (award_name) {
        cell.appendChild(award);
    }
};

function render_author(author_name, link = null, alias = null) {
    var list = document.getElementsByName(author_name);
    for (var idx = 0; idx < list.length; idx++) {
        var contribution = list[idx].title;
        var tailing = '';
        if (contribution === 'equal') {
            tailing = '*';
        } else if (contribution === 'corresponding') {
            tailing = '<sup>+<sup>';
        }

        var context = '';
        if (alias) {
            context = alias + tailing;
        } else {
            context = author_name + tailing;
        }

        if (link) {
            list[idx].innerHTML = (
                '<a href="' +
                link +
                '" target="_blank">' +
                '<span style="white-space:nowrap">' + context + '</span>' +
                '</a>');
        } else {
            list[idx].innerHTML = context;
        }

        if (author_name === 'Jun Zheng') {
            list[idx].setAttribute('class', 'me');
        }
    }
};










// Template.

render_project(
    project_name = 'template',
    figure_path = './assets/projects/',
    title_name = '',
    author_list = [
        '',
    ],
    material_list = [
        ['Paper', ''],
        ['Project', ''],
        ['Code', ''],
        ['Demo', ''],
    ],
    award_name = null,
);










// Projects.

render_project(
    project_name = 'VITON-DiT',
    figure_path = './assets/projects/viton-dit.gif',
    title_name = 'VITON-DiT: Learning In-the-Wild Video Try-On from Human Dance Videos via Diffusion Transformers',
    author_list = [
        'Jun Zheng',
        'Fuwei Zhao',
        'Youjiang Xu',
        'Xin Dong',
        'Xiaodan Liang'
    ],
    material_list = [
        ['arXiv', 'https://arxiv.org/abs/2405.18326'],
        ['Project', 'https://zhengjun-ai.github.io/viton-dit-page/'],
    ],
    award_name = null,
);

render_project(
    project_name = 'Dynamic Try-On',
    figure_path = './assets/projects/dynamic-tryon.gif',
    title_name = 'Dynamic Try-On: Taming Video Virtual Try-on with Dynamic Attention Mechanism',
    author_list = [
        'Jun Zheng',
        'Jing Wang',
        'Fuwei Zhao',
        'Xujie Zhang',
        'Xiaodan Liang'
    ],
    material_list = [
        ['BMVC 2025', 'https://arxiv.org/abs/2412.09822'],
        ['Project', 'https://zhengjun-ai.github.io/dynamic-tryon-page/'],
    ],
    award_name = null,
);

render_project(
    project_name = 'WISA',
    figure_path = './assets/projects/wisa.gif',
    title_name = 'WISA: World simulator assistant for physics-aware text-to-video generation',
    author_list = [
        'Jing Wang', 'equal',
        'Ao Ma', 'equal',
        'Ke Cao', 'equal',
        'Jun Zheng',
        'Zhanjie Zhang',
        'Jiasong Feng',
        'Shanyuan Liu',
        'Yuhang Ma',
        'Bo Cheng',
        'Daiwei Leng',
        'Yuhui Yin',
        'Xiaodan Liang'
    ],
    material_list = [
        ['NeurIPS 2025 (Spotlight)', 'https://arxiv.org/abs/2503.08153'],
        ['Project', 'https://360cvgroup.github.io/WISA/'],
    ],
    award_name = null,
);


// Authors.
render_author('Xiaodan Liang', 'https://scholar.google.com/citations?user=voxznZAAAAAJ');
render_author('Xin Dong');
render_author('Youjiang Xu');
render_author('Jun Zheng', 'https://zhengjun-ai.github.io/');
render_author('Fuwei Zhao', 'https://scholar.google.com/citations?user=XSf0hP4AAAAJ');
render_author('Jing Wang', 'https://scholar.google.com/citations?user=Q9Np_KQAAAAJ&hl=en&oi=sra');
render_author('Xujie Zhang', 'https://scholar.google.com/citations?user=G58T4dMAAAAJ');
render_author('Ke Cao');
render_author('Ao Ma');
render_author('Zhanjie Zhang');
render_author('Jiasong Feng');
render_author('Shanyuan Liu');
render_author('Yuhang Ma');
render_author('Bo Cheng');
render_author('Daiwei Leng');
render_author('Yuhui Yin');
