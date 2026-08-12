---
name: I_SALESAREA
description: "Salesarea"
app_component: SD-CRF-ORG-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_SALESAREA

**Salesarea**

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
| `Division` | ✓ | |  | `spart` |  |  |
| `ReferenceDistributionChannel` |  | |  | `vtwku` |  |  |
| `RefSlsOrgForSlsDocType` |  | |  | `vkoau` |  |  |
| `RefDistrChnlForSlsDocType` |  | |  | `vtwau` |  |  |
| `RefDivisionForSlsDocType` |  | |  | `spaau` |  |  |
| `ATPResultModeControl` |  | |  | `revfp` |  |  |
| `CreditControlArea` |  | |  | `kkber` |  |  |
| `ReferenceDivision` |  | |  | `spaku` |  |  |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_ReferenceDistributionChannel` | | ✓ | | | | |
| `_CreditControlArea` | | ✓ | | | | |
| `_ReferenceDivision` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_ReferenceDistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_CreditControlArea` | `I_CreditControlArea` | [0..1] |
| `_ReferenceDivision` | `I_Division` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Sales Area'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSALESAREA'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction: {
    enabled: true,
    delta.changeDataCapture.automatic: true
}
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE  ]
@ObjectModel.sapObjectNodeType.name: 'SalesArea'
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_SalesArea
as select from tvta

association [0..1] to I_SalesOrganization   as _SalesOrganization             on $projection.SalesOrganization = _SalesOrganization.SalesOrganization
association [0..1] to I_DistributionChannel as _DistributionChannel           on $projection.DistributionChannel = _DistributionChannel.DistributionChannel
association [0..1] to I_Division            as _Division                      on $projection.Division = _Division.Division
association [0..1] to I_DistributionChannel as _ReferenceDistributionChannel  on $projection.ReferenceDistributionChannel = _ReferenceDistributionChannel.DistributionChannel
association [0..1] to I_CreditControlArea   as _CreditControlArea             on $projection.CreditControlArea = _CreditControlArea.CreditControlArea
association [0..1] to I_Division            as _ReferenceDivision             on $projection.ReferenceDivision = _ReferenceDivision.Division
{
    @ObjectModel.foreignKey.association: '_SalesOrganization'
    key vkorg as SalesOrganization,

    @ObjectModel.foreignKey.association: '_DistributionChannel'
    key vtweg as DistributionChannel,

    @ObjectModel.foreignKey.association: '_Division'
    key spart as Division, 
    
    @ObjectModel.foreignKey.association: '_ReferenceDistributionChannel'
    vtwku     as ReferenceDistributionChannel,
    
    vkoau     as RefSlsOrgForSlsDocType,
    
    vtwau     as RefDistrChnlForSlsDocType,
    
    spaau     as RefDivisionForSlsDocType,

    revfp     as ATPResultModeControl,

    @ObjectModel.foreignKey.association: '_CreditControlArea'
    kkber     as CreditControlArea,
    
    @ObjectModel.foreignKey.association: '_ReferenceDivision'
    spaku     as ReferenceDivision,
        
    _SalesOrganization,
    _DistributionChannel,
    _Division,
    _ReferenceDistributionChannel,
    _CreditControlArea,
    _ReferenceDivision
};
```
