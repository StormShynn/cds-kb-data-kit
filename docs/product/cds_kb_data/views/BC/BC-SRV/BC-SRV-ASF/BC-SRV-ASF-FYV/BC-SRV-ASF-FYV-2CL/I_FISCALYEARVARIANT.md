---
name: I_FISCALYEARVARIANT
description: "Fiscalyearvariant"
app_component: BC-SRV-ASF-FYV-2CL
software_component: SAP_BASIS
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
  - BC
  - BC-SRV
  - BC-SRV-ASF
  - interface-view
  - component:BC-SRV-ASF-FYV-2CL
  - lob:Basis Components
---
# I_FISCALYEARVARIANT

**Fiscalyearvariant**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-FYV-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYearVariant` | ✓ | |  | `cast( t009.periv as fis_periv preserving type )` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriodIsEqualMonth` |  | |  | `cast( t009.xkale as fis_xkale preserving type )` | `CHAR(1)` | Indicator: Fiscal Period Is Equal Calendar Month |
| `IsYearDependent` |  | |  | `xjabh` | `CHAR(1)` | Indicator: Fiscal year variants year-dependent ? |
| `PostingPeriodsNumberVal` |  | |  | `anzbp` | `NUMC(3)` | Number of Posting Periods |
| `NumberOfSpecialPeriods` |  | |  | `anzsp` | `NUMC(2)` | Number of Special Periods |
| `FsclWeekStartIsFsclYearStart` |  | |  | `xweek` | `CHAR(1)` | Flag: Fiscal Weeks Calculated from Start of Fiscal Year |
| `FiscalCalendarIsWeekBased` |  | |  | `xweekquart` | `CHAR(1)` | Flag: Fiscal Year Variant as Week Calendar |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FiscalYearVariantText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @VDM: {lifecycle.contract.type: #PUBLIC_LOCAL_API,
       viewType: #BASIC 
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@Analytics.technicalName: 'IFIFISCYEARVAR'
@EndUserText.label: 'Fiscal Year Variant'
@ObjectModel: {usageType: { serviceQuality: #A,
                            sizeCategory: #S,
                            dataClass: #CUSTOMIZING },
               modelingPattern: #ANALYTICAL_DIMENSION,
               supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE],
               representativeKey: 'FiscalYearVariant',
               sapObjectNodeType.name: 'FiscalYearVariant'                       
}  
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true
                                    
define view entity I_FiscalYearVariant as select from t009

association[0..*] to I_FiscalYearVariantText  as _Text on  $projection.FiscalYearVariant = _Text.FiscalYearVariant
{ 

@Search.defaultSearchElement: true 
@Search.fuzzinessThreshold: 0.8
@Search.ranking: #HIGH
@ObjectModel.text.association: '_Text'
@Semantics.fiscal.yearVariant: true 
key cast( t009.periv as fis_periv preserving type ) as FiscalYearVariant,
cast( t009.xkale as fis_xkale preserving type )     as FiscalPeriodIsEqualMonth,
t009.xjabh                                          as IsYearDependent,
t009.anzbp                                          as PostingPeriodsNumberVal,
t009.anzsp                                          as NumberOfSpecialPeriods,
t009.xweek                                          as FsclWeekStartIsFsclYearStart,
t009.xweekquart                                     as FiscalCalendarIsWeekBased,

_Text

}
```
