---
name: I_MX_SUPPLIERTRANSACTIONTYPE
description: "MX Suppliertransactiontype"
app_component: FI-LOC-FI-MX
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - supplier
  - component:FI-LOC-FI-MX
  - lob:Finance
  - bo:Supplier
---
# I_MX_SUPPLIERTRANSACTIONTYPE

**MX Suppliertransactiontype**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-MX` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessType` | ✓ | |  | `transaction_type` |  |  |
| `TaxItemGroupingVersion` | ✓ | |  | `version` |  |  |
| `OrderType` | ✓ | |  | `ord_type` |  |  |
| `_TransactionType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransactionType` | `I_MX_TransactionType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMXSUPTTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'Supplier Transaction Type and Version'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true 

define view I_MX_SupplierTransactionType as select from mxtvo

  association to I_MX_TransactionType as _TransactionType on $projection.BusinessType = _TransactionType.BusinessTransactionType

 { 
    @ObjectModel.foreignKey.association: '_TransactionType'
    key transaction_type as BusinessType, 
    key version          as TaxItemGroupingVersion,
    key ord_type         as OrderType,
    _TransactionType
}
```
