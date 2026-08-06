---
name: I_FISCALPERIODRAWDATA
description: Fiscalperiodrawdata
app_component: BC-SRV-ASF-FYV-2CL
software_component: SAP_BASIS
release_state: released
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
# I_FISCALPERIODRAWDATA

**Fiscalperiodrawdata**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-FYV-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FiscalYearVariant` | `cast( t009b.periv as fis_periv preserving type )` |
| key `FiscalPeriodEndYear` | `t009b.bdatj` |
| key `FiscalPeriodEndMonth` | `t009b.bumon` |
| key `FiscalPeriodEndDay` | `t009b.butag` |
| `FiscalPeriod` | `t009b.poper` |
| `FiscalYearShift` | `t009b.reljr` |
| `_FiscalYearVariant` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Fiscal Periods Raw Data'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING 

@Analytics.internalName: #LOCAL  

//@ObjectModel.representativeKey: 'FiscalPeriodEndDate' //['FiscalPeriodEndYear', 'FiscalPeriodEndMonth', 'FiscalPeriodEndDay']
@Analytics:{
//    dataCategory: #DIMENSION,
    dataExtraction: { enabled: true } }
@Analytics.technicalName: 'IFYPERRAWDATA'

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
                                     
define view entity I_FiscalPeriodRawData as select from t009b 
association [0..1] to I_FiscalYearVariant as _FiscalYearVariant on $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant

{
    //T009B 
    @ObjectModel.foreignKey.association:'_FiscalYearVariant'
    key cast( t009b.periv as fis_periv preserving type ) as FiscalYearVariant, 
//    key  cast(concat(concat(bdatj, bumon), butag) as fins_fperiod_enddate ) as FiscalPeriodEndDate,
    key t009b.bdatj as FiscalPeriodEndYear, 
    key t009b.bumon as FiscalPeriodEndMonth, 
    key t009b.butag as FiscalPeriodEndDay,
      
    t009b.poper as FiscalPeriod, 
    t009b.reljr as FiscalYearShift,
    _FiscalYearVariant
 
}
```
