---
name: I_SHORTENEDFISCALYEAR
description: "Shortenedfiscalyear"
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
# I_SHORTENEDFISCALYEAR

**Shortenedfiscalyear**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-FYV-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYearVariant` | ✓ | |  | `cast( t009y.periv as fis_periv preserving type )` |  |  |
| `FiscalYear` | ✓ | |  | `gjahr` |  |  |
| `PostingPeriodsNumberVal` |  | |  | `anzbp` |  |  |
| `NumberOfSpecialPeriods` |  | |  | `anzsp` |  |  |
| `FiscalYearStartDate` |  | |  | `gjbeg` |  |  |
| `FiscalYearEndDate` |  | |  | `gjend` |  |  |
| `_FiscalYearVariant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Shortened fiscal years in FI-AA'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING 

@Analytics.internalName: #LOCAL  

//@ObjectModel.representativeKey: ['FiscalYear']
@Analytics:{
//    dataCategory: #DIMENSION,
    dataExtraction: { enabled: true } }
@Analytics.technicalName: 'IFISHORTFY'

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE]
                                     
define view entity I_ShortenedFiscalYear as select from t009y 
association [0..1] to I_FiscalYearVariant as _FiscalYearVariant on $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
{
    //T009Y 
    @ObjectModel.foreignKey.association:'_FiscalYearVariant'
    key cast( t009y.periv as fis_periv preserving type ) as FiscalYearVariant, 
    key t009y.gjahr                                      as FiscalYear, 
    t009y.anzbp                                          as PostingPeriodsNumberVal, 
    t009y.anzsp                                          as NumberOfSpecialPeriods, 
    t009y.gjbeg                                          as FiscalYearStartDate, 
    t009y.gjend                                          as FiscalYearEndDate,

    _FiscalYearVariant    
}
```
