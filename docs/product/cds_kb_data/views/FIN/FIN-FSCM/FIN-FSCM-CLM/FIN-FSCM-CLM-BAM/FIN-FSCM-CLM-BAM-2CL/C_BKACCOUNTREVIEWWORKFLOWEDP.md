---
name: C_BKACCOUNTREVIEWWORKFLOWEDP
description: "This CDS view is used as data provider for the email send to the bank account reviewers during the bank account review process. This CDS view provides the data to answer the following business questions: What is the relevant bank account review area and bank account review? What is the reference date of the bank account review? What is the relevant workflow task? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKACCOUNTREVIEWWORKFLOWEDP')/$value
semantic_en: "This CDS view is used as data provider for the email send to the bank account reviewers during the bank account review process. This CDS view provides the data to answer the following business questions: What is the relevant bank account review area and bank account review? What is the reference date of the bank account review? What is the relevant workflow task? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Account Review Email Data Provider — CDS view tiêu dùng dựa trên I_BankAccountReviewArea."
keywords:
  - "bank"
  - "account"
  - "review"
  - "email"
  - "data"
  - "provider"
  - "workflow"
  - "task"
  - "internal"
  - "area"
  - "name"
  - "acct"
  - "snapshot"
  - "date"
  - "time"
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - task
---
# C_BKACCOUNTREVIEWWORKFLOWEDP

**This CDS view is used as data provider for the email send to the bank account reviewers during the bank account review process. This CDS view provides the data to answer the following business questions: What is the relevant bank account review area and bank account review? What is the reference date of the bank account review? What is the relevant workflow task? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKACCOUNTREVIEWWORKFLOWEDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | |  |  | `NUMC(12)` | Work item ID |
| `BankAccountReviewArea` |  | |  |  | `CHAR(20)` | Review Area ID |
| `BankAccountReviewAreaName` |  | |  |  | `CHAR(40)` | Bank Account Review Area Description |
| `BkAcctReviewAreaSnapshotDate` |  | |  | `cast( tstmp_to_dats( Area.BkAcctRevAreaSnapshotDateTime, $session.user_timezone, $session.client, 'INITIAL' ) as fclm_bar_snapshot_date preserving type )` | `DATS(8)` | Bank Account Snapshot Date |
| `BkAcctReviewAreaSnapshotTime` |  | |  | `cast( tstmp_to_tims( Area.BkAcctRevAreaSnapshotDateTime, $session.user_timezone, $session.client, 'INITIAL' ) as fclm_bar_snapshot_time preserving type )` | `TIMS(6)` | Bank Account Snapshot Time |
| `BankAccountReview` |  | |  |  | `CHAR(20)` | Bank Account Review ID |
| `BankAccountReviewName` |  | |  |  | `CHAR(40)` | Bank Account Review Description |
| `BankAccountReviewDate` |  | |  |  | `DATS(8)` | Bank Account Review - Reference Date |
| `WorkflowTaskURL` |  | |  |  | `SSTR(1333)` | Workflow: Workflow Task URL |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKACCOUNTREVIEWWORKFLOWEDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BKACCOUNTREVIEWWORKFLOWEDP')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Bank Account Review Email Data Provider'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.modelingPattern:           #OUTPUT_EMAIL_DATA_PROVIDER
@ObjectModel.supportedCapabilities:  [  #OUTPUT_EMAIL_DATA_PROVIDER   ]
@VDM.viewType:#CONSUMPTION

define view entity C_BkAccountReviewWorkflowEDP
  as select from           I_BankAccountReviewArea  as Area
    inner join             I_BankAccountReview_2    as Review            on Area.BankAccountReviewUUID = Review.BankAccountReviewUUID
    inner join             I_WorkflowTaskApplObject as ApplicationObject on ApplicationObject.SAPBusinessObjectNodeKey1 = bintohex(
      Area.BankAccountReviewAreaUUID
    )
    inner join             I_WorkflowTask           as Task              on Task.WorkflowTaskInternalID = ApplicationObject.WorkflowTaskInternalID
    left outer to one join I_WorkflowTaskURL        as URL               on Task.WorkflowTaskInternalID = URL.WorkflowTaskInternalID
  //  not unique in case of forwarding/substitution:
  //  left outer to many join I_WorkflowTaskRecipient  as Recipient         on Task.WorkflowTaskInternalID = Recipient.WorkflowTaskInternalID
  //  In case User names are required, I_User.UserDescription would be preferrable to I_BusinessUserBasic.PersonFullName for DPP reasons
{
  key Task.WorkflowTaskInternalID,
      Area.BankAccountReviewArea,
      Area.BankAccountReviewAreaName,
      // timestamps are not properly formatted in emails
      cast( tstmp_to_dats( Area.BkAcctRevAreaSnapshotDateTime, $session.user_timezone, $session.client, 'INITIAL' )
            as fclm_bar_snapshot_date preserving type ) as BkAcctReviewAreaSnapshotDate,
      cast( tstmp_to_tims( Area.BkAcctRevAreaSnapshotDateTime, $session.user_timezone, $session.client, 'INITIAL' )          
            as fclm_bar_snapshot_time preserving type ) as BkAcctReviewAreaSnapshotTime,
      Review.BankAccountReview,
      Review.BankAccountReviewName,
      Review.BankAccountReviewDate,
      //    Task.WorkflowTaskCurrentUser,  // initial when WF is started
      //    Task._WorkflowTaskResult.WorkflowTaskResultComment, // not filled in WF result notification (only in steps)
      URL.WorkflowTaskURL
}
where
  ApplicationObject.SAPObjectNodeRepresentation = 'BankAccountReviewArea'
//  and ApplicationObject.WorkflowObjectRole  = // View is used for different use cases, WF and step related -> do not restrict
```
