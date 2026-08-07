---
name: D_DAGDSCLFNCLCTDAGDSPTSPAINSNR
description: D Dagdsclfnclctdagdsptspainsnr
app_component: EHS-SUS-DG
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-DG
  - component:EHS-SUS-DG
  - lob:Other
---
# D_DAGDSCLFNCLCTDAGDSPTSPAINSNR

**D Dagdsclfnclctdagdsptspainsnr**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-DG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PCLgsDcItmPackgInstructionUUID` |  | |  | `ehfnd_log_doc_pi_uuid` |  |  |
| `PackingInstructionSystemUUID` |  | |  | `ehfnd_pi_uuid` |  |  |
| `PackingInstructionNumber` |  | |  | `ehfnd_pi_id` |  |  |
| `ProdCmplncLogsDocumentItem` |  | |  | `ehfnd_log_doc_posnr` |  |  |
| `Product` |  | |  | `ehfnd_mat_id` |  |  |
| `DngrsGdsCalculatedEnclosureQty` |  | |  | `dngrsgdscalculatedenclosureqty` |  |  |
| `DangerousGoodsEnclosureSapUnit` |  | |  | `ehfnd_vdm_component_unit_sap` |  |  |
| `DangerousGoodsEnclosureISOUnit` |  | |  | `ehfnd_vdm_component_unit_iso` |  |  |
| `D_DaGdsClfnCalctPtsPaInsnRglnR` |  | |  | `_PackingInstructionRegulation : composition [0..*] of D_DaGdsClfnCalctPtsPaInsnRglnR` |  |  |
| `_Document` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Calculate Dangerous Goods Points Packing Instruction R'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define abstract entity D_DaGdsClfnClctDaGdsPtsPaInsnR
{
  PCLgsDcItmPackgInstructionUUID : ehfnd_log_doc_pi_uuid;
  PackingInstructionSystemUUID   : ehfnd_pi_uuid;
  PackingInstructionNumber       : ehfnd_pi_id;
  ProdCmplncLogsDocumentItem     : ehfnd_log_doc_posnr;
  Product                        : ehfnd_mat_id;
  @Semantics.quantity.unitOfMeasure: 'DangerousGoodsEnclosureSapUnit'
  DngrsGdsCalculatedEnclosureQty : dngrsgdscalculatedenclosureqty;
  DangerousGoodsEnclosureSapUnit : ehfnd_vdm_component_unit_sap;
  DangerousGoodsEnclosureISOUnit : ehfnd_vdm_component_unit_iso;
  _PackingInstructionRegulation  : composition [0..*] of D_DaGdsClfnCalctPtsPaInsnRglnR;
  _Document                      : association to parent D_CalctDangerousGoodsPointsR;

}
```
