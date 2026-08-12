---
name: I_GRANTSTATUS
description: "Grant status"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
