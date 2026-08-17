---
name: I_BR_NFEPRODUCTTRACEABILITY
description: "BR Nfeproducttraceability"
semantic_vi: "View I_BR_NFEPRODUCTTRACEABILITY cung cấp thông tin về khả năng theo dõi sản phẩm cho các tài liệu NF-e Brazil, bao gồm các lô sản phẩm, số lượng và ngày hết hạn. Nó được sử dụng để theo dõi nguồn gốc và chuyển động của sản phẩm."
keywords:
  - "nf-e"
  - "product traceability"
  - "sản phẩm theo dõi"
  - "brazil"
  - "fi-loc-lo-br"
  - "finance"
  - "inventory management"
  - "quản lý kho hàng"
  - "đơn hàng"
  - "đơn mua hàng"
  - "ekko"
semantic_en: "The I_BR_NFEPRODUCTTRACEABILITY view provides information about product traceability for Brazilian NF-e documents, including product batches, quantities, and expiration dates. It is used to track the origin and movement of products."
app_component: FI-LOC-LO-BR
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
