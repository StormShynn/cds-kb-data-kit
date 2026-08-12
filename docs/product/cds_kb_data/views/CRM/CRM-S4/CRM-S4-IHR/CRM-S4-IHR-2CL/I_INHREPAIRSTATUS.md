---
name: I_INHREPAIRSTATUS
description: "In-House Service Status"
app_component: CRM-S4-IHR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRSTATUS')/$value
semantic_en: "In-House Service Status"
semantic_vi: "In-House Service Status — CDS view tổng hợp dựa trên I_InhRepairUserStatus."
keywords:
  - "house"
  - "service"
  - "status"
  - "repair"
tags:
  - CRM
  - component:CRM-S4-IHR-2CL
  - CRM-S4
  - CRM-S4-IHR
  - CRM-S4-IHR-2CL
  - interface-view
---
# I_INHREPAIRSTATUS

**In-House Service Status**

| Property | Value |
|---|---|
| App Component | `CRM-S4-IHR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InhRepairStatus` | ✓ | |  | `cast(InhRepairUserStatus as crms4_repa_status_lbl preserving type )` | `CHAR(4)` | In-House Repair Status |
| `_InhRepairStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InhRepairStatusText` | `I_InhRepairStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRSTATUS')/$value)*

```abap
@EndUserText.label: 'In-House Service Status'  //2602 CE : Repair replaced with Service
@VDM: {
    viewType: #COMPOSITE,
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
    representativeKey: 'InhRepairStatus',
    usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #CUSTOMIZING},
    supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION] //Added 2602 CE
}
@Metadata: {
    ignorePropagatedAnnotations: true
}
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
}
@AbapCatalog: {
    sqlViewName: 'IIHRSTATUS',
    compiler.compareFilter: true,
    preserveKey: true
}


/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_InhRepairStatus
as select from I_InhRepairUserStatus 
association [0..*] to I_InhRepairStatusText as _InhRepairStatusText on $projection.InhRepairStatus = _InhRepairStatusText.InhRepairStatus
{
@ObjectModel.text.association: '_InhRepairStatusText'
key cast(InhRepairUserStatus as crms4_repa_status_lbl preserving type ) as InhRepairStatus,

_InhRepairStatusText
}

union select from I_SrvcLifeCycleSystemStatus
association [0..*] to I_InhRepairStatusText as _InhRepairStatusText on $projection.InhRepairStatus = _InhRepairStatusText.InhRepairStatus
{

$session.client as mandt,
@ObjectModel.text.association: '_InhRepairStatusText'
key cast(SrvcLifeCycleSystemStatus as  crms4_stat_lifecycle preserving type ) as InhRepairStatus,

_InhRepairStatusText

}
where SrvcLifeCycleSystemStatus <> 'D'  // No status 'Released' in In-House Repair
```
