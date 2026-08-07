---
name: I_IN_PLANTBUSINESSPLACEDETAIL
description: IN Plantbusinessplacedetail
app_component: FI-LOC-LO-IN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - plant
  - component:FI-LOC-LO-IN
  - lob:Finance
  - bo:Plant
---
# I_IN_PLANTBUSINESSPLACEDETAIL

**IN Plantbusinessplacedetail**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-IN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Plant` | ✓ | |  |  |
| `PlantName` |  | |  |  |
| `CompanyCode` |  | | `_ValuationArea` | `CompanyCode` |
| `BusinessPlace` |  | |  |  |
| `_CompanyCode` | | ✓ | | |
| `_BusinessPlace` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_BusinessPlace` | `I_IN_BusinessPlaceTaxDetail` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'GST India Business Place for Plant'
@ObjectModel:{
               usageType:{
                           sizeCategory: #S,
                           serviceQuality: #B,
                           dataClass:#ORGANIZATIONAL
                         },
               supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
               modelingPattern: #NONE
             }
@AccessControl:{
                 authorizationCheck: #MANDATORY,
                 personalData.blocking: #NOT_REQUIRED
               }
@VDM:{
       viewType: #COMPOSITE,
       lifecycle.contract.type: #PUBLIC_LOCAL_API
     }
@Search.searchable: true
@Metadata:{
            allowExtensions: false,
            ignorePropagatedAnnotations: true
          }
define view entity I_IN_PlantBusinessPlaceDetail
  as select from I_Plant
  association [0..1] to I_CompanyCode               as _CompanyCode   on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_IN_BusinessPlaceTaxDetail as _BusinessPlace on  $projection.CompanyCode   = _BusinessPlace.CompanyCode
                                                                      and $projection.BusinessPlace = _BusinessPlace.BusinessPlace
{
      @ObjectModel.text.element: ['PlantName']
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key Plant,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      PlantName,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      _ValuationArea.CompanyCode as CompanyCode,
      BusinessPlace,

      /* Association */
      _CompanyCode,
      _BusinessPlace
}
where
  _StandardOrganizationAddress.Country = 'IN'
```
