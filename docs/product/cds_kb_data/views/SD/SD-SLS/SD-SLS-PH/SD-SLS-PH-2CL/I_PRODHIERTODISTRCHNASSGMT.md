---
name: I_PRODHIERTODISTRCHNASSGMT
description: "Prodhiertodistrchnassgmt"
app_component: SD-SLS-PH-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-PH
  - interface-view
  - component:SD-SLS-PH-2CL
  - lob:Sales & Distribution
---
# I_PRODHIERTODISTRCHNASSGMT

**Prodhiertodistrchnassgmt**

| Property | Value |
|---|---|
| App Component | `SD-SLS-PH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesProductHierarchyPurpose` | ✓ | |  | `salesproducthierarchypurpose` |  |  |
| `SalesOrganization` | ✓ | |  | `salesorganization` |  |  |
| `DistributionChannel` | ✓ | |  | `distributionchannel` |  |  |
| `UniversalHierVersValidTo` | ✓ | |  | `universalhierversvalidto` |  |  |
| `UniversalHierVersValidFrom` |  | |  | `universalhierversvalidfrom` |  |  |
| `ProductHierarchy` |  | |  | `producthierarchy` |  |  |
| `LastChangeDateTime` |  | |  | `cast( lastchangedatetime as last_changed_date_time preserving type )` |  |  |
| `_SalesProductHierarchyPurpose` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesProductHierarchyPurpose` | `I_SalesProductHierarchyPurpose` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: false
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@AccessControl: {
    authorizationCheck: #CHECK,
    personalData.blocking: #NOT_REQUIRED
}
@AbapCatalog: {
    sqlViewName: 'IPHDCASSGMT',
    compiler.compareFilter: true,
    buffering: {
        status: #ACTIVE,
        type: #FULL
    }
}
@Metadata: {
    ignorePropagatedAnnotations: true
}
@EndUserText.label: 'Product Hierarchy Assignment in Sales'
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'ProductHierarchyAssignment'
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
define view I_ProdHierToDistrChnAssgmt
  as select from sddc_ph_assgmt as ProdHierToDistrChnAssgmt
  association [0..1] to I_SalesProductHierarchyPurpose as _SalesProductHierarchyPurpose on $projection.SalesProductHierarchyPurpose = _SalesProductHierarchyPurpose.SalesProductHierarchyPurpose
  association [0..1] to I_SalesOrganization            as _SalesOrganization            on $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel          as _DistributionChannel          on $projection.DistributionChannel = _DistributionChannel.DistributionChannel
{
      @ObjectModel.foreignKey.association: '_SalesProductHierarchyPurpose'
  key salesproducthierarchypurpose                                         as SalesProductHierarchyPurpose,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
  key salesorganization                                                    as SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
  key distributionchannel                                                  as DistributionChannel,
  key universalhierversvalidto                                             as UniversalHierVersValidTo,
      universalhierversvalidfrom                                           as UniversalHierVersValidFrom,
      producthierarchy                                                     as ProductHierarchy,

      @Semantics.systemDateTime.lastChangedAt: true
      cast( lastchangedatetime as last_changed_date_time preserving type ) as LastChangeDateTime,

      _SalesProductHierarchyPurpose,
      _SalesOrganization,
      _DistributionChannel
}
```
