---
name: I_BANKACCOUNTINTERNALTYPE
description: "This CDS view retrieves the bank account types defined in the configuration activity Define Settings for Bank Account Master Data. For more information, see Bank Account Types and Contract Types. This CDS view provides the data to answer the following business questions: What bank account types are defined in your system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTINTERNALTYPE')/$value
semantic_en: "This CDS view retrieves the bank account types defined in the configuration activity Define Settings for Bank Account Master Data. For more information, see Bank Account Types and Contract Types. This CDS view provides the data to answer the following business questions: What bank account types are defined in your system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Account Type — CDS view giao diện dựa trên fclm_bam_ac_type."
keywords:
  - "bank"
  - "account"
  - "type"
  - "internal"
  - "contract"
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
# I_BANKACCOUNTINTERNALTYPE

**This CDS view retrieves the bank account types defined in the configuration activity Define Settings for Bank Account Master Data. For more information, see Bank Account Types and Contract Types. This CDS view provides the data to answer the following business questions: What bank account types are defined in your system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTINTERNALTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountInternalType` | ✓ | |  | `acc_type_id` | `CHAR(10)` | Bank Account Type ID |
| `BankAccountContractType` |  | |  | `contract_type` | `CHAR(2)` | Bank Account Contract Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BankAccountInternalTypeTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTINTERNALTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTINTERNALTYPE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Bank Account Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@Analytics.internalName:#LOCAL
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.modelingPattern:#ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER ]
@ObjectModel.dataCategory:#VALUE_HELP
@Search.searchable: true
@Metadata.allowExtensions:true
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BankAccountInternalType'
@ObjectModel.sapObjectNodeType.name: 'BankAccountInternalTypeCode'

define view entity I_BankAccountInternalType   
as select from fclm_bam_ac_type
  association [0..*] to I_BankAccountInternalTypeTxt as _Text on $projection.BankAccountInternalType = _Text.BankAccountInternalType

{
      @Search.defaultSearchElement: true
      @Search.ranking:#HIGH
  key acc_type_id   as BankAccountInternalType,
      contract_type as BankAccountContractType,
      _Text
}
```
