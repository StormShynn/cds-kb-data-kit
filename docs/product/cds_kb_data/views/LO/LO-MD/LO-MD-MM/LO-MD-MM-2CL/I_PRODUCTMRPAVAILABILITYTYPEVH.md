---
name: I_PRODUCTMRPAVAILABILITYTYPEVH
description: "Productmrpavailabilitytypevh"
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
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTMRPAVAILABILITYTYPEVH

**Productmrpavailabilitytypevh**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPAvailabilityType` | ✓ | |  | `cast ( dd07l.domvalue_l as miskz )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProductMRPAvailabilityTypeT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRODMRPAVLTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Analytics.internalName: #LOCAL
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'MRP Availability Type'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'MRPAvailabilityType'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@Consumption.ranked: true
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name:'MRPAvailabilityType'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER


/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */

define view I_ProductMRPAvailabilityTypeVH
  as select from dd07l
  association [0..*] to I_ProductMRPAvailabilityTypeT as _Text on $projection.MRPAvailabilityType = _Text.MRPAvailabilityType
{
       @ObjectModel.text.association: '_Text'
  key  cast ( dd07l.domvalue_l as miskz ) as MRPAvailabilityType,
       @Consumption.hidden: true
       @Search.defaultSearchElement: true
       @Search.fuzzinessThreshold: 0.8
       @Search.ranking: #HIGH
       dd07l.domvalue_l                   as DomainValue,
       _Text
}
where
      dd07l.domname  = 'MISKZ'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
