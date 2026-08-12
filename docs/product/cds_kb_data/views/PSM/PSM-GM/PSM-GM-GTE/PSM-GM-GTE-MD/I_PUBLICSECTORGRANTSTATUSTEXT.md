---
name: I_PUBLICSECTORGRANTSTATUSTEXT
description: "Grant Status - Text"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICSECTORGRANTSTATUSTEXT')/$value
semantic_en: "Grant Status - Text"
semantic_vi: "Grant Status - Text — CDS view giao diện dựa trên psm_gmstatus_t."
keywords:
  - "grant"
  - "status"
  - "text"
  - "language"
  - "name"
tags:
  - PSM
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
  - bo:project
---
# I_PUBLICSECTORGRANTSTATUSTEXT

**Grant Status - Text**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICSECTORGRANTSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `GrantStatus` | ✓ | |  | `status` | `CHAR(5)` | Grant Status |
| `GrantStatusName` |  | |  | `description` | `CHAR(30)` | Grant Status Name |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICSECTORGRANTSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICSECTORGRANTSTATUSTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPSMGMSTST'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel: {
     dataCategory: #TEXT,
     representativeKey: 'GrantStatus',
     usageType: {
         dataClass: #CUSTOMIZING,
         serviceQuality: #A,
         sizeCategory: #S
     },
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ]
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Grant Status - Text'
define view I_PublicSectorGrantStatusText
  as select from psm_gmstatus_t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language    as Language,
  key status      as GrantStatus,
      @Semantics.text: true
      description as GrantStatusName,
      _Language
}
```
