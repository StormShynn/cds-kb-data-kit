---
name: I_BANKACCOUNTCHARACTERISTIC
description: "This CDS view retrieves the bank account characteristics defined in the configuration activity Define Bank Account Characteristics. For more information, see Bank Account Characteristics. This CDS view provides the data to answer the following business questions: What are the bank account characteristics defined in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTCHARACTERISTIC')/$value
semantic_en: "This CDS view retrieves the bank account characteristics defined in the configuration activity Define Bank Account Characteristics. For more information, see Bank Account Characteristics. This CDS view provides the data to answer the following business questions: What are the bank account characteristics defined in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Account Characteristic — CDS view giao diện dựa trên fclm_bam_ac_char."
keywords:
  - "bank"
  - "account"
  - "characteristic"
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
# I_BANKACCOUNTCHARACTERISTIC

**This CDS view retrieves the bank account characteristics defined in the configuration activity Define Bank Account Characteristics. For more information, see Bank Account Characteristics. This CDS view provides the data to answer the following business questions: What are the bank account characteristics defined in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTCHARACTERISTIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountCharacteristic` | ✓ | |  | `acct_charc_id` | `CHAR(5)` | Bank Account Characteristic |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BankAcctCharacteristicText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTCHARACTERISTIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTCHARACTERISTIC')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Bank Account Characteristic'
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
@ObjectModel.representativeKey: 'BankAccountCharacteristic'
@ObjectModel.sapObjectNodeType.name: 'BankAccountMgmtCharacteristic'

define view entity I_BankAccountCharacteristic
  as select from fclm_bam_ac_char
  association [0..*] to I_BankAcctCharacteristicText as _Text on $projection.BankAccountCharacteristic = _Text.BankAccountCharacteristic
{
      @Search.defaultSearchElement: true
      @Search.ranking:#HIGH
      @ObjectModel.text.association: '_Text'
  key acct_charc_id as BankAccountCharacteristic,
      _Text
}
```
