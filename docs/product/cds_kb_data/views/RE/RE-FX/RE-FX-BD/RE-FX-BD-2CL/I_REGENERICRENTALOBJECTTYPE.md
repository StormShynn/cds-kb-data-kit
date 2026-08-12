---
name: I_REGENERICRENTALOBJECTTYPE
description: "Regenericrentalobjecttype"
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_REGENERICRENTALOBJECTTYPE

**Regenericrentalobjecttype**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REGenericRentalObjectType` | ✓ | |  | `cast( dd07l.domvalue_l as regoobjtype )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory:[#NONE]
@AccessControl.authorizationCheck:#NOT_REQUIRED

@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true,
    technicalName: 'IREGOTYPE'
  }

@ObjectModel: {
            usageType:{
                        dataClass: #CUSTOMIZING,
                        serviceQuality: #A,
                        sizeCategory: #S
            },
            representativeKey: 'REGenericRentalObjectType',
            sapObjectNodeType.name: 'REGenericRentalObjectType',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY ],
            modelingPattern: #ANALYTICAL_DIMENSION
}

@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@EndUserText.label:'Real Estate Generic Rental Object Type'
define root view entity I_REGenericRentalObjectType
  as select from dd07l
  composition [0..*] of I_REGenericRentalObjectTypeTxt as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as regoobjtype ) as REGenericRentalObjectType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      dd07l.domvalue_l                        as DomainValue,

      _Text
}
where
      dd07l.domname  = 'REGOOBJTYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
