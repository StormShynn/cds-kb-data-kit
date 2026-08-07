---
name: I_REGNRCRENTALOBJUSAGECATEGORY
description: Regnrcrentalobjusagecategory
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - interface-view
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REGNRCRENTALOBJUSAGECATEGORY

**Regnrcrentalobjusagecategory**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `REGnrcRentalObjUsageCategory` | ✓ | |  | `usagecategory` |
| `REGenericRentalObjectType` |  | |  | `objtype` |
| `REGnrcRntlObjUsgeCatHasPrtflo` |  | |  | `hasportfolio` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_REGnrcRentalObjUsageCatText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory:[#NONE]
@AccessControl.authorizationCheck:#NOT_REQUIRED

@Analytics:{
  dataExtraction.enabled: true,
  technicalName: 'IREGOUSCAT'
 }


@ObjectModel: {
            usageType:{
                        dataClass: #CUSTOMIZING,
                        serviceQuality: #A,
                        sizeCategory: #S
            },
            representativeKey: 'REGnrcRentalObjUsageCategory',
            sapObjectNodeType.name: 'REGnrcRntlObjectUsageCategory',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ],
            modelingPattern: #ANALYTICAL_DIMENSION
}


@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #BASIC
@EndUserText.label:'RE Generic Rental Object Usage Category'
define view entity I_REGnrcRentalObjUsageCategory
  as select from tivgousagecate as _REGnrcRentalObjUsageCategory
  association [0..*] to I_REGnrcRentalObjUsageCatText as _Text on $projection.REGnrcRentalObjUsageCategory = _Text.REGnrcRentalObjUsageCategory
{
  key usagecategory as REGnrcRentalObjUsageCategory,
      objtype       as REGenericRentalObjectType,
      hasportfolio  as REGnrcRntlObjUsgeCatHasPrtflo,
      /* Associations*/
      _Text
}
```
