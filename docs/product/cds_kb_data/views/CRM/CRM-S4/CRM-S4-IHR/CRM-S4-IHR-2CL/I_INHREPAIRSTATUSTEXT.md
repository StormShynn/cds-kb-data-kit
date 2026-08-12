---
name: I_INHREPAIRSTATUSTEXT
description: "In-House Service Status - Text"
app_component: CRM-S4-IHR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRSTATUSTEXT')/$value
semantic_en: "In-House Service Status - Text"
semantic_vi: "In-House Service Status - Text — CDS view tổng hợp dựa trên I_InhRepairUserStatusText."
keywords:
  - "house"
  - "service"
  - "status"
  - "text"
  - "repair"
  - "language"
  - "name"
tags:
  - CRM
  - component:CRM-S4-IHR-2CL
  - CRM-S4
  - CRM-S4-IHR
  - CRM-S4-IHR-2CL
  - interface-view
---
# I_INHREPAIRSTATUSTEXT

**In-House Service Status - Text**

| Property | Value |
|---|---|
| App Component | `CRM-S4-IHR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InhRepairStatus` | ✓ | |  | `cast(InhRepairUserStatus as crms4_repa_status_lbl preserving type )` | `CHAR(4)` | In-House Repair Status |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key of Description |
| `InhRepairStatusName` |  | |  | `cast(InhRepairUserStatusName as crms4_repa_status_desc_lbl )` | `CHAR(60)` | Description of In-House Repair Status |
| `_InhRepairStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InhRepairStatus` | `I_InhRepairStatus` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRSTATUSTEXT')/$value)*

```abap
@EndUserText.label: 'In-House Service Status - Text' //2602 CE : Repair replaced with Service
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'InhRepairStatus',
    usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #CUSTOMIZING},
    supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT] //Added 2602 CE
}
@Metadata: {
    ignorePropagatedAnnotations: true
}
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
}
@AbapCatalog: {
    sqlViewName: 'IIHRSTATUSTEXT',
    compiler.compareFilter: true,
    preserveKey: true

}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ] }*/
define view I_InhRepairStatusText
  as 
  select from I_InhRepairUserStatusText
  association [0..1] to I_InhRepairStatus as _InhRepairStatus on $projection.InhRepairStatus = _InhRepairStatus.InhRepairStatus
{

  key cast(InhRepairUserStatus     as crms4_repa_status_lbl  preserving type ) as InhRepairStatus,
      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language'
  key Language,
      @Semantics.text: true
      cast(InhRepairUserStatusName as crms4_repa_status_desc_lbl  ) as InhRepairStatusName,
      _InhRepairStatus,
      _Language
}
union 
select from I_SrvcLifeCycleSystemStatusT
association [0..1] to I_InhRepairStatus as _InhRepairStatus on $projection.InhRepairStatus = _InhRepairStatus.InhRepairStatus
{
       $session.client               as mandt,     
  key  cast(SrvcLifeCycleSystemStatus as crms4_stat_lifecycle preserving type )     as InhRepairStatus,
       @Semantics.language:true
       @ObjectModel.foreignKey.association: '_Language'
  key  Language,
       @Semantics.text: true
   cast(SrvcLifeCycleSystemStatusName as crms4_stat_lifecycle_desc ) as InhRepairStatusName,
  
       _InhRepairStatus,
       _Language
}
where SrvcLifeCycleSystemStatus <> 'D'  // No status 'Released' in In-House Repair
```
