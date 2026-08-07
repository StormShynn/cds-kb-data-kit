---
name: I_PRODUCTSTDVH
description: Productstdvh
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - value-help
  - standard-value-help
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTSTDVH

**Productstdvh**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Product` | ✓ | |  |  |
| `ProductExternalID` |  | |  |  |
| `ProductGroup` |  | |  |  |
| `ProductType` |  | |  |  |
| `AuthorizationGroup` |  | |  |  |
| `_Text` | | ✓ | | |
| `_ProductGroup_2` | | ✓ | | |
| `_ProductType` | | ✓ | | |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IPROD_VH',
    compiler.compareFilter: true,
    preserveKey: true
}

@VDM.viewType: #COMPOSITE

@ObjectModel: {
  dataCategory : #VALUE_HELP,
  representativeKey: 'Product',
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #VALUE_HELP_PROVIDER,
                           #SEARCHABLE_ENTITY
  ],
  usageType:{
    serviceQuality: #A,
    sizeCategory: #L,
    dataClass: #MASTER
  }
}

@AccessControl: {
  authorizationCheck: #CHECK,
  privilegedAssociations: ['_Text'],
  personalData.blocking: #NOT_REQUIRED
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Product Value Help'

define view I_ProductStdVH
  as select from I_Product
{

      @ObjectModel.text.association: '_Text'
      @Search:{
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
  key Product,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @EndUserText.label: 'External Product ID'
      ProductExternalID,

      _Text,
      @Consumption.hidden: true
      ProductGroup,
      @Consumption.hidden: true
      ProductType,
      @Consumption.hidden: true
      AuthorizationGroup,

      @Consumption.hidden: true
      _ProductGroup_2,
      @Consumption.hidden: true
      _ProductType
}
where
  IsMarkedForDeletion = ''
```
