---
name: I_REGNRCRENTALOBJOWNERSHIP
description: "Regnrcrentalobjownership"
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
# I_REGNRCRENTALOBJOWNERSHIP

**Regnrcrentalobjownership**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REGnrcRentalObjOwnershipID` | ✓ | |  | `ownershipid` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_REGnrcRentalObjOwnershipText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:{
  dataExtraction.enabled: true,
  technicalName: 'IREGOOWNSHP'
 }

@ObjectModel: {
            usageType:{
                        dataClass: #CUSTOMIZING,
                        serviceQuality: #A,
                        sizeCategory: #S
            },
            representativeKey: 'REGnrcrentalObjOwnershipId',
            sapObjectNodeType.name: 'RERentalObjectOwnership',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ],
            modelingPattern: #ANALYTICAL_DIMENSION
}


@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Real Estate Rental Object Ownership'
define view entity I_REGnrcRentalObjOwnership
  as select from tivgoownership
  association [0..*] to I_REGnrcRentalObjOwnershipText as _Text on $projection.REGnrcRentalObjOwnershipID = _Text.REGnrcRentalObjOwnershipID
{
  key ownershipid as REGnrcRentalObjOwnershipID,
      _Text

}
```
