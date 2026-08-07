---
name: C_MAINTORDPROCPHASETEXTDEX
description: Maintenance Order Process Phase
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCPHASETEXTDEX')/$value
semantic_en: Maintenance Order Process Phase
semantic_vi: Maintenance Order Process Phase — CDS view tiêu dùng dựa trên I_MaintOrderProcessPhaseText_2.
keywords:
  - maintenance
  - order
  - process
  - phase
  - maint
  - code
  - language
  - desc
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
