---
name: I_BANKACCOUNTCONTRACTTYPE
description: "This CDS view retrieves the bank account contract types. For more information, see Bank Account Types and Contract Types. This CDS view provides the data to answer the following business questions: What is the bank account contract type for a specific bank account? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTCONTRACTTYPE')/$value
semantic_en: "This CDS view retrieves the bank account contract types. For more information, see Bank Account Types and Contract Types. This CDS view provides the data to answer the following business questions: What is the bank account contract type for a specific bank account? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Account Contract Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "bank"
  - "account"
  - "contract"
  - "type"
  - "domain"
  - "value"
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
# I_BANKACCOUNTCONTRACTTYPE

**This CDS view retrieves the bank account contract types. For more information, see Bank Account Types and Contract Types. This CDS view provides the data to answer the following business questions: What is the bank account contract type for a specific bank account? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTCONTRACTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountContractType` | ✓ | |  | `cast( dd07l.domvalue_l as fclm_bam_contract_type )` | `CHAR(2)` | Bank Account Contract Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BankAcctContrTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTCONTRACTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTCONTRACTTYPE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Bank Account Contract Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #META
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
@VDM.viewType: #BASIC
@ObjectModel.dataCategory:#VALUE_HELP
@Search.searchable: true
@ObjectModel.representativeKey: 'BankAccountContractType'
@ObjectModel.sapObjectNodeType.name: 'BkAcctInternalContractTypeCode'

define view entity I_BankAccountContractType
  as select from dd07l
  association [0..*] to I_BankAcctContrTypeText as _Text on $projection.BankAccountContractType = _Text.BankAccountContractType
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l  as fclm_bam_contract_type   ) as BankAccountContractType,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Consumption.hidden: true
      @Analytics.hidden:true
      domvalue_l                                            as DomainValue,
      _Text
}
where
      dd07l.domname  = 'FCLM_BAM_CONTRACT_TYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000';
```
