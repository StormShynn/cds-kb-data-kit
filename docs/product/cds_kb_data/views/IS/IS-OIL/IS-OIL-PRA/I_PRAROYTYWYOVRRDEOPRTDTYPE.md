---
name: I_PRAROYTYWYOVRRDEOPRTDTYPE
description: "PRA Royty WY Override Owner Oprtd"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYWYOVRRDEOPRTDTYPE')/$value
semantic_en: "PRA Royty WY Override Owner Oprtd"
semantic_vi: "PRA Royty WY Override Owner Oprtd — CDS view giao diện dựa trên dd07l."
keywords:
  - "pra"
  - "royty"
  - "override"
  - "owner"
  - "oprtd"
  - "operated"
  - "type"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAROYTYWYOVRRDEOPRTDTYPE

**PRA Royty WY Override Owner Oprtd**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYWYOVRRDEOPRTDTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OverrideOwnerOperatedType` | ✓ | |  | `cast (domvalue_l as oiuy6_wy_override_operated_fl )` | `CHAR(1)` | Royalty 2.0 - WY - Override Operated Flag |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRARoytyWYOvrrdeOprtdTypeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYWYOVRRDEOPRTDTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYWYOVRRDEOPRTDTYPE')/$value)*

```abap
@EndUserText.label: 'PRA Royty WY Override Owner Oprtd'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVROYOOOPTY'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'OverrideOwnerOperatedType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAWyomingRoyaltyOvrdOprtdType'
define view I_PRARoytyWYOvrrdeOprtdType
  as select from dd07l
  association [0..*] to I_PRARoytyWYOvrrdeOprtdTypeT as _Text on $projection.OverrideOwnerOperatedType = _Text.OverrideOwnerOperatedType
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiuy6_wy_override_operated_fl )       as OverrideOwnerOperatedType   ,
      _Text

}
where
      domname  = 'OIUY6_WY_OVERRIDE_OPERATED_FL'
  and as4local = 'A';
```
