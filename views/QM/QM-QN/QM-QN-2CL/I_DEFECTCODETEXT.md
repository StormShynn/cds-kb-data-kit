---
name: I_DEFECTCODETEXT
description: Defectcodetext
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
# I_DEFECTCODETEXT

**Defectcodetext**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DefectCodeGroup` | ✓ | |  | `cast( qpct.codegruppe as vdm_qfegrp preserving type )` |  |  |
| `DefectCode` | ✓ | |  | `cast( qpct.code as vdm_qfecod preserving type )` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `DefectCodeText` |  | |  | `cast( qpct.kurztext as vdm_qfecod_text preserving type )` |  |  |
| `_DefectCodeGroup` | | ✓ | | | | |
| `_DefectCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DefectCodeGroup` | `I_DefectCodeGroup` | [1..1] |
| `_DefectCode` | `I_DefectCode` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Defect Code - Text'
@AccessControl.authorizationCheck: #CHECK
@VDM: {
    viewType:#BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel: {
    representativeKey: 'DefectCode',
    usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING },
    dataCategory: #TEXT
}
@Analytics.technicalName: 'IDEFECTCODET'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
define view entity I_DefectCodeText as select from qpct 

   association [1..1] to I_DefectCodeGroup as _DefectCodeGroup on  $projection.DefectCodeGroup = _DefectCodeGroup.DefectCodeGroup

   association [1..1] to I_DefectCode as _DefectCode on  $projection.DefectCodeGroup = _DefectCode.DefectCodeGroup
                                                     and $projection.DefectCode      = _DefectCode.DefectCode

{
   @ObjectModel.foreignKey.association: '_DefectCodeGroup'
   key cast( qpct.codegruppe as vdm_qfegrp preserving type )  as DefectCodeGroup,
   key cast( qpct.code       as vdm_qfecod preserving type )  as DefectCode,
   @Semantics.language: true
   key qpct.sprache                                           as Language,
// key qpcd.version --> is always 1 so we could leave out

   @Semantics.text: true
   @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
   cast( qpct.kurztext as  vdm_qfecod_text preserving type )  as DefectCodeText,
   
   // Associations
   _DefectCodeGroup,
   _DefectCode
   
} where qpct.katalogart = '9' // Defects
    and qpct.version    = '000001'
```
