---
name: I_OVERALLDELIVERYBLOCKSTATUS
description: "Overalldeliveryblockstatus"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - delivery
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_OVERALLDELIVERYBLOCKSTATUS

**Overalldeliveryblockstatus**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OverallDeliveryBlockStatus` | ✓ | |  | `cast ( substring(dd07l.domvalue_l, 1, 1) as lsstk_g preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OverallDeliveryBlockStatusT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'OverallDeliveryBlockStatus'
@ObjectModel.sapObjectNodeType.name: 'SlsDocOvrlDeliveryBlockStatus'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Overall Delivery Block Status'
@Analytics: {dataCategory: #DIMENSION,
             dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDOVRLDVBLKSTS'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@Consumption.ranked: true

define view I_OverallDeliveryBlockStatus
as select from dd07l

association [0..*] to I_OverallDeliveryBlockStatusT as _Text on $projection.OverallDeliveryBlockStatus = _Text.OverallDeliveryBlockStatus
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring(dd07l.domvalue_l, 1, 1) as lsstk_g preserving type ) as OverallDeliveryBlockStatus,
    
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,
    
     _Text

}
where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A')
  and ((dd07l.domvalue_l = '') or (dd07l.domvalue_l = 'B') or (dd07l.domvalue_l = 'C'));
```
