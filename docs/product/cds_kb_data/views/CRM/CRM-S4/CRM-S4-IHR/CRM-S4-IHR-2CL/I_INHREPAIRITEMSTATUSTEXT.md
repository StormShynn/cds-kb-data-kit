---
name: I_INHREPAIRITEMSTATUSTEXT
description: "Status of In-House Service Item - Text"
app_component: CRM-S4-IHR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRITEMSTATUSTEXT')/$value
semantic_en: "Status of In-House Service Item - Text"
semantic_vi: "Status of In-House Service Item - Text — CDS view cơ bản dựa trên I_CustMgmtLifecycleUserStsText."
keywords:
  - "status"
  - "house"
  - "service"
  - "item"
  - "text"
  - "language"
  - "repair"
  - "category"
  - "name"
tags:
  - CRM
  - component:CRM-S4-IHR-2CL
  - CRM-S4
  - CRM-S4-IHR
  - CRM-S4-IHR-2CL
  - interface-view
---
# I_INHREPAIRITEMSTATUSTEXT

**Status of In-House Service Item - Text**

| Property | Value |
|---|---|
| App Component | `CRM-S4-IHR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRITEMSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key of Description |
| `InhRepairItemStatus` | ✓ | |  | `cast(I_CustMgmtLifecycleUserStsText.CustMgmtLifecycleUserStatus as crms4_repa_item_status_lbl preserving type)` | `CHAR(4)` | Repair Object Status |
| `InhRepairItemCategory` | ✓ | |  | `ServiceDocItemCategory` | `CHAR(4)` | Item Category |
| `InhRepairItemStatusName` |  | |  | `cast(I_CustMgmtLifecycleUserStsText.CustMgmtLifecycleUserStsName as crms4_repa_item_status_dsc_lbl preserving type)` | `CHAR(40)` | Description of Repair Object Status |
| `_InhRepairItemStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_InhRepairItemCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InhRepairItemStatus` | `I_InhRepairItemStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_InhRepairItemCategory` | `I_ServiceDocItemCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRITEMSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRITEMSTATUSTEXT')/$value)*

```abap
@EndUserText.label: 'Status of In-House Service Item - Text' //2602 CE : Repair replaced with Service
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'InhRepairItemStatus',
    usageType: {serviceQuality: #B, sizeCategory: #S, dataClass: #CUSTOMIZING},
    supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]  //Added 2602 CE
}
@Analytics.technicalName: 'IIHRITEMSTATUST'
@Metadata: {
    ignorePropagatedAnnotations: true
}
define view entity I_InhRepairItemStatusText
  as select from I_CustMgmtLifecycleUserStsText
    inner join   I_CustMgmtLfcycUsrStsMapping on I_CustMgmtLfcycUsrStsMapping.CustMgmtLifecycleUserStatus = I_CustMgmtLifecycleUserStsText.CustMgmtLifecycleUserStatus
    inner join   I_ServiceDocItemCategory     on  I_ServiceDocItemCategory.ServiceObjectType = 'BUS2000257'     //2602 CE : Replacement of I_CustMgmtDocItemCategory ( deprecated ) with I_ServiceDocItemCategory ( Successor )
                                              and I_ServiceDocItemCategory.StatusProfile             = I_CustMgmtLfcycUsrStsMapping.StatusProfile  //2602 CE : Replacement of I_CustMgmtDocItemCategory ( deprecated ) with I_ServiceDocItemCategory ( Successor )

  association [0..1] to I_InhRepairItemStatus     as _InhRepairItemStatus   on  $projection.InhRepairItemStatus   = _InhRepairItemStatus.InhRepairItemStatus
                                                                            and $projection.InhRepairItemCategory = _InhRepairItemStatus.InhRepairItemCategory
  association [0..1] to I_Language                as _Language              on  $projection.Language = _Language.Language
  association [0..1] to I_ServiceDocItemCategory as _InhRepairItemCategory on  $projection.InhRepairItemCategory = _InhRepairItemCategory.ServiceDocItemCategory  //2602 CE : Replacement of I_CustMgmtDocItemCategory ( deprecated ) with I_ServiceDocItemCategory ( Successor )

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key I_CustMgmtLifecycleUserStsText.Language,
      @ObjectModel.foreignKey.association: '_InhRepairItemStatus'
  key cast(I_CustMgmtLifecycleUserStsText.CustMgmtLifecycleUserStatus as crms4_repa_item_status_lbl preserving type) as InhRepairItemStatus,
      @ObjectModel.foreignKey.association: '_InhRepairItemCategory'
  key I_ServiceDocItemCategory.ServiceDocItemCategory                                                                                  as InhRepairItemCategory, //2602 CE : Replacement of I_CustMgmtDocItemCategory ( deprecated ) with I_ServiceDocItemCategory ( Successor )

      @Semantics.text: true
      cast(I_CustMgmtLifecycleUserStsText.CustMgmtLifecycleUserStsName as crms4_repa_item_status_dsc_lbl preserving type)                           as InhRepairItemStatusName,

      /* Associations */
      _InhRepairItemStatus,
      _Language,
      _InhRepairItemCategory
}
where
  I_CustMgmtLfcycUsrStsMapping.CustMgmtLifecycleUserStsField = 'STAT_LIFECYCLE'
```
