"use strict";(self.webpackChunkMP_CU_Doc=self.webpackChunkMP_CU_Doc||[]).push([[749],{8027:(a,s,n)=>{n.r(s),n.d(s,{data:()=>t});const t={key:"v-b5028bbe",path:"/component/progress.html",title:"进度条",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"默认",slug:"默认",children:[]},{level:2,title:"形状",slug:"形状",children:[]},{level:2,title:"尺寸",slug:"尺寸",children:[]},{level:2,title:"颜色",slug:"颜色",children:[]},{level:2,title:"条纹",slug:"条纹",children:[]},{level:2,title:"组合",slug:"组合",children:[]},{level:2,title:"布局",slug:"布局",children:[]},{level:2,title:"参数",slug:"参数",children:[]}],filePathRelative:"component/progress.md",git:{updatedTime:163999487e4}}},3819:(a,s,n)=>{n.r(s),n.d(s,{default:()=>e});const t=(0,n(6252).uE)('<h1 id="进度条" tabindex="-1"><a class="header-anchor" href="#进度条" aria-hidden="true">#</a> 进度条</h1><p>进度条组件</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;ui-progress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/mp-cu/colorUI/components/ui-progress/ui-progress&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="默认" tabindex="-1"><a class="header-anchor" href="#默认" aria-hidden="true">#</a> 默认</h2><p><img src="/images/progress/progress-1.png" alt="mp-cu"></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-progress</span> <span class="token attr-name">progress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>40<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="形状" tabindex="-1"><a class="header-anchor" href="#形状" aria-hidden="true">#</a> 形状</h2><p><img src="/images/progress/progress-2.png" alt="mp-cu"></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-progress</span> <span class="token attr-name">progress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>61.8<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-progress</span> <span class="token attr-name">round</span> <span class="token attr-name">progress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>30.8<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="尺寸" tabindex="-1"><a class="header-anchor" href="#尺寸" aria-hidden="true">#</a> 尺寸</h2><p><img src="/images/progress/progress-3.png" alt="mp-cu"></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-progress</span> <span class="token attr-name">sm</span> <span class="token attr-name">progress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>61.8<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-progress</span> <span class="token attr-name">progress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>61.8<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-progress</span> <span class="token attr-name">lg</span> <span class="token attr-name">progress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>61.8<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色" aria-hidden="true">#</a> 颜色</h2><p><img src="/images/progress/progress-4.png" alt="mp-cu"></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-progress</span> <span class="token attr-name">bg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bg-green<span class="token punctuation">&quot;</span></span> <span class="token attr-name">progress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>61.8<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-progress</span>  <span class="token attr-name">bg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bg-green-light<span class="token punctuation">&quot;</span></span> <span class="token attr-name">progress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>61.8<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-progress</span>  <span class="token attr-name">bg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bg-green-thin<span class="token punctuation">&quot;</span></span> <span class="token attr-name">progress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>61.8<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-progress</span>  <span class="token attr-name">bg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bg-green-gradient<span class="token punctuation">&quot;</span></span> <span class="token attr-name">progress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>61.8<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="条纹" tabindex="-1"><a class="header-anchor" href="#条纹" aria-hidden="true">#</a> 条纹</h2><p><img src="/images/progress/progress-5.png" alt="mp-cu"></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-progress</span> <span class="token attr-name">striped</span> <span class="token attr-name">progress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>61.8<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-progress</span> <span class="token attr-name">striped</span> <span class="token attr-name">active</span> <span class="token attr-name">progress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>40.8<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="组合" tabindex="-1"><a class="header-anchor" href="#组合" aria-hidden="true">#</a> 组合</h2><p><img src="/images/progress/progress-6.png" alt="mp-cu"></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-progress</span> <span class="token attr-name">progressArray</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{[40.8,20,8]}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">bgArray</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{[<span class="token punctuation">&#39;</span>bg-red<span class="token punctuation">&#39;</span>,<span class="token punctuation">&#39;</span>bg-green<span class="token punctuation">&#39;</span>,<span class="token punctuation">&#39;</span>bg-blue<span class="token punctuation">&#39;</span>]}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">striped</span> <span class="token attr-name">active</span> <span class="token attr-name">round</span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h2><p><img src="/images/progress/progress-7.png" alt="mp-cu"></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-progress</span> <span class="token attr-name">border</span> <span class="token attr-name">progressArray</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{[40.8,20,8]}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">bgArray</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{[<span class="token punctuation">&#39;</span>bg-red<span class="token punctuation">&#39;</span>,<span class="token punctuation">&#39;</span>bg-green<span class="token punctuation">&#39;</span>,<span class="token punctuation">&#39;</span>bg-blue<span class="token punctuation">&#39;</span>]}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">striped</span> <span class="token attr-name">active</span> <span class="token attr-name">round</span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>ui</td><td>String</td><td>-</td><td>-</td><td>其他class</td></tr><tr><td>bg</td><td>String/Array</td><td>-</td><td>ui-BG-Main</td><td>背景颜色</td></tr><tr><td>progress</td><td>Number/String</td><td>-</td><td>0</td><td>进度</td></tr><tr><td>round</td><td>Boolean</td><td>-</td><td>false</td><td>椭圆</td></tr><tr><td>radius</td><td>Boolean</td><td>-</td><td>true</td><td>圆角</td></tr><tr><td>sm</td><td>Boolean</td><td>-</td><td>false</td><td>小尺寸</td></tr><tr><td>lg</td><td>Boolean</td><td>-</td><td>false</td><td>大尺寸</td></tr><tr><td>striped</td><td>Boolean</td><td>-</td><td>false</td><td>条纹</td></tr><tr><td>active</td><td>Boolean</td><td>-</td><td>false</td><td>条纹动起来</td></tr><tr><td>shadow</td><td>String/Boolean</td><td>true,false,sm,lg</td><td>-</td><td>阴影</td></tr><tr><td>border</td><td>Boolean</td><td>-</td><td>false</td><td>边框</td></tr><tr><td>progressArray</td><td>Array</td><td>-</td><td>-</td><td>数组数据</td></tr><tr><td>bgArray</td><td>Array</td><td>-</td><td>见下文</td><td>数组颜色</td></tr></tbody></table><p><code>bgArray</code> 默认值：<code>[&#39;ui-BG-Main&#39;, &#39;ui-BG-Main-1&#39;, &#39;ui-BG-Main-2&#39;, &#39;ui-BG-Main-3&#39;]</code></p>',27),p={},e=(0,n(3744).Z)(p,[["render",function(a,s){return t}]])},3744:(a,s)=>{s.Z=(a,s)=>{const n=a.__vccOpts||a;for(const[a,t]of s)n[a]=t;return n}}}]);