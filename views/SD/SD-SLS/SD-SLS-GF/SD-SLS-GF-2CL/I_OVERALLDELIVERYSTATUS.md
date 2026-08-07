---
name: I_OVERALLDELIVERYSTATUS
description: "Overalldeliverystatus"
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
  - delivery
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_OVERALLDELIVERYSTATUS

**Overalldeliverystatus**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OverallDeliveryStatus` | ✓ | |  | `cast ( substring(dd07l.domvalue_l, 1, 1) as lfstk preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OverallDeliveryStatusText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'OverallDeliveryStatus'
@ObjectModel.sapObjectNodeType.name: 'SalesDocOverallDeliveryStatus'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Overall Delivery Status'
@Analytics: { dataCategory: #DIMENSION}
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDOVRLDELIVSTS'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@Consumption.ranked: true

define view I_OverallDeliveryStatus
as select from dd07l

association [0..*] to I_OverallDeliveryStatusText as _Text on $projection.OverallDeliveryStatus = _Text.OverallDeliveryStatus
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring(dd07l.domvalue_l, 1, 1) as lfstk preserving type ) as OverallDeliveryStatus,
    
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,
    
    _Text
}
where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A');
```
