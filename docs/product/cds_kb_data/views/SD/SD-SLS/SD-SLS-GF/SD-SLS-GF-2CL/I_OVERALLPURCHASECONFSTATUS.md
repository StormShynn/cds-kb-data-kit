---
name: I_OVERALLPURCHASECONFSTATUS
description: "Overallpurchaseconfstatus"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_OVERALLPURCHASECONFSTATUS

**Overallpurchaseconfstatus**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OverallPurchaseConfStatus` | ✓ | |  | `substring(dd07l.domvalue_l, 1, 1)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OverallPurchaseConfStatusT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'OverallPurchaseConfStatus'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER  ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Overall Purchase Confirmation Status'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDOVPURCONFSTS'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'SlsDocOvrlPurchaseConfStatus'

define view I_OverallPurchaseConfStatus 
as select from dd07l

association [0..*] to I_OverallPurchaseConfStatusT as _Text on $projection.OverallPurchaseConfStatus = _Text.OverallPurchaseConfStatus
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as OverallPurchaseConfStatus,
    
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,
    
    _Text
}
where (dd07l.domname = 'COSTA') and (dd07l.as4local = 'A');
```
