---
name: C_SUSTCUSTOMERADDRESSDEX
description: "This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the extraction of customer address data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SUS-INT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTCUSTOMERADDRESSDEX')/$value
semantic_en: "This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the extraction of customer address data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Customer Address data extractor — CDS view tiêu dùng (master data) dựa trên I_Customer."
keywords:
  - "customer"
  - "address"
  - "data"
  - "extractor"
  - "deletion"
  - "indicator"
  - "business"
  - "partner"
tags:
  - SUS
  - bo:businesspartner
  - component:SUS-INT
  - consumption-view
  - customer
  - product
  - SUS-INT
---
# C_SUSTCUSTOMERADDRESSDEX

**This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the extraction of customer address data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTCUSTOMERADDRESSDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer Number |
| `AddressID` |  | |  |  | `CHAR(10)` | Address |
| `DeletionIndicator` |  | |  |  | `CHAR(1)` | Central Deletion Flag for Master Record |
| `BusinessPartner` |  | | `_CustomerToBusinessPartner._BusinessPartner` | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerUUID` |  | | `_CustomerToBusinessPartner._BusinessPartner` | `BusinessPartnerUUID` | `RAW(16)` | Business Partner GUID |
| `BusinessPartnerCategory` |  | | `_CustomerToBusinessPartner._BusinessPartner` | `BusinessPartnerCategory` | `CHAR(1)` | Business Partner Category |
| `IsBusinessPurposeCompleted` |  | | `_CustomerToBusinessPartner._BusinessPartner` | `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Completed Flag |
| `AddressObjectType` |  | | `_AddressDefaultRepresentation` | `AddressObjectType` | `CHAR(1)` | Address type (1=Organization, 2=Person, 3=Contact person) |
| `AddresseeFullName` |  | | `_AddressDefaultRepresentation` | `AddresseeFullName` | `CHAR(80)` | Full Name of Person |
| `CityName` |  | | `_AddressDefaultRepresentation` | `CityName` | `CHAR(40)` | City |
| `StreetName` |  | | `_AddressDefaultRepresentation` | `StreetName` | `CHAR(60)` | Street |
| `HouseNumber` |  | | `_AddressDefaultRepresentation` | `HouseNumber` | `CHAR(10)` | House Number |
| `Country` |  | | `_AddressDefaultRepresentation` | `Country` | `CHAR(3)` | Country/Region Key |
| `Region` |  | | `_AddressDefaultRepresentation` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `PostalCode` |  | | `_AddressDefaultRepresentation` | `PostalCode` | `CHAR(10)` | City Postal Code |
| `InternationalPhoneNumber` |  | | `_AddressDefaultRepresentation._CurrentDfltLandlinePhoneNmbr` | `InternationalPhoneNumber` | `CHAR(30)` | Complete Number: Dialing Code+Number+Extension |
| `InternationalFaxNumber` |  | | `_AddressDefaultRepresentation._CurrentDfltFaxNumber` | `InternationalFaxNumber` | `CHAR(30)` | Complete Number: Dialing Code+Number+Extension |
| `EmailAddress` |  | | `_AddressDefaultRepresentation._CurrentDfltEmailAddress` | `EmailAddress` | `CHAR(241)` | Email Address |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTCUSTOMERADDRESSDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTCUSTOMERADDRESSDEX')/$value)*

```abap
@EndUserText.label: 'Customer Address data extractor'

@AccessControl: {
     authorizationCheck:    #PRIVILEGED_ONLY,
     personalData.blocking: #NOT_REQUIRED
}

@Metadata: {
  ignorePropagatedAnnotations: true
}

@ObjectModel: {
  usageType:{
    serviceQuality: #C,
    sizeCategory: #XL,
    dataClass: #MASTER
  },
  sapObjectNodeType.name: 'Customer',
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ],
  modelingPattern: #NONE
}

@VDM: {
      viewType: #CONSUMPTION,
      lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Analytics: { 
        dataCategory: #FACT,
        internalName: #LOCAL,
        dataExtraction: {
          enabled: true,
          delta.changeDataCapture:
            { mapping:
              [
                { role: #MAIN, table: 'KNA1', tableElement: ['kunnr'], viewElement: ['Customer'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'but000',   tableElement: ['partner'],      viewElement: ['BusinessPartner'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'but050',   tableElement: ['partner2'],     viewElement: ['BusinessPartner2'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc',     tableElement: ['addrnumber'],   viewElement: ['AddressID'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adr2',     tableElement: ['addrnumber'],   viewElement: ['AddressID'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adr6',     tableElement: ['addrnumber'],   viewElement: ['AddressID'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adr3',     tableElement: ['addrnumber'],   viewElement: ['AddressID'] }
              ]
            }
        }
}
define view entity C_SustCustomerAddressDEX as select from I_Customer

{

  key Customer,
  AddressID,
  DeletionIndicator,
  _CustomerToBusinessPartner._BusinessPartner.BusinessPartner,
  _CustomerToBusinessPartner._BusinessPartner.BusinessPartnerUUID,
  _CustomerToBusinessPartner._BusinessPartner.BusinessPartnerCategory,
  @Semantics.booleanIndicator: true
  _CustomerToBusinessPartner._BusinessPartner.IsBusinessPurposeCompleted,
  _CustomerToBusinessPartner._BusinessPartner._BPRelationship[IsStandardRelationship = 'X'].BusinessPartner2,
  _CustomerToBusinessPartner._BusinessPartner._BPRelationship[IsStandardRelationship = 'X']._BusinessPartner2.FirstName,
  _CustomerToBusinessPartner._BusinessPartner._BPRelationship[IsStandardRelationship = 'X']._BusinessPartner2.LastName,
  _CustomerToBusinessPartner._BusinessPartner._BPRelationship[IsStandardRelationship = 'X'].ValidityStartDate,
  _CustomerToBusinessPartner._BusinessPartner._BPRelationship[IsStandardRelationship = 'X'].ValidityEndDate,
  _AddressDefaultRepresentation.AddressObjectType,
  _AddressDefaultRepresentation.AddresseeFullName,
  _AddressDefaultRepresentation.CityName,
  _AddressDefaultRepresentation.StreetName,
  _AddressDefaultRepresentation.HouseNumber,
  _AddressDefaultRepresentation.Country,
  _AddressDefaultRepresentation.Region,
  _AddressDefaultRepresentation.PostalCode,
  _AddressDefaultRepresentation._CurrentDfltLandlinePhoneNmbr.InternationalPhoneNumber,
  _AddressDefaultRepresentation._CurrentDfltFaxNumber.InternationalFaxNumber,
  _AddressDefaultRepresentation._CurrentDfltEmailAddress.EmailAddress

}
```
