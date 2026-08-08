---
name: I_BANKSTMNTITMREPROCESSRSNNAME
description: "This basic CDS view provides explanations for bank statement reprocessing reason codes. This CDS view provides you with the necessary information to answer the following business question: What is the reason for reprocessing a bank statement item?"
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKSTMNTITMREPROCESSRSNNAME')/$value
semantic_en: "This basic CDS view provides explanations for bank statement reprocessing reason codes. This CDS view provides you with the necessary information to answer the following business question: What is the reason for reprocessing a bank statement item?"
semantic_vi: "Bank Stmnt Item Reprocessing Reason Name — CDS view giao diện dựa trên feb_repro_rrct."
keywords:
  - "bank"
  - "stmnt"
  - "item"
  - "reprocessing"
  - "reason"
  - "name"
  - "reprocess"
  - "language"
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
# I_BANKSTMNTITMREPROCESSRSNNAME

**This basic CDS view provides explanations for bank statement reprocessing reason codes. This CDS view provides you with the necessary information to answer the following business question: What is the reason for reprocessing a bank statement item?**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKSTMNTITMREPROCESSRSNNAME')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankStmntItemReprocessReason` | ✓ | |  | `cast( reprocreasoncode as feb_repro_reason_code )` | `CHAR(2)` | Reprocessing Reason Code |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `BankStmntItemReprocessRsnName` |  | |  | `cast( rrc_text as feb_repro_reason_code_t )` | `CHAR(60)` | Reprocessing Reason |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKSTMNTITMREPROCESSRSNNAME')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKSTMNTITMREPROCESSRSNNAME')/$value)*

```abap
@AbapCatalog.preserveKey:true 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BankStmntItemReprocessReason'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@EndUserText.label: 'Bank Stmnt Item Reprocessing Reason Name'
@Analytics: { dataExtraction.enabled: true }
@AbapCatalog.sqlViewName: 'IBSREPROCGRSNNAM'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
define view I_BankStmntItmReprocessRsnName
as
select from feb_repro_rrct

association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    key cast( reprocreasoncode as feb_repro_reason_code )         as BankStmntItemReprocessReason,
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key langu                  as Language,
    @Semantics.text: true
    cast( rrc_text as feb_repro_reason_code_t )                   as BankStmntItemReprocessRsnName,
    _Language   
};
```
