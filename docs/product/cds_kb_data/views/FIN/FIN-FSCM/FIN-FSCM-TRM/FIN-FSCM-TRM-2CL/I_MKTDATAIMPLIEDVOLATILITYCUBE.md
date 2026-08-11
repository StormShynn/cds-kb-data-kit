---
name: I_MKTDATAIMPLIEDVOLATILITYCUBE
description: "This CDS view provides the prerequisites for answering the following business questions: How is the implied volatility defined in the system?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATAIMPLIEDVOLATILITYCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How is the implied volatility defined in the system?"
semantic_vi: "Implied Volatility - Cube — CDS view giao diện dựa trên I_ImpliedVolatility."
keywords:
  - "implied"
  - "volatility"
  - "cube"
  - "calendar"
  - "date"
  - "type"
  - "name"
  - "profile"
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
# I_MKTDATAIMPLIEDVOLATILITYCUBE

**This CDS view provides the prerequisites for answering the following business questions: How is the implied volatility defined in the system?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATAIMPLIEDVOLATILITYCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CalendarDate` | ✓ | |  | `cast(ImpliedVola.EffectiveDate as calendardate )` | `DATS(8)` | Calendar Date |
| `VolatilityType` | ✓ | |  |  | `CHAR(3)` | Volatility Type |
| `ImpliedVolatilityName` | ✓ | |  | `ImpliedVolatilityIdentifier` | `CHAR(15)` | Volatility Name |
| `VolatilityProfile` | ✓ | |  |  | `CHAR(15)` | Volatility Pofile |
| `ImpliedVolatilityValue` |  | |  |  | `DEC(11)` | Implied Volatility Value |
| `_VolatilityTypeVH` | | ✓ | | | | |
| `_ImpliedVolatilityNameVH` | | ✓ | | | | |
| `_VolatilityProfileVH` | | ✓ | | | | |
| `_ImpliedVolatilityIdentifier` | | ✓ | | | | |
| `_VolatilityProfileVH_2` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_VolatilityTypeVH` | `I_VolatilityType` | [1..1] |
| `_ImpliedVolatilityNameVH` | `I_VolatilityName` | [1..1] |
| `_VolatilityProfileVH` | `I_VolatilityProfile` | [1..1] |
| `_ImpliedVolatilityIdentifier` | `I_ImpliedVolatilityIdentifier` | [1..1] |
| `_VolatilityProfileVH_2` | `I_VolatilityProfile_2` | [1..1] |
| `_CalendarDate` | `I_CalendarDate` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATAIMPLIEDVOLATILITYCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATAIMPLIEDVOLATILITYCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IIMPLIEDVOLACUBE'
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
@EndUserText.label: 'Implied Volatility - Cube'
define view I_MktDataImpliedVolatilityCube
  as select from I_ImpliedVolatility as ImpliedVola
  association [1..1] to I_VolatilityType              as _VolatilityTypeVH            on $projection.VolatilityType = _VolatilityTypeVH.VolatilityType
  association [1..1] to I_VolatilityName              as _ImpliedVolatilityNameVH     on $projection.ImpliedVolatilityName = _ImpliedVolatilityNameVH.ImpliedVolatilityName
  association [1..1] to I_VolatilityProfile           as _VolatilityProfileVH         on $projection.VolatilityProfile = _VolatilityProfileVH.VolatilityProfile
  association [1..1] to I_ImpliedVolatilityIdentifier as _ImpliedVolatilityIdentifier on $projection.ImpliedVolatilityName = _ImpliedVolatilityIdentifier.ImpliedVolatilityIdentifier
  association [1..1] to I_VolatilityProfile_2         as _VolatilityProfileVH_2       on $projection.VolatilityProfile = _VolatilityProfileVH_2.VolatilityProfile
                                                                                     and $projection.ImpliedVolatilityName = _VolatilityProfileVH_2.ImpliedVolatilityIdentifier
  association [1..1] to I_CalendarDate                as _CalendarDate                on $projection.CalendarDate = _CalendarDate.CalendarDate

{

       //ImpliedVola
       @ObjectModel.foreignKey.association: '_CalendarDate'
  key  cast(ImpliedVola.EffectiveDate as calendardate ) as CalendarDate,
       @ObjectModel.foreignKey.association: '_VolatilityTypeVH'
  key  VolatilityType,
//       @API.element.releaseState: #DEPRECATED
//       @API.element.successor: 'ImpliedVolatilityIdentifier'
       @ObjectModel.foreignKey.association: '_ImpliedVolatilityIdentifier'
  key  ImpliedVolatilityIdentifier as ImpliedVolatilityName,
//       @ObjectModel.foreignKey.association: '_ImpliedVolatilityIdentifier'
//  key  ImpliedVolatilityName as ImpliedVolatilityIdentifier,
       @ObjectModel.foreignKey.association: '_VolatilityProfileVH_2'
  key  VolatilityProfile,
       ImpliedVolatilityValue,

       _CalendarDate,
       _VolatilityTypeVH,
       @API.element.releaseState: #DEPRECATED
       @API.element.successor: '_ImpliedVolatilityIdentifier'
       _ImpliedVolatilityNameVH,
       _ImpliedVolatilityIdentifier,
       @API.element.releaseState: #DEPRECATED
       @API.element.successor: '_VolatilityProfileVH_2'
       _VolatilityProfileVH,
       _VolatilityProfileVH_2

}
```
