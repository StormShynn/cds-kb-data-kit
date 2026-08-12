---
name: I_INHREPAIRITEMAVAILYSTATUSTXT
description: "Availability of In-House Service Item - Text"
app_component: CRM-S4-IHR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRITEMAVAILYSTATUSTXT')/$value
semantic_en: "Availability of In-House Service Item - Text"
semantic_vi: "Availability of In-House Service Item - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "availability"
  - "house"
  - "service"
  - "item"
  - "text"
  - "language"
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
# I_INHREPAIRITEMAVAILYSTATUSTXT

**Availability of In-House Service Item - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRITEMAVAILYSTATUSTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(dd07t.ddlanguage as spras preserving type)` | `LANG(1)` | Language Key |
| `InhRepairItemAvailyStatus` | ✓ | |  | `cast(dd07t.domvalue_l as crms4_stat_repair_availability)` | `CHAR(5)` | Availability of Repair Object at Repair Center |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `InhRepairItemAvailyStatusText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_InhRepairItemAvailyStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRITEMAVAILYSTATUSTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHREPAIRITEMAVAILYSTATUSTXT')/$value)*

```abap
@EndUserText.label: 'Availability of In-House Service Item - Text' //2602 CE : Repair replaced with Service
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
  technicalName: 'IIHRITMAVAILSTST'
//  dataExtraction.enabled: true
}
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel.supportedCapabilities: [
  #CDS_MODELING_ASSOCIATION_TARGET,
  #CDS_MODELING_DATA_SOURCE,
  #LANGUAGE_DEPENDENT_TEXT,
  #SEARCHABLE_ENTITY,
  #SQL_DATA_SOURCE
//  #EXTRACTION_DATA_SOURCE
]
@ObjectModel: {
  representativeKey: 'InhRepairItemAvailyStatus',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
}
@Search: {
  searchable: true
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define view entity I_InhRepairItemAvailyStatusTxt
  as select from dd07t
  association        to parent I_InhRepairItemAvailyStatus as _InhRepairItemAvailyStatus on $projection.InhRepairItemAvailyStatus = _InhRepairItemAvailyStatus.InhRepairItemAvailyStatus
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(dd07t.ddlanguage as spras preserving type)          as Language,
      @ObjectModel.foreignKey.association: '_InhRepairItemAvailyStatus'
      @ObjectModel.text.element: ['InhRepairItemAvailyStatusText']
  key cast(dd07t.domvalue_l as crms4_stat_repair_availability) as InhRepairItemAvailyStatus,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                         as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      dd07t.ddtext                                             as InhRepairItemAvailyStatusText,

      _InhRepairItemAvailyStatus,
      _Language
}
where
      dd07t.domname  = 'CRMS4_STAT_REPAIR_AVAILABILITY'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
