---
name: I_DEFECTCODEGROUPTEXT
description: "Defectcodegrouptext"
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-QN
  - interface-view
  - text-view
  - text
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_DEFECTCODEGROUPTEXT

**Defectcodegrouptext**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DefectCodeGroup` | ✓ | |  | `cast( qpgt.codegruppe as vdm_qfegrp preserving type )` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `DefectCodeGroupText` |  | |  | `cast( qpgt.kurztext as vdm_qfegrp_text preserving type )` |  |  |
| `_DefectCodeGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DefectCodeGroup` | `I_DefectCodeGroup` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Defect Code Group - Text'
@AccessControl.authorizationCheck: #CHECK
@VDM: {
    viewType:#BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel: {
    representativeKey: 'DefectCodeGroup',
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING },
    dataCategory: #TEXT
}
@Analytics.technicalName: 'IDEFECTCODEGRPT'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
define view entity I_DefectCodeGroupText as select from qpgt 

   association [1..1] to I_DefectCodeGroup as _DefectCodeGroup on  $projection.DefectCodeGroup = _DefectCodeGroup.DefectCodeGroup

{
   key cast( qpgt.codegruppe as vdm_qfegrp preserving type )  as DefectCodeGroup,
   @Semantics.language: true
   key qpgt.sprache                                           as Language,
   
   @Semantics.text: true
   @Search: {
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #HIGH
  }
   cast( qpgt.kurztext as vdm_qfegrp_text preserving type )   as DefectCodeGroupText,
   
   // Association
   _DefectCodeGroup
    
} where katalogart = '9' // Defects
```
