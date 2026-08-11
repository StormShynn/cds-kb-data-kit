---
name: I_PRAROYTYWYOVRRDEOPRTDTYPET
description: "PRA Royty WY Override Owner Oprtd - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYWYOVRRDEOPRTDTYPET')/$value
semantic_en: "PRA Royty WY Override Owner Oprtd - Text"
semantic_vi: "PRA Royty WY Override Owner Oprtd - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "pra"
  - "royty"
  - "override"
  - "owner"
  - "oprtd"
  - "text"
  - "operated"
  - "type"
  - "language"
  - "ownr"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAROYTYWYOVRRDEOPRTDTYPET

**PRA Royty WY Override Owner Oprtd - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYWYOVRRDEOPRTDTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OverrideOwnerOperatedType` | ✓ | |  | `cast (domvalue_l as oiuy6_wy_override_operated_fl )` | `CHAR(1)` | Royalty 2.0 - WY - Override Operated Flag |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `OverrideOwnrOperatedTypeName` |  | |  | `cast (ddtext as oiu_vdm_wy_ovrrde_oprted_fl_nm )` | `CHAR(60)` | Wyoming Override Operated Flag Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYWYOVRRDEOPRTDTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYWYOVRRDEOPRTDTYPET')/$value)*

```abap
@EndUserText.label: 'PRA Royty WY Override Owner Oprtd - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVROYOOOPTYT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'OverrideOwnerOperatedType'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRARoytyWYOvrrdeOprtdTypeT
  as select from dd07t

{
  key cast (domvalue_l as oiuy6_wy_override_operated_fl )       as OverrideOwnerOperatedType,
      @Semantics.language

  key cast( ddlanguage as spras )                               as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_wy_ovrrde_oprted_fl_nm )          as OverrideOwnrOperatedTypeName
}
where
      domname  = 'OIUY6_WY_OVERRIDE_OPERATED_FL'
  and as4local = 'A';
```
