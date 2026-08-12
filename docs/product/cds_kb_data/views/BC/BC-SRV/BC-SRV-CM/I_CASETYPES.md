---
name: I_CASETYPES
description: "Case Types"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETYPES')/$value
semantic_en: "Case Types"
semantic_vi: "Case Types — CDS view giao diện dựa trên scmgcasetype."
keywords:
  - "case"
  - "types"
  - "type"
  - "record"
  - "model"
  - "attribute"
  - "profile"
  - "function"
  - "text"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASETYPES

**Case Types**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETYPES')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseType` | ✓ | |  | `case_type` | `CHAR(4)` | Case Type |
| `CaseRecordModel` |  | |  | `rm_model` | `CHAR(42)` | Case Record Model ID |
| `CaseAttributeProfile` |  | |  | `attr_profile` | `CHAR(8)` | Case: Attribute Profile ID |
| `CaseFunctionProfile` |  | |  | `func_profile` | `CHAR(8)` | Case: Function Profile ID |
| `CaseTextProfile` |  | |  | `text_scheme` | `CHAR(8)` | Text Profile for Case Notes |
| `CaseStatusProfile` |  | |  | `stat_profile` | `CHAR(8)` | Case: Status Profile |
| `CaseTerminologyProfile` |  | |  | `term_profile` | `CHAR(8)` | Terminology Profile ID |
| `CaseRMSID` |  | |  | `rms_id` | `CHAR(32)` | RMS ID |
| `CaseElementType` |  | |  | `case_sps_id` | `CHAR(32)` | Element Type ID (Case) |
| `CaseRecordElementType` |  | |  | `rec_sps_id` | `CHAR(32)` | Element Type ID (Record) |
| `CaseNoteElementType` |  | |  | `notes_sps_id` | `CHAR(32)` | Element Type ID (Notes) |
| `CaseProcess` |  | |  | `process` | `CHAR(4)` | Permitted Process for Case Type |
| `CaseNumberRangeInterval` |  | |  | `ival_int` | `CHAR(2)` | Case: Number Range Interval (For Internal Number Assignment) |
| `CaseIndicatorNumberAssignment` |  | |  | `early_num_assign` | `CHAR(1)` | Case: Indicator for Early Number Assignment |
| `CaseProcessRouteFlag` |  | |  | `wfpath_flag` | `CHAR(1)` | Case: Flag for 'Process Route Used' |
| `CaseTypeObsolate` |  | |  | `obsolet` | `CHAR(1)` | Case type obsolete |
| `PPFActionProfile` |  | |  | `actionprofile` | `CHAR(30)` | PPF: Name of Action Profile |
| `_AttrProfile` | | ✓ | | | | |
| `_FuncProf` | | ✓ | | | | |
| `_TextProf` | | ✓ | | | | |
| `_StatProf` | | ✓ | | | | |
| `_TermProf` | | ✓ | | | | |
| `_CaseProcess` | | ✓ | | | | |
| `_Actionprofile` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AttrProfile` | `I_CaseAttributeProfile` | [0..1] |
| `_FuncProf` | `I_CaseFunctionProfile` | [0..1] |
| `_TextProf` | `I_CaseTextProfile` | [0..1] |
| `_StatProf` | `I_CaseStatusProfile` | [0..1] |
| `_TermProf` | `I_CaseTerminologyProfile` | [0..1] |
| `_CaseProcess` | `I_CaseProcess` | [0..1] |
| `_Actionprofile` | `ppftconde` | [0..*] |
| `_Text` | `I_CaseTypesText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETYPES')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETYPES')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASETYPES'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Types'
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseType'
define view I_Casetypes
  as select from scmgcasetype


  association [0..1] to I_CaseAttributeProfile   as _AttrProfile   on $projection.CaseAttributeProfile = _AttrProfile.CaseAttributeProfile

  association [0..1] to I_CaseFunctionProfile    as _FuncProf      on $projection.CaseFunctionProfile = _FuncProf.CaseFunctionProfile

  association [0..1] to I_CaseTextProfile        as _TextProf      on $projection.CaseTextProfile = _TextProf.CaseTextProfile
  association [0..1] to I_CaseStatusProfile      as _StatProf      on $projection.CaseStatusProfile = _StatProf.CaseStatusProfile

  association [0..1] to I_CaseTerminologyProfile as _TermProf      on $projection.CaseTerminologyProfile = _TermProf.CaseTerminologyProfile
  association [0..1] to I_CaseProcess            as _CaseProcess   on $projection.CaseProcess = _CaseProcess.CaseProcess
  association [0..*] to ppftconde                as _Actionprofile on $projection.PPFActionProfile = _Actionprofile.applname
  association [0..*] to I_CaseTypesText            as _Text          on $projection.CaseType = _Text.CaseType

{
      @ObjectModel.text.association: '_Text'
  key scmgcasetype.case_type             as CaseType,
      scmgcasetype.rm_model              as CaseRecordModel,
      @ObjectModel.foreignKey.association: '_AttrProfile'
      scmgcasetype.attr_profile          as CaseAttributeProfile,
      @ObjectModel.foreignKey.association: '_FuncProf'
      scmgcasetype.func_profile          as CaseFunctionProfile,
      @ObjectModel.foreignKey.association: '_TextProf'
      scmgcasetype.text_scheme           as CaseTextProfile,
      @ObjectModel.foreignKey.association: '_StatProf'
      scmgcasetype.stat_profile          as CaseStatusProfile,
      @ObjectModel.foreignKey.association: '_TermProf'
      scmgcasetype.term_profile          as CaseTerminologyProfile,
      scmgcasetype.rms_id                as CaseRMSID,
      scmgcasetype.case_sps_id           as CaseElementType,
      scmgcasetype.rec_sps_id            as CaseRecordElementType,
      scmgcasetype.notes_sps_id          as CaseNoteElementType,
      @ObjectModel.foreignKey.association: '_CaseProcess'
      scmgcasetype.process               as CaseProcess,
      scmgcasetype.ival_int              as CaseNumberRangeInterval,
      scmgcasetype.early_num_assign      as CaseIndicatorNumberAssignment,
      scmgcasetype.wfpath_flag           as CaseProcessRouteFlag,
      scmgcasetype.obsolet               as CaseTypeObsolate,
      @ObjectModel.foreignKey.association: '_Actionprofile'
      scmgcasetype.actionprofile         as PPFActionProfile,
      _AttrProfile,
      _FuncProf,
      _TextProf,
      _StatProf,
      _TermProf,
      _CaseProcess,
      _Text,
      _Actionprofile
}
```
