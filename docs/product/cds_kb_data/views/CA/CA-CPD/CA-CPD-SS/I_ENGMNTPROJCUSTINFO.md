---
name: I_ENGMNTPROJCUSTINFO
description: "This CDS view provides about customers, that is relevant for managing projects."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJCUSTINFO')/$value
semantic_en: "This CDS view provides about customers, that is relevant for managing projects."
semantic_vi: "Billg Info for Engmnt Project Customer — CDS view cơ bản dựa trên I_Customer."
keywords:
  - "billg"
  - "info"
  - "for"
  - "engmnt"
  - "project"
  - "customer"
  - "name"
  - "full"
  - "created"
  - "user"
  - "creation"
  - "date"
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - lob:cross_application components
  - project
---
# I_ENGMNTPROJCUSTINFO

**This CDS view provides about customers, that is relevant for managing projects.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJCUSTINFO')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `CustomerFullName` |  | |  |  | `CHAR(220)` | Customer Full Name |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person who Created the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Created On |
| `AddressID` |  | |  |  | `CHAR(10)` | Address |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration Number |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `DeliveryIsBlocked` |  | |  |  | `CHAR(2)` | Central delivery block for the customer |
| `PostingIsBlocked` |  | |  |  | `CHAR(1)` | Central Posting Block |
| `BillingIsBlockedForCustomer` |  | |  |  | `CHAR(2)` | Central billing block for customer |
| `OrderIsBlockedForCustomer` |  | |  |  | `CHAR(2)` | Central order block for customer |
| `InternationalLocationNumber1` |  | |  |  | `NUMC(7)` | International location number  (part 1) |
| `IsOneTimeAccount` |  | |  |  | `CHAR(1)` | Indicator: Is the Account a One-Time Account? |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `Industry` |  | |  |  | `CHAR(4)` | Industry Key |
| `TaxNumberType` |  | |  |  | `CHAR(2)` | Tax Number Type |
| `TaxNumber1` |  | |  |  | `CHAR(16)` | Tax Number 1 |
| `TaxNumber2` |  | |  |  | `CHAR(11)` | Tax Number 2 |
| `TaxNumber3` |  | |  |  | `CHAR(18)` | Tax Number 3 |
| `TaxNumber4` |  | |  |  | `CHAR(18)` | Tax Number 4 |
| `TaxNumber5` |  | |  |  | `CHAR(60)` | Tax Number 5 |
| `CustomerCorporateGroup` |  | |  |  | `CHAR(10)` | Group Key |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `NielsenRegion` |  | |  |  | `CHAR(2)` | Nielsen ID |
| `IndustryCode1` |  | |  |  | `CHAR(10)` | Industry Code 1 |
| `IndustryCode2` |  | |  |  | `CHAR(10)` | Industry Code 2 |
| `IndustryCode3` |  | |  |  | `CHAR(10)` | Industry Code 3 |
| `IndustryCode4` |  | |  |  | `CHAR(10)` | Industry Code 4 |
| `IndustryCode5` |  | |  |  | `CHAR(10)` | Industry Code 5 |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `OrganizationBPName1` |  | |  |  | `CHAR(35)` | Name |
| `OrganizationBPName2` |  | |  |  | `CHAR(35)` | Name 2 |
| `CityName` |  | |  |  | `CHAR(35)` | City |
| `PostalCode` |  | |  |  | `CHAR(10)` | Postal Code |
| `StreetName` |  | |  |  | `CHAR(35)` | Street and House Number |
| `AlternativePayerAccount` |  | |  |  | `CHAR(10)` | Account Number of an Alternative Payer |
| `DataMediumExchangeIndicator` |  | |  |  | `CHAR(1)` | Recipient Code for Data Medium Exchange |
| `VATLiability` |  | |  |  | `CHAR(1)` | Liable for VAT |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `ResponsibleType` |  | |  |  | `CHAR(2)` | Tax Type |
| `FiscalAddress` |  | |  |  | `CHAR(10)` | Account number of the master record with the fiscal address |
| `NFPartnerIsNaturalPerson` |  | |  |  | `CHAR(1)` | Natural Person |
| `DeletionIndicator` |  | |  |  | `CHAR(1)` | Central Deletion Flag for Master Record |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `BPCustomerName` |  | |  |  | `CHAR(81)` | Customer Name |
| `BPCustomerFullName` |  | |  |  | `CHAR(220)` | Customer Full Name |
| `_CorrespondingSupplier` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_CustomerAccountGroupText` | | ✓ | | | | |
| `_CustomerClassification` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_CustomerSalesArea` | | ✓ | | | | |
| `_CustomerToBusinessPartner` | | ✓ | | | | |
| `_StandardAddress` | | ✓ | | | | |
| `_AddressRepresentation` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJCUSTINFO')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJCUSTINFO')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IENGPROJCUSTINFO'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'Customer'
@AbapCatalog.compiler.compareFilter: true
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: [ '_StandardAddress', '_AddressRepresentation' ]
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'CommercialProject'
@EndUserText.label: 'Billg Info for Engmnt Project Customer'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {modelingPattern: #ANALYTICAL_DIMENSION, 
               supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                       #CDS_MODELING_ASSOCIATION_TARGET,
                                       #CDS_MODELING_DATA_SOURCE,
                                       #SQL_DATA_SOURCE,
                                       #EXTRACTION_DATA_SOURCE]
}
define view I_EngmntProjCustInfo
  as select from I_Customer
{

      //I_Customer
  key Customer,
      CustomerName,
      CustomerFullName,
      CreatedByUser,
      CreationDate,
      AddressID,
      CustomerClassification,
      VATRegistration,
      CustomerAccountGroup,
      AuthorizationGroup,
      DeliveryIsBlocked,
      PostingIsBlocked,
      BillingIsBlockedForCustomer,
      OrderIsBlockedForCustomer,
      InternationalLocationNumber1,
      IsOneTimeAccount,
      TaxJurisdiction,
      Industry,
      TaxNumberType,
      TaxNumber1,
      TaxNumber2,
      TaxNumber3,
      TaxNumber4,
      TaxNumber5,
      CustomerCorporateGroup,
      Supplier,
      NielsenRegion,
      IndustryCode1,
      IndustryCode2,
      IndustryCode3,
      IndustryCode4,
      IndustryCode5,
      Country,
      OrganizationBPName1,
      OrganizationBPName2,
      CityName,
      PostalCode,
      StreetName,
      AlternativePayerAccount,
      DataMediumExchangeIndicator,
      VATLiability,
      @Semantics.booleanIndicator:true
      IsBusinessPurposeCompleted,
      ResponsibleType,
      FiscalAddress,
      @Semantics.booleanIndicator:true
      NFPartnerIsNaturalPerson,
      DeletionIndicator,
      Language,
      BPCustomerName,
      BPCustomerFullName,
      /* Associations */
      //I_Customer
      _CorrespondingSupplier,
      _CreatedByUser,
      _CustomerAccountGroupText,
      _CustomerClassification,
      _CustomerCompany,
      _CustomerSalesArea,
      _CustomerToBusinessPartner,
      _StandardAddress,
      _AddressRepresentation
    
}

where
  IsBusinessPurposeCompleted <> 'X'
```
