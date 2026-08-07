---
name: I_BR_NFPHARMACEUTICAL
description: This CDS view provides the prerequisites for answering business questions about relevant aspects of medicines and pharmaceutical raw material.
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFPHARMACEUTICAL')/$value
semantic_en: This CDS view provides the prerequisites for answering business questions about relevant aspects of medicines and pharmaceutical raw material.
semantic_vi: Brazil Nota Fiscal Item Pharmaceuticals — CDS view giao diện dựa trên j_1bnfpharmaceut.
keywords:
  - brazil
  - nota
  - fiscal
  - item
  - pharmaceuticals
  - pharma
  - medicine
  - line
  - batch
  - quantity
tags:
  - FI
  - bo:plant
  - component:FI-LOC-LO-BR
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
  - material
  - bo:companycode
---
# I_BR_NFPHARMACEUTICAL

**This CDS view provides the prerequisites for answering business questions about relevant aspects of medicines and pharmaceutical raw material.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFPHARMACEUTICAL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NotaFiscal` | ✓ | |  | `docnum` | `NUMC(10)` | Document Number |
| `BR_NotaFiscalItem` | ✓ | |  | `itmnum` | `NUMC(6)` | Document Item Number |
| `BR_NFePharmaMedicineLineID` | ✓ | |  | `counter` | `NUMC(4)` | Counter |
| `MedicineBatch` |  | |  | `nlote` | `CHAR(20)` | Batch Number of Medicines and Pharmaceutical Raw Materials |
| `MedicineQuantity` |  | |  | `qlote` | `DEC(11)` | Quantity of Medicines and Pharmaceutical Raw Materials |
| `MedicineManufacturingDate` |  | |  | `cast(j_1bnfpharmaceut.dfab as logbr_manufacturingdate)` | `DATS(8)` | Manufacturing Date |
| `MedicineExpiringDate` |  | |  | `dval` | `DATS(8)` | Expiring Date of Medicines and Pharmaceutical Raw Materials |
| `ConsumerMaxPriceMedicineAmount` |  | |  | `cast(j_1bnfpharmaceut.vpmc as logbr_consumermaxprice)` | `DEC(15)` | Consumer Maximum Price |
| `SalesDocumentCurrency` |  | | `_BR_NFDocumentCurrency` | `SalesDocumentCurrency` | `CUKY(5)` | SD Document Currency |
| `BaseUnit` |  | | `_BR_NFItemBaseUnit` | `BaseUnit` | `UNIT(3)` | Base unit of measure |
| `_SalesDocumentCurrency` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_BR_NotaFiscalItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocumentCurrency` | `I_Currency` | [1..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [1..1] |
| `_BR_NFDocumentCurrency` | `I_BR_NFDocumentCurrency` | [1..1] |
| `_BR_NFItemBaseUnit` | `I_BR_NFItemBaseUnit` | [1..1] |
| `_BR_NotaFiscalItem` | `I_BR_NFItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFPHARMACEUTICAL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFPHARMACEUTICAL')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBRNFLINPHARMA'
@AbapCatalog.compiler.compareFilter: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Brazil Nota Fiscal Item Pharmaceuticals'
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.modelingPattern: #NONE

define view I_BR_NFPharmaceutical
  as select from j_1bnfpharmaceut

  association [1..1] to I_Currency      as _SalesDocumentCurrency on  $projection.SalesDocumentCurrency = _SalesDocumentCurrency.Currency
  association [1..1] to I_UnitOfMeasure as _BaseUnit              on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure

  association [1..1] to I_BR_NFDocumentCurrency as _BR_NFDocumentCurrency on $projection.BR_NotaFiscal = _BR_NFDocumentCurrency.BR_NotaFiscal
  association [1..1] to I_BR_NFItemBaseUnit     as _BR_NFItemBaseUnit     on  $projection.BR_NotaFiscalItem = _BR_NFItemBaseUnit.BR_NotaFiscalItem
                                                                          and $projection.BR_NotaFiscal     = _BR_NFItemBaseUnit.BR_NotaFiscal

  association [1..1] to I_BR_NFItem     as _BR_NotaFiscalItem     on  $projection.BR_NotaFiscalItem = _BR_NotaFiscalItem.BR_NotaFiscalItem
                                                                  and $projection.BR_NotaFiscal     = _BR_NotaFiscalItem.BR_NotaFiscal                                                                          

{

      //Document Number
  key j_1bnfpharmaceut.docnum                                as BR_NotaFiscal,

      //Document Item Number
  key j_1bnfpharmaceut.itmnum                                as BR_NotaFiscalItem,

      //Counter
  key j_1bnfpharmaceut.counter                               as BR_NFePharmaMedicineLineID,

      //Batch Number of Medicines and Pharmaceutical Raw Materials
      j_1bnfpharmaceut.nlote                                 as MedicineBatch,

      //Quantity of Medicines and Pharmaceutical Raw Materials
      @Semantics.quantity.unitOfMeasure:'BaseUnit'
      @Aggregation.default:#SUM
      j_1bnfpharmaceut.qlote                                 as MedicineQuantity,

      //Manufacturing Date of Medicines and Pharmaceutical Raw Mater
      cast(j_1bnfpharmaceut.dfab as logbr_manufacturingdate) as MedicineManufacturingDate,

      //Expiring Date of Medicines and Pharmaceutical Raw Materials
      j_1bnfpharmaceut.dval                                  as MedicineExpiringDate,

      //Consumer Max. Price of Medicines and Pharmac. Raw Materials
      @Aggregation.default:#SUM
      cast(j_1bnfpharmaceut.vpmc as logbr_consumermaxprice)  as ConsumerMaxPriceMedicineAmount,

      //Currency for ConsumerMaxPriceMedicineAmount
      @Semantics.currencyCode:true
      _BR_NFDocumentCurrency.SalesDocumentCurrency as SalesDocumentCurrency,

      //Base Unit for MedicineQuantity
      @Semantics.unitOfMeasure:true
      _BR_NFItemBaseUnit.BaseUnit                            as BaseUnit,

      _SalesDocumentCurrency,
      _BaseUnit,
      
      _BR_NotaFiscalItem

}
```
