---
name: I_BANKACCOUNTTEXT
description: "This CDS view provides you with access to the data of bank accounts that have one of the following statuses: Opened at Bank Active Marked for Closing Closing Request Sent to Bank Closed at Bank Closed This CDS view provides the data to answer the following business questions: What bank accounts can I use in business transactions? How many bank accounts does a specific company own? How many bank accounts are open? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTTEXT')/$value
semantic_en: "This CDS view provides you with access to the data of bank accounts that have one of the following statuses: Opened at Bank Active Marked for Closing Closing Request Sent to Bank Closed at Bank Closed This CDS view provides the data to answer the following business questions: What bank accounts can I use in business transactions? How many bank accounts does a specific company own? How many bank accounts are open? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Account - Text — CDS view giao diện dựa trên fclm_bam_amd_t."
keywords:
  - "bank"
  - "account"
  - "text"
  - "internal"
  - "language"
  - "description"
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
  - transaction
---
# I_BANKACCOUNTTEXT

**This CDS view provides you with access to the data of bank accounts that have one of the following statuses: Opened at Bank Active Marked for Closing Closing Request Sent to Bank Closed at Bank Closed This CDS view provides the data to answer the following business questions: What bank accounts can I use in business transactions? How many bank accounts does a specific company own? How many bank accounts are open? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountInternalID` | ✓ | |  | `acc_id` | `NUMC(10)` | Bank Account Technical ID |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `BankAccountDescription` |  | |  | `description` | `CHAR(60)` | Account Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTTEXT')/$value)*

```abap
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'IFIBANKACCOUNTT'
@AbapCatalog.preserveKey: true
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@EndUserText.label: 'Bank Account - Text'
@ObjectModel.representativeKey: 'BankAccountInternalID'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@Analytics: { dataExtraction.enabled: true }
@ObjectModel.modelingPattern:#LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT]
define view I_BankAccountText
  as select from fclm_bam_amd_t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element:['BankAccountDescription']
  key acc_id      as BankAccountInternalID,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu       as Language,
      @Semantics.text
      description as BankAccountDescription,
      _Language
}
where
      revision     =  '0000'
  and deleted_flag <> 'X'
```
