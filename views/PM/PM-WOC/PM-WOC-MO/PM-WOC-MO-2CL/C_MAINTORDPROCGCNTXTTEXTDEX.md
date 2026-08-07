---
name: C_MAINTORDPROCGCNTXTTEXTDEX
description: Maintenance Order Processing Context
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCGCNTXTTEXTDEX')/$value
semantic_en: Maintenance Order Processing Context
semantic_vi: Maintenance Order Processing Context — CDS view tiêu dùng dựa trên I_MaintOrdProcessingContextT.
keywords:
  - maintenance
  - order
  - processing
  - context
  - maint
  - language
  - text
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
# C_MAINTORDPROCGCNTXTTEXTDEX

**Maintenance Order Processing Context**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCGCNTXTTEXTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintOrderProcessingContext` | ✓ | |  |  | `CHAR(2)` | Additional Processing Context for Maintenance Order |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `MaintOrdProcessingContextText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCGCNTXTTEXTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCGCNTXTTEXTDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Maintenance Order Processing Context'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
 supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
 modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
 dataCategory: #TEXT,
 representativeKey: 'MaintOrderProcessingContext',
 usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #S,
    serviceQuality: #C
    },
    sapObjectNodeType.name: 'MaintOrdProcessingContextText'
}
@VDM.viewType: #CONSUMPTION

define view entity C_MaintOrdProcgCntxtTextDEX 
as select from I_MaintOrdProcessingContextT
{
  key MaintOrderProcessingContext,
  key Language,
  @Semantics.text: true
  MaintOrdProcessingContextText
}
```
