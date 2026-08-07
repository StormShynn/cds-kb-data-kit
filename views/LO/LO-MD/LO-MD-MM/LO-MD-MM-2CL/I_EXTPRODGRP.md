---
name: I_EXTPRODGRP
description: Extprodgrp
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
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_EXTPRODGRP

**Extprodgrp**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ExternalProductGroup` | ✓ | |  | `cast(extwg as externalproductgroup preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ExtProdGrpText` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IEXTPRODGRP',
  preserveKey: true,
  compiler.compareFilter: true,
  buffering: {
    status: #ACTIVE,
    type: #FULL
  }
 }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'External Product Group'
@ObjectModel:{
  representativeKey: 'ExternalProductGroup',
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SEARCHABLE_ENTITY,
                           #VALUE_HELP_PROVIDER,
                           #ANALYTICAL_DIMENSION,
                           #EXTRACTION_DATA_SOURCE
  ],
  usageType:{
    serviceQuality: #A,
    sizeCategory : #S,
    dataClass: #CUSTOMIZING
  }
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true

@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@Consumption.ranked: true
@ObjectModel.sapObjectNodeType.name:'ExternalProductGroup'
define view I_ExtProdGrp
  as select from twew
  association [0..*] to I_ExtProdGrpText as _Text on $projection.ExternalProductGroup = _Text.ExternalProductGroup
{

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key cast(extwg as externalproductgroup preserving type ) as ExternalProductGroup,

      _Text
}
```
