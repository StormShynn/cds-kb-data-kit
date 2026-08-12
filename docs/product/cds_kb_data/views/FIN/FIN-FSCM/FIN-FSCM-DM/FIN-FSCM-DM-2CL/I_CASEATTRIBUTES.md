---
name: I_CASEATTRIBUTES
description: "Caseattributes"
app_component: FIN-FSCM-DM-2CL
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
  - FIN-FSCM
  - FIN-FSCM-DM
  - interface-view
  - component:FIN-FSCM-DM-2CL
  - lob:Other
---
# I_CASEATTRIBUTES

**Caseattributes**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
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
| `CaseUUID` | ✓ | |  | `CaseUniqueID` |  |  |
| `CaseID` |  | |  |  |  |  |
| `CaseProcessor` |  | |  |  |  |  |
| `DisputeCaseProcessorFullName` |  | | `_User` | `UserDescription` |  |  |
| `CreationDateTime` |  | |  | `cast( CaseCreatedOn as char17 )` |  |  |
| `CloseDateTime` |  | |  | `cast( CaseClosedTime as char17 )` |  |  |
| `CaseReason` |  | |  |  |  |  |
| `CaseType` |  | |  |  |  |  |
| `CaseStatusProfile` |  | |  |  |  |  |
| `CaseProcessingStatus` |  | |  | `CaseStatus` |  |  |
| `DisputeCasePriority` |  | |  | `CasePriority` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_User` | `I_User` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AbapCatalog.sqlViewName: 'ICASEATTR'
@EndUserText.label: 'Case Attributes'
@VDM.viewType: #COMPOSITE
//@VDM.private: false
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.representativeKey: 'CaseUUID'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.sapObjectNodeType.name: 'DisputeCase'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE ]
define view I_CaseAttributes
  //  as select from    scmg_t_case_attr
  //    left outer join P_BusinessUser on scmg_t_case_attr.processor = P_BusinessUser.UserID
  as select from I_CaseAttribute
  association [0..1] to I_User as _User on $projection.CaseProcessor = _User.UserID
{
  key CaseUniqueID                     as CaseUUID,
      CaseID,
      CaseProcessor,
      _User.UserDescription            as DisputeCaseProcessorFullName,
      cast( CaseCreatedOn as char17 )  as CreationDateTime, //CAST needed because of existing conversion exit
      cast( CaseClosedTime as char17 ) as CloseDateTime, //CAST needed because of existing conversion exit
      // incompatible change:
      //      cast( CaseCreatedOn as fincs_timestamp preserving type )  as CreationDateTime, //CAST needed because of existing conversion exit
      //      cast( CaseClosedTime as fincs_timestamp preserving type ) as CloseDateTime, //CAST needed because of existing conversion exit

      CaseReason,
      CaseType,
      CaseStatusProfile                as CaseStatusProfile,
      CaseStatus                       as CaseProcessingStatus,
      CasePriority                     as DisputeCasePriority
}
```
