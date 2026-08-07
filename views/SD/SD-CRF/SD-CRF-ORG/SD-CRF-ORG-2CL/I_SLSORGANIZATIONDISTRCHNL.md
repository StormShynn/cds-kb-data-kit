---
name: I_SLSORGANIZATIONDISTRCHNL
description: Slsorganizationdistrchnl
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
# I_SLSORGANIZATIONDISTRCHNL

**Slsorganizationdistrchnl**

| Property | Value |
|---|---|
| App Component | `SD-CRF-ORG-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrganization` | ✓ | |  | `vkorg` |  |  |
| `DistributionChannel` | ✓ | |  | `vtweg` |  |  |
| `ReferenceDistributionChannel` |  | |  | `vtwku` |  |  |
| `ReferenceStore` |  | |  | `vlgfi` |  |  |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Distribution Channel for Sales Org'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSLSLSORGDISCH'
@Search.searchable: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SEARCHABLE_ENTITY,
                                        #EXTRACTION_DATA_SOURCE  ]
@ObjectModel.sapObjectNodeType.name: 'SlsOrgDistrChannelAssignment'
define view I_SlsOrganizationDistrChnl
  as select from tvkov

  association [0..1] to I_SalesOrganization   as _SalesOrganization   on $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel as _DistributionChannel on $projection.DistributionChannel = _DistributionChannel.DistributionChannel
{

      @ObjectModel.foreignKey.association: '_SalesOrganization'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key vkorg as SalesOrganization,

      @ObjectModel.foreignKey.association: '_DistributionChannel'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key vtweg as DistributionChannel,

      vtwku as ReferenceDistributionChannel,

      vlgfi as ReferenceStore,

      //Associations
      _SalesOrganization,
      _DistributionChannel
};
```
