---
name: C_MAINTORDPROCSUBPHASETXTDEX
description: Maintenance Order Process Subphase
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCSUBPHASETXTDEX')/$value
semantic_en: Maintenance Order Process Subphase
semantic_vi: Maintenance Order Process Subphase — CDS view tiêu dùng dựa trên I_EAMProcessSubPhaseText.
keywords:
  - maintenance
  - order
  - process
  - subphase
  - maint
  - phase
  - code
  - language
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
# C_MAINTORDPROCSUBPHASETXTDEX

**Maintenance Order Process Subphase**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCSUBPHASETXTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintOrdProcessSubPhaseCode` | ✓ | |  | `EAMProcessSubPhaseCode` | `CHAR(4)` | Process Subphase |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `MaintOrdProcessSubPhaseCodeTxt` |  | |  | `EAMProcessSubPhaseCodeDesc` | `CHAR(40)` | Description of Overall Process Subphase |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCSUBPHASETXTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDPROCSUBPHASETXTDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Maintenance Order Process Subphase'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #CONSUMPTION
@ObjectModel: {
 usageType: {
  dataClass: #META,
  serviceQuality: #C,
  sizeCategory: #L
  },
  supportedCapabilities:[ #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
   dataCategory: #TEXT,
   representativeKey: 'MaintOrdProcessSubPhaseCode'
}
@Analytics.dataExtraction.enabled: true


define view entity C_MaintOrdProcSubphaseTxtDEX
  as select from I_EAMProcessSubPhaseText
{
      /* start suppress warning shlporigin_not_inherited */
  key EAMProcessSubPhaseCode     as MaintOrdProcessSubPhaseCode,
  key Language,
      @Semantics.text: true
      EAMProcessSubPhaseCodeDesc as MaintOrdProcessSubPhaseCodeTxt
      /* end suppress warning shlporigin_not_inherited */
}
```
