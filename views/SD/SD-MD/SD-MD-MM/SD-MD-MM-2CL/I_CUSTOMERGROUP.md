---
name: I_CUSTOMERGROUP
description: Customergroup
app_component: SD-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-MM
  - interface-view
  - customer
  - component:SD-MD-MM-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_CUSTOMERGROUP

**Customergroup**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerGroup` | ✓ | |  | `kdgrp` |  |  |
| `_Text` | | ✓ | | | | |
| `_CustomerGroupHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CustomerGroupText` | [0..*] |
| `_CustomerGroupHierarchyNode` | `I_CustomerGroupHierarchyNode` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CustomerGroup'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Customer Group'

@Analytics : {
          dataCategory: #DIMENSION,
          dataExtraction: {
           enabled: true,
           delta.changeDataCapture: {
           automatic: true
           }
         }
       }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDCUSTGRP'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #ANALYTICAL_DIMENSION,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY  ]
@ObjectModel.sapObjectNodeType.name: 'CustomerGroup'
define view I_CustomerGroup
  as select from t151

  association [0..*] to I_CustomerGroupText          as _Text                       on $projection.CustomerGroup = _Text.CustomerGroup
  association [0..*] to I_CustomerGroupHierarchyNode as _CustomerGroupHierarchyNode on $projection.CustomerGroup = _CustomerGroupHierarchyNode.CustomerGroup
{
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_CustomerGroupHierarchyNode'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
  key kdgrp as CustomerGroup,
      _Text,
      _CustomerGroupHierarchyNode
};
```
