---
name: I_RERENTABLEOBJECTCATEGORY
description: "Rerentableobjectcategory"
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
# I_RERENTABLEOBJECTCATEGORY

**Rerentableobjectcategory**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RERentableObjectCategory` | ✓ | |  | `cast( dd07l.domvalue_l as regorentablecategory )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREPARTTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Rentable Object Category'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'RERentableObjectCategory'
@ObjectModel.sapObjectNodeType.name: 'RERentableObjectCategory'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations:true
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    technicalName: 'IREROCATE',
    dataExtraction: {
        enabled: true
    }
}

define root view entity I_RERentableObjectCategory
  as select from dd07l
  composition [0..*] of I_RERentableObjectCategoryText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as regorentablecategory ) as RERentableObjectCategory,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                             as DomainValue,
      _Text
}
where
      dd07l.domname  = 'REGORENTABLECATEGORY'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
