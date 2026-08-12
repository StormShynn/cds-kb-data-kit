---
name: I_HOUSEBANKACCOUNTSTDVH
description: "This CDS view retrieves house bank accounts. This CDS view provides the data to answer the following business questions: What are the house bank accounts that I can use in payments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_HOUSEBANKACCOUNTSTDVH')/$value
semantic_en: "This CDS view retrieves house bank accounts. This CDS view provides the data to answer the following business questions: What are the house bank accounts that I can use in payments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "House Bank Account — CDS view giao diện dựa trên I_HouseBankAccount."
keywords:
  - "house"
  - "bank"
  - "account"
  - "company"
  - "code"
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
  - payment
---
# I_HOUSEBANKACCOUNTSTDVH

**This CDS view retrieves house bank accounts. This CDS view provides the data to answer the following business questions: What are the house bank accounts that I can use in payments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_HOUSEBANKACCOUNTSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `HouseBank` | ✓ | |  |  | `CHAR(5)` | House Bank ID |
| `HouseBankAccount` | ✓ | |  |  | `CHAR(5)` | House Bank Account |
| `_Text` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_HOUSEBANKACCOUNTSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_HOUSEBANKACCOUNTSTDVH')/$value)*

```abap
//GENERATED:003:GFBfhyK17kU}WyNzWLFCFW
@AbapCatalog.sqlViewName: 'IFIHBA__VH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'HouseBankAccount'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'House Bank Account'
@Search.searchable: true
@Consumption.ranked: true
define view I_HouseBankAccountStdVH as select from I_HouseBankAccount {
  @UI.lineItem: [{ position: 2 }]
  @ObjectModel.foreignKey.association: '_CompanyCode'
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  key CompanyCode,
  @UI.lineItem: [{ position: 3 }]
  @ObjectModel.foreignKey.association: '_HouseBank'
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  key HouseBank,
  @UI.lineItem: [{ position: 1 }]
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH  
  key HouseBankAccount,

  _Text,

  @Consumption.hidden: true
  _CompanyCode,
  @Consumption.hidden: true
  _HouseBank
}
```
