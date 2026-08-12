---
name: I_GRANTSTATUS
description: "Grant status"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSTATUS')/$value
semantic_en: "Grant status"
semantic_vi: "Grant status — CDS view giao diện dựa trên tj02."
keywords:
  - "grant"
  - "status"
  - "system"
  - "hidden"
tags:
  - PSM
  - component:PSM-GM-GTE-IS
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
---
# I_GRANTSTATUS

**Grant status**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SystemStatus` | ✓ | |  | `istat` | `CHAR(5)` | System status |
| `StatusIsHidden` |  | |  | `nodis` | `CHAR(1)` | 'Do not display status' flag |
| `_GrantStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GrantStatusText` | `I_GrantStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSTATUS')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IGRSTATUS'
@ObjectModel.representativeKey: 'SystemStatus'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Grant status'
@Analytics : {dataCategory: #DIMENSION , dataExtraction.enabled : true}
@VDM.viewType: #BASIC 
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: {
     usageType: {
         dataClass: #CUSTOMIZING,
         serviceQuality: #A,
         sizeCategory: #M
     },
     supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}
@ObjectModel.sapObjectNodeType.name: 'GrantLifecycleStatus'

define view I_GrantStatus as select from tj02 

association[0..*] to I_GrantStatusText as _GrantStatusText on $projection.SystemStatus = _GrantStatusText.SystemStatus
{ 
  @ObjectModel.text.association: '_GrantStatusText'
  key tj02.istat as SystemStatus,
  tj02.nodis as StatusIsHidden,
  
  _GrantStatusText
}
```
