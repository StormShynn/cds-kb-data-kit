---
name: I_LISTEDDRVTVPRICEQUOTATION
description: "Listeddrvtvpricequotation"
app_component: CA-GTF-TRB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-TRB
  - interface-view
  - component:CA-GTF-TRB
  - lob:Cross-Application Components
---
# I_LISTEDDRVTVPRICEQUOTATION

**Listeddrvtvpricequotation**

| Property | Value |
|---|---|
| App Component | `CA-GTF-TRB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DerivativeContrSpecification` | ✓ | |  |  |  |  |
| `MarketIdentifierCode` | ✓ | |  |  |  |  |
| `MaturityKeyDate` | ✓ | |  |  |  |  |
| `PriceQuotationType` | ✓ | |  |  |  |  |
| `PriceQuotationDate` | ✓ | |  |  |  |  |
| `PriceQuotationTime` | ✓ | |  |  |  |  |
| `ValidityStartUTCDateTime` | ✓ | |  |  |  |  |
| `TimeToMaturity` |  | |  |  |  |  |
| `PriceQuotation` |  | |  |  |  |  |
| `UnitOfMeasure` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `_DerivativeContrSpecification` | | ✓ | | | | |
| `_MarketIdentifierCode` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_PriceQuotationType` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Listed Derivatives Price Quotation'
@Analytics.dataCategory: #CUBE
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.sqlViewName: 'ILOFPRICEQUOT'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER]

define view I_ListedDrvtvPriceQuotation
   as select from P_ListedDrvtvPriceQuotActual
{
  
 key DerivativeContrSpecification,
 key MarketIdentifierCode,
 key MaturityKeyDate,
 key PriceQuotationType,
 key PriceQuotationDate,
 key PriceQuotationTime,
 key ValidityStartUTCDateTime,
     TimeToMaturity,
  //   @Semantics.amount.currencyCode: 'Currency'
     @DefaultAggregation:#SUM
     PriceQuotation,
     @Semantics.unitOfMeasure: true
     UnitOfMeasure,
     @Semantics.currencyCode: true
     Currency,
     CreatedByUser,

    _DerivativeContrSpecification,
    _MarketIdentifierCode,
    _UnitOfMeasure,
    _Currency,
    _PriceQuotationType,

    IsDeleted

}

where IsDeleted = ' '
```
