---
name: I_MAINTAINEDORDTYPEPERSLSORG
description: Maintainedordtypeperslsorg
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_MAINTAINEDORDTYPEPERSLSORG

**Maintainedordtypeperslsorg**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrganization` | ✓ | |  | `vkorg` |  |  |
| `DistributionChannel` | ✓ | |  | `vtweg` |  |  |
| `Division` | ✓ | |  | `spart` |  |  |
| `SalesDocumentType` | ✓ | |  | `auart` |  |  |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_SalesDocumentType` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_SalesDocumentType` | `I_SalesDocumentType` | [0..1] |
| `_Division` | `I_Division` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog: {
  sqlViewName: 'IMNTNDORDTYP',
  preserveKey: true,
  compiler.compareFilter: true,
  buffering: {
    type: #FULL,
    status: #ACTIVE
  }
}

@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S
  }, 
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET ]
 }

@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Maintained Order Types per Sales Org'

define view I_MaintainedOrdTypePerSlsOrg 
as select from tvakz

  // Associations  
  association [0..1] to I_SalesOrganization   as _SalesOrganization   on $projection.SalesOrganization   = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel as _DistributionChannel on $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_SalesDocumentType   as _SalesDocumentType   on $projection.SalesDocumentType   = _SalesDocumentType.SalesDocumentType
  association [0..1] to I_Division            as _Division            on $projection.Division            = _Division.Division
{
      @ObjectModel.foreignKey.association: '_SalesOrganization'
  key vkorg as SalesOrganization,
  
      @ObjectModel.foreignKey.association: '_DistributionChannel'
  key vtweg as DistributionChannel,
  
      @ObjectModel.foreignKey.association:'_Division'
  key spart as Division,
  
      @ObjectModel.foreignKey.association:'_SalesDocumentType'
  key auart as SalesDocumentType,
  
      _SalesOrganization,
      _DistributionChannel,
      _SalesDocumentType,
      _Division
}
```
