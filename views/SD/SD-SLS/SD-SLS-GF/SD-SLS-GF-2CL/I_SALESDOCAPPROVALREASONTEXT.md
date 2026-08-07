---
name: I_SALESDOCAPPROVALREASONTEXT
description: Salesdocapprovalreasontext
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - text-view
  - text
  - approval
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCAPPROVALREASONTEXT

**Salesdocapprovalreasontext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  |  |  |
| `SalesDocApprovalReason` | ✓ | |  | `cast( SalesDocApprovalReasonText.SDApprovalReason as sd_apm_approval_reason preserving type )` |  |  |
| `SDDocumentCategory` | ✓ | |  |  |  |  |
| `SalesDocApprovalReasonName` |  | |  | `SDApprovalReasonName` |  |  |
| `_SalesDocApprovalReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocApprovalReason` | `I_SalesDocApprovalReason` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Approval Reason for Sales Document - Txt'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'SalesDocApprovalReason'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]

@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_SalesDocApprovalReasonText
  as select from I_SDApprovalReasonT      as SalesDocApprovalReasonText
    inner join   I_SalesDocApprovalReason as SalesDocApprovalReason on SalesDocApprovalReason.SalesDocApprovalReason = SalesDocApprovalReasonText.SDApprovalReason

  association [0..1] to I_SalesDocApprovalReason as _SalesDocApprovalReason on  $projection.SalesDocApprovalReason = _SalesDocApprovalReason.SalesDocApprovalReason
                                                                            and $projection.SDDocumentCategory     = _SalesDocApprovalReason.SDDocumentCategory
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key SalesDocApprovalReasonText.Language,

      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.9
      }
      @ObjectModel.foreignKey.association: '_SalesDocApprovalReason'
  key cast( SalesDocApprovalReasonText.SDApprovalReason as sd_apm_approval_reason preserving type ) as SalesDocApprovalReason,

      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
  key SalesDocApprovalReason.SDDocumentCategory,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      SalesDocApprovalReasonText.SDApprovalReasonName                                               as SalesDocApprovalReasonName,

      _SalesDocApprovalReason,
      SalesDocApprovalReason._SDDocumentCategory,
      SalesDocApprovalReasonText._Language

};
```
