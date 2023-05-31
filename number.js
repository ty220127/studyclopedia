//Numbering-Rule
function nr(model,box) {
  document.write("[#" + model + "-" + box + "]")
}

var refs = [];
var ttls = [];
var authors = [];
var years = [];
var dates = [];
var doi = [];
var arxiv = [];
var bns = [];

i = 0;

//4:Yamagami2022QWRW
i++; Y22QWRW = i;
bns[i] = [];
refs[i] = "https://ty220127.github.io/studyclopedia/yamagami2022directivity.html";
ttls[i] = "Directivity of quantum walk via its random walk replica";
authors[i] = ["Tomoki","Yamagami", "Etsuo","Segawa", "Nicolas","Chauvet", "André","Röhm", "Ryoichi","Horisaki", "Makoto","Naruse"];
dates[i] = new Date( 2022, 10, 29, 00, 00 );
doi[i] = "https://www.hindawi.com/journals/complexity/2022/9021583/";
arxiv[i] = "https://arxiv.org/abs/2201.08067";
j = 0;
j++; antilinearity = j; bns[i][j] = "第二成分の反線形性";

//5:Amakasu2021CfOAM
i++; A21OAM = i;
bns[i] = [];
refs[i] = "https://ty220127.github.io/studyclopedia/amakasu2021conflict.html";
ttls[i] = "Conflict-free collective stochastic decision making by orbital angular momentum of photons through quantum interference";
authors[i] = ["Takashi","Amakasu", "Nicolas","Chauvet", "Guillaume","Bachelier", "Serge","Huant", "Ryoichi","Horisaki", "Makoto","Naruse"]; 
dates[i] = new Date( 2021, 10, 26, 00, 00 );
doi[i] = "https://www.nature.com/articles/s41598-021-00493-2";
arxiv[i] = "https://arxiv.org/abs/2107.00877";
j = 0;
j++; antilinearity = j; bns[i][j] = "第二成分の反線形性";

//6:Casalé2020QB
i++; C20QB = i;
bns[i] = [];
refs[i] = "https://ty220127.github.io/studyclopedia/casale2020quantum.html";
ttls[i] = "Quantum Bandits";
authors[i] = ["Balthazar","Casalé", "Giuseppe","Di Molfetta", "Hachem","Kadri", "Liva","Ralaivola"]; 
dates[i] = new Date( 2020, 8, 6, 00, 00 );
doi[i] = "https://link.springer.com/article/10.1007/s42484-020-00024-8";
arxiv[i] = "https://arxiv.org/abs/2002.06395";
j = 0;
j++; Re6 = j; bns[i][j] = "命題：平均リグレットとエラー確率の関係";
j++; Hd6 = j; bns[i][j] = "定義：マーク・非マーク要素と対応する Hilbert 空間";
j++; Ho6 = j; bns[i][j] = "命題：マーク・非マーク要素の Hilbert 空間は互いに直交";
j++; Of6 = j; bns[i][j] = "定義：オラクル";
j++; kb6 = j; bns[i][j] = "命題：オラクルの別表現";
j++; ar6 = j; bns[i][j] = "命題：報酬平均値と成功確率の関係";
j++; Ps6 = j; bns[i][j] = "命題：状態の２次元射影";
j++; rp6 = j; bns[i][j] = "命題：QBAIにおける推薦確率";

//3:SunadaTate2012QW
i++; S12QW = i;
bns[i] = [];
refs[i] = "https://ty220127.github.io/studyclopedia/sunada2012asymptotic.html";
ttls[i] = "Asymptotic behavior of quantum walks on the line";
authors[i] = ["Toshikazu","Sunada", "Tatsuya","Tate"];
dates[i] = new Date( 2012, 3, 15, 00, 00 );
doi[i] = "https://doi.org/10.1016/j.jfa.2011.12.016";
arxiv[i] = "https://arxiv.org/abs/1108.1878";
j = 0;
j++; antilinearity = j; bns[i][j] = "第二成分の反線形性";

//1:Konno2005new
i++; K05QW = i;
bns[i] = [];
refs[i] = "https://ty220127.github.io/studyclopedia/konno2005new.html";
ttls[i] = "A new type of limit theorem for the one-dimensional quantum random walk";
authors[i] = ["Norio","Konno"];
dates[i] = new Date( 2005, 10, 00, 00, 00 );
doi[i] = "https://projecteuclid.org/journals/journal-of-the-mathematical-society-of-japan/volume-57/issue-4/A-new-type-of-limit-theorems-for-the-one-dimensional/10.2969/jmsj/1150287309.full";
arxiv[i] = "https://arxiv.org/abs/quant-ph/0206103";
j = 0;
j++; antilinearity = j; bns[i][j] = "第二成分の反線形性";

//2:Ambainis2001QW1D
i++; A01QW1D = i;
bns[i] = [];
refs[i] = "https://ty220127.github.io/studyclopedia/ambainis2001one.html";
ttls[i] = "One-dimensional quantum walks";
authors[i] = ["Andris","Ambainis", "Eric","Bach", "Ashwin","Nayak", "Ashvin","Vishwanath", "John","Watrous"];
dates[i] = new Date( 2001, 07, 00, 00, 00 );
doi[i] = "https://doi.org/10.1145/380752.380757";
j = 0;
j++; antilinearity = j; bns[i][j] = "第二成分の反線形性";
