---
name: I_ACCOUNTASSIGNMENTTYPET
description: "Accountassignmenttypet"
semantic_vi: "View Accountassignmenttypet CDS hiển thị các loại gán tài khoản, được sử dụng để phân loại và quản lý các loại gán tài khoản khác nhau trong kế toán tài chính. View này hữu ích cho các nhà phát triển cần làm việc với các loại gán tài khoản trong FI-GL-IS-2CL."
keywords:
  - "account assignment"
  - "gán tài khoản"
  - "account assignment type"
  - "loại gán tài khoản"
  - "fi-gl-is-2cl"
  - "financial accounting"
  - "kế toán tài chính"
  - "sap"
  - "cds view"
semantic_en: "The Accountassignmenttypet CDS view exposes account assignment types, which are used to categorize and manage different types of account assignments in financial accounting. This view is useful for developers who need to work with account assignment types in FI-GL-IS-2CL."
app_component: FI-GL-IS-2CL
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
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_ACCOUNTASSIGNMENTTYPET

**Accountassignmenttypet**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
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
| `Language` | ✓ | |  | `spras` |  |  |
| `AccountAssignmentType` | ✓ | |  | `cast(obart as j_obart preserving type )` |  |  |
| `AccountAssignmentTypeName` |  | |  | `cast(txt20 as fis_accasty_txt20 preserving type )` |  |  |
| `AccountAssignmentTypeDesc` |  | |  | `cast (txt60 as fis_accasty_txt60 preserving type )` |  |  |
| `AcctAsgtTypeLanguageDependent` |  | |  | `cast(obart_ld as fis_j_obart3 preserving type )` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIACTASSGNMT'
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED // #CHECK
@EndUserText.label: 'Account Assignment Type - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'AccountAssignmentType'
@VDM.viewType: #BASIC
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Search.searchable: true

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass:  #META
@Analytics.dataExtraction.enabled
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#SEARCHABLE_ENTITY]
define view I_AccountAssignmentTypeT

  as select from tbo01
{

      @Semantics.language: true
  key spras                                              as Language,
      @ObjectModel.text.element: 'AccountAssignmentTypeDesc'
  key cast(obart as j_obart preserving type )            as AccountAssignmentType,
      //obart_ld,
      //    @Semantics.text: true
      //    @Search.defaultSearchElement: true
      //    @Search.fuzzinessThreshold: 0.8
      //    cast (txt10 as fis_accasty_txt10 preserving type ) as  AccountAssignmentTypeShortTxt,
      //    @Semantics.text: true
      //    @Search.defaultSearchElement: true
      //    @Search.fuzzinessThreshold: 0.8
      //    cast(txt15 as fis_accasty_txt15 preserving type ) as AccountAssignmentTypeMediumTxt,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      cast(txt20 as fis_accasty_txt20 preserving type )  as AccountAssignmentTypeName,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      cast (txt60 as fis_accasty_txt60 preserving type ) as AccountAssignmentTypeDesc,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      cast(obart_ld as fis_j_obart3 preserving type )    as AcctAsgtTypeLanguageDependent
}
```
