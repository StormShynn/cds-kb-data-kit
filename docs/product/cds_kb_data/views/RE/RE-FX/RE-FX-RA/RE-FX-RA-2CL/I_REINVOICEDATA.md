---
name: I_REINVOICEDATA
description: "Reinvoicedata"
app_component: RE-FX-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-RA
  - interface-view
  - component:RE-FX-RA-2CL
  - lob:Other
---
# I_REINVOICEDATA

**Reinvoicedata**

| Property | Value |
|---|---|
| App Component | `RE-FX-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `REInvoiceNumber` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `REInvoiceUUID` |  | |  |  |  |  |
| `REProcessUUID` |  | |  |  |  |  |
| `REContractType` |  | | `_REContract` | `REContractType` |  |  |
| `REAuthorizationGroup` |  | | `_REContract` | `REAuthorizationGroup` |  |  |
| `Partner` |  | |  |  |  |  |
| `Role` |  | |  |  |  |  |
| `StatusObject` |  | |  |  |  |  |
| `RealEstateContract` |  | |  |  |  |  |
| `RealEstateProcess` |  | |  |  |  |  |
| `REInvoiceDuePeriodStartDate` |  | |  |  |  |  |
| `REInvoiceDuePeriodEndDate` |  | |  |  |  |  |
| `REInvoiceIsReversed` |  | |  |  |  |  |
| `GrossAmountInCoCodeCurrency` |  | |  |  |  |  |
| `NetAmountInCoCodeCurrency` |  | |  |  |  |  |
| `RETrnsltnRuleLoclTaxAmount` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_BusinessPartnerRole` | | ✓ | | | | |
| `_REProcess` | | ✓ | | | | |
| `_REContract` | | ✓ | | | | |
| `_REInvoiceItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1] |
| `_FiscalYear` | `I_FiscalYear` | [1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MASTER }
  
@ObjectModel.representativeKey: 'REInvoiceNumber'
@ObjectModel.semanticKey: ['REInvoiceNumber', 'CompanyCode', 'RealEstateContract']

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities:  [  
//                                        #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
//                                        #ANALYTICAL_PROVIDER,
                                        #CDS_MODELING_DATA_SOURCE,
//                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY      ]
                                        
@EndUserText.label: 'Real Estate Invoice Header'
define view entity I_REInvoiceData
  as select from I_REInvoice
  association [1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1] to I_FiscalYear as _FiscalYear on $projection.FiscalYear = _FiscalYear.FiscalYear
                                                    and '' = _FiscalYear.FiscalYearVariant
 
{
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
  key REInvoiceNumber,
  @ObjectModel.foreignKey.association: '_FiscalYear'
  key FiscalYear,
      REInvoiceUUID,
      REProcessUUID,
      _REContract.REContractType,
      _REContract.REAuthorizationGroup,
      Partner,
      Role,
      StatusObject,
      RealEstateContract,
      RealEstateProcess,
      REInvoiceDuePeriodStartDate,
      REInvoiceDuePeriodEndDate,
      REInvoiceIsReversed,
     
      @Semantics.amount.currencyCode: 'Currency'
      GrossAmountInCoCodeCurrency,
      @Semantics.amount.currencyCode: 'Currency'
      NetAmountInCoCodeCurrency,
      @Semantics.amount.currencyCode: 'Currency'
      RETrnsltnRuleLoclTaxAmount,
      Currency,

      _BusinessPartner,
      @Consumption.valueHelp: '_BusinessPartnerRole'
      _BusinessPartnerRole, 
      _REProcess,
      _REContract,
      _FiscalYear,
      _CompanyCode,
      _REInvoiceItem

}
```
