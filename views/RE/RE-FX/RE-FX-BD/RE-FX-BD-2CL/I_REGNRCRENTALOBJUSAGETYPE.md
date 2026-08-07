---
name: I_REGNRCRENTALOBJUSAGETYPE
description: "Regnrcrentalobjusagetype"
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
# I_REGNRCRENTALOBJUSAGETYPE

**Regnrcrentalobjusagetype**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REGenericRentalObjectUsageType` | ✓ | |  | `usagetype` |  |  |
| `REGnrcRentalObjUsageCategory` |  | |  | `usagecategory` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_REGnrcRentalObjUsageTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Rental Object Usage Type'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC

@Analytics:{
  dataExtraction.enabled: true,
  technicalName: 'IREGOUSTYP'
 }

@ObjectModel: {
            usageType:{
                        dataClass: #CUSTOMIZING,
                        serviceQuality: #A,
                        sizeCategory: #S
            },
            compositionRoot: true,
            representativeKey: 'REGenericRentalObjectUsageType',
            sapObjectNodeType.name: 'RERentalObjectUsageType',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE ],
            modelingPattern: #ANALYTICAL_DIMENSION
}

define view entity I_REGnrcRentalObjUsageType
  as select from tivgousagetype
  association [0..*] to I_REGnrcRentalObjUsageTypeText as _Text on $projection.REGenericRentalObjectUsageType = _Text.REGenericRentalObjectUsageType

{
  key usagetype     as REGenericRentalObjectUsageType,
      usagecategory as REGnrcRentalObjUsageCategory,
// Association      
      _Text

}
```
