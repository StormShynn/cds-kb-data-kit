---
name: C_SALESORGANIZATIONDEX
description: "Sales OrganizationDEX"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - consumption-view
  - data-extraction
  - sales-organization
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
  - bo:SalesOrganization
---
# C_SALESORGANIZATIONDEX

**Sales OrganizationDEX**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrganization` | ✓ | |  |  |  |  |
| `SalesOrganizationCurrency` |  | |  |  |  |  |
| `IntercompanyBillingCustomer` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `Country` |  | | `_CompanyCode` | `Country` |  |  |
| `Currency` |  | | `_CompanyCode` | `Currency` |  |  |
| `FiscalYearVariant` |  | | `_CompanyCode` | `FiscalYearVariant` |  |  |
| `_SalesOrganizationCurrency` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_IntercompanyBillingCustomer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrganizationCurrency` | `I_Currency` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SalesOrganization'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.sapObjectNodeType.name: 'SalesOrganization'
@EndUserText.label: 'Sales Organization Data Extraction'
@VDM.viewType: #CONSUMPTION
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck:#CHECK
@AbapCatalog.sqlViewName: 'CSDSALESORGDX'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities:  [ #EXTRACTION_DATA_SOURCE ]

define view C_SalesOrganizationDEX
  as select from I_SalesOrganization

association [0..1] to I_Currency as _SalesOrganizationCurrency on $projection.SalesOrganizationCurrency = _SalesOrganizationCurrency.Currency
association [0..1] to I_Currency as _Currency                  on $projection.currency                  = _Currency.Currency   
{
      @ObjectModel.text.association: '_Text'
  key SalesOrganization,
  
      @ObjectModel.foreignKey.association: '_SalesOrganizationCurrency'
      SalesOrganizationCurrency,
      @ObjectModel.foreignKey.association: '_IntercompanyBillingCustomer'
      IntercompanyBillingCustomer,
    
      //Company
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,      
      _CompanyCode.Country,
      _CompanyCode.Currency,      
      _CompanyCode.FiscalYearVariant,
      
      //Associations
      _Text,
      _CompanyCode,
      _IntercompanyBillingCustomer,
      _SalesOrganizationCurrency,
      _Currency
}
where CompanyCode = _CompanyCode.CompanyCode
```
