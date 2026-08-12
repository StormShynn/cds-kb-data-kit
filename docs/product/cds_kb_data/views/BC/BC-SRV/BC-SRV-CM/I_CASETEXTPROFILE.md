---
name: I_CASETEXTPROFILE
description: "Case Text Profile"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETEXTPROFILE')/$value
semantic_en: "Case Text Profile"
semantic_vi: "Case Text Profile — CDS view giao diện dựa trên scmgtextprof."
keywords:
  - "case"
  - "text"
  - "profile"
  - "sort"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - bo:companycode
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASETEXTPROFILE

**Case Text Profile**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETEXTPROFILE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseTextProfile` | ✓ | |  | `profile_id` | `CHAR(8)` | Text Profile for Case Notes |
| `CaseSortTextBy` |  | |  | `sorted_by` | `CHAR(2)` | Case: Sort Texts By |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CaseTextProfileText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETEXTPROFILE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETEXTPROFILE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASETEXTPROFILE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Text Profile'
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseTextProfile'
define view I_CaseTextProfile
  as select from scmgtextprof

  association [0..*] to I_CaseTextProfileText as _Text on $projection.CaseTextProfile = _Text.CaseTextProfile

{

      @ObjectModel.text.association: '_Text'
  key scmgtextprof.profile_id  as CaseTextProfile,
      @EndUserText.label: 'Case Sort Text By'
      scmgtextprof.sorted_by   as CaseSortTextBy,

      _Text
}
```
