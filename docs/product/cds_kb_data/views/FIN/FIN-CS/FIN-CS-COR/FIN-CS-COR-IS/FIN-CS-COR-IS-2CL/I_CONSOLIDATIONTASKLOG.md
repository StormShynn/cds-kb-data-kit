---
name: I_CONSOLIDATIONTASKLOG
description: "ConsolidationIONTASKLOG"
app_component: FIN-CS-COR-IS-2CL
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
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - interface-view
  - consolidation
  - component:FIN-CS-COR-IS-2CL
  - lob:Other
---
# I_CONSOLIDATIONTASKLOG

**ConsolidationIONTASKLOG**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-IS-2CL` |
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
| `CnsldtnTaskLogUUID` | ✓ | |  | `cnsldtnlognumber` |  |  |
| `ConsolidationChartOfAccounts` |  | |  | `cast(cnsldtnchartofaccounts as fincs_conschartofaccounts preserving type)` |  |  |
| `ConsolidationGroup` |  | |  | `cast(cnsldtngroup as fincs_md_congr preserving type)` |  |  |
| `ConsolidationUnit` |  | |  | `cast(cnsldtnunit as fincs_consolidationunit preserving type)` |  |  |
| `ConsolidationVersion` |  | |  | `cast(cnsldtnversion as fincs_consolidationversion preserving type)` |  |  |
| `ConsolidationTaskCategory` |  | |  | `cast(cnsldtntasktype as fincs_taskcategory preserving type)` |  |  |
| `CnsldtnTaskLogExternalId` |  | |  | `cast(externalid as fincs_extid preserving type)` |  |  |
| `CnsldtnTskRunBackgroundJobName` |  | |  | `cast(applicationjobname as fincs_taskrun_jobname_id preserving type)` |  |  |
| `CnsldtnTaskRunBackgroundJob` |  | |  | `cast(applicationjobcount as fincs_taskrun_job_id preserving type)` |  |  |
| `FiscalPeriod` |  | |  | `cast(fiscalperiod as fins_fiscalperiod preserving type)` |  |  |
| `FiscalYear` |  | |  | `cast(fiscalyear as fis_gjahr_no_conv preserving type)` |  |  |
| `CnsldtnTaskLogCreatedByUser` |  | |  | `cast(userid as fincs_tasklog_created_by preserving type)` |  |  |
| `ConsolidationTask` |  | |  | `cast(cnsldtntask as fincs_tsk preserving type)` |  |  |
| `ConsolidationDocumentType` |  | |  | `cast(cnsldtndocumenttype as fincs_documenttype preserving type)` |  |  |
| `ConsolidationGroupCurrency` |  | |  | `cast(cnsldtngroupcurrency as fincs_groupcurrency preserving type)` |  |  |
| `ConsolidationTaskStatus` |  | |  | `cast(status as fincs_taskrun_sts)` |  |  |
| `CnsldtnTaskLogMessageType` |  | |  | `cast(status as fincs_msg_type preserving type)` |  |  |
| `ConsolidationMethod` |  | |  | `cast(cnsldtnmethod as fincs_method preserving type)` |  |  |
| `CnsldtnIsCumulative` |  | |  | `cast(is_cumulative as fincs_cum_indi preserving type)` |  |  |
| `CnsldtnRptdDataUpdateMode` |  | |  | `cast(update_mode as fincs_rptdata_updmode preserving type)` |  |  |
| `CnsldtnTskLgCreatedDateTime` |  | |  | `cast(createddatetime as fincs_tasklog_created_at preserving type)` |  |  |
| `CnsldtnTaskLogHeaderDateTime` |  | |  | `cast(timestamp as fincs_timestamp preserving type)` |  |  |
| `ConsolidationTaskRunIsTest` |  | |  | `cast(iscnsldtntestrun as fincs_taskrun_is_test preserving type)` |  |  |
| `_ConsolidationTaskLogMessage` | | ✓ | | | | |
| `_CnsldtnTskLgItmRclassfctn` | | ✓ | | | | |
| `_CnsldtnTskLgItmCrcyTrnsltn` | | ✓ | | | | |
| `_CnsldtnTskLgItmManualPosting` | | ✓ | | | | |
| `_CnsldtnTaskLogItemDataEntry` | | ✓ | | | | |
| `_CnsldtnTskLgItmLineValdtn` | | ✓ | | | | |
| `_CnsldtnChartOfAccounts` | | ✓ | | | | |
| `_CnsldtnGroup` | | ✓ | | | | |
| `_CnsldtnUnit` | | ✓ | | | | |
| `_CnsldtnVersion` | | ✓ | | | | |
| `_CnsldtnTaskCategory` | | ✓ | | | | |
| `_CnsldtnTask` | | ✓ | | | | |
| `_CnsldtnDocumentType` | | ✓ | | | | |
| `_ConsolidationGroupCurrency` | | ✓ | | | | |
| `_CnsldtnMethod` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConsolidationTaskLogMessage` | `I_ConsolidationTaskLogMessage` | [0..*] |
| `_CnsldtnTskLgItmRclassfctn` | `I_CnsldtnTskLgItmRclassfctn` | [0..*] |
| `_CnsldtnTskLgItmCrcyTrnsltn` | `I_CnsldtnTskLgItmCrcyTrnsltn` | [0..*] |
| `_CnsldtnTskLgItmManualPosting` | `I_CnsldtnTskLgItmManualPosting` | [0..*] |
| `_CnsldtnTaskLogItemDataEntry` | `I_CnsldtnTaskLogItemDataEntry` | [0..*] |
| `_CnsldtnTskLgItmLineValdtn` | `I_CnsldtnTskLgItmLineValdtn` | [0..*] |
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [0..1] |
| `_CnsldtnGroup` | `I_CnsldtnGroup_3` | [0..1] |
| `_CnsldtnUnit` | `I_CnsldtnUnit_4` | [0..1] |
| `_CnsldtnVersion` | `I_CnsldtnVersion` | [0..1] |
| `_CnsldtnTaskCategory` | `I_CnsldtnTaskCategory` | [0..1] |
| `_CnsldtnTask` | `I_CnsldtnTask` | [0..1] |
| `_CnsldtnDocumentType` | `I_CnsldtnDocumentType_2` | [0..1] |
| `_ConsolidationGroupCurrency` | `I_Currency` | [0..1] |
| `_CnsldtnMethod` | `I_CnsldtnMethod` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Consolidation Task Log'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CnsldtnTaskLogUUID',
                sapObjectNodeType.name: 'ConsolidationTaskLog',
                supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass:      #TRANSACTIONAL,
                             serviceQuality: #A,
                             sizeCategory:   #XL } }

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }
//@Search.searchable: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */

define root view entity I_ConsolidationTaskLog
  as select from fincs_log_header

  association [0..*] to I_ConsolidationTaskLogMessage  as _ConsolidationTaskLogMessage  on $projection.CnsldtnTaskLogUUID = _ConsolidationTaskLogMessage.CnsldtnTaskLogUUID
  association [0..*] to I_CnsldtnTskLgItmRclassfctn    as _CnsldtnTskLgItmRclassfctn    on $projection.CnsldtnTaskLogUUID = _CnsldtnTskLgItmRclassfctn.CnsldtnTaskLogUUID
  association [0..*] to I_CnsldtnTskLgItmCrcyTrnsltn   as _CnsldtnTskLgItmCrcyTrnsltn   on $projection.CnsldtnTaskLogUUID = _CnsldtnTskLgItmCrcyTrnsltn.CnsldtnTaskLogUUID
  association [0..*] to I_CnsldtnTskLgItmManualPosting as _CnsldtnTskLgItmManualPosting on $projection.CnsldtnTaskLogUUID = _CnsldtnTskLgItmManualPosting.CnsldtnTaskLogUUID
  association [0..*] to I_CnsldtnTaskLogItemDataEntry  as _CnsldtnTaskLogItemDataEntry  on $projection.CnsldtnTaskLogUUID = _CnsldtnTaskLogItemDataEntry.CnsldtnTaskLogUUID
  association [0..*] to I_CnsldtnTskLgItmLineValdtn    as _CnsldtnTskLgItmLineValdtn    on $projection.CnsldtnTaskLogUUID = _CnsldtnTskLgItmLineValdtn.CnsldtnTaskLogUUID

  association [0..1] to I_CnsldtnChartOfAccounts       as _CnsldtnChartOfAccounts       on $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts
  association [0..1] to I_CnsldtnGroup_3               as _CnsldtnGroup                 on $projection.ConsolidationGroup = _CnsldtnGroup.ConsolidationGroup
  association [0..1] to I_CnsldtnUnit_4                as _CnsldtnUnit                  on $projection.ConsolidationUnit = _CnsldtnUnit.ConsolidationUnit
  association [0..1] to I_CnsldtnVersion               as _CnsldtnVersion               on $projection.ConsolidationVersion = _CnsldtnVersion.ConsolidationVersion
  association [0..1] to I_CnsldtnTaskCategory          as _CnsldtnTaskCategory          on $projection.ConsolidationTaskCategory = _CnsldtnTaskCategory.ConsolidationTaskCategory
  association [0..1] to I_CnsldtnTask                  as _CnsldtnTask                  on $projection.ConsolidationTask = _CnsldtnTask.ConsolidationTask
  association [0..1] to I_CnsldtnDocumentType_2        as _CnsldtnDocumentType          on $projection.ConsolidationDocumentType = _CnsldtnDocumentType.ConsolidationDocumentType
  association [0..1] to I_Currency                     as _ConsolidationGroupCurrency   on $projection.ConsolidationGroupCurrency = _ConsolidationGroupCurrency.Currency
  association [0..1] to I_CnsldtnMethod                as _CnsldtnMethod                on $projection.ConsolidationMethod = _CnsldtnMethod.ConsolidationMethod

{
  key cnsldtnlognumber                                                          as CnsldtnTaskLogUUID,

      @ObjectModel: { foreignKey.association: '_CnsldtnChartOfAccounts',
                      sapObjectNodeTypeReference: 'ConsolidationChartOfAccounts' }
      cast(cnsldtnchartofaccounts as fincs_conschartofaccounts preserving type) as ConsolidationChartOfAccounts,

      @ObjectModel: { foreignKey.association: '_CnsldtnGroup',
                      sapObjectNodeTypeReference: 'ConsolidationGroup' }
      cast(cnsldtngroup as fincs_md_congr preserving type)                      as ConsolidationGroup,

      @ObjectModel: { foreignKey.association: '_CnsldtnUnit',
                      sapObjectNodeTypeReference: 'ConsolidationUnit' }
      cast(cnsldtnunit as fincs_consolidationunit preserving type)              as ConsolidationUnit,

      @ObjectModel: { foreignKey.association: '_CnsldtnVersion',
                      sapObjectNodeTypeReference: 'ConsolidationVersion' }
      cast(cnsldtnversion  as fincs_consolidationversion preserving type)       as ConsolidationVersion,

      @ObjectModel: { foreignKey.association: '_CnsldtnTaskCategory',
                      sapObjectNodeTypeReference: 'ConsolidationTaskCategory' }
      cast(cnsldtntasktype as fincs_taskcategory preserving type)               as ConsolidationTaskCategory,

      cast(externalid as fincs_extid preserving type)                           as CnsldtnTaskLogExternalId,

      @Semantics.text: true
      cast(applicationjobname as fincs_taskrun_jobname_id preserving type)      as CnsldtnTskRunBackgroundJobName,

      cast(applicationjobcount as fincs_taskrun_job_id preserving type)         as CnsldtnTaskRunBackgroundJob,

      @Semantics.fiscal.period: true
      cast(fiscalperiod as fins_fiscalperiod preserving type)                   as FiscalPeriod,

      @Semantics.fiscal.year: true
      cast(fiscalyear as fis_gjahr_no_conv preserving type)                     as FiscalYear,

      @Semantics.user.createdBy: true
      cast(userid as fincs_tasklog_created_by preserving type)                  as CnsldtnTaskLogCreatedByUser,

//      @Search: { defaultSearchElement: true,
//      fuzzinessThreshold:   0.8,
//                 ranking:              #HIGH }
      @ObjectModel: { foreignKey.association: '_CnsldtnTask',
                      sapObjectNodeTypeReference: 'ConsolidationTask' }
      cast(cnsldtntask as fincs_tsk preserving type)                            as ConsolidationTask,

      @ObjectModel: { foreignKey.association: '_CnsldtnDocumentType',
                      sapObjectNodeTypeReference: 'ConsolidationDocumentType' }
      cast(cnsldtndocumenttype as fincs_documenttype preserving type)           as ConsolidationDocumentType,

      @ObjectModel.foreignKey.association: '_ConsolidationGroupCurrency'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      cast(cnsldtngroupcurrency as fincs_groupcurrency preserving type)         as ConsolidationGroupCurrency,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnTaskLogMessageType'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnTaskLogMessageType' }
      cast(status as fincs_taskrun_sts)                                         as ConsolidationTaskStatus,
      cast(status as fincs_msg_type preserving type)                            as CnsldtnTaskLogMessageType,

      @ObjectModel: { foreignKey.association: '_CnsldtnMethod',
                      sapObjectNodeTypeReference: 'ConsolidationMethod' }
      cast(cnsldtnmethod as fincs_method preserving type)                       as ConsolidationMethod,

      @Semantics.booleanIndicator: true
      cast(is_cumulative as fincs_cum_indi preserving type)                     as CnsldtnIsCumulative,

      cast(update_mode as fincs_rptdata_updmode preserving type)                as CnsldtnRptdDataUpdateMode,
      cast(createddatetime as fincs_tasklog_created_at preserving type)         as CnsldtnTskLgCreatedDateTime,
      cast(timestamp as fincs_timestamp preserving type)                        as CnsldtnTaskLogHeaderDateTime,

      @Semantics.booleanIndicator: true
      cast(iscnsldtntestrun as fincs_taskrun_is_test preserving type)           as ConsolidationTaskRunIsTest,

      _ConsolidationTaskLogMessage,
      _CnsldtnTskLgItmRclassfctn,
      _CnsldtnTskLgItmCrcyTrnsltn,
      _CnsldtnTskLgItmManualPosting,
      _CnsldtnTaskLogItemDataEntry,
      _CnsldtnTskLgItmLineValdtn,

      _CnsldtnChartOfAccounts,
      _CnsldtnGroup,
      _CnsldtnUnit,
      _CnsldtnVersion,
      _CnsldtnTaskCategory,
      _CnsldtnTask,
      _CnsldtnDocumentType,
      _ConsolidationGroupCurrency,
      _CnsldtnMethod
}
```
