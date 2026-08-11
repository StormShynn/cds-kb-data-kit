---
name: I_PRATAXNMTRANSACTIONCODE
description: "New Mexico Transaction Code"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMTRANSACTIONCODE')/$value
semantic_en: "New Mexico Transaction Code"
semantic_vi: "New Mexico Transaction Code — CDS view giao diện dựa trên dd07l."
keywords:
  - "new"
  - "mexico"
  - "transaction"
  - "code"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - transaction
---
# I_PRATAXNMTRANSACTIONCODE

**New Mexico Transaction Code**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMTRANSACTIONCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransactionCode` | ✓ | |  | `cast (domvalue_l as oiux8_nm_transaction_code )` | `CHAR(2)` | Tax 2.0 - NM - Transaction Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRATaxNMTransactionCodeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMTRANSACTIONCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMTRANSACTIONCODE')/$value)*

```abap
@EndUserText.label: 'New Mexico Transaction Code'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXNMTRANSCD'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'TransactionCode'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRANewMexicoTaxTransCode'

define view I_PRATaxNMTransactionCode
  as select from dd07l
  association [0..*] to I_PRATaxNMTransactionCodeT as _Text on $projection.TransactionCode = _Text.TransactionCode
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiux8_nm_transaction_code ) as TransactionCode,
      _Text
}
where
      domname  = 'OIUX8_NM_TRANSACTION_CODE'
  and as4local = 'A';
```
