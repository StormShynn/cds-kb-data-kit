---
name: I_ACCTASSIGNMENTCATEGORYTEXT
description: "Acctassignmentcategorytext"
semantic_vi: "Chỉ ra tên loại phân bổ tài khoản trong các ngôn ngữ khác nhau để sử dụng trong quy trình cung cấp và mua hàng."
keywords:
  - "account assignment"
  - "category"
  - "language"
  - "sourcing"
  - "procurement"
  - "mm"
  - "ekko"
  - "account assignment category"
  - "category name"
  - "language code"
semantic_en: "Exposes account assignment category names in different languages for use in sourcing and procurement processes."
app_component: MM
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
  - MM
  - interface-view
  - text-view
  - text
  - component:MM
  - lob:Sourcing & Procurement
---
# I_ACCTASSIGNMENTCATEGORYTEXT

**Acctassignmentcategorytext**

| Property | Value |
|---|---|
| App Component | `MM` |
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
| `AccountAssignmentCategory` | ✓ | |  | `knttp` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `AcctAssignmentCategoryName` |  | |  | `knttx` |  |  |
| `_Language` | | ✓ | | | | |
| `_AccountAssignmentCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.dataCategory: #TEXT 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'AccountAssignmentCategory'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY, #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Account Assignment Category - Text' 
//Commented by VDM CDS Suite Plugin:@Analytics.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@AbapCatalog.sqlViewName: 'IMMACCTASSCATT'
@Search.searchable: true
//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'AccountAssignmentCategory'

define view I_AcctAssignmentCategoryText //must start with 'I_' and end with 'Text' or 'T'
   as select from t163i
   association to parent I_AccountAssignmentCategory as _AccountAssignmentCat 
    on $projection.AccountAssignmentCategory = _AccountAssignmentCat.AccountAssignmentCategory
   association [0..1] to I_Language as _Language  on $projection.Language = _Language.Language
{
   key knttp as AccountAssignmentCategory,
   @Semantics.language: true
   key spras as Language,
   @Search.defaultSearchElement: true
   @Search.fuzzinessThreshold: 0.8
   @Search.ranking: #HIGH
   @Semantics.text: true
   @EndUserText.label: 'Acct Assgnt. Cat. Desc.'   
    t163i.knttx as AcctAssignmentCategoryName, 
   _AccountAssignmentCat,
   _Language
   
}
```
