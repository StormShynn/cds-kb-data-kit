---
name: I_ACCOUNTASSIGNMENTTYPET
description: Accountassignmenttypet
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
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
