---
name: I_PUBLICSECTORGRANTSTATUS
description: "Grant Status"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICSECTORGRANTSTATUS')/$value
semantic_en: "Grant Status"
semantic_vi: "Grant Status — CDS view giao diện (master data) dựa trên psm_gmstatus."
keywords:
  - "grant"
  - "status"
  - "lifecycle"
  - "system"
tags:
  - PSM
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
  - bo:project
---
# I_PUBLICSECTORGRANTSTATUS

**Grant Status**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICSECTORGRANTSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantStatus` | ✓ | |  | `status` | `CHAR(5)` | Grant Status |
| `GrantLifecycleStatus` |  | |  | `lifecycle_status` | `CHAR(5)` | Lifecycle Status |
| `GrantIsSystemStatus` |  | |  | `is_system_status` | `CHAR(1)` | Grant System Status |
| `_Text` | | ✓ | | | | |
| `_GrantStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PublicSectorGrantStatusText` | [0..*] |
| `_GrantStatusText` | `I_GrantStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICSECTORGRANTSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICSECTORGRANTSTATUS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPSMGMSTS'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: {
     usageType: {
         dataClass: #MASTER,
         serviceQuality: #A,
         sizeCategory: #M
     },
     supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.buffering: { status: #ACTIVE, type: #FULL }
@ObjectModel.representativeKey: 'GrantStatus'
@EndUserText.label: 'Grant Status'
define view I_PublicSectorGrantStatus
  as select from psm_gmstatus
  association [0..*] to I_PublicSectorGrantStatusText as _Text on $projection.GrantStatus = _Text.GrantStatus
  association[0..*] to I_GrantStatusText as _GrantStatusText on $projection.GrantLifecycleStatus = _GrantStatusText.SystemStatus
{
      @ObjectModel.text.association: '_Text'
  key status           as GrantStatus,
      lifecycle_status as GrantLifecycleStatus,
      is_system_status as GrantIsSystemStatus,
      _Text[1:Language = $session.system_language].GrantStatusName,
      _GrantStatusText,
      _Text // Make association public
}
```
