---
name: I_REUSABLEOBJECTSTATUSOBJECT
description: "Reusableobjectstatusobject"
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - interface-view
  - status
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REUSABLEOBJECTSTATUSOBJECT

**Reusableobjectstatusobject**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RealEstateUsableObjectUUID` | ✓ | |  | `REGenericRentalObjectUUID` |  |  |
| `StatusProfile` | ✓ | |  |  |  |  |
| `StatusCode` | ✓ | |  |  |  |  |
| `InternalRealEstateNumber` |  | | `_REUsableObject` | `InternalRealEstateNumber` |  |  |
| `REStatusObject` |  | |  |  |  |  |
| `IsUserStatus` |  | |  |  |  |  |
| `StatusIsInactive` |  | |  |  |  |  |
| `_REUsableObject` | | ✓ | | | | |
| `_StatusCode` | | ✓ | | | | |
| `_StatusProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REUsableObject` | `I_REUsableObject` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY

@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction.enabled: true
}


@ObjectModel: {
            usageType:{
                        dataClass: #MASTER,
                        serviceQuality: #C,
                        sizeCategory: #XL
            },
            representativeKey: 'StatusCode',
            semanticKey: [ 'StatusProfile', 'StatusCode' ],
            sapObjectNodeType.name: 'REUsableObjectStatusObject',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ],
            modelingPattern: #ANALYTICAL_DIMENSION
}

@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@VDM: { viewType: #COMPOSITE }
@EndUserText.label: 'Real Estate Usable Object Status Object'
define view entity I_REUsableObjectStatusObject 
  as select from I_REGenericRentalObjStatusObj as _REGenericRentalObjStatusObj

  association [1..1] to I_REUsableObject as _REUsableObject on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID
{
      @ObjectModel.foreignKey.association: '_REUsableObject'
  key REGenericRentalObjectUUID as RealEstateUsableObjectUUID,
      @ObjectModel.foreignKey.association: '_StatusProfile'
  key StatusProfile,
  key StatusCode,
      _REUsableObject.InternalRealEstateNumber,
      REStatusObject,
      IsUserStatus,
      StatusIsInactive,
      
      /* Associations */
      _StatusCode,
      _StatusProfile,
      _REUsableObject
}
where
      StatusIsInactive          = ' '
  and REGenericRentalObjectType = 'U'
```
