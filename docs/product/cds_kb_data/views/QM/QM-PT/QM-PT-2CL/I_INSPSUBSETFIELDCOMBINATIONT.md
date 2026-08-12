---
name: I_INSPSUBSETFIELDCOMBINATIONT
description: "Inspsubsetfieldcombinationt"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPSUBSETFIELDCOMBINATIONT

**Inspsubsetfieldcombinationt**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspSubsetFieldCombination` | ✓ | |  | `slwbez` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `InspSubsetFldCombinationTxt` |  | |  | `kurztext` |  |  |
| `InspSubsetMaterialSampleName` |  | |  | `phynrslw` |  |  |
| `InspSubsetEquipmentName` |  | |  | `equnrslw` |  |  |
| `InspSubsetFuncnlLocName` |  | |  | `tplnrslw` |  |  |
| `InspSubsetShopFloorItemName` |  | |  | `sfi_id_slw` |  |  |
| `InspSubsetShortTxtFieldName` |  | |  | `userc1slw` |  |  |
| `InspSubsetLongTxtFieldName` |  | |  | `userc2slw` |  |  |
| `InspSubsetDateFieldName` |  | |  | `userd1slw` |  |  |
| `InspSubsetShortNmbrFieldName` |  | |  | `usern1slw` |  |  |
| `InspSubsetLongNmbrFieldName` |  | |  | `usern2slw` |  |  |
| `InspSubsetTimeFieldName` |  | |  | `usert1slw` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Inspection Point Field Combination - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'InspSubsetFieldCombination',
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
}
@Analytics.technicalName: 'IINSPSSFCMBT'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspSubsetFieldCombinationT as select from tq79t 

   association [0..1] to I_Language as _Language     on $projection.Language = _Language.Language
    
{
    key tq79t.slwbez  as InspSubsetFieldCombination,
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key tq79t.sprache as Language,
    @Semantics.text: true
    tq79t.kurztext    as InspSubsetFldCombinationTxt, 
    @Semantics.text: true
    tq79t.phynrslw    as InspSubsetMaterialSampleName,
    @Semantics.text: true
    tq79t.equnrslw    as InspSubsetEquipmentName,
    @Semantics.text: true
    tq79t.tplnrslw    as InspSubsetFuncnlLocName,
    @Semantics.text: true
    tq79t.sfi_id_slw  as InspSubsetShopFloorItemName,
    @Semantics.text: true
    tq79t.userc1slw   as InspSubsetShortTxtFieldName,
    @Semantics.text: true
    tq79t.userc2slw   as InspSubsetLongTxtFieldName,
    @Semantics.text: true
    tq79t.userd1slw   as InspSubsetDateFieldName, 
    @Semantics.text: true
    tq79t.usern1slw   as InspSubsetShortNmbrFieldName,
    @Semantics.text: true
    tq79t.usern2slw   as InspSubsetLongNmbrFieldName,
    @Semantics.text: true
    tq79t.usert1slw   as InspSubsetTimeFieldName,
    
    /* Associations */
    _Language
    
}
```
