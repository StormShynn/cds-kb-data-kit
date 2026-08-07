---
name: I_BANKSTMNTITEMREPROCESSREASON
description: This basic CDS view provides you with access to the bank statement reprocessing reason. It is associated with I_BankStmntItmReprocessRsnName, which provides an explanation for each reason code. This CDS view provides you with the necessary information to answer the following business question: What is the reason for reprocessing a bank statement item?
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKSTMNTITEMREPROCESSREASON')/$value
semantic_en: This basic CDS view provides you with access to the bank statement reprocessing reason. It is associated with I_BankStmntItmReprocessRsnName, which provides an explanation for each reason code. This CDS view provides you with the necessary information to answer the following business question: What is the reason for reprocessing a bank statement item?
semantic_vi: Bank Statement Item Reprocessing Reason — CDS view giao diện dựa trên feb_repro_rrc.
keywords:
  - bank
  - statement
  - item
  - reprocessing
  - reason
  - stmnt
  - reprocess
tags:
  - FI
  - bo:salesorder
  - component:FI-AR-IS-2CL
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
  - plan
---
# I_BANKSTMNTITEMREPROCESSREASON

**This basic CDS view provides you with access to the bank statement reprocessing reason. It is associated with I_BankStmntItmReprocessRsnName, which provides an explanation for each reason code. This CDS view provides you with the necessary information to answer the following business question: What is the reason for reprocessing a bank statement item?**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKSTMNTITEMREPROCESSREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankStmntItemReprocessReason` | ✓ | |  | `cast( reprocreasoncode as feb_repro_reason_code )` | `CHAR(2)` | Reprocessing Reason Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BankStmntItmReprocessRsnName` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKSTMNTITEMREPROCESSREASON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKSTMNTITEMREPROCESSREASON')/$value)*

```abap
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@EndUserText.label: 'Bank Statement Item Reprocessing Reason'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBSREPROCGREASON'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'BankStmntItemReprocessReason'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE,
                                      #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'BankStmntItemReprocessReason'
define view I_BankStmntItemReprocessReason
  as select from feb_repro_rrc

  association [0..*] to I_BankStmntItmReprocessRsnName as _Text on $projection.BankStmntItemReprocessReason = _Text.BankStmntItemReprocessReason
{
      @ObjectModel.text.association: '_Text'
  key cast( reprocreasoncode as feb_repro_reason_code ) as BankStmntItemReprocessReason,
      _Text
};
```
