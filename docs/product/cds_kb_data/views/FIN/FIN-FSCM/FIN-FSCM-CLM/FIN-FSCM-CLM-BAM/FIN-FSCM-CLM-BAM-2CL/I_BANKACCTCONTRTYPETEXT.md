---
name: I_BANKACCTCONTRTYPETEXT
description: "This CDS view retrieves the bank account contract types. For more information, see Bank Account Types and Contract Types. This CDS view provides the data to answer the following business questions: What is the bank account contract type for a specific bank account? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCTCONTRTYPETEXT')/$value
semantic_en: "This CDS view retrieves the bank account contract types. For more information, see Bank Account Types and Contract Types. This CDS view provides the data to answer the following business questions: What is the bank account contract type for a specific bank account? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Account Contract Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "bank"
  - "account"
  - "contract"
  - "type"
  - "text"
  - "language"
  - "name"
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
---
# I_BANKACCTCONTRTYPETEXT

**This CDS view retrieves the bank account contract types. For more information, see Bank Account Types and Contract Types. This CDS view provides the data to answer the following business questions: What is the bank account contract type for a specific bank account? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCTCONTRTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountContractType` | ✓ | |  | `cast ( domvalue_l as fclm_bam_contract_type )` | `CHAR(2)` | Bank Account Contract Type |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `BankAccountContractTypeName` |  | |  | `cast ( ddtext as fclm_bam_contracttypetext )` | `CHAR(60)` | Bank Account Contract Type Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCTCONTRTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCTCONTRTYPETEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Bank Account Contract Type - Text'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ICONTRTYPETXT'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern:#LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.representativeKey: 'BankAccountContractType'
@Search.searchable: true

define view entity I_BankAcctContrTypeText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element:['BankAccountContractTypeName']
  key cast ( domvalue_l as fclm_bam_contract_type ) as BankAccountContractType,
      @Semantics.language: true
      @EndUserText.label: 'Bank Account Contract Type Language'
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                    as Language,
      @Search.defaultSearchElement: true
      @Semantics.text: true
      @EndUserText.label: 'Contract Type Description'
      @EndUserText.quickInfo:'Contract Type Description'
      cast ( ddtext as fclm_bam_contracttypetext )  as BankAccountContractTypeName,
      _Language
}
where
      domname        = 'FCLM_BAM_CONTRACT_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000';
```
