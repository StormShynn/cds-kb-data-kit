---
name: I_SALESORDAPPROVALREASONTXT
description: "Salesordapprovalreasontxt"
app_component: SD-SLS-SO-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  |  |  |
| `SalesOrderApprovalReason` | ✓ | |  | `SalesDocApprovalReason` |  |  |
| `SalesOrderApprovalReasonName` |  | |  | `SalesDocApprovalReasonName` |  |  |
| `_SalesOrderApprovalReason` | | ✓ | | | | |

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
