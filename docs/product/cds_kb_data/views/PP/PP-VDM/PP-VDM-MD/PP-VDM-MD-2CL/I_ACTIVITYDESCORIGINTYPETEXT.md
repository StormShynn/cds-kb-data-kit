---
name: I_ACTIVITYDESCORIGINTYPETEXT
description: "Activitydescorigintypetext"
semantic_vi: "Cung cấp mô tả văn bản cho loại nguồn hoạt động trong nhiều ngôn ngữ, được sử dụng để hiển thị mô tả hoạt động trong quy trình sản xuất."
keywords:
  - "activity origin type"
  - "activity description"
  - "manufacturing process"
  - "nguồn hoạt động"
  - "mô tả hoạt động"
  - "quy trình sản xuất"
  - "pp-vdm"
  - "pp-vdm-md"
  - "interface view"
  - "text view"
semantic_en: "Provides text descriptions for activity origin types in multiple languages, used to display activity descriptions in manufacturing processes."
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - text-view
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_ACTIVITYDESCORIGINTYPETEXT

**Activitydescorigintypetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ActivityDescOriginType` | ✓ | |  | `cast(substring(t.domvalue_l, 1, 1) as pph_actxy preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `ActivityDescOriginTypeName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IACTYDESCORTYPET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ActivityDescOriginType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Activity Description Origin Type - Text'
@ObjectModel.sapObjectNodeType.name: 'ActivityDescOriginTypeText'
@Analytics.dataExtraction.enabled: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_ActivityDescOriginTypeText
  as select from dd07t as t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'ActivityDescOriginTypeName'
  key cast(substring(t.domvalue_l, 1, 1) as pph_actxy preserving type) as ActivityDescOriginType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key t.ddlanguage as Language,
      @Semantics.text: true
      t.ddtext     as ActivityDescOriginTypeName,

      // Associations
      _Language
}
  where t.domname = 'ACTXY'
    and t.as4local = 'A'
    and t.as4vers  = '0000';
```
