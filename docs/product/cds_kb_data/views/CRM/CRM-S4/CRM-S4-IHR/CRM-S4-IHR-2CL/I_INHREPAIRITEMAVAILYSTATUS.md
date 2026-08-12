---
name: I_INHREPAIRITEMAVAILYSTATUS
description: "Availability of In-House Service Item"
app_component: CRM-S4-IHR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRITEMAVAILYSTATUS')/$value
semantic_en: "Availability of In-House Service Item"
semantic_vi: "Availability of In-House Service Item — CDS view cơ bản dựa trên dd07l."
keywords:
  - "availability"
  - "house"
  - "service"
  - "item"
  - "repair"
  - "availy"
  - "status"
  - "domain"
  - "value"
tags:
  - CRM
  - component:CRM-S4-IHR-2CL
  - CRM-S4
  - CRM-S4-IHR
  - CRM-S4-IHR-2CL
  - interface-view
---
# I_INHREPAIRITEMAVAILYSTATUS

**Availability of In-House Service Item**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRITEMAVAILYSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InhRepairItemAvailyStatus` | ✓ | |  | `cast(dd07l.domvalue_l as crms4_stat_repair_availability)` | `CHAR(5)` | Availability of Repair Object at Repair Center |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_InhRepairItemAvailyStatusTxt` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRITEMAVAILYSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRITEMAVAILYSTATUS')/$value)*

```abap
@EndUserText.label: 'Availability of In-House Service Item'  //2602 CE : Repair replaced with Service
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL
//  dataExtraction.enabled: true
}
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel.supportedCapabilities: [
  #ANALYTICAL_DIMENSION,     //Uncommented 2602 CE
//  #EXTRACTION_DATA_SOURCE,
  #CDS_MODELING_ASSOCIATION_TARGET,
  #CDS_MODELING_DATA_SOURCE,
  #SEARCHABLE_ENTITY,
  #SQL_DATA_SOURCE,
  #VALUE_HELP_PROVIDER
]
@ObjectModel: {
  representativeKey: 'InhRepairItemAvailyStatus',
  dataCategory: #VALUE_HELP,
//  modelingPattern: #ANALYTICAL_DIMENSION,
  resultSet.sizeCategory: #XS,
  usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
}
@Search: {
  searchable: true
}
@Consumption: {
  ranked: true
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define root view entity I_InhRepairItemAvailyStatus
  as select from dd07l
  composition [0..*] of I_InhRepairItemAvailyStatusTxt as _InhRepairItemAvailyStatusTxt
{
      @ObjectModel.text.association: '_InhRepairItemAvailyStatusTxt'
  key cast(dd07l.domvalue_l as crms4_stat_repair_availability) as InhRepairItemAvailyStatus,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                         as DomainValue,

      _InhRepairItemAvailyStatusTxt
}
where
      dd07l.domname  = 'CRMS4_STAT_REPAIR_AVAILABILITY'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
