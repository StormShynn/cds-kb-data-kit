---
name: I_INHREPAIRITEMSTATUS
description: "Status of In-House Service Item"
app_component: CRM-S4-IHR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRITEMSTATUS')/$value
semantic_en: "Status of In-House Service Item"
semantic_vi: "Status of In-House Service Item — CDS view cơ bản dựa trên I_CustMgmtLfcycUsrStsMapping."
keywords:
  - "status"
  - "house"
  - "service"
  - "item"
  - "repair"
  - "category"
tags:
  - CRM
  - component:CRM-S4-IHR-2CL
  - CRM-S4
  - CRM-S4-IHR
  - CRM-S4-IHR-2CL
  - interface-view
---
# I_INHREPAIRITEMSTATUS

**Status of In-House Service Item**

| Property | Value |
|---|---|
| App Component | `CRM-S4-IHR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRITEMSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InhRepairItemStatus` | ✓ | |  | `cast(CustMgmtLifecycleUserStatus as crms4_repa_item_status_lbl preserving type)` | `CHAR(4)` | Repair Object Status |
| `InhRepairItemCategory` | ✓ | |  | `ServiceDocItemCategory` | `CHAR(4)` | Item Category |
| `_InhRepairItemCategory` | | ✓ | | | | |
| `_InhRepairItemStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InhRepairItemCategory` | `I_ServiceDocItemCategory` | [0..1] |
| `_InhRepairItemStatusText` | `I_InhRepairItemStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRITEMSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRITEMSTATUS')/$value)*

```abap
@EndUserText.label: 'Status of In-House Service Item'   ////2602 CE : Repair replaced with Service
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
    dataCategory: #DIMENSION,
    internalName: #LOCAL
}
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
    representativeKey: 'InhRepairItemStatus',
    usageType: {serviceQuality: #B, sizeCategory: #S, dataClass: #CUSTOMIZING},
    supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION] //Added 2602 CE
}
@Metadata: {
    ignorePropagatedAnnotations: true
}
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
}
@AbapCatalog: {
    sqlViewName: 'IIHRITEMSTATUS',
    compiler.compareFilter: true,
    preserveKey: true
}

define view I_InhRepairItemStatus
  as select from I_CustMgmtLfcycUsrStsMapping
    inner join   I_ServiceDocItemCategory on  I_ServiceDocItemCategory.ServiceObjectType = 'BUS2000257'  //2602 CE : Replacement of I_CustMgmtDocItemCategory ( deprecated ) with I_ServiceDocItemCategory ( Successor )
                                          and I_CustMgmtLfcycUsrStsMapping.StatusProfile = I_ServiceDocItemCategory.StatusProfile  //2602 CE : Replacement of I_CustMgmtDocItemCategory ( deprecated ) with I_ServiceDocItemCategory ( Successor )
  association [0..1] to I_ServiceDocItemCategory as _InhRepairItemCategory   on  $projection.InhRepairItemCategory = _InhRepairItemCategory.ServiceDocItemCategory //2602 CE : Replacement of I_CustMgmtDocItemCategory ( deprecated ) with I_ServiceDocItemCategory ( Successor )
  association [0..*] to I_InhRepairItemStatusText as _InhRepairItemStatusText on  $projection.InhRepairItemStatus   = _InhRepairItemStatusText.InhRepairItemStatus
                                                                              and $projection.InhRepairItemCategory = _InhRepairItemStatusText.InhRepairItemCategory

{

      @ObjectModel.text.association: '_InhRepairItemStatusText'
  key cast(CustMgmtLifecycleUserStatus as crms4_repa_item_status_lbl preserving type) as InhRepairItemStatus,

      @ObjectModel.foreignKey.association: '_InhRepairItemCategory'
  key ServiceDocItemCategory                                                          as InhRepairItemCategory, //2602 CE : Replacement of I_CustMgmtDocItemCategory ( deprecated ) with I_ServiceDocItemCategory ( Successor )



      /* Associations */
      _InhRepairItemStatusText,
      _InhRepairItemCategory

}
where
  I_CustMgmtLfcycUsrStsMapping.CustMgmtLifecycleUserStsField = 'STAT_LIFECYCLE'
```
