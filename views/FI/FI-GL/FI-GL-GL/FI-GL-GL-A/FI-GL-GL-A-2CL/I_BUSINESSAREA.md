---
name: I_BUSINESSAREA
description: Businessarea
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_BUSINESSAREA

**Businessarea**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BusinessArea` | ✓ | |  | `gsber` |
| `_Text` | | ✓ | | |
| `_BusinessAreaHierNode` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusinessAreaText` | [0..*] |
| `_BusinessAreaHierNode` | `I_BusinessAreaHierNode` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Business Area'
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIBUSAREA'
@ObjectModel.representativeKey: 'BusinessArea'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.numberOfKeyFields: 1
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions:true
@Search.searchable: true
@AbapCatalog.preserveKey:true
@ObjectModel.sapObjectNodeType.name: 'BusinessArea'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]

define view I_BusinessArea
  as select from tgsb
  association [0..*] to I_BusinessAreaText     as _Text                 on $projection.BusinessArea = _Text.BusinessArea
  association [0..*] to I_BusinessAreaHierNode as _BusinessAreaHierNode on $projection.BusinessArea = _BusinessAreaHierNode.BusinessArea
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement:true
      @Search.fuzzinessThreshold:0.8
      @Search.ranking:#HIGH
      @ObjectModel.hierarchy.association: '_BusinessAreaHierNode'
  key gsber as BusinessArea,
      _Text,
      _BusinessAreaHierNode

};
```
