import _ from 'lodash';
import { defineStore } from 'pinia';
import { CHECKPOINTWEIGHTS, TEXTENCODERS, SAMPLERS, SCHEDULERS, STYLES, VAES, WORKFLOW_FLUX } from './data';
import LORAS from './data/models_lora.json';
import CHECKPOINTS from './data/models_main.json';
import WORKFLOW_SIMPLE_FLUX from './data/workflow_sent.json';

export const useControlsStore = defineStore('controls', {
    state: () => ({
        count: 0,
        batchSize: 1,
        checkpoint: CHECKPOINTS[0],
        checkpointWeight: 1,
        clientId: null,
        clipShift: -2,
        denoise: 1,
        guidance: 3.5,
        imageHeight: 1024,
        imageWidth: 1024,
        lora1: LORAS[0],
        lora2: LORAS[0],
        lora3: LORAS[0],
        lora4: LORAS[0],
        lora5: LORAS[0],
        promptNegative: '',
        promptPositive: '',
        queueSize: 0,
        sampler: SAMPLERS[0],
        scheduler: SCHEDULERS[0],
        seed: 1115387806055339,
        seedMode: 'random',
        steps: 25,
        style: 1,
        textEncoder1: TEXTENCODERS[0],
        textEncoder2: TEXTENCODERS[1],
        vae: VAES[0],
    }),
    getters: {
        isReady(state) {
            return (
                state.queueSize == 0 && //
                !_.isEmpty(state.promptPositive)
            );
        },
        workflowPrompt(state) {
            const workflow = _.cloneDeep(WORKFLOW_SIMPLE_FLUX);
            _.set(workflow, 'batch.graph.nodes.positive_prompt:4TWvXlpuH4.value', state.promptPositive);
            _.set(workflow, 'batch.graph.nodes.seed:2rqiyOUW8o.value', state.seed);
            _.set(workflow, 'batch.graph.nodes.9606ebad-89d1-41c2-a99d-5d4b44ea04c3.value', state.steps);
            _.set(workflow, 'batch.graph.nodes.131d083e-d6c9-4826-92ac-17a0e19950c5.value', state.guidance);
            _.set(workflow, 'batch.graph.nodes.e5059743-72e9-4c08-bbda-7593f4772aa0.value', state.imageWidth);
            _.set(workflow, 'batch.graph.nodes.5a142337-7545-4e78-9f53-9cb321889520.value', state.imageHeight);
            _.set(workflow, 'batch.runs', state.batchSize);
            //_.set(workflow, 'prompt.10.inputs.vae_name', state.vae.filename);
            //_.set(workflow, 'prompt.11.inputs.clip_name1', state.textEncoder1.filename);
            //_.set(workflow, 'prompt.11.inputs.clip_name2', state.textEncoder2.filename);
            //_.set(workflow, 'prompt.12.inputs.unet_name', state.checkpoint.name);
            //_.set(workflow, 'prompt.16.inputs.sampler_name', state.sampler.code);
            //_.set(workflow, 'prompt.17.inputs.scheduler', state.scheduler.code);
            //_.set(workflow, 'prompt.17.inputs.denoise', state.denoise);

            //_.set(workflow, 'prompt.43.inputs.toggle', true);
            //_.set(workflow, 'prompt.43.inputs.num_loras', 1);
            //_.set(workflow, 'prompt.43.inputs.lora_1_name', 'None');
            //_.set(workflow, 'prompt.43.inputs.lora_1_strength', 1);
            //_.set(workflow, 'prompt.43.inputs.lora_2_name', 'None');
            //_.set(workflow, 'prompt.43.inputs.lora_2_strength', 1);
            //_.set(workflow, 'prompt.43.inputs.lora_3_name', 'None');
            //_.set(workflow, 'prompt.43.inputs.lora_3_strength', 1);
            //_.set(workflow, 'prompt.43.inputs.lora_4_name', 'None');
            //_.set(workflow, 'prompt.43.inputs.lora_4_strength', 1);
            //_.set(workflow, 'prompt.43.inputs.lora_5_name', 'None');
            //_.set(workflow, 'prompt.43.inputs.lora_5_strength', 1);

            return workflow;
        },
    },
    actions: {
        increment() {
            this.count++;
        },
    },
    persist: true,
});

export const useMetadataStore = defineStore('metadata', {
    state: () => ({
        checkpoints: CHECKPOINTS,
        checkpointWeights: CHECKPOINTWEIGHTS,
        loras: LORAS,
        samplers: SAMPLERS,
        schedulers: SCHEDULERS,
        styles: STYLES,
        textEncoders: TEXTENCODERS,
        vaes: VAES,
    }),
    persist: false,
});

export const useInvokeAIStore = defineStore('invokeai', {
    state: () => ({
        infill_methods: [],
        upscaling_methods: [],
        nsfw_methods: [],
        watermarking_methods: [],
    }),
    persist: false,
});
