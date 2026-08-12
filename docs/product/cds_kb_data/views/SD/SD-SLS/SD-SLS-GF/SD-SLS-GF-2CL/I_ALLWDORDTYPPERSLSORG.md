---
name: I_ALLWDORDTYPPERSLSORG
description: "Allwdordtypperslsorg"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_ALLWDORDTYPPERSLSORG

**Allwdordtypperslsorg**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrganization` | ✓ | |  |  |  |  |
| `DistributionChannel` | ✓ | |  |  |  |  |
| `Division` | ✓ | |  |  |  |  |
| `SalesDocumentType` | ✓ | |  |  |  |  |
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
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog: {
  sqlViewName: 'IALLWDORDTYP',
  preserveKey:true,
  compiler.compareFilter: true
}

@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory : #S,
    dataClass: #MASTER
  }, 
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET ]
}

@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Allowed Order Types per Sales Org'

define view I_AllwdOrdTypPerSlsOrg
  as select from I_MaintainedOrdTypePerSlsOrg as MaintainedOrdTypePerSlsOrg
  
  // Associations  
  association [0..1] to I_SalesOrganization   as _SalesOrganization   on $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel as _DistributionChannel on $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_SalesDocumentType   as _SalesDocumentType   on $projection.SalesDocumentType = _SalesDocumentType.SalesDocumentType
  association [0..1] to I_Division            as _Division            on $projection.Division = _Division.Division
{
      @ObjectModel.foreignKey.association: '_SalesOrganization'
  key MaintainedOrdTypePerSlsOrg.SalesOrganization as SalesOrganization,
  
      @ObjectModel.foreignKey.association: '_DistributionChannel'
  key MaintainedOrdTypePerSlsOrg.DistributionChannel as DistributionChannel,
  
      @ObjectModel.foreignKey.association:'_Division'
  key MaintainedOrdTypePerSlsOrg.Division as Division,
  
      @ObjectModel.foreignKey.association:'_SalesDocumentType'
  key MaintainedOrdTypePerSlsOrg.SalesDocumentType as SalesDocumentType,
  
      _SalesOrganization,
      _DistributionChannel,
      _SalesDocumentType,
      _Division
}      
 
  union

  select from I_MaintainedOrdTypePerSlsOrg as MaintainedOrdTypePerSlsOrg  
  inner join I_SalesArea as SalesArea on MaintainedOrdTypePerSlsOrg.SalesOrganization   = SalesArea.RefSlsOrgForSlsDocType
                                     and MaintainedOrdTypePerSlsOrg.DistributionChannel = SalesArea.RefDistrChnlForSlsDocType
                                     and MaintainedOrdTypePerSlsOrg.Division            = SalesArea.RefDivisionForSlsDocType            
                  
  // Associations  
  association [0..1] to I_SalesOrganization   as _SalesOrganization   on $projection.SalesOrganization   = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel as _DistributionChannel on $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_SalesDocumentType   as _SalesDocumentType   on $projection.SalesDocumentType   = _SalesDocumentType.SalesDocumentType
  association [0..1] to I_Division            as _Division            on $projection.Division            = _Division.Division
{
      @ObjectModel.foreignKey.association: '_SalesOrganization'
  key SalesArea.SalesOrganization as SalesOrganization,
  
      @ObjectModel.foreignKey.association: '_DistributionChannel'
  key SalesArea.DistributionChannel as DistributionChannel,
  
      @ObjectModel.foreignKey.association:'_Division'
  key SalesArea.Division as Division,
  
      @ObjectModel.foreignKey.association:'_SalesDocumentType'
  key MaintainedOrdTypePerSlsOrg.SalesDocumentType as SalesDocumentType,
  
      _SalesOrganization,
      _DistributionChannel,
      _SalesDocumentType,
      _Division
}
```
