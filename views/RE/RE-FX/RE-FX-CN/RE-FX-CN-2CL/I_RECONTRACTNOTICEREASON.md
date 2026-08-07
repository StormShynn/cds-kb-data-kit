---
name: I_RECONTRACTNOTICEREASON
description: Recontractnoticereason
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - contract
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECONTRACTNOTICEREASON

**Recontractnoticereason**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REContractNoticeReason` | ✓ | |  | `ntreason` |  |  |
| `REContractNoticeParty` |  | |  | `ntparty` |  |  |
| `REIsExtraordinaryNotice` |  | |  | `ntextraord` |  |  |
| `REVacancyReason` |  | |  | `vacreasondef` |  |  |
| `REIsExclForNewAssgmt` |  | |  | `cuexcludeassign` |  |  |
| `_Text` | | ✓ | | | | |
| `_REContractNoticeParty` | | ✓ | | | | |
| `_REVacancyReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_REContractNoticeReasonText` | [0..*] |
| `_REContractNoticeParty` | `I_REContractNoticeParty` | [0..1] |
| `_REVacancyReason` | `I_REVacancyReason` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRECNNTRE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Contract Notice Reason'

@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M

@ObjectModel.representativeKey: 'REContractNoticeReason'
@ObjectModel.semanticKey: ['REContractNoticeReason']

@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true

define view I_REContractNoticeReason as select from tivcnntre
association [0..*] to I_REContractNoticeReasonText              as _Text              on $projection.REContractNoticeReason = _Text.REContractNoticeReason
association [0..1] to I_REContractNoticeParty as _REContractNoticeParty on $projection.REContractNoticeParty = _REContractNoticeParty.REContractNoticeParty
association [0..1] to I_REVacancyReason as _REVacancyReason on $projection.REVacancyReason = _REVacancyReason.REContractVacancyReason
{
        @ObjectModel.text.association: '_Text'
        @Search.defaultSearchElement: true
        @Search.ranking: #HIGH
        key ntreason as REContractNoticeReason,

        @ObjectModel.foreignKey.association: '_REContractNoticeParty'
        ntparty as REContractNoticeParty,

        ntextraord as REIsExtraordinaryNotice,

        @ObjectModel.foreignKey.association: '_REVacancyReason'
        vacreasondef as REVacancyReason,

        cuexcludeassign as REIsExclForNewAssgmt,

    _REContractNoticeParty,
    _REVacancyReason,
    _Text
}
```
