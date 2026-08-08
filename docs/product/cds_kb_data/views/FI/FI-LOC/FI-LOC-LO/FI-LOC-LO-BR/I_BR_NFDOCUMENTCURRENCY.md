---
name: I_BR_NFDOCUMENTCURRENCY
description: "BR Nfdocumentcurrency"
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
  - currency
  - document
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFDOCUMENTCURRENCY

**BR Nfdocumentcurrency**

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
| `SalesDocumentCurrency` |  | |  | `waerk` |  |  |
| `_SalesDocumentCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocumentCurrency` | `I_Currency` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Currency of Brazil Nota Fiscal Document'
@AbapCatalog.sqlViewName: 'IBRNFDOCCRCY'
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
define view I_BR_NFDocumentCurrency
  as select from j_1bnfdoc as NFDocument
  association [1..1] to I_Currency as _SalesDocumentCurrency on $projection.SalesDocumentCurrency = _SalesDocumentCurrency.Currency
{
  key NFDocument.docnum as BR_NotaFiscal,
  @Semantics.currencyCode:true
  NFDocument.waerk as SalesDocumentCurrency,

  _SalesDocumentCurrency
}
```
