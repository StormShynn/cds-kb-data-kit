---
name: I_KR_BUSINESSPLACE
description: "KR Businessplace"
app_component: FI-LOC-FI-KR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - component:FI-LOC-FI-KR
  - lob:Finance
---
# I_KR_BUSINESSPLACE

**KR Businessplace**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-KR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Branch` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `TaxNumber1` |  | |  |  |  |  |
| `VATRegistration` |  | |  | `TaxNumber2` |  |  |
| `CompanyName` |  | |  |  |  |  |
| `ReportingCompany` |  | |  | `CorporationNumber` |  |  |
| `TaxInvoiceRepresentativeName` |  | |  |  |  |  |
| `IndustryType` |  | |  |  |  |  |
| `BusinessType` |  | |  |  |  |  |
| `DistrictTaxOffice` |  | |  |  |  |  |
| `BusinessPlaceName` |  | |  |  |  |  |
| `PostalCode` |  | |  |  |  |  |
| `AddressName` |  | |  | `cast( AddressName as idkr_addressname)` |  |  |
| `PhoneNumber` |  | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `StreetName` |  | |  |  |  |  |
| `HouseNumber` |  | |  |  |  |  |
| `HouseNumberSupplementText` |  | |  |  |  |  |
| `ResponsibleDepartmentName` |  | |  |  |  |  |
| `ResponsiblePersonName` |  | |  |  |  |  |
| `ResponsiblePersonEmailAddress` |  | |  |  |  |  |
| `NatlTaxServiceRegnNumber` |  | |  |  |  |  |
| `TaxInvoiceRepresentativeName1` |  | |  |  |  |  |
| `IndustryTypeList` |  | |  |  |  |  |
| `BusinessTypeList` |  | |  |  |  |  |
| `MobilePhoneNumber` |  | |  |  |  |  |
| `KR_TaxBusinessCode` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKRBUSINESSPLACE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'VAT Reporting Business Place'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #COMPOSITE
//@VDM.viewType: #BASIC
@AbapCatalog.preserveKey:true
//@AccessControl.personalData.blocking: #REQUIRED   //CE2005
@AccessControl.personalData.blocking: #BLOCKED_DATA_INCLUDED   //CE2005
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:
   [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ]     //CE2011   
define view I_KR_BusinessPlace as select from P_KR_I18NBusinessPlace {
    //@Consumption.filter : { selectionType: #RANGE, multipleSelections : true}
    @Consumption.valueHelpDefinition: [{ entity :{ name : 'I_BusinessPlaceVH', element: 'BusinessPlace'}, useAsTemplate : true }]
    @ObjectModel.text.element: [ 'BusinessPlaceName' ]
    key Branch,
    //@Consumption.filter : { selectionType: #SINGLE, multipleSelections : true}
    @Consumption.valueHelpDefinition: [{ entity :{ name : 'I_CompanyCodeVH', element: 'CompanyCode'}, useAsTemplate : true }]
    @ObjectModel.text.element: [ 'CompanyName' ]
    key CompanyCode,
    TaxNumber1,
    TaxNumber2 as VATRegistration,
    CompanyName,
    CorporationNumber as ReportingCompany,
    TaxInvoiceRepresentativeName,
    IndustryType,
    BusinessType,
    DistrictTaxOffice,
    BusinessPlaceName,
    PostalCode,
    cast( AddressName as idkr_addressname) as AddressName,
    PhoneNumber,
    CityName,
    StreetName,
    HouseNumber,
    HouseNumberSupplementText,
    ResponsibleDepartmentName,
    ResponsiblePersonName,
    ResponsiblePersonEmailAddress,
    NatlTaxServiceRegnNumber ,
    TaxInvoiceRepresentativeName1,
    IndustryTypeList,
    BusinessTypeList,
    MobilePhoneNumber, //CE 2208 General VAT Form
    KR_TaxBusinessCode //CE2308 General taxpayer VAT report txt file
}
```
