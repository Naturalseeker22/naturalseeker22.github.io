export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface Highlight {
  date: string;
  title: string;
  result: string;
  url?: string;
}

export const highlights: Highlight[] = [
  {
    date: "Feb 2026",
    title: "Nvidia × GPU MODE Kernels Competition",
    result: "Placed top 10.",
    url: "https://www.gpumode.com/leaderboard/730?tab=rankings",
  },
  {
    date: "Feb 2026",
    title: "CUTLASS Kernel Benchmarks",
    result: "Wrote kernels faster than CUTLASS for GEMV, DeepGEMM, and GroupGEMM on custom shapes.",
    url: "https://github.com/Naturalseeker22",
  },
  {
    date: "Oct 2025",
    title: "NeurIPS 2025 — Google Code Golf Championship",
    result: "Ranked #155 / 1,142 teams worldwide.",
    url: "https://www.kaggle.com/competitions/google-code-golf-2025/leaderboard",
  },
  {
    date: "Sep 2025",
    title: "Jane Street × GPU MODE Optimization Hackathon",
    result: "Placed top 10.",
    url: "https://www.gpumode.com/news/jane-street-hackathon",
  },
  {
    date: "Sep 2025",
    title: "ListenLabs Berghain Challenge",
    result: "Ranked #135 / 1,330 teams worldwide.",
    url: "https://berghain.challenges.listenlabs.ai/",
  },
  {
    date: "Jul 2025",
    title: "Jane Street Real-Time Market Data Forecasting",
    result: "Placed top 20% worldwide.",
    url: "https://www.kaggle.com/naturalseeker",
  },
  {
    date: "Nov 2024",
    title: "ARC Prize 2024",
    result: "Ranked #74 / 1,427 teams worldwide.",
    url: "https://www.kaggle.com/certification/competitions/naturalseeker/arc-prize-2024",
  },
  {
    date: "Jun 2024",
    title: "AI Mathematical Olympiad",
    result: "Ranked #65 / 1,161 teams worldwide (Progress Prize 1, XTX Markets).",
    url: "https://www.kaggle.com/certification/competitions/naturalseeker/ai-mathematical-olympiad-prize",
  },
  {
    date: "Apr 2024",
    title: "LLM Prompt Recovery Challenge",
    result: "Placed top 10%.",
    url: "https://www.kaggle.com/naturalseeker",
  },
  {
    date: "2021–now",
    title: "Kaggle Competitions Expert",
    result: "Ranked #997 / 200k worldwide, 5× Bronze Medals.",
    url: "https://www.kaggle.com/naturalseeker",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "demystifying-cuda-kernels",
    title: "Demystifying CUDA Kernels for ML Engineers",
    date: "2024-02-15",
    excerpt: "A practical guide to writing your first custom CUDA kernel for PyTorch, focusing on memory coalescing and thread blocks.",
    tags: ["CUDA", "PyTorch", "Performance"],
    content: `
As machine learning models grow larger, relying solely on high-level PyTorch ops can sometimes leave performance on the table. Writing custom CUDA kernels might seem daunting, but it's an essential skill for squeezing every drop of compute out of your GPUs.

## Why Write Custom Kernels?

1. **Operator Fusion**: Combine multiple operations (like an element-wise activation followed by a reduction) into a single kernel to avoid round-trips to global memory.
2. **Specialized Hardware**: Take full advantage of Tensor Cores for specific matrix shapes.
3. **Memory Bandwidth**: Reduce memory fragmentation and bandwidth bottlenecks.

## A Simple Example: Vector Addition

Let's look at the "Hello World" of CUDA: adding two vectors.

\`\`\`cpp
__global__ void add_kernel(float* a, float* b, float* c, int n) {
    int index = threadIdx.x + blockIdx.x * blockDim.x;
    int stride = blockDim.x * gridDim.x;
    for (int i = index; i < n; i += stride) {
        c[i] = a[i] + b[i];
    }
}
\`\`\`

### Breaking it down:
- \`__global__\`: Tells the compiler this function runs on the GPU and is called from the CPU.
- \`threadIdx.x\` and \`blockIdx.x\`: Built-in variables that give the thread its unique identity.
- \`stride\`: The total number of threads in the grid. This allows us to handle arrays larger than our thread count using a grid-stride loop.

## Integrating with PyTorch

Using PyTorch's C++ extension system, you can easily bind this kernel to Python:

\`\`\`python
import torch
import my_custom_cuda

a = torch.randn(10000, device='cuda')
b = torch.randn(10000, device='cuda')
c = my_custom_cuda.add(a, b)
\`\`\`

## Next Steps

In the next post, we'll dive into shared memory and how to optimize matrix multiplication using tiling techniques. Stay tuned!
    `
  },
  {
    id: "lora-fine-tuning-guide",
    title: "A Practical Guide to LoRA Fine-tuning",
    date: "2023-11-02",
    excerpt: "How to effectively use Low-Rank Adaptation (LoRA) to fine-tune large language models on consumer hardware.",
    tags: ["LLMs", "Fine-tuning", "LoRA"],
    content: `
Fine-tuning a 7B parameter model traditionally requires massive VRAM, making it inaccessible for many developers. Enter **LoRA (Low-Rank Adaptation)**.

## What is LoRA?

Instead of updating all the weights of a dense layer, LoRA freezes the pre-trained model weights and injects trainable rank decomposition matrices into each layer of the Transformer architecture.

If W is the weight matrix, LoRA represents the update as:

$$ \\Delta W = B A $$

Where B and A are low-rank matrices.

## Setting up LoRA with Hugging Face PEFT

Using the \`peft\` library makes this incredibly simple:

\`\`\`python
from transformers import AutoModelForCausalLM
from peft import get_peft_model, LoraConfig, TaskType

model = AutoModelForCausalLM.from_pretrained("mistralai/Mistral-7B-v0.1")

peft_config = LoraConfig(
    task_type=TaskType.CAUSAL_LM,
    inference_mode=False,
    r=8,
    lora_alpha=32,
    lora_dropout=0.1,
    target_modules=["q_proj", "v_proj"]
)

model = get_peft_model(model, peft_config)
model.print_trainable_parameters()
\`\`\`

## Best Practices

1. **Rank (r)**: Start with r=8. Increasing r doesn't always yield better results and increases memory usage.
2. **Alpha**: A common rule of thumb is setting \`lora_alpha\` to 2 * r.
3. **Target Modules**: Applying LoRA to all linear layers (Q, K, V, O, and MLP projections) usually yields better performance than just targeting attention weights, though it uses slightly more memory.

Happy fine-tuning!
    `
  }
];
