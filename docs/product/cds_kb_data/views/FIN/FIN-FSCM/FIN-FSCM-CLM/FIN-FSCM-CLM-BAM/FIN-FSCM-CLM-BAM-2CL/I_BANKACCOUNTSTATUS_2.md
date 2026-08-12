---
name: I_BANKACCOUNTSTATUS_2
description: "This CDS view retrieves the list of bank account statuses and their text descriptions. For more information, see Bank Account Statuses. This CDS view provides the data to answer the following business questions: What is the bank account status of a bank account? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTSTATUS_2')/$value
semantic_en: "This CDS view retrieves the list of bank account statuses and their text descriptions. For more information, see Bank Account Statuses. This CDS view provides the data to answer the following business questions: What is the bank account status of a bank account? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Account Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "bank"
  - "account"
  - "status"
  - "domain"
  - "value"
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
# I_BANKACCOUNTSTATUS_2

**This CDS view retrieves the list of bank account statuses and their text descriptions. For more information, see Bank Account Statuses. This CDS view provides the data to answer the following business questions: What is the bank account status of a bank account? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTSTATUS_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountStatus` | ✓ | |  | `cast( dd07l.domvalue_l as fclm_bam_acc_status )` | `CHAR(2)` | Bank Account Status |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BankAccountStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTSTATUS_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKACCOUNTSTATUS_2')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Bank Account Status'
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
@ObjectModel.dataCategory:#VALUE_HELP
@Search.searchable: true
@Metadata.allowExtensions:true
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BankAccountStatus'
@ObjectModel.sapObjectNodeType.name: 'BankAccountLifecycleStatus'

define view entity I_BankAccountStatus_2
  as select from dd07l
  association [0..*] to I_BankAccountStatusText as _Text on $projection.BankAccountStatus = _Text.BankAccountStatus
{

      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as fclm_bam_acc_status  ) as BankAccountStatus,  
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Consumption.hidden: true
      @Analytics.hidden:true
      domvalue_l as DomainValue,
      _Text
}
where
      dd07l.domname  = 'FCLM_BAM_ACC_STATUS'
  and dd07l.as4local = 'A';
```
