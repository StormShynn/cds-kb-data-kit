---
name: I_BKACCOUNTREVIEWAREAWORKFLOW
description: "This CDS view is used during the bank account review workflow to identify the bank account review for a bank account review area. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BKACCOUNTREVIEWAREAWORKFLOW')/$value
semantic_en: "This CDS view is used during the bank account review workflow to identify the bank account review for a bank account review area. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Account Review Area — CDS view giao diện dựa trên I_BankAccountReviewArea."
keywords:
  - "bank"
  - "account"
  - "review"
  - "area"
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
# I_BKACCOUNTREVIEWAREAWORKFLOW

**This CDS view is used during the bank account review workflow to identify the bank account review for a bank account review area. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BKACCOUNTREVIEWAREAWORKFLOW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountReviewAreaUUID` | ✓ | |  |  | `RAW(16)` | Review Area UUID |
| `BankAccountReviewUUID` |  | |  |  | `RAW(16)` | Bank Account Review UUID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BKACCOUNTREVIEWAREAWORKFLOW')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BKACCOUNTREVIEWAREAWORKFLOW')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Bank Account Review Area'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE ]
@VDM.viewType: #BASIC
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_BkAccountReviewAreaWorkflow
  as select from I_BankAccountReviewArea
{
  key BankAccountReviewAreaUUID,
      BankAccountReviewUUID

}
```
