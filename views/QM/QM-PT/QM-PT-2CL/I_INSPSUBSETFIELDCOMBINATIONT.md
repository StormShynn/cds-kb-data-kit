---
name: I_INSPSUBSETFIELDCOMBINATIONT
description: Inspsubsetfieldcombinationt
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
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
