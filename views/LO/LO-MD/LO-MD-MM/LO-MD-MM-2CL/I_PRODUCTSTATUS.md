---
name: I_PRODUCTSTATUS
description: "Productstatus"
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
  - product
  - status
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTSTATUS

**Productstatus**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Status` | ✓ | |  | `cast(t141.mmsta as profilecode preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProductStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
   sqlViewName: 'IPRDSTATUS',
   compiler.compareFilter: true,
   preserveKey: true,
   buffering: {
     status: #ACTIVE,
     type: #FULL
   }
 }
 @VDM:{
    lifecycle: {
      status: #DEPRECATED,
      successor: 'I_ProductProfileCode'
 }}
@Analytics: {
  dataCategory: #DIMENSION ,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture.automatic: true
  }
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Cross-Plant Product Status'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@ObjectModel: {
  representativeKey: 'Status',
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #VALUE_HELP_PROVIDER,
                           #SEARCHABLE_ENTITY,
                           #ANALYTICAL_DIMENSION,
                           #EXTRACTION_DATA_SOURCE
  ],
  usageType: {
    serviceQuality: #A,
    sizeCategory : #S,
    dataClass: #CUSTOMIZING
  },
  dataCategory: #VALUE_HELP,
  sapObjectNodeType.name:'ProductProfileCode'
}
//@ObjectModel.resultSet.sizeCategory: #XS
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Consumption.ranked: true

define view I_ProductStatus
  as select from t141
  association [0..*] to I_ProductStatusText as _Text on $projection.Status = _Text.Status
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key cast(t141.mmsta as profilecode preserving type ) as Status,

      _Text
}
```
