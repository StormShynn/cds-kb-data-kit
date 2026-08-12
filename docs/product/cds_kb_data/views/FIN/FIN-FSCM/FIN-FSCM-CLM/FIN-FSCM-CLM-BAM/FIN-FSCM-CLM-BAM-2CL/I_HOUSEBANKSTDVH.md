---
name: I_HOUSEBANKSTDVH
description: "This CDS view retrieves house bank master data. This CDS view provides the data to answer the following business questions: What are the house banks that I can use in payments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_HOUSEBANKSTDVH')/$value
semantic_en: "This CDS view retrieves house bank master data. This CDS view provides the data to answer the following business questions: What are the house banks that I can use in payments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Master data for House Bank — CDS view giao diện dựa trên I_Housebank."
keywords:
  - "master"
  - "data"
  - "for"
  - "house"
  - "bank"
  - "company"
  - "code"
  - "country"
  - "internal"
tags:
  - FIN
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
  - master-data
  - payment
---
# I_HOUSEBANKSTDVH

**This CDS view retrieves house bank master data. This CDS view provides the data to answer the following business questions: What are the house banks that I can use in payments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_HOUSEBANKSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `HouseBank` | ✓ | |  |  | `CHAR(5)` | Short Key for a House Bank |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `BankInternalID` |  | |  |  | `CHAR(15)` | Bank Keys |
| `_Bank` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Bank` | `I_Bank_2` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_HOUSEBANKSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_HOUSEBANKSTDVH')/$value)*

```abap
//GENERATED:003:GlBfhyFV7jU{qbNfddV2Em
@AbapCatalog.sqlViewName: 'IFIHOUSEBANK_VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'HouseBank'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true

@EndUserText.label: 'Master data for House Bank'
define view I_HouseBankStdVH
  as select from I_Housebank
  association [1..1] to I_Bank_2 as _Bank on  $projection.BankCountry    = _Bank.BankCountry
                                          and $projection.BankInternalID = _Bank.BankInternalID
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Search: {
      defaultSearchElement: true,
      ranking: #HIGH,
      fuzzinessThreshold: 0.8
      }
      @UI.lineItem: [{ position: 2 }]
  key CompanyCode,
      @Search: {
      defaultSearchElement: true,
      ranking: #HIGH,
      fuzzinessThreshold: 0.8
      }
      @UI.lineItem: [{ position: 1 }]
  key HouseBank,
      @Search: {
      defaultSearchElement: true,
      ranking: #LOW,
      fuzzinessThreshold: 0.8
      }
      BankCountry,
      @Search: {
      defaultSearchElement: true,
      ranking: #LOW,
      fuzzinessThreshold: 0.8
      }
      BankInternalID,
      @Consumption.hidden: true
      _CompanyCode,
      _Bank
}
```
