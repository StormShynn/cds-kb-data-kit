---
name: I_TRIBALALLOTTEELEASETYPETEXT
description: "PRA Tribal Or Allottee Lease Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRIBALALLOTTEELEASETYPETEXT')/$value
semantic_en: "PRA Tribal Or Allottee Lease Type - Text"
semantic_vi: "PRA Tribal Or Allottee Lease Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "pra"
  - "tribal"
  - "allottee"
  - "lease"
  - "type"
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
# I_TRIBALALLOTTEELEASETYPETEXT

**PRA Tribal Or Allottee Lease Type - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRIBALALLOTTEELEASETYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TribalOrAllotteeLeaseType` | ✓ | |  | `cast (domvalue_l as /pra/fp_tribal_allottee_ind )` | `CHAR(1)` | ONRR-2014 - Tribal / Allottee Indicator |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `TribalOrAllotteeLeaseTypeName` |  | |  | `cast (ddtext as oiu_vdm_tri_allt_lease_typ_txt )` | `CHAR(60)` | PRA Tribal or Allottee lease type text |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRIBALALLOTTEELEASETYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRIBALALLOTTEELEASETYPETEXT')/$value)*

```abap
@EndUserText.label: 'PRA Tribal Or Allottee Lease Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTRALTLEASETYT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'TribalOrAllotteeLeaseType'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_TribalAllotteeLeaseTypeText as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cast (domvalue_l as /pra/fp_tribal_allottee_ind )                         as TribalOrAllotteeLeaseType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras )                                        as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_tri_allt_lease_typ_txt )                    as TribalOrAllotteeLeaseTypeName,
      _Language
}
where
      domname  = 'OIUREP_MMS_2014_TRIB_ALLOT_CD'
  and as4local = 'A';
```
