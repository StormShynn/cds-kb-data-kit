---
name: I_REUSABLEOBJECTSTATUSOBJECT
description: "Reusableobjectstatusobject"
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
