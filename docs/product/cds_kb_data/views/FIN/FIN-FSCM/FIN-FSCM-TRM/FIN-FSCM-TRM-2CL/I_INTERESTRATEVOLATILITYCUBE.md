---
name: I_INTERESTRATEVOLATILITYCUBE
description: "This CDS view provides the prerequisites for answering the following business questions: How is the historical volatility value of interest rates defined in the system?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERESTRATEVOLATILITYCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How is the historical volatility value of interest rates defined in the system?"
semantic_vi: "Historic Interest Rate Volatility - Cube — CDS view giao diện dựa trên I_InterestRateVolatility."
keywords:
  - "historic"
  - "interest"
  - "rate"
  - "volatility"
  - "cube"
  - "type"
  - "reference"
  - "calendar"
  - "date"
  - "term"
  - "days"
  - "value"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
---
# I_INTERESTRATEVOLATILITYCUBE

**This CDS view provides the prerequisites for answering the following business questions: How is the historical volatility value of interest rates defined in the system?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERESTRATEVOLATILITYCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VolatilityType` | ✓ | |  |  | `CHAR(3)` | Volatility Type |
| `ReferenceInterestRate` | ✓ | |  | `cast(InterestRateVola.ReferenceInterestRate as ftr_gen_ref_interest_rate)` | `CHAR(10)` | Reference Interest Rate |
| `CalendarDate` | ✓ | |  | `cast(InterestRateVola.EffectiveDate as calendardate )` | `DATS(8)` | Calendar Date |
| `VolatilityTermInDays` | ✓ | |  |  | `INT4(10)` |  |
| `InterestRateVolatilityValue` |  | |  |  | `DEC(11)` | Interest Rate Volatility |
| `_VolatilityTypeVH` | | ✓ | | | | |
| `_RefInterestVH` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_VolatilityTypeVH` | `I_VolatilityType` | [1..1] |
| `_RefInterestVH` | `I_ReferenceInterestRate` | [1..1] |
| `_CalendarDate` | `I_CalendarDate` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERESTRATEVOLATILITYCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTERESTRATEVOLATILITYCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IINTRATEVOLACUBE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_CUBE ]
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@AbapCatalog.preserveKey:true
@Analytics.internalName:#LOCAL
@Metadata.allowExtensions:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #L
@EndUserText.label: 'Historic Interest Rate Volatility - Cube'
define view I_InterestRateVolatilityCube
  as select from I_InterestRateVolatility as InterestRateVola
  association [1..1] to I_VolatilityType        as _VolatilityTypeVH on $projection.VolatilityType = _VolatilityTypeVH.VolatilityType
  association [1..1] to I_ReferenceInterestRate as _RefInterestVH      on _RefInterestVH.ReferenceInterestRate = $projection.ReferenceInterestRate
  association [1..1] to I_CalendarDate          as _CalendarDate     on _CalendarDate.CalendarDate = $projection.CalendarDate
{
      //InterestRateVola
  @ObjectModel.foreignKey.association: '_VolatilityTypeVH'
  key VolatilityType,
  @ObjectModel.foreignKey.association: '_RefInterestVH'
  key cast(InterestRateVola.ReferenceInterestRate as ftr_gen_ref_interest_rate) as ReferenceInterestRate,
  @ObjectModel.foreignKey.association: '_CalendarDate'
  key  cast(InterestRateVola.EffectiveDate as calendardate ) as CalendarDate,
  key VolatilityTermInDays,
      InterestRateVolatilityValue,

      _VolatilityTypeVH,
      _RefInterestVH,
      _CalendarDate
}
```
