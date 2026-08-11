---
name: I_PRATAXNMTRANSACTIONCODET
description: "New Mexico Transaction Code - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMTRANSACTIONCODET')/$value
semantic_en: "New Mexico Transaction Code - Text"
semantic_vi: "New Mexico Transaction Code - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "new"
  - "mexico"
  - "transaction"
  - "code"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - transaction
---
# I_PRATAXNMTRANSACTIONCODET

**New Mexico Transaction Code - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMTRANSACTIONCODET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransactionCode` | ✓ | |  | `cast (domvalue_l as oiux8_nm_transaction_code)` | `CHAR(2)` | Tax 2.0 - NM - Transaction Code |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `TransactionCodeName` |  | |  | `cast (ddtext as oiu_vdm_nm_transaction_cd_name )` | `CHAR(60)` | New Mexico Transaction Code Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMTRANSACTIONCODET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMTRANSACTIONCODET')/$value)*

```abap
@EndUserText.label: 'New Mexico Transaction Code - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXNMTRANSCDT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'TransactionCode'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRATaxNMTransactionCodeT
  as select from dd07t
{
  key cast (domvalue_l as oiux8_nm_transaction_code)                as TransactionCode,
      @Semantics.language
  key cast( ddlanguage as spras )                                    as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_nm_transaction_cd_name )               as TransactionCodeName
}
where
      domname  = 'OIUX8_NM_TRANSACTION_CODE'
  and as4local = 'A';
```
