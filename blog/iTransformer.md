---
title: "Notes on iTransformer"
subtitle: "Using Inverted Transformers for Time Series Forecasting"
date: "February 2, 2024"
---

<div align="center" style="width: 100%;">
  <img src="https://lh7-us.googleusercontent.com/fs-W4XMUd3FF4tGPwGsyYEfXMR3Q7Lk_jrGXA3iNMovhghVzcb4xQMtikT8j8L4HCFmubVnt6ivI7CDgKanvxi-47CjcP1-0DvweV3EZciIkFEpBnhIih8ZmUy1yUqRYd1hxlD6WIDI5Qtjwl33x-LY" alt="Hello World" style="width: 100%; height: auto;"/>
</div>

<br/>

## iTransformer: Inverted Transformers are Effective for Time Series Forecasting

<hr/>

<br /> 

### Motivation 
- Transformer-based forecasts are less performant and less efficient than simple linear layers.
- In particular, although temporal tokens capture temporal dependencies, in the case of a multivariate time series, a single token does not capture correlations between the variates at a same time point.
- The receptive field of the token formed by a single time step is excessively local. Note: receptive field is sort of an input capacity that affects the features. In this case, we are being implied that the temporal token can capture more local information.
- There is a growing emphasis on ensuring the independence of variates and utlizing mutual information (as defined in information theory), especially in modelling multivariate correlation.
- In sum, the temporal token structure of Transformer is not bad, but can be modified to increase its capacity.

<br /> 

### Main idea
- We have a time series that holds multiple variates at each time point. Instead of embedding variates at the same time point together, the idea is to for each variate, embed its whole time series together.
- This inversion is said to give a more variate-centric and a better-levaraged representation. 

<br /> 

### Paper notation

$$
\mathbf{X} = \{ \mathbf{x}_1, \mathbf{x}_2, ..., \mathbf{x}_T \} \in \mathbb{R}^{T \times N} \qquad \mathbf{Y} = \{ \mathbf{x}_1, \mathbf{x}_{T+1}, ..., \mathbf{x}_{T+S} \} \in \mathbb{R}^{S \times N}
$$
where
- $N$ is the number of variates;
- $T$ is the time steps; and
- $S$ is the future time steps.

<br /> 

### Structure Overview
Same structure as the encoder of Transformer.

<br /> 

$$
\text{Series of variates} \\
\downarrow \\
\text{Embedded independently into variate tokens} \\
\downarrow \\
\text{Multivariate self-attention} \\
\downarrow \\
\text{Layer normalizaion} \\
\downarrow \\
\text{Feed forward network} \\
\downarrow \\
\text{Layer normalization} \\
\downarrow \\
\text{Projection} \\
\downarrow \\
\text{Output}
$$

<br /> 

where the main block is repeated $L$ times as denoted in the paper.
- Self-attention reveal more multivariate correlations.
- Feed forward network give a series representation.
- Layer normalization reduce discrepancies among variates.
- Focus on representation learning and adaptive correlating of multivariate series.

Independent tokenization of the time series is claimed to describe properties of the variates.

Prediction is formulated as
$$
\begin{align*}
\mathbf{h}_n^0 &= \text{Embedding}(\mathbf{X}_{1:T,n}) \\
\mathbf{H}^{l+1} &= \text{TrmBlock}(\mathbf{H}^{l}) \qquad l = 0, 1, ..., L-1 \\
\widehat{\mathbf{Y}}_{1:T, n} &= \text{Projection}(\mathbf{h}^L_n)
\end{align*}
$$

where 
- $\mathbf{H} \in \mathbb{R}^{N \times D}$ contained $N$ embedded tokens of dimension $D$ and the superscript denotes the layer index.
- $\text{Embedding}: \mathbb{R}^T \to \mathbb{R}^D$ and $\text{Projection}: \mathbb{R}^D \to \mathbb{R}^S$ are implemented with a multi-layer perceptron.
- $\text{TrmBlock}$ denotes the multivariate attention, layer normalization, FFN, layer normalization block.

As the order of sequence is implicitly stored in the neuron permutation of the feed-forward network, the position embedding in the vanilla Transformer is no longer needed here.
