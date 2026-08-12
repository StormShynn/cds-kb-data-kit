---
name: I_DEFECTCODEGROUPTEXT
description: "Defectcodegrouptext"
app_component: QM-QN-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
