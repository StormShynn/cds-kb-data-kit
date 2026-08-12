---
name: I_MX_SUPPLIERTRANSACTIONTYPE
description: "MX Suppliertransactiontype"
app_component: FI-LOC-FI-MX
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
