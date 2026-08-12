---
name: I_BANKACCOUNTTYPETEXT
description: "This CDS view retrieves the bank account types defined in the configuration activity Define Settings for Bank Account Master Data. For more information, see Bank Account Types and Contract Types. This CDS view provides the data to answer the following business questions: What bank account types are defined in your system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTTYPETEXT')/$value
semantic_en: "This CDS view retrieves the bank account types defined in the configuration activity Define Settings for Bank Account Master Data. For more information, see Bank Account Types and Contract Types. This CDS view provides the data to answer the following business questions: What bank account types are defined in your system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Account Type - Text — CDS view giao diện dựa trên fclm_bam_ac_typt."
keywords:
  - "bank"
  - "account"
  - "type"
  - "text"
  - "language"
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - contract
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
  - master-data
---
# I_BANKACCOUNTTYPETEXT

**This CDS view retrieves the bank account types defined in the configuration activity Define Settings for Bank Account Master Data. For more information, see Bank Account Types and Contract Types. This CDS view provides the data to answer the following business questions: What bank account types are defined in your system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountType` | ✓ | |  | `acc_type_id` | `CHAR(10)` | Bank Account Type ID |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `BankAccountTypeText` |  | |  | `acc_type_desc` | `CHAR(60)` | Bank Account Type Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTTYPETEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IFIBANKACCOUNTTT'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BankAccountType'
@EndUserText.label: 'Bank Account Type - Text'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE 
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled:true
@ObjectModel.modelingPattern:#LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT]

define view I_BankAccountTypeText as select from fclm_bam_ac_typt 
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language {
    @ObjectModel.text.element:['BankAccountTypeText']
    key acc_type_id as BankAccountType,
    @Semantics.language
    key langu as Language,
    @Semantics.text
    @EndUserText.label: 'Bank Account Type Description' 
    acc_type_desc as BankAccountTypeText,
    _Language  
}
```
