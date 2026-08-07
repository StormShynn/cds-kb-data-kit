---
name: I_BR_NFTAX
description: BR Nftax
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
  - tax
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFTAX

**BR Nftax**

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
| `BR_TaxType` | ✓ | |  | `taxtyp` |  |  |
| `TaxGroup` | ✓ | |  | `cast(NFTax.taxgrp as logbr_taxgrp preserving type)` |  |  |
| `BR_NFItemBaseAmount` |  | |  | `base` |  |  |
| `BR_NFItemTaxRate` |  | |  | `rate` |  |  |
| `BR_NFItemTaxAmount` |  | |  | `taxval` |  |  |
| `BR_NFItemExcludedBaseAmount` |  | |  | `cast(NFTax.excbas as logbr_excbas)` |  |  |
| `BR_NFItemOtherBaseAmount` |  | |  | `othbas` |  |  |
| `BR_NFItemTaxBasePct1Unit` |  | |  | `cast(' %' as msehi)` |  |  |
| `BR_NFItemTaxBasePct1` |  | |  | `cast(NFTax.basered1 as logbr_taxbase preserving type)` |  |  |
| `BR_NFItemTaxBasePct2Unit` |  | |  | `cast(' %' as msehi)` |  |  |
| `BR_NFItemTaxBasePct2` |  | |  | `basered2` |  |  |
| `BR_NFItemIsStatisticalTax` |  | |  | `cast(NFTax.stattx as logbr_stattx)` |  |  |
| `BR_NFItemHasFixedMktTariff` |  | |  | `rectype` |  |  |
| `BR_NFItemFixedMktTariffBaseQty` |  | |  | `pauta_base` |  |  |
| `BR_NFItemFixedMarketTariffUnit` |  | |  | `unit` |  |  |
| `BR_NFItemWhldgCollectionCode` |  | |  | `whtcollcode` |  |  |
| `BR_NFItemFixedMktTariffTaxRate` |  | |  | `rate4dec` |  |  |
| `BR_NFItemFixedMktTariffQty` |  | |  | `factor4dec` |  |  |
| `BR_NFItmFxdMktTariffUnit4Dcmls` |  | |  | `unit4dec` |  |  |
| `TaxesAreIncludedInNetAmount` |  | |  | `taxinnet` |  |  |
| `BR_NFItemHasWithholdingTax` |  | |  | `cast(NFTax.withhold as logbr_withholdingtax preserving type)` |  |  |
| `BR_NFSServiceTypeIncoming` |  | |  | `servtype_in` |  |  |
| `BR_NFSServiceTypeOutgoing` |  | |  | `servtype_out` |  |  |
| `TaxJurisdiction` |  | |  | `tax_loc` |  |  |
| `AggregateBaseAmount` |  | |  | `(NFTax.base + NFTax.othbas)` |  |  |
| `SalesDocumentCurrency` |  | | `_BR_NFDocumentCurrency` | `SalesDocumentCurrency` |  |  |
| `_BR_NFItemTaxBasePct1Unit` | | ✓ | | | | |
| `_BR_NFItemTaxBasePct2Unit` | | ✓ | | | | |
| `_BR_NFItmFixedMarketTariffUnit` | | ✓ | | | | |
| `_BR_NFItmFxdMktTrifUnit4Dcmls` | | ✓ | | | | |
| `_SalesDocumentCurrency` | | ✓ | | | | |
| `_BR_NotaFiscal` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFItemTaxBasePct1Unit` | `I_UnitOfMeasure` | [0..1] |
| `_BR_NFItemTaxBasePct2Unit` | `I_UnitOfMeasure` | [0..1] |
| `_BR_NFItmFixedMarketTariffUnit` | `I_UnitOfMeasure` | [1..1] |
| `_BR_NFItmFxdMktTrifUnit4Dcmls` | `I_UnitOfMeasure` | [1..1] |
| `_SalesDocumentCurrency` | `I_Currency` | [1..1] |
| `_BR_NFDocumentCurrency` | `I_BR_NFDocumentCurrency` | [1..1] |
| `_BR_NotaFiscal` | `I_BR_NFDocument` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFTAX'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Brazil Nota Fiscal Taxes'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.modelingPattern: #NONE

define view I_BR_NFTax
  as select from j_1bnfstx as NFTax
  association [0..1] to I_UnitOfMeasure as _BR_NFItemTaxBasePct1Unit on $projection.BR_NFItemTaxBasePct1Unit = _BR_NFItemTaxBasePct1Unit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure as _BR_NFItemTaxBasePct2Unit on $projection.BR_NFItemTaxBasePct2Unit = _BR_NFItemTaxBasePct2Unit.UnitOfMeasure
  association [1..1] to I_UnitOfMeasure as _BR_NFItmFixedMarketTariffUnit              on  $projection.BR_NFItemFixedMarketTariffUnit = _BR_NFItmFixedMarketTariffUnit.UnitOfMeasure
  association [1..1] to I_UnitOfMeasure as _BR_NFItmFxdMktTrifUnit4Dcmls              on  $projection.BR_NFItemFixedMarketTariffUnit = _BR_NFItmFxdMktTrifUnit4Dcmls.UnitOfMeasure

  association [1..1] to I_Currency      as _SalesDocumentCurrency on  $projection.SalesDocumentCurrency = _SalesDocumentCurrency.Currency
  association [1..1] to I_BR_NFDocumentCurrency as _BR_NFDocumentCurrency    on $projection.BR_NotaFiscal = _BR_NFDocumentCurrency.BR_NotaFiscal
  association [1..1] to I_BR_NFDocument      as _BR_NotaFiscal    on $projection.BR_NotaFiscal = _BR_NotaFiscal.BR_NotaFiscal  

{
  key NFTax.docnum                                                 as  BR_NotaFiscal,
  key NFTax.itmnum                                                 as  BR_NotaFiscalItem,
  key NFTax.taxtyp                                                 as  BR_TaxType,
  key cast(NFTax.taxgrp as logbr_taxgrp preserving type)           as  TaxGroup,
  
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      NFTax.base                                                   as  BR_NFItemBaseAmount,
      
      NFTax.rate                                                   as  BR_NFItemTaxRate,
      
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      NFTax.taxval                                                 as  BR_NFItemTaxAmount,
      
      @Aggregation.default:#SUM
      cast(NFTax.excbas as logbr_excbas)                           as  BR_NFItemExcludedBaseAmount,
      
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      NFTax.othbas                                                 as  BR_NFItemOtherBaseAmount,
      
      @Semantics.unitOfMeasure: true
      cast(' %' as msehi)                                          as  BR_NFItemTaxBasePct1Unit,
      @Semantics.quantity.unitOfMeasure: 'BR_NFItemTaxBasePct1Unit'
      @DefaultAggregation: #NONE
      cast(NFTax.basered1 as logbr_taxbase preserving type)        as  BR_NFItemTaxBasePct1,
      
      @Semantics.unitOfMeasure: true
      cast(' %' as msehi)                                          as  BR_NFItemTaxBasePct2Unit,
      @Semantics.quantity.unitOfMeasure: 'BR_NFItemTaxBasePct2Unit'
      @DefaultAggregation: #NONE
      NFTax.basered2                                               as  BR_NFItemTaxBasePct2,
      
      cast(NFTax.stattx as logbr_stattx)                           as  BR_NFItemIsStatisticalTax,
      @Semantics.booleanIndicator 
      NFTax.rectype                                                as  BR_NFItemHasFixedMktTariff,
      
      @Semantics.quantity.unitOfMeasure:'BR_NFItemFixedMarketTariffUnit'
      @Aggregation.default:#SUM
      NFTax.pauta_base                                             as  BR_NFItemFixedMktTariffBaseQty,
      @Semantics.unitOfMeasure: true
      NFTax.unit                                                   as  BR_NFItemFixedMarketTariffUnit,
      
      NFTax.whtcollcode                                            as  BR_NFItemWhldgCollectionCode,
      NFTax.rate4dec                                               as  BR_NFItemFixedMktTariffTaxRate,
      
      @Semantics.quantity.unitOfMeasure:'BR_NFItmFxdMktTariffUnit4Dcmls'
      @Aggregation.default:#SUM
      NFTax.factor4dec                                             as  BR_NFItemFixedMktTariffQty,
      @Semantics.unitOfMeasure: true
      NFTax.unit4dec                                               as  BR_NFItmFxdMktTariffUnit4Dcmls,
      
      NFTax.taxinnet                                               as  TaxesAreIncludedInNetAmount,
      cast(NFTax.withhold as logbr_withholdingtax preserving type) as  BR_NFItemHasWithholdingTax,
      NFTax.servtype_in                                            as  BR_NFSServiceTypeIncoming,
      NFTax.servtype_out                                           as  BR_NFSServiceTypeOutgoing,
      NFTax.tax_loc                                                as  TaxJurisdiction,
      
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      @Aggregation.default:#SUM
      (NFTax.base + NFTax.othbas)                                  as  AggregateBaseAmount,
      
      @Semantics.currencyCode:true
      _BR_NFDocumentCurrency.SalesDocumentCurrency as SalesDocumentCurrency,
      
      _BR_NotaFiscal,      
      _SalesDocumentCurrency,
      
      _BR_NFItemTaxBasePct1Unit,
      _BR_NFItemTaxBasePct2Unit,
      _BR_NFItmFixedMarketTariffUnit,
      _BR_NFItmFxdMktTrifUnit4Dcmls 
}
```
