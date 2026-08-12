---
name: I_DEFECTCODETEXT
description: "Defectcodetext"
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
# I_DEFECTCODETEXT

**Defectcodetext**

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
