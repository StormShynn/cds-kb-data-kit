---
name: I_DISTRIBUTIONCHANNEL
description: Distributionchannel
app_component: SD-CRF-ORG-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-CRF
  - SD-CRF-ORG
  - interface-view
  - component:SD-CRF-ORG-2CL
  - lob:Sales & Distribution
---
# I_DISTRIBUTIONCHANNEL

**Distributionchannel**

| Property | Value |
|---|---|
| App Component | `SD-CRF-ORG-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DistributionChannel` | ✓ | |  | `vtweg` |
| `DistributionChannelOID` |  | |  | `cast( vtweg as distributionchannel_oid )` |
| `_Text` | | ✓ | | |
| `_DistrChannelHierarchyNode` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DistributionChannelText` | [0..*] |
| `_DistrChannelHierarchyNode` | `I_DistrChannelHierarchyNode` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'DistributionChannel'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Distribution Channel'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDDISTRCHANNEL'
@Search.searchable: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true

@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #ANALYTICAL_DIMENSION,
                                        #SEARCHABLE_ENTITY,
                                        #EXTRACTION_DATA_SOURCE  ]

@ObjectModel.alternativeKey: [{ id: 'OID', uniqueness: #UNIQUE, element: ['DistributionChannelOID'] }]
@ObjectModel.sapObjectNodeType.name:'DistributionChannel'
@ObjectModel.objectIdentifier.oidElement:'DistributionChannelOID'

define view I_DistributionChannel
  as select from           tvtw
  association [0..*] to I_DistributionChannelText   as _Text                      on $projection.DistributionChannel = _Text.DistributionChannel
  association [0..*] to I_DistrChannelHierarchyNode as _DistrChannelHierarchyNode on $projection.DistributionChannel = _DistrChannelHierarchyNode.DistributionChannel

{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_DistrChannelHierarchyNode'
  key vtweg as DistributionChannel,

      @ObjectModel.filter.enabled: false
      @ObjectModel.sort.enabled: false
      cast( vtweg as distributionchannel_oid ) as DistributionChannelOID,
      
      _DistrChannelHierarchyNode,
      _Text
};
```
