---
name: I_BR_NFFUEL
description: "This CDS view displays the fuel detail for the nota fiscal items. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFFUEL')/$value
semantic_en: "This CDS view displays the fuel detail for the nota fiscal items. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Brazil Nota Fiscal Fuel — CDS view giao diện dựa trên j_1bnffuel."
keywords:
  - "brazil"
  - "nota"
  - "fiscal"
  - "fuel"
  - "item"
  - "code"
  - "register"
  - "envrmt"
  - "temperature"
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-LO-BR
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_BR_NFFUEL

**This CDS view displays the fuel detail for the nota fiscal items. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFFUEL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NotaFiscal` | ✓ | |  | `docnum` | `NUMC(10)` | Document Number |
| `BR_NotaFiscalItem` | ✓ | |  | `itmnum` | `NUMC(6)` | Document Item Number |
| `BR_ANPCode` |  | |  | `cast(NFFuel.cprodanp as logbr_anp_product_code preserving type)` | `NUMC(9)` | ANP Product Code |
| `BR_NFRegisterCODIF` |  | |  | `cast(NFFuel.codif as logbr_codif_auth_code preserving type)` | `NUMC(21)` | CODIF Code |
| `BR_NFeEnvrmtTemperatureFuelQty` |  | |  | `cast(NFFuel.qtemp as logbr_billed_fuel_quan preserving type)` | `DEC(16)` | Fuel Quantity at Room Temperature |
| `BR_NFeFuelConsumerRegion` |  | |  | `ufcons` | `CHAR(3)` | Region of Fuel Consumption |
| `BR_NFPercentageNaturalGasUnit` |  | |  | `cast(' %' as msehi)` | `UNIT(3)` | Unit of Measurement |
| `BR_NFNaturalGasPercent` |  | |  | `cast(NFFuel.pmixgn as logbr_nfe_pmixgn preserving type)` | `DEC(6)` | Natural Gas |
| `BR_NFFuelCIDETaxBaseQuantity` |  | |  | `cast(NFFuel.qbcprod as logbr_nfe_tax_base_quantity preserving type)` | `DEC(16)` | Tax Base Quantity |
| `BR_NFFuelCIDETaxRate` |  | |  | `valigprod` | `DEC(15)` | CIDE Tax Rate (value) |
| `BR_NFFuelCIDETaxAmount` |  | |  | `vcide` | `CURR(15)` | CIDE Amount |
| `BR_NFeFuelNozzle` |  | |  | `cast(NFFuel.bico as logbr_bico preserving type)` | `NUMC(3)` | Nozzle Number |
| `BR_NFeFuelPump` |  | |  | `cast(NFFuel.bomba as logbr_bomba preserving type)` | `NUMC(3)` | Pump Number |
| `BR_NFeFuelTank` |  | |  | `cast(NFFuel.tanque as logbr_tanque preserving type)` | `NUMC(3)` | Tank Number |
| `BR_NFeFuelGaugeStartQuantity` |  | |  | `cast(NFFuel.encini_d as logbr_encini_d preserving type)` | `DEC(12)` | Start Value of Gauge |
| `BR_NFeFuelGaugeEndQuantity` |  | |  | `cast(NFFuel.encfin_d as logbr_encfin_d preserving type)` | `DEC(12)` | End Value of Gauge |
| `BR_GLPRatioUnit` |  | |  | `cast(' %' as msehi)` | `UNIT(3)` | Unit of Measurement |
| `BR_GLPRatio` |  | |  | `cast(NFFuel.p_glp as logbr_pglp preserving type)` | `DEC(7)` | Oil Derived from Gas |
| `BR_GLGNNRatioUnit` |  | |  | `cast(' %' as msehi)` | `UNIT(3)` | Unit of Measurement |
| `BR_GLGNNRatio` |  | |  | `cast(NFFuel.p_gnn as logbr_pgnn preserving type)` | `DEC(7)` | National Natural Gas |
| `BR_GLGNIRatioUnit` |  | |  | `cast(' %' as msehi)` | `UNIT(3)` | Unit of Measurement |
| `BR_GLGNIRatio` |  | |  | `cast(NFFuel.p_gni as logbr_pgni preserving type)` | `DEC(7)` | Imported Natural Gas |
| `BR_GLPNetValueAmount` |  | |  | `cast(NFFuel.v_part as logbr_vpart preserving type)` | `DEC(15)` | Fuel Net Amount |
| `BR_NFBiodieselMixingIndexRate` |  | |  | `cast(NFFuel.p_bio as logbr_pbio preserving type)` | `DEC(7)` | Biodiesel Mixing Index in Diesel B |
| `SalesDocumentCurrency` |  | | `_BR_NotaFiscal` | `SalesDocumentCurrency` | `CUKY(5)` | SD Document Currency |
| `BaseUnit` |  | | `_BR_NotaFiscalItem` | `BaseUnit` | `UNIT(3)` | Base unit of measure |
| `_BR_NFPercentageNaturalGasUnit` | | ✓ | | | | |
| `_BR_GLPRatioUnit` | | ✓ | | | | |
| `_BR_GLGNNRatioUnit` | | ✓ | | | | |
| `_BR_GLGNIRatioUnit` | | ✓ | | | | |
| `_SalesDocumentCurrency` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFPercentageNaturalGasUnit` | `I_UnitOfMeasure` | [0..1] |
| `_BR_GLPRatioUnit` | `I_UnitOfMeasure` | [0..1] |
| `_BR_GLGNNRatioUnit` | `I_UnitOfMeasure` | [0..1] |
| `_BR_GLGNIRatioUnit` | `I_UnitOfMeasure` | [0..1] |
| `_BR_NotaFiscal` | `I_BR_NFDocumentCurrency` | [1..1] |
| `_SalesDocumentCurrency` | `I_Currency` | [0..1] |
| `_BR_NotaFiscalItem` | `I_BR_NFItemBaseUnit` | [1..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFFUEL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFFUEL')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBRNFFUEL'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Brazil Nota Fiscal Fuel'
@VDM.viewType:#BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #NONE

define view I_BR_NFFuel
  as select from j_1bnffuel as NFFuel
  association [0..1] to I_UnitOfMeasure         as _BR_NFPercentageNaturalGasUnit on $projection.BR_NFPercentageNaturalGasUnit = _BR_NFPercentageNaturalGasUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure         as _BR_GLPRatioUnit               on $projection.BR_GLPRatioUnit = _BR_GLPRatioUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure         as _BR_GLGNNRatioUnit             on $projection.BR_GLGNNRatioUnit = _BR_GLGNNRatioUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure         as _BR_GLGNIRatioUnit             on $projection.BR_GLGNIRatioUnit = _BR_GLGNIRatioUnit.UnitOfMeasure
  association [1..1] to I_BR_NFDocumentCurrency as _BR_NotaFiscal                 on $projection.BR_NotaFiscal = _BR_NotaFiscal.BR_NotaFiscal
  association [0..1] to I_Currency              as _SalesDocumentCurrency         on $projection.SalesDocumentCurrency = _SalesDocumentCurrency.Currency
  association [1..1] to I_BR_NFItemBaseUnit     as _BR_NotaFiscalItem             on $projection.BR_NotaFiscal = _BR_NotaFiscalItem.BR_NotaFiscal 
                                                                                 and $projection.BR_NotaFiscalItem = _BR_NotaFiscalItem.BR_NotaFiscalItem
  association [0..1] to I_UnitOfMeasure         as _BaseUnit                      on $projection.baseunit = _BaseUnit.UnitOfMeasure                                                                         
{
  key NFFuel.docnum                                                   as BR_NotaFiscal,
  key NFFuel.itmnum                                                   as BR_NotaFiscalItem,
      cast(NFFuel.cprodanp as logbr_anp_product_code preserving type) as BR_ANPCode,
      cast(NFFuel.codif as logbr_codif_auth_code preserving type)     as BR_NFRegisterCODIF,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast(NFFuel.qtemp as logbr_billed_fuel_quan preserving type)    as BR_NFeEnvrmtTemperatureFuelQty,
      NFFuel.ufcons                                                   as BR_NFeFuelConsumerRegion,
      @Semantics.unitOfMeasure: true
      cast(' %' as msehi)                                             as BR_NFPercentageNaturalGasUnit,
      @Semantics.quantity.unitOfMeasure: 'BR_NFPercentageNaturalGasUnit'
      @DefaultAggregation: #NONE
      cast(NFFuel.pmixgn as logbr_nfe_pmixgn preserving type)         as BR_NFNaturalGasPercent,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast(NFFuel.qbcprod as logbr_nfe_tax_base_quantity preserving type) as BR_NFFuelCIDETaxBaseQuantity,
      NFFuel.valigprod                                                as BR_NFFuelCIDETaxRate,
      @Semantics.amount.currencyCode:'SalesDocumentCurrency'
      NFFuel.vcide                                                    as BR_NFFuelCIDETaxAmount,
      cast(NFFuel.bico as logbr_bico preserving type)                 as BR_NFeFuelNozzle,
      cast(NFFuel.bomba as logbr_bomba preserving type)               as BR_NFeFuelPump,
      cast(NFFuel.tanque as logbr_tanque preserving type)             as BR_NFeFuelTank,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast(NFFuel.encini_d as logbr_encini_d preserving type)         as BR_NFeFuelGaugeStartQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast(NFFuel.encfin_d as logbr_encfin_d preserving type)         as BR_NFeFuelGaugeEndQuantity,
      @Semantics.unitOfMeasure: true
      cast(' %' as msehi)                                             as BR_GLPRatioUnit,
      @Semantics.quantity.unitOfMeasure: 'BR_GLPRatioUnit'
      @DefaultAggregation: #NONE
      cast(NFFuel.p_glp as logbr_pglp preserving type)                as BR_GLPRatio,
      @Semantics.unitOfMeasure: true
      cast(' %' as msehi)                                             as BR_GLGNNRatioUnit,
      @Semantics.quantity.unitOfMeasure: 'BR_GLGNNRatioUnit'
      @DefaultAggregation: #NONE
      cast(NFFuel.p_gnn as logbr_pgnn preserving type)                as BR_GLGNNRatio,
      @Semantics.unitOfMeasure: true
      cast(' %' as msehi)                                             as BR_GLGNIRatioUnit,
      @Semantics.quantity.unitOfMeasure: 'BR_GLGNIRatioUnit'
      @DefaultAggregation: #NONE
      cast(NFFuel.p_gni as logbr_pgni preserving type)                as BR_GLGNIRatio,
      cast(NFFuel.v_part as logbr_vpart preserving type)              as BR_GLPNetValueAmount,
      cast(NFFuel.p_bio as logbr_pbio preserving type)                as BR_NFBiodieselMixingIndexRate,
      _BR_NFPercentageNaturalGasUnit,
      _BR_GLPRatioUnit,
      _BR_GLGNNRatioUnit,
      _BR_GLGNIRatioUnit,
      @Semantics.currencyCode:true
      _BR_NotaFiscal.SalesDocumentCurrency as SalesDocumentCurrency,
      _SalesDocumentCurrency,
      @Semantics.unitOfMeasure:true
      _BR_NotaFiscalItem.BaseUnit,
      _BaseUnit
}
```
