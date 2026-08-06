---
name: I_SALESSCHEDGAGRMTDVTNPRFL
description: Salesschedgagrmtdvtnprfl
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SALESSCHEDGAGRMTDVTNPRFL

**Salesschedgagrmtdvtnprfl**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `DeviationProfile` | `deviationprofile` |
| `DeviationProfileDescription` | `deviationprofiledescription` |
| `OrdQtyAlrtUprLmtRatioInPct` | `ordqtyalrtuprlmtratioinpct` |
| `OrdQtyAlrtLowrLmtRatioInPct` | `ordqtyalrtlowrlmtratioinpct` |
| `OrdQtyWrngUprLmtRatioInPct` | `ordqtywrnguprlmtratioinpct` |
| `OrdQtyWrngLowrLmtRatioInPct` | `ordqtywrnglowrlmtratioinpct` |
| `CumltvQtyAlrtUprLmtRatioInPct` | `cumltvqtyalrtuprlmtratioinpct` |
| `CumltvQtyAlrtLowrLmtRatioInPct` | `cumltvqtyalrtlowrlmtratioinpct` |
| `CumltvQtyWrngUprLmtRatioInPct` | `cumltvqtywrnguprlmtratioinpct` |
| `CumltvQtyWrngLowrLmtRatioInPct` | `cumltvqtywrnglowrlmtratioinpct` |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType:#BASIC
@AbapCatalog:{
  sqlViewName: 'ISSADVTNPRFL',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel:{
  representativeKey: 'DeviationProfile',
  sapObjectNodeType.name: 'SlsSchedgAgrmtDeviationProfile',
  usageType:{
   dataClass: #CUSTOMIZING,
   serviceQuality: #A,
   sizeCategory: #S
  },
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
  modelingPattern: [ #ANALYTICAL_DIMENSION ]
}
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED,
  personalData.blocking: #NOT_REQUIRED
}
@Analytics: { dataCategory: #DIMENSION, 
              dataExtraction.enabled: true,
              internalName:#LOCAL }
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@EndUserText.label: 'Deviation Profile'

define root view I_SalesSchedgAgrmtDvtnPrfl
  as select from sdsadvtnprfl
{
  key deviationprofile                as DeviationProfile,
      deviationprofiledescription     as DeviationProfileDescription,
      
      //Order Quantity
      ordqtyalrtuprlmtratioinpct     as OrdQtyAlrtUprLmtRatioInPct,
      ordqtyalrtlowrlmtratioinpct    as OrdQtyAlrtLowrLmtRatioInPct,
      ordqtywrnguprlmtratioinpct     as OrdQtyWrngUprLmtRatioInPct,
      ordqtywrnglowrlmtratioinpct    as OrdQtyWrngLowrLmtRatioInPct,
      
      //Cumulative Quantity
      cumltvqtyalrtuprlmtratioinpct  as CumltvQtyAlrtUprLmtRatioInPct,
      cumltvqtyalrtlowrlmtratioinpct as CumltvQtyAlrtLowrLmtRatioInPct,
      cumltvqtywrnguprlmtratioinpct  as CumltvQtyWrngUprLmtRatioInPct,
      cumltvqtywrnglowrlmtratioinpct as CumltvQtyWrngLowrLmtRatioInPct
}
```
