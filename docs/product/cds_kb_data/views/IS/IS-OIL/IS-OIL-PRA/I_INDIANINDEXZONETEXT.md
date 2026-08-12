---
name: I_INDIANINDEXZONETEXT
description: "Indian Index Zone - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INDIANINDEXZONETEXT')/$value
semantic_en: "Indian Index Zone - Text"
semantic_vi: "Indian Index Zone - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "indian"
  - "index"
  - "zone"
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
# I_INDIANINDEXZONETEXT

**Indian Index Zone - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INDIANINDEXZONETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IndianIndexZone` | ✓ | |  | `cast (domvalue_l as /pra/fp_index_zone )` | `CHAR(3)` | ONRR-2014 - Index Zone |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `IndianIndexZoneName` |  | |  | `cast (ddtext as oiu_vdm_indian_index_zone )` | `CHAR(60)` | Indian Index Zone |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INDIANINDEXZONETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INDIANINDEXZONETEXT')/$value)*

```abap
@EndUserText.label: 'Indian Index Zone - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVINDINDEXZONET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'Indianindexzone'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_IndianIndexZoneText
  as select from dd07t
{
  key cast (domvalue_l as /pra/fp_index_zone )                                     as IndianIndexZone,
      @Semantics.language
  key cast( ddlanguage as spras )                                                  as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_indian_index_zone )                                  as IndianIndexZoneName
}
where
      domname  = '/PRA/FP_INDEX_ZONE'
  and as4local = 'A';
```
