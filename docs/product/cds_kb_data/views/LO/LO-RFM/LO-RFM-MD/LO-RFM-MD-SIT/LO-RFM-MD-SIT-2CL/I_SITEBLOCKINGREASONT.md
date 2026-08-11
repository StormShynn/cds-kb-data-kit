---
name: I_SITEBLOCKINGREASONT
description: "Site Blocking Reason - Text"
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEBLOCKINGREASONT')/$value
semantic_en: "Site Blocking Reason - Text"
semantic_vi: "Site Blocking Reason - Text — CDS view giao diện dựa trên twrf11t."
keywords:
  - "site"
  - "blocking"
  - "reason"
  - "text"
  - "language"
  - "name"
tags:
  - LO
  - bo:plant
  - component:LO-RFM-MD-SIT-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
---
# I_SITEBLOCKINGREASONT

**Site Blocking Reason - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEBLOCKINGREASONT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteBlockingReason` | ✓ | |  | `spgr1` | `CHAR(2)` | Blocking Reason |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `SiteBlockingReasonName` |  | |  | `sptex` | `CHAR(20)` | Description |
| `_SiteBlockingReason` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SiteBlockingReason` | `I_SiteBlockingReason` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEBLOCKINGREASONT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEBLOCKINGREASONT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISTEBLCKNGREASNT'
@EndUserText.label: 'Site Blocking Reason - Text'

@AbapCatalog: {
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC

@Analytics: { 
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}

@Metadata.ignorePropagatedAnnotations:true

@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'SiteBlockingReason',
    supportedCapabilities: [ #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #LANGUAGE_DEPENDENT_TEXT,
                             #EXTRACTION_DATA_SOURCE ],
    usageType: {
        serviceQuality: #A,
        sizeCategory: #S,
        dataClass: #CUSTOMIZING
   }
}

define view I_SiteBlockingReasonT
  as select from twrf11t
  association [1..1] to I_SiteBlockingReason as _SiteBlockingReason on $projection.SiteBlockingReason = _SiteBlockingReason.SiteBlockingReason
  association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language
{
  key spgr1   as SiteBlockingReason,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras   as Language,
      @Semantics.text: true
      sptex   as SiteBlockingReasonName,

      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SiteBlockingReason,
      _Language
}
```
