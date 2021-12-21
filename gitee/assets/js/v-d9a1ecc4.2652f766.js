"use strict";(self.webpackChunkMP_CU_Doc=self.webpackChunkMP_CU_Doc||[]).push([[723],{7196:(a,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t={key:"v-d9a1ecc4",path:"/component/card.html",title:"卡片",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"示例-1",slug:"示例-1",children:[]},{level:2,title:"示例-2",slug:"示例-2",children:[]},{level:2,title:"示例-3",slug:"示例-3",children:[]},{level:2,title:"参数",slug:"参数",children:[]},{level:2,title:"插槽",slug:"插槽",children:[]}],filePathRelative:"component/card.md",git:{updatedTime:163999487e4}}},4760:(a,n,s)=>{s.r(n),s.d(n,{default:()=>e});const t=(0,s(6252).uE)('<h1 id="卡片" tabindex="-1"><a class="header-anchor" href="#卡片" aria-hidden="true">#</a> 卡片</h1><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;ui-card&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mp-cu/colorUI/components/ui-card/ui-card&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例-1</h2><p><img src="/images/card/card-1.png" alt="mp-cu"></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-card</span> <span class="token attr-name">ui</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shadow m-3 radius<span class="token punctuation">&quot;</span></span> <span class="token attr-name">imgHeight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>auto<span class="token punctuation">&quot;</span></span> <span class="token attr-name">img</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">isTag</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ui-tag bg-mask-20 radius-lr<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cicon-favorite mx-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">&gt;</span></span>{{item.like}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ui-card</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例-2</h2><p><img src="/images/card/card-2.png" alt="mp-cu"></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-card</span> <span class="token attr-name">ui</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shadow m-3 radius<span class="token punctuation">&quot;</span></span> <span class="token attr-name">imgHeight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>180rpx<span class="token punctuation">&quot;</span></span> <span class="token attr-name">img</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">desc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>desc<span class="token punctuation">&quot;</span></span> <span class="token attr-name">isTag</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ui-tag bg-mask-20 radius-lr<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cicon-favorite mx-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">&gt;</span></span>{{item.like}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ui-card</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例-3</h2><p><img src="/images/card/card-3.png" alt="mp-cu"></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-card</span> <span class="token attr-name">ui</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shadow m-3 radius<span class="token punctuation">&quot;</span></span> <span class="token attr-name">img</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">desc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>desc<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fixedTitle</span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>参数</th><th>类型</th><th>可选值</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>ui</td><td>String</td><td>-</td><td>-</td><td>其他class</td></tr><tr><td>img</td><td>String</td><td>-</td><td>-</td><td>图片地址</td></tr><tr><td>imgHeight</td><td>String</td><td>-</td><td>auto</td><td>图片高度</td></tr><tr><td>title</td><td>String</td><td>-</td><td>-</td><td>标题</td></tr><tr><td>fixedTitle</td><td>Boolean</td><td>-</td><td>false</td><td>浮动标题</td></tr><tr><td>desc</td><td>String</td><td>-</td><td>-</td><td>内容</td></tr><tr><td>imgUi</td><td>String</td><td>-</td><td>-</td><td>图片样式</td></tr><tr><td>isTitle</td><td>Boolean</td><td>-</td><td>true</td><td>标题插槽</td></tr><tr><td>isTag</td><td>Boolean</td><td>-</td><td>false</td><td>标签插槽</td></tr></tbody></table><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>默认</td><td>内容插槽</td></tr><tr><td>title</td><td>标题区域插槽</td></tr><tr><td>tag</td><td>标签区域插槽</td></tr></tbody></table>',15),p={},e=(0,s(3744).Z)(p,[["render",function(a,n){return t}]])},3744:(a,n)=>{n.Z=(a,n)=>{const s=a.__vccOpts||a;for(const[a,t]of n)s[a]=t;return s}}}]);