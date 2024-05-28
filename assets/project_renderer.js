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
        ['arXiv', ''],
        ['Project', 'https://zhengjun-ai.github.io/viton-dit-page/'],
    ],
    award_name = null,
);

render_project(
    project_name = 'Wear-Any-Way',
    figure_path = './assets/projects/wear-any-way.png',
    title_name = 'Wear-Any-Way: Manipulable Virtual Try-on via Sparse Correspondence Alignment',
    author_list = [
        'Mengting Chen',
        'Xi Chen',
        'Zhonghua Zhai',
        'Chen Ju',
        'Xuewen Hong',
        'Jinsong Lan',
        'Shuai Xiao',
    ],
    material_list = [
        ['arXiv', 'https://arxiv.org/pdf/2403.12965'],
        ['Project', 'https://mengtingchen.github.io/wear-any-way-page/'],
        ['Media', 'https://mp.weixin.qq.com/s/MWFfUrj_-bitHxgeOtDIKQ'],
    ],
    award_name = null,
);

render_project(
    project_name = 'LivePhoto',
    figure_path = './assets/projects/livephoto.gif',
    title_name = 'LivePhoto: Real Image Animation with Text-guided Motion Control',
    author_list = [
        'Xi Chen',
        'Zhiheng Liu',
        'Mengting Chen',
        'Yutong Feng',
        'Yu Liu',
        'Yujun Shen',
        'Hengshuang Zhao',
    ],
    material_list = [
        ['arXiv', 'https://arxiv.org/pdf/2312.02928.pdf'],
        ['Project', 'https://xavierchen34.github.io/LivePhoto-Page/'],
        ['Code', 'https://github.com/XavierCHEN34/LivePhoto'],
        ['Demo', 'https://www.youtube.com/watch?v=M2vzrTYAsQI'],
    ],
    award_name = null,
);


render_project(
    project_name = 'DTN',
    figure_path = './assets/projects/DTN.jpg',
    title_name = 'Diversity transfer network for few-shot learning',
    author_list = [
        'Mengting Chen',
        'Yuxin Fang',
        'Xinggang Wang',
        'Heng Luo',
        'Yifeng Geng',
        'Xinyu Zhang',
        'Chang Huang',
        'Wenyu Liu',
        'Bo Wang',
    ],
    material_list = [
        ['AAAI 2020 (Oral)', 'https://ojs.aaai.org/index.php/AAAI/article/view/6628'],
        ['Code', 'https://github.com/Yuxin-CV/DTN'],
    ],
    award_name = null,
);

render_project(
    project_name = 'SRF',
    figure_path = './assets/projects/SRF.jpg',
    title_name = 'Structured random forest for label distribution learning',
    author_list = [
        'Mengting Chen',
        'Xinggang Wang',
        'Bin Feng',
        'Wenyu Liu',
    ],
    material_list = [
        ['Neurocomputing 2018', 'https://www.sciencedirect.com/science/article/abs/pii/S0925231218310622'],
    ],
    award_name = null,
);

render_project(
    project_name = 'DENOISER',
    figure_path = './assets/projects/DENOISER.jpg',
    title_name = 'DENOISER: Rethinking the Robustness for Open-Vocabulary Action Recognition',
    author_list = [
        'Haozhe Cheng',
        'Chen Ju',
        'Haicheng Wang',
        'Jinxiang Liu',
        'Mengting Chen',
        'Qiang Hu',
        'Xiaoyun Zhang',
        'Yanfeng Wang',
    ],
    material_list = [
        ['arXiv', 'https://arxiv.org/pdf/2404.14890'],
    ],
    award_name = null,
);



// Authors.
render_author('Xiaodan Liang', 'https://scholar.google.com/citations?user=voxznZAAAAAJ');
render_author('Xin Dong');
render_author('Youjiang Xu');
render_author('Jun Zheng', 'https://zhengjun-ai.github.io/');
render_author('Fuwei Zhao', 'https://scholar.google.com/citations?user=XSf0hP4AAAAJ');
render_author('');