---
name: I_LISTEDDRVTVPRICEQUOTATION
description: "Listeddrvtvpricequotation"
app_component: CA-GTF-TRB
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
