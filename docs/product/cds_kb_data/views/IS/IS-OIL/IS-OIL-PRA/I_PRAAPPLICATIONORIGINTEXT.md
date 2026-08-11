---
name: I_PRAAPPLICATIONORIGINTEXT
description: "PRA Application Origin - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAAPPLICATIONORIGINTEXT')/$value
semantic_en: "PRA Application Origin - Text"
semantic_vi: "PRA Application Origin - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "pra"
  - "application"
  - "origin"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAAPPLICATIONORIGINTEXT

**PRA Application Origin - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAAPPLICATIONORIGINTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Origin` | ✓ | |  | `cast (domvalue_l as oiu_application )` | `CHAR(2)` | Application |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `OriginName` |  | |  | `cast (ddtext as oiu_vdm_origin_name )` | `CHAR(60)` | Application Origin Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAAPPLICATIONORIGINTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAAPPLICATIONORIGINTEXT')/$value)*

```abap
@EndUserText.label: 'PRA Application Origin - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVORIGINT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'Origin'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRAApplicationOriginText
  as select from dd07t
{
  key cast (domvalue_l as oiu_application )               as Origin,
      @Semantics.language
  key cast( ddlanguage as spras )                         as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_origin_name )               as OriginName
}
where
      domname  = 'OIU_APPLICATION'
  and as4local = 'A';
```
