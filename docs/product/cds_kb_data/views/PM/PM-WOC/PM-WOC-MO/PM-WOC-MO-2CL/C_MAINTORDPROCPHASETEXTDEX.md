---
name: C_MAINTORDPROCPHASETEXTDEX
description: "Maintenance Order Process Phase"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCPHASETEXTDEX')/$value
semantic_en: "Maintenance Order Process Phase"
semantic_vi: "Maintenance Order Process Phase — CDS view tiêu dùng dựa trên I_MaintOrderProcessPhaseText_2."
keywords:
  - "maintenance"
  - "order"
  - "process"
  - "phase"
  - "maint"
  - "code"
  - "language"
  - "desc"
tags:
  - PM
  - component:PM-WOC-MO-2CL
  - consumption-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# C_MAINTORDPROCPHASETEXTDEX

**Maintenance Order Process Phase**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCPHASETEXTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintOrdProcessPhaseCode` | ✓ | |  |  | `CHAR(2)` | Process Phase |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `MaintOrdProcessPhaseDesc` |  | |  | `MaintenanceProcessingPhaseDesc` | `CHAR(60)` | Short Text for Fixed Values |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCPHASETEXTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCPHASETEXTDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Maintenance Order Process Phase'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
usageType: {
    dataClass: #META,
    sizeCategory: #S,
    serviceQuality: #C
  }, 
   supportedCapabilities:[ #EXTRACTION_DATA_SOURCE,
                           #LANGUAGE_DEPENDENT_TEXT ],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
   dataCategory: #TEXT,
   representativeKey: 'MaintOrdProcessPhaseCode',
   sapObjectNodeType.name: 'MaintOrdProcessPhaseText'
}
@VDM.viewType: #CONSUMPTION
@Analytics.dataExtraction.enabled: true

define view entity C_MaintOrdProcPhaseTextDEX 
  as select from I_MaintOrderProcessPhaseText_2
{
  key MaintOrdProcessPhaseCode,
  key Language,
  @Semantics.text: true
  MaintenanceProcessingPhaseDesc as MaintOrdProcessPhaseDesc
}
```
