---
name: I_SOLVEDDSPUTCASESTSDURNC
description: "This CDS view is designed to provide insights into the duration of solved dispute cases within an organization. It aggregates data related to dispute cases, including their status, creation and closing dates, and other relevant attributes, to facilitate analysis and reporting on the efficiency and effectiveness of dispute resolution processes in SAP Dispute Management. This CDS view provides the data to answer the following business questions: How long does it take to resolve dispute cases on average? What are the common reasons for disputes and their resolution times? Which company codes and customer groups are most frequently involved in disputes? Who are the primary processors and coordinators handling dispute cases? What are the root causes of disputes and their impact on resolution duration? How does the priority of a dispute case affect its resolution time? What is the distribution of dispute cases across different case types and status profiles? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SOLVEDDSPUTCASESTSDURNC')/$value
semantic_en: "This CDS view is designed to provide insights into the duration of solved dispute cases within an organization. It aggregates data related to dispute cases, including their status, creation and closing dates, and other relevant attributes, to facilitate analysis and reporting on the efficiency and effectiveness of dispute resolution processes in SAP Dispute Management. This CDS view provides the data to answer the following business questions: How long does it take to resolve dispute cases on average? What are the common reasons for disputes and their resolution times? Which company codes and customer groups are most frequently involved in disputes? Who are the primary processors and coordinators handling dispute cases? What are the root causes of disputes and their impact on resolution duration? How does the priority of a dispute case affect its resolution time? What is the distribution of dispute cases across different case types and status profiles? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Solved Dispute Status Duration - Cube — CDS view giao diện dựa trên P_SolvedDisputeStatusDuration8."
keywords:
  - "solved"
  - "dispute"
  - "status"
  - "duration"
  - "cube"
  - "case"
  - "company"
  - "code"
  - "customer"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-DM-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-DM
  - FIN-FSCM-DM-2CL
  - interface-view
  - lob:finance
  - bo:salesorder
---
# I_SOLVEDDSPUTCASESTSDURNC

**This CDS view is designed to provide insights into the duration of solved dispute cases within an organization. It aggregates data related to dispute cases, including their status, creation and closing dates, and other relevant attributes, to facilitate analysis and reporting on the efficiency and effectiveness of dispute resolution processes in SAP Dispute Management. This CDS view provides the data to answer the following business questions: How long does it take to resolve dispute cases on average? What are the common reasons for disputes and their resolution times? Which company codes and customer groups are most frequently involved in disputes? Who are the primary processors and coordinators handling dispute cases? What are the root causes of disputes and their impact on resolution duration? How does the priority of a dispute case affect its resolution time? What is the distribution of dispute cases across different case types and status profiles? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SOLVEDDSPUTCASESTSDURNC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` | ✓ | | `_dur1` | `DisputeCaseUUID` | `CHAR(32)` | UUID in Character Format |
| `DisputeCaseStatus` | ✓ | |  | `cast( _dur8.ChangeDocOldFieldValueText as scmgstatusonr )` | `NUMC(2)` | Case: Status |
| `CaseID` |  | | `_dur8` | `CaseID` | `CHAR(12)` | Case ID |
| `CompanyCode` |  | | `_dur1` | `CompanyCode` | `CHAR(4)` | Company Code |
| `Customer` |  | | `_dur1` | `Customer` | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `DisputeCaseProcessor` |  | | `_dur1` | `DisputeCaseProcessor` | `CHAR(12)` | Processor |
| `DisputeCaseCoordinator` |  | | `_dur1` | `DisputeCaseCoordinator` | `CHAR(12)` | Coordinator of Dispute Case |
| `CaseCreationDate` |  | |  | `cast( _dur1.CaseCreationDate as udm_create_date preserving type )` | `DATS(8)` | Created On |
| `CaseClosingDate` |  | |  | `cast( _dur1.CaseClosingDate as udm_closing_date preserving type )` | `DATS(8)` | Closed On |
| `CustomerAccountGroup` |  | | `_Customer` | `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CustomerBasicAuthorizationGrp` |  | | `_Customer` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `DisputeCaseReason` |  | | `_dur1` | `DisputeCaseReason` | `CHAR(4)` | Reason for Case |
| `DisputeCasePriority` |  | | `_dur1` | `DisputeCasePriority` | `NUMC(1)` | Priority |
| `DisputeCaseRootCause` |  | | `_dur1` | `DisputeCaseRootCause` | `CHAR(4)` | Root Cause Code |
| `StatusProfile` |  | | `_dur1` | `StatusProfile` | `CHAR(8)` | Case: Status Profile |
| `CaseType` |  | | `_dur1` | `CaseType` | `CHAR(4)` | Case Type |
| `DisputeCaseStatusDurnInDays` |  | |  | `cast( _dur8.DisputeCaseStatusDurnInDays as farp_case_status_duration_days preserving type )` | `INT4(10)` | Solved Case Status Duration in Days |
| `NumberOfDisputeCases` |  | |  | `cast( 1 as farp_number_of_dispute_case )` | `INT4(10)` | Number of Dispute Cases |
| `_CaseUUID` | | ✓ | | | | |
| `_Company` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CaseReason` | | ✓ | | | | |
| `_CaseType` | | ✓ | | | | |
| `_CaseStatus` | | ✓ | | | | |
| `_StatProf` | | ✓ | | | | |
| `_Prio` | | ✓ | | | | |
| `_RootCause` | | ✓ | | | | |
| `_StatusProfile` | | ✓ | | | | |
| `_CaseProcessor` | | ✓ | | | | |
| `_CaseCoordinator` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CaseUUID` | `I_CaseAttributes` | [1..1] |
| `_Company` | `I_CompanyCode` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CaseReason` | `I_CaseReason` | [0..1] |
| `_CaseType` | `I_CaseType` | [0..1] |
| `_CaseStatus` | `I_CaseStatus` | [0..1] |
| `_StatProf` | `I_CaseStatProfile` | [0..1] |
| `_Prio` | `I_CasePriority` | [0..1] |
| `_RootCause` | `I_RootCause` | [0..1] |
| `_StatusProfile` | `I_CaseIndivStatus` | [0..1] |
| `_CaseProcessor` | `I_DisputeCaseContact` | [0..1] |
| `_CaseCoordinator` | `I_DisputeCaseContact` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SOLVEDDSPUTCASESTSDURNC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SOLVEDDSPUTCASESTSDURNC')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Solved Dispute Status Duration - Cube'
@AbapCatalog.sqlViewName: 'ISLVDDSPSTSDURNC'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #COMPOSITE
@Analytics.dataCategory : #CUBE
@Analytics.internalName:#LOCAL
//@VDM.private: false
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations:  [ '_CaseUUID' ]
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'DisputeCaseUUID'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE ]
define view I_SolvedDsputCaseStsDurnC
  as select from           P_SolvedDisputeStatusDuration8 as _dur8
    left outer to one join P_SolvedDisputeStatusDuration1 as _dur1 on _dur8.CaseID = _dur1.CaseID

  association [1..1] to I_CaseAttributes     as _CaseUUID        on  _CaseUUID.CaseUUID = $projection.DisputeCaseUUID
  association [0..1] to I_CompanyCode        as _Company         on  _Company.CompanyCode = $projection.CompanyCode
  association [0..1] to I_Customer           as _Customer        on  _Customer.Customer = $projection.Customer

  association [0..1] to I_CaseReason         as _CaseReason      on  $projection.CaseType          = _CaseReason.CaseType
                                                                 and $projection.DisputeCaseReason = _CaseReason.CaseReason

  association [0..1] to I_CaseType           as _CaseType        on  $projection.CaseType = _CaseType.CaseType

  association [0..1] to I_CaseStatus         as _CaseStatus      on  $projection.DisputeCaseStatus = _CaseStatus.Status //char3

  association [0..1] to I_CaseStatProfile    as _StatProf        on  $projection.StatusProfile = _StatProf.CaseStatusProfile

  association [0..1] to I_CasePriority       as _Prio            on  $projection.DisputeCasePriority = _Prio.CasePriority

  association [0..1] to I_RootCause          as _RootCause       on  $projection.CaseType             = _RootCause.CaseType
                                                                 and $projection.DisputeCaseRootCause = _RootCause.DisputeCaseRootCause

  association [0..1] to I_CaseIndivStatus    as _StatusProfile   on  $projection.StatusProfile     = _StatusProfile.CaseStatusProfile
                                                                 and $projection.DisputeCaseStatus = _StatusProfile.CaseStatus //char2

  association [0..1] to I_DisputeCaseContact as _CaseProcessor   on  $projection.DisputeCaseProcessor = _CaseProcessor.UserID
  association [0..1] to I_DisputeCaseContact as _CaseCoordinator on  $projection.DisputeCaseCoordinator = _CaseCoordinator.UserID
{
      @ObjectModel.foreignKey.association: '_CaseUUID'
  key _dur1.DisputeCaseUUID,

      @ObjectModel.foreignKey.association: '_StatusProfile'
  key cast(  _dur8.ChangeDocOldFieldValueText as scmgstatusonr )                                  as DisputeCaseStatus,

      _dur8.CaseID,

      @ObjectModel.foreignKey.association: '_Company'
      _dur1.CompanyCode,
      @ObjectModel.foreignKey.association: '_Customer'
      _dur1.Customer,

      @ObjectModel.foreignKey.association: '_CaseProcessor'
      _dur1.DisputeCaseProcessor,

      @ObjectModel.foreignKey.association: '_CaseCoordinator'
      _dur1.DisputeCaseCoordinator,

      cast( _dur1.CaseCreationDate as udm_create_date preserving type )                           as CaseCreationDate,
      cast( _dur1.CaseClosingDate as udm_closing_date preserving type )                           as CaseClosingDate,

      //this is the time when status 007 is set.
      // Time does not change when status changes to Confirmed

      //  @ObjectModel.foreignKey.association: '_CaseStatus'
      //  _dur1.Status,

      _Customer.CustomerAccountGroup                                                              as CustomerAccountGroup,

      _Customer.AuthorizationGroup                                                                as CustomerBasicAuthorizationGrp,

      @ObjectModel.foreignKey.association: '_CaseReason'
      _dur1.DisputeCaseReason,

      @ObjectModel.foreignKey.association: '_Prio'
      _dur1.DisputeCasePriority,

      @ObjectModel.foreignKey.association: '_RootCause'
      _dur1.DisputeCaseRootCause,

      //      @ObjectModel.foreignKey.association: '_StatusProfile'
      //      _dur1.CaseProcessingStatus,
      @ObjectModel.foreignKey.association: '_StatProf'
      _dur1.StatusProfile,
      @ObjectModel.foreignKey.association: '_CaseType'
      _dur1.CaseType,

      // Key Figure: Case Status Duration in Days
      @DefaultAggregation: #SUM
      cast( _dur8.DisputeCaseStatusDurnInDays as farp_case_status_duration_days preserving type ) as DisputeCaseStatusDurnInDays,

      @DefaultAggregation: #SUM
      cast( 1 as farp_number_of_dispute_case )                                                    as NumberOfDisputeCases,

      _CaseUUID,
      _Company,
      _Customer,
      _CaseReason,
      _CaseType,
      _CaseStatus,
      _StatProf,
      _Prio,
      _RootCause,
      _StatusProfile,
      _CaseProcessor,
      _CaseCoordinator
}
```
