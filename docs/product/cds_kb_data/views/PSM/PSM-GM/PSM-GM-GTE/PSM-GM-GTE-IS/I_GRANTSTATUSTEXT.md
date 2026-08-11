---
name: I_GRANTSTATUSTEXT
description: "Grant Status - Text"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSTATUSTEXT')/$value
semantic_en: "Grant Status - Text"
semantic_vi: "Grant Status - Text — CDS view giao diện dựa trên tj02t."
keywords:
  - "grant"
  - "status"
  - "text"
  - "system"
  - "language"
  - "name"
  - "short"
tags:
  - PSM
  - component:PSM-GM-GTE-IS
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
---
# I_GRANTSTATUSTEXT

**Grant Status - Text**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SystemStatus` | ✓ | |  | `istat` | `CHAR(5)` | System status |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `SystemStatusName` |  | |  | `txt30` | `CHAR(30)` | Individual Status of an Object |
| `SystemStatusShortName` |  | |  | `txt04` | `CHAR(4)` | Individual status of an object (short form) |
| `_GrantStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GrantStatus` | `I_GrantStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSTATUSTEXT')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SystemStatus'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M 
@EndUserText.label: 'Grant Status - Text'
@VDM.viewType: #BASIC 
@AbapCatalog.sqlViewName: 'IGRSTATUST'
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.sapObjectNodeType.name: 'GrantLifecycleStatusText'

define view I_GrantStatusText as select from tj02t 
association[0..1] to I_GrantStatus as _GrantStatus on $projection.SystemStatus = _GrantStatus.SystemStatus
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
 {
  @ObjectModel.foreignKey.association: '_GrantStatus'
  key tj02t.istat as SystemStatus, 
  
  @Semantics.language: true
  @ObjectModel.foreignKey.association: '_Language' 
  key tj02t.spras as Language, 
  
  @Semantics.text: true
  tj02t.txt30 as SystemStatusName,

  tj02t.txt04 as SystemStatusShortName,
  
  _GrantStatus,
  _Language
}
```
