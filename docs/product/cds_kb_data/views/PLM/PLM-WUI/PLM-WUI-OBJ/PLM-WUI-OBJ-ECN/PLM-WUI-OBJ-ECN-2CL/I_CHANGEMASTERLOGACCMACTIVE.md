---
name: I_CHANGEMASTERLOGACCMACTIVE
description: "This CDS view provides information on whether access control management (ACM) is active for the change master object. This CDS view provides the prerequisites for answering the following business question: Is access control management (ACM) active for the change master object?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERLOGACCMACTIVE')/$value
semantic_en: "This CDS view provides information on whether access control management (ACM) is active for the change master object. This CDS view provides the prerequisites for answering the following business question: Is access control management (ACM) active for the change master object?"
semantic_vi: "Change Number LogAccM Active — CDS view giao diện dựa trên I_LogAccMObjectTypeActive."
keywords:
  - "change"
  - "number"
  - "logaccm"
  - "active"
  - "object"
  - "type"
tags:
  - PLM
  - bo:plant
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
---
# I_CHANGEMASTERLOGACCMACTIVE

**This CDS view provides information on whether access control management (ACM) is active for the change master object. This CDS view provides the prerequisites for answering the following business question: Is access control management (ACM) active for the change master object?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERLOGACCMACTIVE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LogAccMObjectType` | ✓ | |  |  | `CHAR(10)` | Object Type |
| `LogAccMObjectTypeIsActive` |  | |  |  | `CHAR(1)` | Access Control Activated for Object Type |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERLOGACCMACTIVE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERLOGACCMACTIVE')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@EndUserText.label: 'Change Number LogAccM Active'
define view entity I_ChangeMasterLogAccMActive
  as select from I_LogAccMObjectTypeActive
{
  key LogAccMObjectType,
      LogAccMObjectTypeIsActive
}
where
  LogAccMObjectType = 'PLM_ECN'
```
