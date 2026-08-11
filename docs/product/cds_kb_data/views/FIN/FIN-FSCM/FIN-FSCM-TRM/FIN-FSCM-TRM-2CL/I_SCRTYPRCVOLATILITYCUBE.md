---
name: I_SCRTYPRCVOLATILITYCUBE
description: "This CDS view provides the prerequisites for answering the following business questions: How is the historical volatility of a security price defined in the system?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SCRTYPRCVOLATILITYCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How is the historical volatility of a security price defined in the system?"
semantic_vi: "Historic Security Prc Volatility - Cube — CDS view giao diện dựa trên I_SecurityPriceVolatility."
keywords:
  - "historic"
  - "security"
  - "prc"
  - "volatility"
  - "cube"
  - "type"
  - "class"
  - "calendar"
  - "date"
  - "term"
  - "days"
  - "price"
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
# I_SCRTYPRCVOLATILITYCUBE

**This CDS view provides the prerequisites for answering the following business questions: How is the historical volatility of a security price defined in the system?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SCRTYPRCVOLATILITYCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VolatilityType` | ✓ | |  |  | `CHAR(3)` | Volatility Type |
| `SecurityClass` | ✓ | |  | `cast(SecurityPriceVola.SecurityClass as ftr_gen_security_class)` | `CHAR(13)` | Security Class |
| `CalendarDate` | ✓ | |  | `cast(SecurityPriceVola.EffectiveDate as calendardate )` | `DATS(8)` | Calendar Date |
| `VolatilityTermInDays` | ✓ | |  |  | `INT4(10)` |  |
| `SecurityPriceVolatilityValue` |  | |  |  | `DEC(11)` | Security Price Volatility |
| `_VolatilityTypeVH` | | ✓ | | | | |
| `_SecurityClassVH` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_VolatilityTypeVH` | `I_VolatilityType` | [1..1] |
| `_SecurityClassVH` | `I_SecurityClass` | [1..1] |
| `_CalendarDate` | `I_CalendarDate` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SCRTYPRCVOLATILITYCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SCRTYPRCVOLATILITYCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISCRTYPRCVOLCUBE'
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
@EndUserText.label: 'Historic Security Prc Volatility - Cube'
define view I_ScrtyPrcVolatilityCube as select from I_SecurityPriceVolatility as SecurityPriceVola 
association [1..1] to I_VolatilityType        as _VolatilityTypeVH on $projection.VolatilityType = _VolatilityTypeVH.VolatilityType
association [1..1] to I_SecurityClass        as _SecurityClassVH on $projection.SecurityClass = _SecurityClassVH.SecurityClass
association [1..1] to I_CalendarDate          as _CalendarDate     on _CalendarDate.CalendarDate = $projection.CalendarDate
{
     
    @ObjectModel.foreignKey.association: '_VolatilityTypeVH'
    key VolatilityType, 
    @ObjectModel.foreignKey.association: '_SecurityClassVH'
    key cast(SecurityPriceVola.SecurityClass as ftr_gen_security_class) as SecurityClass, 
    @ObjectModel.foreignKey.association: '_CalendarDate'
    key  cast(SecurityPriceVola.EffectiveDate as calendardate ) as CalendarDate,
    key VolatilityTermInDays, 
    SecurityPriceVolatilityValue,
    _VolatilityTypeVH,
    _SecurityClassVH,
    _CalendarDate
}
```
