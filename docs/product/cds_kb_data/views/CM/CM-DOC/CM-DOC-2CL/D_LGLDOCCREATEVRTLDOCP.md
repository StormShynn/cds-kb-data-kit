---
name: D_LGLDOCCREATEVRTLDOCP
description: "D Lgldoccreatevrtldocp"
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-DOC
  - component:CM-DOC-2CL
  - lob:Other
---
# D_LGLDOCCREATEVRTLDOCP

**D Lgldoccreatevrtldocp**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDocContentType` |  | |  | `lcm_doc_content_type` |  |  |
| `DocumentDescription` |  | |  | `lcm_description` |  |  |
| `LglCntntMLanguage` |  | |  | `lcm_language` |  |  |
| `FileName` |  | |  | `lcm_filename` |  |  |
| `LglCntntMTmplUUID` |  | |  | `lcm_tmpl_uuid` |  |  |
| `LglCntntMDocAccessLvl` |  | |  | `lcm_access_lvl` |  |  |
| `LglCntntMDocPaperType` |  | |  | `lcm_doc_paper_type` |  |  |

## Source Code

```abap
@EndUserText.label: 'Legal Doc Create Virtual Docu Act Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LglDocCreateVrtlDocP
{
  LglCntntMDocContentType : lcm_doc_content_type;
  DocumentDescription     : lcm_description;
  LglCntntMLanguage       : lcm_language;
  FileName                : lcm_filename;
  LglCntntMTmplUUID       : lcm_tmpl_uuid;
  LglCntntMDocAccessLvl   : lcm_access_lvl;
  LglCntntMDocPaperType   : lcm_doc_paper_type;
}
```
