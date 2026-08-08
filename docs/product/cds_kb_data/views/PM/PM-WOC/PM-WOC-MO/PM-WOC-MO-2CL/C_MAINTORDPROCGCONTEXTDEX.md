---
name: C_MAINTORDPROCGCONTEXTDEX
description: "Maintenance Order Processing Context"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCGCONTEXTDEX')/$value
semantic_en: "Maintenance Order Processing Context"
semantic_vi: "Maintenance Order Processing Context — CDS view tiêu dùng dựa trên I_MaintOrderProcessingContext."
keywords:
  - "maintenance"
  - "order"
  - "processing"
  - "context"
  - "maint"
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
# C_MAINTORDPROCGCONTEXTDEX

**Maintenance Order Processing Context**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCGCONTEXTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintOrderProcessingContext` | ✓ | |  |  | `CHAR(2)` | Additional Processing Context for Maintenance Order |
| `_ProcessingContextText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProcessingContextText` | `C_MaintOrdProcgCntxtTextDEX` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCGCONTEXTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCGCONTEXTDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Maintenance Order Processing Context'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
 supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ],
 usageType: {
  serviceQuality: #C,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
 },
 sapObjectNodeType.name: 'MaintOrderProcessingContext',
 modelingPattern: #ANALYTICAL_FACT
}
@VDM.viewType: #CONSUMPTION

define view entity C_MaintOrdProcgContextDEX
  as select from I_MaintOrderProcessingContext
  association [0..*] to C_MaintOrdProcgCntxtTextDEX as _ProcessingContextText on _ProcessingContextText.MaintOrderProcessingContext = $projection.MaintOrderProcessingContext
{
  key MaintOrderProcessingContext,

      /* Associations */
      _ProcessingContextText
}
```
