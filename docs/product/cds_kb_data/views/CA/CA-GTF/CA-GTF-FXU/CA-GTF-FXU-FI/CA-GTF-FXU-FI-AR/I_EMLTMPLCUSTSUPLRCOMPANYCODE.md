---
name: I_EMLTMPLCUSTSUPLRCOMPANYCODE
description: "This CDS view provides data for email templates used to communicate with customers and suppliers. You can use this view to access customer and supplier information, such as names, addresses, contact details, and authorization groups, which can be incorporated into automated email communications. This CDS view provides the data to answer the following business questions: What are the contact details for a specific customer or supplier within a given company code? Which accounting clerk is responsible for a particular customer or supplier account? Which authorization groups are assigned to customers and suppliers for email communication purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-FXU-FI-AR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EMLTMPLCUSTSUPLRCOMPANYCODE')/$value
semantic_en: "This CDS view provides data for email templates used to communicate with customers and suppliers. You can use this view to access customer and supplier information, such as names, addresses, contact details, and authorization groups, which can be incorporated into automated email communications. This CDS view provides the data to answer the following business questions: What are the contact details for a specific customer or supplier within a given company code? Which accounting clerk is responsible for a particular customer or supplier account? Which authorization groups are assigned to customers and suppliers for email communication purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Email Template Data Provider — CDS view giao diện dựa trên I_Customer."
keywords:
  - "email"
  - "template"
  - "data"
  - "provider"
  - "account"
  - "company"
  - "code"
  - "financial"
  - "type"
  - "name"
  - "full"
tags:
  - CA
  - account
  - bo:businesspartner
  - CA-GTF
  - CA-GTF-FXU
  - CA-GTF-FXU-FI
  - CA-GTF-FXU-FI-AR
  - component:CA-GTF-FXU-FI-AR
  - customer
  - interface-view
  - lob:cross_application components
  - lob:finance
  - supplier
---
# I_EMLTMPLCUSTSUPLRCOMPANYCODE

**This CDS view provides data for email templates used to communicate with customers and suppliers. You can use this view to access customer and supplier information, such as names, addresses, contact details, and authorization groups, which can be incorporated into automated email communications. This CDS view provides the data to answer the following business questions: What are the contact details for a specific customer or supplier within a given company code? Which accounting clerk is responsible for a particular customer or supplier account? Which authorization groups are assigned to customers and suppliers for email communication purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-FXU-FI-AR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EMLTMPLCUSTSUPLRCOMPANYCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Account` | ✓ | | `_Customer` | `Customer` | `CHAR(10)` | Customer Number |
| `CompanyCode` | ✓ | | `_CustomerCompany` | `CompanyCode` | `CHAR(4)` | Company Code |
| `FinancialAccountType` | ✓ | |  | `'D'` | `CHAR(1)` |  |
| `Name` |  | | `_Customer` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `FullName` |  | | `_Customer` | `CustomerFullName` | `CHAR(220)` | Customer Full Name |
| `BusinessPartnerName1` |  | | `_Customer` | `BusinessPartnerName1` | `CHAR(40)` | Name 1 |
| `BusinessPartnerName2` |  | | `_Customer` | `BusinessPartnerName2` | `CHAR(40)` | Name 2 |
| `BusinessPartnerName3` |  | | `_Customer` | `BusinessPartnerName3` | `CHAR(40)` | Name 3 |
| `BusinessPartnerName4` |  | | `_Customer` | `BusinessPartnerName4` | `CHAR(40)` | Name 4 |
| `OrganizationBPName1` |  | | `_Customer` | `OrganizationBPName1` | `CHAR(35)` | Name |
| `OrganizationBPName2` |  | | `_Customer` | `OrganizationBPName2` | `CHAR(35)` | Name 2 |
| `StreetName` |  | | `_Customer` | `StreetName` | `CHAR(35)` | Street and House Number |
| `CityName` |  | | `_Customer` | `CityName` | `CHAR(35)` | City |
| `PostalCode` |  | | `_Customer` | `PostalCode` | `CHAR(10)` | Postal Code |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `AuthorizationGroup` |  | | `_Customer` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `ReferenceAccountGroup` |  | | `_Customer` | `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CoCodeSpcfcAuthorizationGroup` |  | | `_CustomerCompany` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `PersonFullName` |  | | `_UserAddress._PersonName` | `PersonFullName` | `CHAR(80)` | Full Name of Person |
| `EmailAddress` |  | | `_UserAddress._DefaultEmail` | `EmailAddress` | `CHAR(241)` | Email Address |
| `PhoneNumber` |  | | `_UserAddress._DefaultMobile` | `InternationalMobileNumber` | `CHAR(30)` | Current Default Mobile Phone Number |
| `AccountingClerkName` |  | | `_AccountingClerkAddress._PersonName` | `PersonFullName` | `CHAR(80)` | Full Name of Person |
| `AccountingClerkEmailAddress` |  | | `_AccountingClerkAddress._DefaultEmail` | `EmailAddress` | `CHAR(241)` | Email Address |
| `AccountingClerkPhoneNumber` |  | | `_AccountingClerkAddress._DefaultMobile` | `InternationalMobileNumber` | `CHAR(30)` | Current Default Mobile Phone Number |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UserAddress` | `I_UserAddress` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EMLTMPLCUSTSUPLRCOMPANYCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EMLTMPLCUSTSUPLRCOMPANYCODE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IETCUSTSUPLCOCD'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #C,
  sizeCategory: #L
}
@ObjectModel.supportedCapabilities:#OUTPUT_EMAIL_DATA_PROVIDER

@Metadata.ignorePropagatedAnnotations:true 
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #COMPOSITE

@EndUserText.label: 'Email Template Data Provider'
define view I_EmlTmplCustSuplrCompanyCode as select from I_Customer        as _Customer
    inner join   I_CustomerCompany as _CustomerCompany on _Customer.Customer = _CustomerCompany.Customer
    inner join I_CompanyCode     as _CompanyCode     on _CustomerCompany.CompanyCode = _CompanyCode.CompanyCode
    left outer join I_AccountingClerk as _AccountingClerk on _AccountingClerk.CompanyCode = _CustomerCompany.CompanyCode
      and _AccountingClerk.AccountingClerk = _CustomerCompany.AccountingClerk
    left outer join I_UserAddress as _AccountingClerkAddress on _AccountingClerkAddress.UserID = _AccountingClerk.UserID
    association [0..1] to I_UserAddress as _UserAddress on _UserAddress.UserID = $session.user
{
  key _Customer.Customer                               as Account,
  key _CustomerCompany.CompanyCode                     as CompanyCode,
  key 'D'                                              as FinancialAccountType,
      _Customer.CustomerName                           as Name,
      _Customer.CustomerFullName                       as FullName,
      _Customer.BusinessPartnerName1,
      _Customer.BusinessPartnerName2,
      _Customer.BusinessPartnerName3,
      _Customer.BusinessPartnerName4,
      _Customer.OrganizationBPName1,
      _Customer.OrganizationBPName2,
      _Customer.StreetName,
      _Customer.CityName,
      _Customer.PostalCode,
      _CompanyCode.CompanyCodeName                     as CompanyCodeName,
      @UI.hidden: true
      _Customer.AuthorizationGroup                     as AuthorizationGroup,
      @UI.hidden: true
      _Customer.CustomerAccountGroup                   as ReferenceAccountGroup,
      @UI.hidden: true
      _CustomerCompany.AuthorizationGroup              as CoCodeSpcfcAuthorizationGroup,
      _UserAddress._PersonName.PersonFullName          as PersonFullName,
      _UserAddress._DefaultEmail.EmailAddress          as EmailAddress,
      _UserAddress._DefaultMobile.InternationalMobileNumber as PhoneNumber,
      _AccountingClerkAddress._PersonName.PersonFullName          as AccountingClerkName,
      _AccountingClerkAddress._DefaultEmail.EmailAddress          as AccountingClerkEmailAddress,
      _AccountingClerkAddress._DefaultMobile.InternationalMobileNumber as AccountingClerkPhoneNumber
}

union all

select from  I_Supplier        as _Supplier
  inner join I_SupplierCompany as _SupplierCompany on _Supplier.Supplier = _SupplierCompany.Supplier
  inner join I_CompanyCode     as _CompanyCode     on _SupplierCompany.CompanyCode = _CompanyCode.CompanyCode
  left outer join I_CustomerCompany as _SupplierCustomerCompany
    on _Supplier.Supplier = _SupplierCustomerCompany.Customer
    and _SupplierCompany.CompanyCode = _SupplierCustomerCompany.CompanyCode
  left outer join I_AccountingClerk as _AccountingClerk on _AccountingClerk.CompanyCode = _SupplierCompany.CompanyCode
    and _AccountingClerk.AccountingClerk = _SupplierCompany.AccountingClerk
  left outer join I_UserAddress as _AccountingClerkAddress on _AccountingClerkAddress.UserID = _AccountingClerk.UserID
  association [0..1] to I_UserAddress as _UserAddress on _UserAddress.UserID = $session.user
{
  key _Supplier.Supplier                               as Account,
  key _SupplierCompany.CompanyCode                     as CompanyCode,
  key 'K'                                              as FinancialAccountType,
      _Supplier.SupplierName                           as Name,
      _Supplier.SupplierFullName                       as FullName,
      _Supplier.BusinessPartnerName1,
      _Supplier.BusinessPartnerName2,
      _Supplier.BusinessPartnerName3,
      _Supplier.BusinessPartnerName4,
      _Supplier.OrganizationBPName1,
      _Supplier.OrganizationBPName2,
      _Supplier.StreetName,
      _Supplier.CityName,
      _Supplier.PostalCode,
      _CompanyCode.CompanyCodeName                     as CompanyCodeName,
      @UI.hidden: true
      _Supplier.AuthorizationGroup                     as AuthorizationGroup,
      @UI.hidden: true
      _Supplier.SupplierAccountGroup                   as ReferenceAccountGroup,
      @UI.hidden: true
      _SupplierCompany.AuthorizationGroup              as CoCodeSpcfcAuthorizationGroup,
      _UserAddress._PersonName.PersonFullName          as PersonFullName,
      _UserAddress._DefaultEmail.EmailAddress          as EmailAddress,
      _UserAddress._DefaultMobile.InternationalMobileNumber as PhoneNumber,
      _AccountingClerkAddress._PersonName.PersonFullName          as AccountingClerkName,
      _AccountingClerkAddress._DefaultEmail.EmailAddress          as AccountingClerkEmailAddress,
      _AccountingClerkAddress._DefaultMobile.InternationalMobileNumber as AccountingClerkPhoneNumber
}
```
