---
name: C_MAINTORDPROCESSSUBPHASEDEX
description: Maintenance Order Process Subphase
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCESSSUBPHASEDEX')/$value
semantic_en: Maintenance Order Process Subphase
semantic_vi: Maintenance Order Process Subphase — CDS view tiêu dùng dựa trên I_MaintOrdProcSuborddPhase_2.
keywords:
  - maintenance
  - order
  - process
  - subphase
  - maint
  - phase
  - code
  - overall
  - status
  - entity
tags:
  - PM
  - bo:businesspartner
  - component:PM-WOC-MO-2CL
  - consumption-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# C_MAINTORDPROCESSSUBPHASEDEX

**Maintenance Order Process Subphase**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCESSSUBPHASEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintOrdProcessPhaseCode` | ✓ | |  |  | `CHAR(2)` | Process Phase |
| `MaintOrdProcessSubPhaseCode` | ✓ | |  |  | `CHAR(4)` | Process Subphase |
| `EAMOverallStatusEntity` | ✓ | |  |  | `CHAR(3)` | Entity Type |
| `_MaintOrdProcPhaseText` | | ✓ | | | | |
| `_MaintOrdProcSubphaseText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintOrdProcPhaseText` | `C_MaintOrdProcPhaseTextDEX` | [0..*] |
| `_MaintOrdProcSubphaseText` | `C_MaintOrdProcSubphaseTxtDEX` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCESSSUBPHASEDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCESSSUBPHASEDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Maintenance Order Process Subphase'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #CONSUMPTION

@ObjectModel: {
 usageType: {
 serviceQuality: #C,
 dataClass: #META,
 sizeCategory: #S
 },
 supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ],
 sapObjectNodeType.name: 'MaintOrdProcessSubphase',
 modelingPattern: #ANALYTICAL_FACT
}

@Analytics.dataExtraction.enabled: true
 
define view entity C_MaintOrdProcessSubphaseDEX
  as select from I_MaintOrdProcSuborddPhase_2
  association [0..*] to C_MaintOrdProcPhaseTextDEX   as _MaintOrdProcPhaseText    on _MaintOrdProcPhaseText.MaintOrdProcessPhaseCode = $projection.MaintOrdProcessPhaseCode
  association [0..*] to C_MaintOrdProcSubphaseTxtDEX as _MaintOrdProcSubphaseText on _MaintOrdProcSubphaseText.MaintOrdProcessSubPhaseCode = $projection.MaintOrdProcessSubPhaseCode
{
  key MaintOrdProcessPhaseCode,
  key MaintOrdProcessSubPhaseCode,
  key EAMOverallStatusEntity,
      /* Associations */
      _MaintOrdProcSubphaseText,
      _MaintOrdProcPhaseText
}
```
