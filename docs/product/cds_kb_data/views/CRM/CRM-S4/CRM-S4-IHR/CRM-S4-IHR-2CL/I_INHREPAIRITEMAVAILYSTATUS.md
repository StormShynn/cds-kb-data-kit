---
name: I_INHREPAIRITEMAVAILYSTATUS
description: "Availability of In-House Service Item"
app_component: CRM-S4-IHR-2CL
software_component: SAPSCORE
release_state: released
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
