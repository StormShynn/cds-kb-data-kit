---
name: I_BANKACCOUNTSTATUSTEXT
description: "This CDS view retrieves the list of bank account statuses and their text descriptions. For more information, see Bank Account Statuses. This CDS view provides the data to answer the following business questions: What is the bank account status of a bank account? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTSTATUSTEXT')/$value
semantic_en: "This CDS view retrieves the list of bank account statuses and their text descriptions. For more information, see Bank Account Statuses. This CDS view provides the data to answer the following business questions: What is the bank account status of a bank account? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Account Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "bank"
  - "account"
  - "status"
  - "text"
  - "language"
  - "name"
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
# I_BANKACCOUNTSTATUSTEXT

**This CDS view retrieves the list of bank account statuses and their text descriptions. For more information, see Bank Account Statuses. This CDS view provides the data to answer the following business questions: What is the bank account status of a bank account? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountStatus` | ✓ | |  | `cast( dd07t.domvalue_l as fclm_bam_acc_status )` | `CHAR(2)` | Bank Account Status |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `BankAccountStatusName` |  | |  | `cast ( ddtext as fclm_bam_acctstatustext )` | `CHAR(60)` | Bank Account Status Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTSTATUSTEXT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Bank Account Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #META
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern:#LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.representativeKey: 'BankAccountStatus'
@Search.searchable: true

define view entity I_BankAccountStatusText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element:['BankAccountStatusName']
  key cast( dd07t.domvalue_l  as fclm_bam_acc_status ) as BankAccountStatus,  
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                       as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast ( ddtext as fclm_bam_acctstatustext )       as BankAccountStatusName,
      _Language
}
where
      domname  = 'FCLM_BAM_ACC_STATUS'
  and as4local = 'A';
```
