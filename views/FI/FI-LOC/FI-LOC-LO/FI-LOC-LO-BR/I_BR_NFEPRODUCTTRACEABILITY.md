---
name: I_BR_NFEPRODUCTTRACEABILITY
description: BR Nfeproducttraceability
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - product
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFEPRODUCTTRACEABILITY

**BR Nfeproducttraceability**

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
| `SequenceNumber` | ✓ | |  | `counter` |  |  |
| `ProductBatch` |  | |  | `nlote` |  |  |
| `ProductBatchQuantity` |  | |  | `qlote` |  |  |
| `ManufacturingDate` |  | |  | `dfab` |  |  |
| `ExpirationDate` |  | |  | `dval` |  |  |
| `AggregationID` |  | |  | `cast('' as j_1bnfe_cagreg)` |  |  |
| `BR_NFeProdTrcblyAggregationID` |  | |  | `cagreg` |  |  |
| `BaseUnit` |  | | `_BR_NFItemBaseUnit` | `BaseUnit` |  |  |
| `_BR_NotaFiscalItem` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFItemBaseUnit` | `I_BR_NFItemBaseUnit` | [1..1] |
| `_BR_NotaFiscalItem` | `I_BR_NFItem` | [1..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFEPRODTRACE'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType:#BASIC
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label:  'Brazil NFe Product Traceability'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.modelingPattern: #NONE


define view I_BR_NFeProductTraceability 
  as select from j_1bnfetrace
  association [1..1] to I_BR_NFItemBaseUnit as _BR_NFItemBaseUnit     on $projection.BR_NotaFiscalItem = _BR_NFItemBaseUnit.BR_NotaFiscalItem
                                                                     and $projection.BR_NotaFiscal     = _BR_NFItemBaseUnit.BR_NotaFiscal
  association [1..1] to I_BR_NFItem         as _BR_NotaFiscalItem     on $projection.BR_NotaFiscalItem = _BR_NotaFiscalItem.BR_NotaFiscalItem
                                                                     and $projection.BR_NotaFiscal     = _BR_NotaFiscalItem.BR_NotaFiscal                                                                      
  association [1..1] to I_UnitOfMeasure     as _BaseUnit              on $projection.BaseUnit = _BaseUnit.UnitOfMeasure
{
  @UI.hidden: true
  key docnum as BR_NotaFiscal,
  @UI.hidden: true
  key itmnum as BR_NotaFiscalItem,  
  @UI.hidden: true
  key counter as SequenceNumber,  
  @UI.lineItem:[{ position:10 }]
  nlote as ProductBatch,  
  
  @UI.lineItem:[{ position:20 }]
  @Semantics.quantity.unitOfMeasure:'BaseUnit'
  @Aggregation.default:#SUM
  qlote as ProductBatchQuantity,  
  
  @UI.lineItem:[{ position:30 }]
  dfab as ManufacturingDate,  
  @UI.lineItem:[{ position:40 }]
  dval as ExpirationDate,
    
  @VDM.lifecycle.status: #DEPRECATED
  @VDM.lifecycle.successor: 'BR_NFeProdTrcblyAggregationID'
  @UI.hidden: true
  cast('' as j_1bnfe_cagreg) as AggregationID,
  @UI.lineItem:[{ position:50 }]
  cagreg as BR_NFeProdTrcblyAggregationID,
  
  @Semantics.unitOfMeasure:true
  _BR_NFItemBaseUnit.BaseUnit as BaseUnit,
  
  _BR_NotaFiscalItem,  
  _BaseUnit
}
```
