---
name: I_BR_NFEPHARMACEUTICAL
description: "BR Nfepharmaceutical"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFEPHARMACEUTICAL

**BR Nfepharmaceutical**

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
| `BR_ANVISACode` |  | |  | `cast(cprodanvisa as logbr_anvisa_code preserving type)` |  |  |
| `MedicineConsumerMaxPrice` |  | |  | `cast(vpmc as logbr_consumermaxprice)` |  |  |
| `BR_ANVISAExemptionReasonText` |  | |  | `cast(exemp_reason as logbr_exemp_reason preserving type)` |  |  |
| `SalesDocumentCurrency` |  | | `_BR_NFDocumentCurrency` | `SalesDocumentCurrency` |  |  |
| `_SalesDocumentCurrency` | | ✓ | | | | |
| `_BR_NotaFiscal` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocumentCurrency` | `I_Currency` | [1..1] |
| `_BR_NFDocumentCurrency` | `I_BR_NFDocumentCurrency` | [1..1] |
| `_BR_NotaFiscal` | `I_BR_NFDocument` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFEPHARMA'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Brazil Nota Fiscal Pharma Items'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.modelingPattern: #NONE


define view I_BR_NFePharmaceutical
  as select from j_1bnfepharma

  association [1..1] to I_Currency              as _SalesDocumentCurrency on $projection.SalesDocumentCurrency = _SalesDocumentCurrency.Currency
  association [1..1] to I_BR_NFDocumentCurrency as _BR_NFDocumentCurrency on $projection.BR_NotaFiscal = _BR_NFDocumentCurrency.BR_NotaFiscal
  association [1..1] to I_BR_NFDocument         as _BR_NotaFiscal         on $projection.BR_NotaFiscal = _BR_NotaFiscal.BR_NotaFiscal  
{
  key docnum                                                   as BR_NotaFiscal,
  key itmnum                                                   as BR_NotaFiscalItem,
      cast(cprodanvisa as logbr_anvisa_code preserving type)   as BR_ANVISACode,

      @Aggregation.default:#SUM
      cast(vpmc as logbr_consumermaxprice)                     as MedicineConsumerMaxPrice,

      cast(exemp_reason as logbr_exemp_reason preserving type) as BR_ANVISAExemptionReasonText,

      //Currency for MedicineConsumerMaxPrice
      @Semantics.currencyCode:true
      _BR_NFDocumentCurrency.SalesDocumentCurrency                     as SalesDocumentCurrency,

      _SalesDocumentCurrency,
      _BR_NotaFiscal

}
```
