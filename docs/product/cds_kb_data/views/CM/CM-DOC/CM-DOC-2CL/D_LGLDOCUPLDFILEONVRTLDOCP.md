---
name: D_LGLDOCUPLDFILEONVRTLDOCP
description: "D Lgldocupldfileonvrtldocp"
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
# D_LGLDOCUPLDFILEONVRTLDOCP

**D Lgldocupldfileonvrtldocp**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDocumentLinkedObjKey` |  | |  | `lcm_uuid_c32` |  |  |
| `DocumentDescription` |  | |  | `lcm_description` |  |  |
| `FileName` |  | |  | `abap.char(200)` |  |  |
| `LglCntntMDocPaperType` |  | |  | `lcm_doc_paper_type` |  |  |

## Source Code

```abap
@EndUserText.label: 'Legal Doc Upload File On Virtual Doc'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LglDocUpldFileOnVrtlDocP
{
  LglCntntMDocumentLinkedObjKey : lcm_uuid_c32;
  DocumentDescription           : lcm_description;
  FileName                      : abap.char(200);
  LglCntntMDocPaperType         : lcm_doc_paper_type;
}
```
