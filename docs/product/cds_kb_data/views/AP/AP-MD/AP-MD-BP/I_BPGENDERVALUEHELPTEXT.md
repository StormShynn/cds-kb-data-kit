---
name: I_BPGENDERVALUEHELPTEXT
description: "Business Partner Gender Value help text"
app_component: AP-MD-BP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPGENDERVALUEHELPTEXT')/$value
semantic_en: "Business Partner Gender Value help text"
semantic_vi: "Business Partner Gender Value help text — CDS view giao diện dựa trên tb995t."
keywords:
  - "business"
  - "partner"
  - "gender"
  - "value"
  - "help"
  - "text"
  - "code"
  - "name"
  - "language"
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - bo:businesspartner
  - component:AP-MD-BP
  - interface-view
---
# I_BPGENDERVALUEHELPTEXT

**Business Partner Gender Value help text**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPGENDERVALUEHELPTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GenderCodeName` | ✓ | |  | `gender` | `CHAR(1)` | Gender of Business Partner (Person) |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `GenderCodeNameText` |  | |  | `gtext` | `CHAR(50)` | Gender of Business Partner |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPGENDERVALUEHELPTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPGENDERVALUEHELPTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBPGENDERVHTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
//@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Business Partner Gender Value help text'
@Search.searchable: true
@ClientHandling.algorithm : #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'GenderCodeName'
define view I_BPGenderValueHelpText as select from tb995t {
    @EndUserText.label:'Gender of Business Partner (Person)'
    key gender    as  GenderCodeName,
    @Semantics.language:true
    key spras                                                                      as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Consumption.filter.hidden: true
      @EndUserText.label: 'Sex Description'
      gtext                                                                    as GenderCodeNameText
}
```
