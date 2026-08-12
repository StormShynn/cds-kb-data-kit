---
name: I_BANKACCOUNTREVIEWER
description: "This CDS view is used during the bank account review workflow to identify the relevant bank account reviewer during the review process. This CDS view provides the data to answer the following business questions: Which reviewer are assigned to a bank account review step? What is the review result of a bank account review step? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTREVIEWER')/$value
semantic_en: "This CDS view is used during the bank account review workflow to identify the relevant bank account reviewer during the review process. This CDS view provides the data to answer the following business questions: Which reviewer are assigned to a bank account review step? What is the review result of a bank account review step? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Account Reviewer — CDS view giao diện dựa trên fclmbar_revwr."
keywords:
  - "bank"
  - "account"
  - "reviewer"
  - "review"
  - "area"
  - "step"
  - "user"
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
---
# I_BANKACCOUNTREVIEWER

**This CDS view is used during the bank account review workflow to identify the relevant bank account reviewer during the review process. This CDS view provides the data to answer the following business questions: Which reviewer are assigned to a bank account review step? What is the review result of a bank account review step? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTREVIEWER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountReviewUUID` | ✓ | |  | `bar_uuid` | `RAW(16)` | Bank Account Review UUID |
| `BankAccountReviewAreaUUID` | ✓ | |  | `bar_area_uuid` | `RAW(16)` | Review Area UUID |
| `BankAccountReviewerUUID` | ✓ | |  | `reviewer_uuid` | `RAW(16)` | Reviewer UUID |
| `BankAccountReviewStep` |  | |  | `review_step` | `INT1(3)` | Review Step |
| `BankAccountReviewerUser` |  | |  | `reviewer` | `CHAR(12)` | Reviewer |
| `BkAccountReviewerReviewResult` |  | |  | `review_result` | `CHAR(2)` | Review Result |
| `ProcessedByUser` |  | |  | `processed_by` | `CHAR(12)` | Processed By (User ID) |
| `CreatedByUser` |  | |  | `created_by` | `CHAR(12)` | Bank Account Review: Created By |
| `CreationDateTime` |  | |  | `creation_tstmp_utc` | `DEC(15)` | Bank Account Review: Creation Timestamp |
| `LastChangedByUser` |  | |  | `last_changed_by` | `CHAR(12)` | Bank Account Review: Changed By |
| `LocalLastChangeDateTime` |  | |  | `local_last_changed_tstmp_utc` | `DEC(15)` | Bank Account Review: Local Change Timestamp |
| `_BankAccountReviewResultText` | | ✓ | | | | |
| `_BankAccountReview` | | ✓ | | | | |
| `_BankAccountReviewArea` | | ✓ | | | | |
| `_ReviewerUser` | | ✓ | | | | |
| `_ProcessedByUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BankAccountReviewResultText` | `I_BankAccountReviewResultText` | [0..*] |
| `_BankAccountReview` | `I_BankAccountReview_2` | [1..1] |
| `_BankAccountReviewArea` | `I_BankAccountReviewArea` | [1..1] |
| `_ReviewerUser` | `I_BusinessUserBasic` | [0..1] |
| `_ProcessedByUser` | `I_BusinessUserBasic` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTREVIEWER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTREVIEWER')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Bank Account Reviewer'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #S,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE 
@VDM.viewType: #BASIC
/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
define view entity I_BankAccountReviewer
  as select from fclmbar_revwr
  
  association [0..*] to I_BankAccountReviewResultText as _BankAccountReviewResultText on $projection.BkAccountReviewerReviewResult = _BankAccountReviewResultText.BkAccountReviewerReviewResult
  association [1..1] to I_BankAccountReview_2   as _BankAccountReview     on  $projection.BankAccountReviewUUID = _BankAccountReview.BankAccountReviewUUID
  association [1..1] to I_BankAccountReviewArea as _BankAccountReviewArea on  $projection.BankAccountReviewUUID     = _BankAccountReviewArea.BankAccountReviewUUID
                                                                          and $projection.BankAccountReviewAreaUUID = _BankAccountReviewArea.BankAccountReviewAreaUUID
  association [0..1] to I_BusinessUserBasic     as _ReviewerUser          on  $projection.BankAccountReviewerUser = _ReviewerUser.UserID
  association [0..1] to I_BusinessUserBasic     as _ProcessedByUser       on  $projection.ProcessedByUser = _ProcessedByUser.UserID
{
  key bar_uuid                     as BankAccountReviewUUID,
  key bar_area_uuid                as BankAccountReviewAreaUUID,
  key reviewer_uuid                as BankAccountReviewerUUID,
      review_step                  as BankAccountReviewStep,
      reviewer                     as BankAccountReviewerUser,
      review_result                as BkAccountReviewerReviewResult,
      processed_by                 as ProcessedByUser,
      created_by                   as CreatedByUser,
      creation_tstmp_utc           as CreationDateTime,
      last_changed_by              as LastChangedByUser,
      local_last_changed_tstmp_utc as LocalLastChangeDateTime,
      _BankAccountReview,
      _BankAccountReviewArea,
      _ReviewerUser, 
      _ProcessedByUser,
      _BankAccountReviewResultText
}
```
