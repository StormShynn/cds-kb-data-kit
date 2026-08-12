---
name: I_CASEATTRIBUTE
description: "Case Attribute"
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEATTRIBUTE')/$value
semantic_en: "Case Attribute"
semantic_vi: "Case Attribute — CDS view giao diện dựa trên scmg_t_case_attr."
keywords:
  - "case"
  - "attribute"
  - "unique"
  - "type"
  - "external"
  - "reference"
  - "created"
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
---
# I_CASEATTRIBUTE

**Case Attribute**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEATTRIBUTE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseUniqueID` | ✓ | |  | `case_guid` | `CHAR(32)` | Technical Case Key (Case GUID) |
| `CaseType` |  | |  | `case_type` | `CHAR(4)` | Case Type |
| `CaseID` |  | |  | `ext_key` | `CHAR(12)` | Case ID |
| `CaseExternalReference` |  | |  | `ext_ref` | `CHAR(30)` | External Reference |
| `CaseCreatedBy` |  | |  | `created_by` | `CHAR(12)` | Created By |
| `CaseCreatedOn` |  | |  | `create_time` | `DEC(15)` | Created On |
| `CaseLastChangedBy` |  | |  | `changed_by` | `CHAR(12)` | Last Changed By |
| `CaseLastChangedOn` |  | |  | `change_time` | `DEC(15)` | Last Changed On |
| `CaseClosedBy` |  | |  | `closed_by` | `CHAR(12)` | Closed by User |
| `CaseClosedTime` |  | |  | `closing_time` | `DEC(15)` | Closed at Time |
| `CasePlannedCloseDate` |  | |  | `plan_end_date` | `DATS(8)` | Planned Close Date |
| `CaseProcessor` |  | |  | `processor` | `CHAR(12)` | Processor |
| `CaseResponsible` |  | |  | `responsible` | `CHAR(12)` | Person Responsible |
| `CaseTitle` |  | |  | `case_title` | `CHAR(80)` | Case Title |
| `CaseEscalationReason` |  | |  | `escal_reason` | `CHAR(2)` | Reason for Escalation |
| `CaseCategory` |  | |  | `category` | `CHAR(4)` | Category |
| `CasePriority` |  | |  | `priority` | `NUMC(1)` | Priority |
| `CaseAuthorizationLevel` |  | |  | `secure_level` | `CHAR(1)` | Authorization level |
| `CaseStatusProfile` |  | |  | `profile_id` | `CHAR(8)` | Case: Status Profile |
| `CaseStatus` |  | |  | `stat_orderno` | `NUMC(2)` | Case: Status |
| `CaseSystemStatus` |  | |  | `stat_para` | `CHAR(3)` | Case: System Status |
| `CaseStatusObjectNumber` |  | |  | `stat_objnr` | `CHAR(32)` | Case: Status Object Number (GUID), (Central Status Managmnt) |
| `CaseSystemStatusName` |  | |  | `stat_line` | `CHAR(40)` | Case: System Status Description (Central Status Management) |
| `CaseUserStatusName` |  | |  | `stat_user_line` | `CHAR(40)` | Case: User Status Description (Central Status Management) |
| `CaseReason` |  | |  | `reason_code` | `CHAR(4)` | Reason for Case |
| `_CaseEntity` | | ✓ | | | | |
| `_CaseTypes` | | ✓ | | | | |
| `_Escalation` | | ✓ | | | | |
| `_Catego` | | ✓ | | | | |
| `_Priority` | | ✓ | | | | |
| `_AuthLevel` | | ✓ | | | | |
| `_StatProfile` | | ✓ | | | | |
| `_Individual` | | ✓ | | | | |
| `_CaseSystemStatus` | | ✓ | | | | |
| `_Reasons` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CaseEntity` | `I_Caseentity` | [0..1] |
| `_CaseTypes` | `I_Casetypes` | [0..1] |
| `_Escalation` | `I_CaseEscalationReason` | [0..1] |
| `_Catego` | `I_CaseCategory` | [0..1] |
| `_Priority` | `I_CasePriority` | [0..1] |
| `_AuthLevel` | `I_Caseauthorizationlevel` | [0..1] |
| `_StatProfile` | `I_CaseStatusProfile` | [0..1] |
| `_Individual` | `I_Caseindividualstatus` | [0..1] |
| `_CaseSystemStatus` | `I_CaseSystemStatus` | [0..1] |
| `_Reasons` | `I_CaseReasons` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEATTRIBUTE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEATTRIBUTE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICASEATTRIBUTE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Case Attribute'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CaseUniqueID'
//@Metadata.ignorePropagatedAnnotations
//@ClientHandling.algorithm:#SESSION_VARIABLE
@ObjectModel.supportedCapabilities
@AbapCatalog.preserveKey:true 
@ObjectModel.usageType.serviceQuality:#A
@ObjectModel.usageType.sizeCategory:#M  
@ObjectModel.usageType.dataClass:#TRANSACTIONAL

define view I_CaseAttribute
  as select from scmg_t_case_attr


  association [0..1] to I_Caseentity             as _CaseEntity       on  $projection.CaseUniqueID = _CaseEntity.CaseUniqueID

  association [0..1] to I_Casetypes              as _CaseTypes        on  $projection.CaseType = _CaseTypes.CaseType

  //  association [0..1] to I_Acmusr02               as _Usr02            on  $projection.CaseCreatedBy     = _Usr02.bname
  //                                                                      and $projection.CaseLastChangedBy = _Usr02.bname
  //                                                                      and $projection.CaseProcessor     = _Usr02.bname
  //                                                                      and $projection.CaseResponsible   = _Usr02.bname

  association [0..1] to I_CaseEscalationReason   as _Escalation       on  $projection.CaseEscalationReason = _Escalation.CaseEscalationReason

  association [0..1] to I_CaseCategory           as _Catego           on  $projection.CaseCategory = _Catego.CaseCategory
                                                                      and $projection.CaseType     = _Catego.CaseType

  association [0..1] to I_CasePriority           as _Priority         on  $projection.CasePriority = _Priority.CasePriority

  association [0..1] to I_Caseauthorizationlevel as _AuthLevel        on  $projection.CaseAuthorizationLevel = _AuthLevel.CaseAuthorizationLevel

  association [0..1] to I_CaseStatusProfile      as _StatProfile      on  $projection.CaseStatusProfile = _StatProfile.CaseStatusProfile

  association [0..1] to I_Caseindividualstatus   as _Individual       on  $projection.CaseStatus        = _Individual.CaseStatus
                                                                      and $projection.CaseStatusProfile = _Individual.CaseStatusProfile

  association [0..1] to I_CaseSystemStatus       as _CaseSystemStatus on  $projection.CaseSystemStatus = _CaseSystemStatus.CaseSystemStatus

  association [0..1] to I_CaseReasons            as _Reasons          on  $projection.CaseReason = _Reasons.CaseReason
                                                                      and $projection.CaseType   = _Reasons.CaseType
{
      @ObjectModel.foreignKey.association: '_CaseEntity'
  key scmg_t_case_attr.case_guid                as CaseUniqueID,
      @ObjectModel.foreignKey.association: '_CaseTypes'
      scmg_t_case_attr.case_type                as CaseType,
      scmg_t_case_attr.ext_key                  as CaseID,
      scmg_t_case_attr.ext_ref                  as CaseExternalReference,
      // @ObjectModel.foreignKey.association: '_Usr02'
      scmg_t_case_attr.created_by               as CaseCreatedBy,
      //@Semantics.dateTime:true
      scmg_t_case_attr.create_time              as CaseCreatedOn,
      //  @ObjectModel.foreignKey.association: '_Usr02'
      scmg_t_case_attr.changed_by               as CaseLastChangedBy,
      //@Semantics.dateTime:true
      scmg_t_case_attr.change_time              as CaseLastChangedOn,
      // @ObjectModel.foreignKey.association: '_Usr02'
      scmg_t_case_attr.closed_by                as CaseClosedBy,
      //@Semantics.dateTime:true
      scmg_t_case_attr.closing_time             as CaseClosedTime,
      scmg_t_case_attr.plan_end_date            as CasePlannedCloseDate,
      // @ObjectModel.foreignKey.association: '_Usr02'
      scmg_t_case_attr.processor                as CaseProcessor,
      scmg_t_case_attr.responsible              as CaseResponsible,
      scmg_t_case_attr.case_title               as CaseTitle,
      @ObjectModel.foreignKey.association: '_Escalation'
      scmg_t_case_attr.escal_reason             as CaseEscalationReason,
      scmg_t_case_attr.category                 as CaseCategory,
      @ObjectModel.foreignKey.association: '_Priority'
      scmg_t_case_attr.priority                 as CasePriority,
      scmg_t_case_attr.secure_level             as CaseAuthorizationLevel,
      @ObjectModel.foreignKey.association: '_StatProfile'
      scmg_t_case_attr.profile_id               as CaseStatusProfile,
      scmg_t_case_attr.stat_orderno             as CaseStatus,
      @ObjectModel.foreignKey.association: '_CaseSystemStatus'
      scmg_t_case_attr.stat_para                as CaseSystemStatus,

      scmg_t_case_attr.stat_objnr               as CaseStatusObjectNumber,
      scmg_t_case_attr.stat_line                as CaseSystemStatusName,
      scmg_t_case_attr.stat_user_line           as CaseUserStatusName,

      @ObjectModel.foreignKey.association: '_Reasons'
      scmg_t_case_attr.reason_code              as CaseReason,
      _CaseTypes,
      // _Usr02,
      _Priority,
      _StatProfile,
      _Individual,
      _CaseSystemStatus,
      _Catego,
      _AuthLevel,
      _Escalation,
      _CaseEntity,
      _Reasons


}
```
