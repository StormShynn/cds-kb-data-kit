---
name: I_BR_NFITEMBASEUNIT
description: "BR Nfitembaseunit"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - item-level
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFITEMBASEUNIT

**BR Nfitembaseunit**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NotaFiscal` | ✓ | |  | `docnum` |  |  |
| `BR_NotaFiscalItem` | ✓ | |  | `itmnum` |  |  |
| `BaseUnit` |  | |  | `meins` |  |  |
| `_BaseUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BaseUnit` | `I_UnitOfMeasure` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Base Unit of Brazil Nota Fiscal Item Doc'
@AbapCatalog.sqlViewName: 'IBRNFITEMBASEUNT'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
define view I_BR_NFItemBaseUnit
  as select from j_1bnflin as NFItem
  association [1..1] to I_UnitOfMeasure as _BaseUnit on $projection.BaseUnit = _BaseUnit.UnitOfMeasure
{
  key NFItem.docnum as BR_NotaFiscal,
  key NFItem.itmnum as BR_NotaFiscalItem,
  @Semantics.unitOfMeasure:true
  NFItem.meins as BaseUnit,

  _BaseUnit
}
```
