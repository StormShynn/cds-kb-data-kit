---
name: I_SALESORDAPPROVALREASONTXT
description: Salesordapprovalreasontxt
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - approval
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
---
# I_SALESORDAPPROVALREASONTXT

**Salesordapprovalreasontxt**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `SalesOrderApprovalReasonText.Language` |
| key `SalesOrderApprovalReason` | `SalesOrderApprovalReasonText.SalesDocApprovalReason` |
| `SalesOrderApprovalReasonName` | `SalesOrderApprovalReasonText.SalesDocApprovalReasonName` |
| `_SalesOrderApprovalReason` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrderApprovalReason` | `I_SalesOrderApprovalReason` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Approval Reason for Sales Order - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'SalesOrderApprovalReason'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]

@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_SalesOrdApprovalReasonTxt
  as select from I_SalesDocApprovalReasonText as SalesOrderApprovalReasonText
    inner join   I_SalesOrderApprovalReason   as SalesOrderApprovalReason on SalesOrderApprovalReason.SalesOrderApprovalReason = SalesOrderApprovalReasonText.SalesDocApprovalReason

  association [0..1] to I_SalesOrderApprovalReason as _SalesOrderApprovalReason on $projection.SalesOrderApprovalReason = _SalesOrderApprovalReason.SalesOrderApprovalReason

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key SalesOrderApprovalReasonText.Language,

      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.9
      }
      @ObjectModel.foreignKey.association: '_SalesOrderApprovalReason'
  key SalesOrderApprovalReasonText.SalesDocApprovalReason     as SalesOrderApprovalReason,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      SalesOrderApprovalReasonText.SalesDocApprovalReasonName as SalesOrderApprovalReasonName,

      _SalesOrderApprovalReason,
      SalesOrderApprovalReasonText._Language

} where SalesOrderApprovalReasonText.SDDocumentCategory = 'C';
```
