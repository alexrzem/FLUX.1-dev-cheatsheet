export const CHECKPOINTS = [
    { name: 'FLUX.1 [dev] (fp8)', filename: 'flux1-dev-fp8.safetensors' },
    { name: 'FLUX.1 [dev] (fp16)', filename: 'flux1-dev-fp16.safetensors' },
    { name: 'FLUX.1 [schnell] (fp8)', filename: 'flux1-schnell-fp8.safetensors' },
];
export const CHECKPOINTWEIGHTS: never[] = [];

export const TEXTENCODERS = [
    {
        name: 'CLIP L', //
        filename: 'clip_l.safetensors',
        description: 'Multi-line text input, enter text similar to tag information for CLIP model encoding',
    },
    {
        name: 'T5 xxl fp16', //
        filename: 't5xxl_fp16.safetensors',
        description: 'Multi-line text input, enter natural language prompt descriptions for T5XXL model encoding',
    },
    {
        name: 'T5 xxl fp8-e4m3fn', //
        filename: 't5xxl_fp8_e4m3fn.safetensors',
        description: 'Multi-line text input, enter natural language prompt descriptions for T5XXL model encoding',
    },
    {
        name: 'T5 xxl fp8-e4m3fn-scaled', //
        filename: 't5xxl_fp8_e4m3fn_scaled.safetensors',
        description: 'Multi-line text input, enter natural language prompt descriptions for T5XXL model encoding',
    },
];

export const LORAS = [
    { name: 'None', filename: 'None' },
    { name: '3d animation style_lora-000012', filename: '3d animation style_lora-000012.safetensors' },
    { name: '3D Figure_v1_000003120', filename: '3D Figure_v1_000003120.safetensors' },
    { name: 'AbsArt01e_CE_FLUX_AIT3k', filename: 'AbsArt01e_CE_FLUX_AIT3k.safetensors' },
    { name: 'Anime Art V3', filename: 'Anime Art V3.safetensors' },
    { name: 'ArtDeco01c_CE_FLUX_AIT4k', filename: 'ArtDeco01c_CE_FLUX_AIT4k.safetensors' },
    { name: 'Boba-PXL', filename: 'Boba-PXL.safetensors' },
    { name: 'CNMface-000001', filename: 'CNMface-000001.safetensors' },
    { name: 'Chewbacca', filename: 'Chewbacca.safetensors' },
    { name: 'ChristmasCouture', filename: 'ChristmasCouture.safetensors' },
    { name: 'Crusader_Knights_Flux', filename: 'Crusader_Knights_Flux.safetensors' },
    { name: 'DP_Cartoonigami_FLUX_v01_cartoonigami', filename: 'DP_Cartoonigami_FLUX_v01_cartoonigami.safetensors' },
    { name: 'DP_Cartoonigami_SDXL_v01_cartoonigami', filename: 'DP_Cartoonigami_SDXL_v01_cartoonigami.safetensors' },
    { name: 'Demetrian_Titus_-_Warhammer_40k-000021', filename: 'Demetrian_Titus_-_Warhammer_40k-000021.safetensors' },
    { name: 'Environment - StarWars', filename: 'Environment - StarWars.safetensors' },
    { name: 'Eye_Detail_Flux_Lora_-_Inpainting', filename: 'Eye_Detail_Flux_Lora_-_Inpainting.safetensors' },
    { name: 'F1\u6b27\u5f0f\u96ea\u8304\u7537Cigar_man', filename: 'F1\u6b27\u5f0f\u96ea\u8304\u7537Cigar_man.safetensors' },
    { name: 'FLUX-daubrez-DB4RZ', filename: 'FLUX-daubrez-DB4RZ.safetensors' },
    { name: 'FLUX-maorong-F', filename: 'FLUX-maorong-F.safetensors' },
    { name: 'FLUX.Mr.marmot\u571f\u62e8\u9f20F1CNTuboshu.019.by_tusi', filename: 'FLUX.Mr.marmot\u571f\u62e8\u9f20F1CNTuboshu.019.by_tusi.safetensors' },
    { name: 'FLUX.\u4e03\u5f69\u9713\u8679\u52a8\u7269F1NHAnimal', filename: 'FLUX.\u4e03\u5f69\u9713\u8679\u52a8\u7269F1NHAnimal.safetensors' },
    { name: 'FantasyCeramic02-00_CE_SDXL_128OT', filename: 'FantasyCeramic02-00_CE_SDXL_128OT.safetensors' },
    { name: 'Flux-HUAHUAXMAS', filename: 'Flux-HUAHUAXMAS.safetensors' },
    { name: 'Flux.1_Turbo_Detailer', filename: 'Flux.1_Turbo_Detailer.safetensors' },
    { name: 'FluxMythP0rtr4itStyle', filename: 'FluxMythP0rtr4itStyle.safetensors' },
    { name: 'Flux_Gargoyles', filename: 'Flux_Gargoyles.safetensors' },
    { name: 'FolkEsoterica01a_CE_FLUX_AIT2k', filename: 'FolkEsoterica01a_CE_FLUX_AIT2k.safetensors' },
    { name: 'Fresh Ideas@Moebius comic book_SDXL', filename: 'Fresh Ideas@Moebius comic book_SDXL.safetensors' },
    { name: 'Fresh Ideas@landscape_SDXL', filename: 'Fresh Ideas@landscape_SDXL.safetensors' },
    { name: 'Funko_Pop_Flux', filename: 'Funko_Pop_Flux.safetensors' },
    { name: 'Geometric01_CE_FLUX_AIT', filename: 'Geometric01_CE_FLUX_AIT.safetensors' },
    { name: 'Hand v2', filename: 'Hand v2.safetensors' },
    { name: 'Hiroshi_Nagai_Style_Pop_Art-000016', filename: 'Hiroshi_Nagai_Style_Pop_Art-000016.safetensors' },
    { name: 'Hyper-FLUX.1-dev-8steps-lora_rank1', filename: 'Hyper-FLUX.1-dev-8steps-lora_rank1.safetensors' },
    { name: 'IconMaker', filename: 'IconMaker.safetensors' },
    { name: 'JJsSitePlan_Flux', filename: 'JJsSitePlan_Flux.safetensors' },
    { name: 'JoytoyUltramarines', filename: 'JoytoyUltramarines.safetensors' },
    { name: 'Kurzgesagt_channel_style', filename: 'Kurzgesagt_channel_style.safetensors' },
    { name: 'Kurzgesagt_style_vector_graphics_FLUX_v1_r1-000031', filename: 'Kurzgesagt_style_vector_graphics_FLUX_v1_r1-000031.safetensors' },
    { name: 'Landscape Illustration v1', filename: 'Landscape Illustration v1.safetensors' },
    { name: 'Landscape illustration', filename: 'Landscape illustration.safetensors' },
    { name: 'MinimalLandscapeXL', filename: 'MinimalLandscapeXL.safetensors' },
    { name: 'Minimalist_Flux', filename: 'Minimalist_Flux.safetensors' },
    { name: 'Moebius_Flux', filename: 'Moebius_Flux.safetensors' },
    { name: 'Naboo', filename: 'Naboo.safetensors' },
    { name: 'Neo-Pop-Comic-Punk v3-17', filename: 'Neo-Pop-Comic-Punk v3-17.safetensors' },
    { name: 'Neon_Cyberpunk_Impressionism_FLUX', filename: 'Neon_Cyberpunk_Impressionism_FLUX.safetensors' },
    { name: 'O1-Kurzgesagt', filename: 'O1-Kurzgesagt.safetensors' },
    { name: 'Painterly01b_CE_FLUX_AIT4k', filename: 'Painterly01b_CE_FLUX_AIT4k.safetensors' },
    { name: 'Plush_Imagination', filename: 'Plush_Imagination.safetensors' },
    { name: 'REMES_Abstract_Poster_Style', filename: 'REMES_Abstract_Poster_Style.safetensors' },
    { name: 'REMES_Vintage_Political_Cartoon_Style', filename: 'REMES_Vintage_Political_Cartoon_Style.safetensors' },
    { name: 'REMEs_Art_Deco_Poster_Style', filename: 'REMEs_Art_Deco_Poster_Style.safetensors' },
    { name: 'REMEs_Mid-Century_Modern_Illustration_Style', filename: 'REMEs_Mid-Century_Modern_Illustration_Style.safetensors' },
    { name: 'REMEs_Vintage_Scientific_Illustration_Style', filename: 'REMEs_Vintage_Scientific_Illustration_Style.safetensors' },
    { name: 'REMEs_War_Poster_Style', filename: 'REMEs_War_Poster_Style.safetensors' },
    { name: 'Ralph_McQuarrie_FLUX-000006', filename: 'Ralph_McQuarrie_FLUX-000006.safetensors' },
    { name: 'Realistic_Comicbook_FLUX', filename: 'Realistic_Comicbook_FLUX.safetensors' },
    { name: 'RetroAnimeFluxV1', filename: 'RetroAnimeFluxV1.safetensors' },
    { name: 'RetroPop01-00_CE_FLUX_128AIT', filename: 'RetroPop01-00_CE_FLUX_128AIT.safetensors' },
    { name: 'Retro_modern_vector_flat_landscape_design', filename: 'Retro_modern_vector_flat_landscape_design.safetensors' },
    { name: 'SW_Imperial_Style', filename: 'SW_Imperial_Style.safetensors' },
    { name: 'SXZ_3D_Render_Plastic_Shader_Flux', filename: 'SXZ_3D_Render_Plastic_Shader_Flux.safetensors' },
    { name: 'Surreal_and_liminal_landscape_paintings', filename: 'Surreal_and_liminal_landscape_paintings.safetensors' },
    { name: 'Tatooine', filename: 'Tatooine.safetensors' },
    { name: 'Travel Poster v1', filename: 'Travel Poster v1.safetensors' },
    { name: 'VHS', filename: 'VHS.safetensors' },
    { name: 'VintageTravelPoster01_CE_FLUX_AIT', filename: 'VintageTravelPoster01_CE_FLUX_AIT.safetensors' },
    { name: 'YFG-Asak-v1e4', filename: 'YFG-Asak-v1e4.safetensors' },
    { name: 'YFG-Beyond-Glitch-v1e16', filename: 'YFG-Beyond-Glitch-v1e16.safetensors' },
    { name: 'YFG-Cehda-v1e4', filename: 'YFG-Cehda-v1e4.safetensors' },
    { name: 'YFG-Liquid-Strokes-v1e16', filename: 'YFG-Liquid-Strokes-v1e16.safetensors' },
    { name: 'YFG-Simon-Svema-v1', filename: 'YFG-Simon-Svema-v1.safetensors' },
    { name: 'YFG-SimonFlood-v1', filename: 'YFG-SimonFlood-v1.safetensors' },
    { name: 'YFG-SimonLabyrinth-v1', filename: 'YFG-SimonLabyrinth-v1.safetensors' },
    { name: 'YFG-Smorgas-v1', filename: 'YFG-Smorgas-v1.safetensors' },
    { name: 'YFG-Soares-v1e4', filename: 'YFG-Soares-v1e4.safetensors' },
    { name: 'add-detail-xl', filename: 'add-detail-xl.safetensors' },
    { name: 'chibi_figure', filename: 'chibi_figure.safetensors' },
    { name: 'detailed_skin_portraits-000005', filename: 'detailed_skin_portraits-000005.safetensors' },
    { name: 'detailifier_flux-000006', filename: 'detailifier_flux-000006.safetensors' },
    { name: 'flux-1-lora-flyway-3d-icon-v1-000014', filename: 'flux-1-lora-flyway-3d-icon-v1-000014.safetensors' },
    { name: 'jedioutfit', filename: 'jedioutfit.safetensors' },
    { name: 'kenichi_flux', filename: 'kenichi_flux.safetensors' },
    { name: 'kurzgesagtv1PonySDXL', filename: 'kurzgesagtv1PonySDXL.safetensors' },
    { name: 'midjourney_whisper_flux_lora_v01', filename: 'midjourney_whisper_flux_lora_v01.safetensors' },
    { name: 'minimalism landscape_V02', filename: 'minimalism landscape_V02.safetensors' },
    { name: 'mklanAnime_animecartoonsfwv1', filename: 'mklanAnime_animecartoonsfwv1.safetensors' },
    { name: 'more_details', filename: 'more_details.safetensors' },
    { name: 'niji_flux', filename: 'niji_flux.safetensors' },
    { name: 'plush_animal_flux_lora', filename: 'plush_animal_flux_lora.safetensors' },
    { name: 'ryo-takemasa-flux1-dev-v1-000118', filename: 'ryo-takemasa-flux1-dev-v1-000118.safetensors' },
    { name: 'skin texture style v5', filename: 'skin texture style v5.safetensors' },
    { name: 'star wars style v2', filename: 'star wars style v2.safetensors' },
    { name: 'star wars style v2b', filename: 'star wars style v2b.safetensors' },
    { name: 'xw1ng', filename: 'xw1ng.safetensors' },
    { name: 'yfg-aarchy-v1e4', filename: 'yfg-aarchy-v1e4.safetensors' },
];

export const SAMPLERS = [
    { name: 'Euler', code: 'euler' },
    { name: 'Euler Cfg++', code: 'euler_cfg_pp' },
    { name: 'Euler Ancestral', code: 'euler_ancestral' },
    { name: 'Euler Ancestral Cfg++', code: 'euler_ancestral_cfg_pp' },
    { name: 'Heun', code: 'heun' },
    { name: 'Heunpp2', code: 'heunpp2' },
    { name: 'DPM 2', code: 'dpm_2' },
    { name: 'DPM 2 Ancestral', code: 'dpm_2_ancestral' },
    { name: 'LMS', code: 'lms' },
    { name: 'DPM Fast', code: 'dpm_fast' },
    { name: 'DPM Adaptive', code: 'dpm_adaptive' },
    { name: 'DPM++ 2s Ancestral', code: 'dpmpp_2s_ancestral' },
    { name: 'DPM++ 2s Ancestral Cfg++', code: 'dpmpp_2s_ancestral_cfg_pp' },
    { name: 'DPM++ SDE', code: 'dpmpp_sde' },
    { name: 'DPM++ SDE GPU', code: 'dpmpp_sde_gpu' },
    { name: 'DPM++ 2m', code: 'dpmpp_2m' },
    { name: 'DPM++ 2m Cfg++', code: 'dpmpp_2m_cfg_pp' },
    { name: 'DPM++ 2m SDE', code: 'dpmpp_2m_sde' },
    { name: 'DPM++ 2m SDE GPU', code: 'dpmpp_2m_sde_gpu' },
    { name: 'DPM++ 3m SDE', code: 'dpmpp_3m_sde' },
    { name: 'DPM++ 3m SDE GPU', code: 'dpmpp_3m_sde_gpu' },
    { name: 'ddpm', code: 'ddpm' },
    { name: 'lcm', code: 'lcm' },
    { name: 'ipndm', code: 'ipndm' },
    { name: 'ipndm_v', code: 'ipndm_v' },
    { name: 'deis', code: 'deis' },
    { name: 'res_multistep', code: 'res_multistep' },
    { name: 'res_multistep_cfg_pp', code: 'res_multistep_cfg_pp' },
    { name: 'res_multistep_ancestral', code: 'res_multistep_ancestral' },
    { name: 'res_multistep_ancestral_cfg_pp', code: 'res_multistep_ancestral_cfg_pp' },
    { name: 'gradient_estimation', code: 'gradient_estimation' },
    { name: 'gradient_estimation_cfg_pp', code: 'gradient_estimation_cfg_pp' },
    { name: 'er_sde', code: 'er_sde' },
    { name: 'seeds_2', code: 'seeds_2' },
    { name: 'seeds_3', code: 'seeds_3' },
    { name: 'ddim', code: 'ddim' },
    { name: 'uni_pc', code: 'uni_pc' },
    { name: 'uni_pc_bh2', code: 'uni_pc_bh2' },
];
export const SCHEDULERS = [
    { name: 'Simple', code: 'simple' },
    { name: 'Sgm Uniform', code: 'sgm_uniform' },
    { name: 'Karras', code: 'karras' },
    { name: 'Exponential', code: 'exponential' },
    { name: 'DDIM Uniform', code: 'ddim_uniform' },
    { name: 'Beta', code: 'beta' },
    { name: 'Normal', code: 'normal' },
    { name: 'Linear Quadratic', code: 'linear_quadratic' },
    { name: 'KL Optimal', code: 'kl_optimal' },
];

export const STYLES = [
    { name: 'Home', code: 'pi pi-home' },
    { name: 'Bookmark', code: 'pi pi-bookmark' },
    { name: 'Users', code: 'pi pi-users' },
    { name: 'Comments', code: 'pi pi-comments' },
    { name: 'Calendar', code: 'pi pi-calendar' },
];

export const VAES = [
    { name: 'Flux Autoencoder', filename: 'ae.safetensors' },
    { name: 'SDXL Variational Autoencoder', filename: 'sdxl_vae.safetensors' },
];

export const WORKFLOW_FLUX = {
    prompt: {
        6: {
            inputs: {
                text: ['58', 0],
                clip: ['45', 1],
            },
            class_type: 'CLIPTextEncode',
            _meta: {
                title: 'CLIP Text Encode (Positive Prompt)',
            },
        },
        8: {
            inputs: {
                samples: ['13', 0],
                vae: ['10', 0],
            },
            class_type: 'VAEDecode',
            _meta: {
                title: 'VAE Decode',
            },
        },
        9: {
            inputs: {
                filename_prefix: 'ComfyUI',
                images: ['8', 0],
            },
            class_type: 'SaveImage',
            _meta: {
                title: 'Save Image',
            },
        },
        10: {
            inputs: {
                vae_name: null,
            },
            class_type: 'VAELoader',
            _meta: {
                title: 'Load VAE',
            },
        },
        11: {
            inputs: {
                clip_name1: null,
                clip_name2: null,
                type: 'flux',
                device: 'default',
            },
            class_type: 'DualCLIPLoader',
            _meta: {
                title: 'DualCLIPLoader',
            },
        },
        12: {
            inputs: {
                unet_name: null,
                weight_dtype: 'default',
            },
            class_type: 'UNETLoader',
            _meta: {
                title: 'Load Diffusion Model',
            },
        },
        13: {
            inputs: {
                noise: ['25', 0],
                guider: ['22', 0],
                sampler: ['16', 0],
                sigmas: ['17', 0],
                latent_image: ['27', 0],
            },
            class_type: 'SamplerCustomAdvanced',
            _meta: {
                title: 'SamplerCustomAdvanced',
            },
        },
        16: {
            inputs: {
                sampler_name: null,
            },
            class_type: 'KSamplerSelect',
            _meta: {
                title: 'KSamplerSelect',
            },
        },
        17: {
            inputs: {
                scheduler: null,
                steps: 20,
                denoise: 1,
                model: ['45', 0],
            },
            class_type: 'BasicScheduler',
            _meta: {
                title: 'BasicScheduler',
            },
        },
        22: {
            inputs: {
                model: ['45', 0],
                conditioning: ['26', 0],
            },
            class_type: 'BasicGuider',
            _meta: {
                title: 'BasicGuider',
            },
        },
        25: {
            inputs: {
                noise_seed: 1115387806055339,
            },
            class_type: 'RandomNoise',
            _meta: {
                title: 'RandomNoise',
            },
        },
        26: {
            inputs: {
                guidance: ['54', 0],
                conditioning: ['6', 0],
            },
            class_type: 'FluxGuidance',
            _meta: {
                title: 'FluxGuidance',
            },
        },
        27: {
            inputs: {
                width: null,
                height: null,
                batch_size: null,
            },
            class_type: 'EmptySD3LatentImage',
            _meta: {
                title: 'EmptySD3LatentImage',
            },
        },
        43: {
            inputs: {
                toggle: true,
                mode: 'simple',
                num_loras: 1,
                lora_1_name: 'ArtDeco01c_CE_FLUX_AIT4k.safetensors',
                lora_1_strength: 0.5000000000000001,
                lora_1_model_strength: 1,
                lora_1_clip_strength: 1,
                lora_2_name: 'REMEs_War_Poster_Style.safetensors',
                lora_2_strength: 1.0000000000000002,
                lora_2_model_strength: 1,
                lora_2_clip_strength: 1,
                lora_3_name: 'Kurzgesagt_style_vector_graphics_FLUX_v1_r1-000031.safetensors',
                lora_3_strength: 1,
                lora_3_model_strength: 1,
                lora_3_clip_strength: 1,
                lora_4_name: 'None',
                lora_4_strength: 1,
                lora_4_model_strength: 1,
                lora_4_clip_strength: 1,
                lora_5_name: 'None',
                lora_5_strength: 1,
                lora_5_model_strength: 1,
                lora_5_clip_strength: 1,
                lora_6_name: 'None',
                lora_6_strength: 1,
                lora_6_model_strength: 1,
                lora_6_clip_strength: 1,
                lora_7_name: 'None',
                lora_7_strength: 1,
                lora_7_model_strength: 1,
                lora_7_clip_strength: 1,
                lora_8_name: 'None',
                lora_8_strength: 1,
                lora_8_model_strength: 1,
                lora_8_clip_strength: 1,
                lora_9_name: 'None',
                lora_9_strength: 1,
                lora_9_model_strength: 1,
                lora_9_clip_strength: 1,
                lora_10_name: 'None',
                lora_10_strength: 1,
                lora_10_model_strength: 1,
                lora_10_clip_strength: 1,
            },
            class_type: 'easy loraStack',
            _meta: {
                title: 'EasyLoraStack',
            },
        },
        45: {
            inputs: {
                lora_stack: ['43', 0],
                model: ['12', 0],
                optional_clip: ['11', 0],
            },
            class_type: 'easy loraStackApply',
            _meta: {
                title: 'Easy Apply LoraStack',
            },
        },
        54: {
            inputs: {
                value: null,
            },
            class_type: 'PrimitiveFloat',
            _meta: {
                title: 'FluxGuidance',
            },
        },
        58: {
            inputs: {
                value: null,
            },
            class_type: 'PrimitiveStringMultiline',
            _meta: {
                title: 'String (Multiline)',
            },
        },
        62: {
            inputs: {
                value: null,
            },
            class_type: 'PrimitiveInt',
            _meta: {
                title: 'Batch Size',
            },
        },
    },
};
