---
name: I_BANKACCTCHARACTERISTICTEXT
description: "This CDS view retrieves the bank account characteristics defined in the configuration activity Define Bank Account Characteristics. For more information, see Bank Account Characteristics. This CDS view provides the data to answer the following business questions: What are the bank account characteristics defined in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCTCHARACTERISTICTEXT')/$value
semantic_en: "This CDS view retrieves the bank account characteristics defined in the configuration activity Define Bank Account Characteristics. For more information, see Bank Account Characteristics. This CDS view provides the data to answer the following business questions: What are the bank account characteristics defined in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Account Characteristic - Text — CDS view giao diện dựa trên fclm_bam_ac_chat."
keywords:
  - "bank"
  - "account"
  - "characteristic"
  - "text"
  - "language"
  - "desc"
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
# I_BANKACCTCHARACTERISTICTEXT

**This CDS view retrieves the bank account characteristics defined in the configuration activity Define Bank Account Characteristics. For more information, see Bank Account Characteristics. This CDS view provides the data to answer the following business questions: What are the bank account characteristics defined in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCTCHARACTERISTICTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountCharacteristic` | ✓ | |  | `acct_charc_id` | `CHAR(5)` | Bank Account Characteristic |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `BankAccountCharacteristicDesc` |  | |  | `acct_charc_desc` | `CHAR(60)` | Bank Account Characteristic Name |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCTCHARACTERISTICTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCTCHARACTERISTICTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BankAccountCharacteristic'
@EndUserText.label: 'Bank Account Characteristic - Text'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled:true
@ObjectModel.modelingPattern:#LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT]
@Feature: 'FTGL_BAM_BKACCT_CLASSIFICATION'

define view entity I_BankAcctCharacteristicText
  as select from fclm_bam_ac_chat
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element:['BankAccountCharacteristicDesc']
  key acct_charc_id   as BankAccountCharacteristic,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'      
  key langu           as Language,
      @Semantics.text
      acct_charc_desc as BankAccountCharacteristicDesc,
      _Language
}
```
