---
name: I_SCRTYPRCVOLATILITYCUBE
description: "This CDS view provides the prerequisites for answering the following business questions: How is the historical volatility of a security price defined in the system?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
