---
name: I_BUSINESSPARTNERTAXNUMBER
description: Business PartnerTAXNUMBER
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - business-partner
  - tax
  - partner
  - component:AP-MD-BP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERTAXNUMBER

**Business PartnerTAXNUMBER**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessPartner` | `BusinessPartnerTaxNumber.partner` |
| key `BPTaxType` | `BusinessPartnerTaxNumber.taxtype` |
| `BPTaxNumber` | `BusinessPartnerTaxNumber.taxnum` |
| `BPTaxLongNumber` | `BusinessPartnerTaxNumber.taxnumxl` |
| `AuthorizationGroup` | `_BusinessPartner.AuthorizationGroup` |
| `_BusinessPartner` | *Association* |
| `_TaxCategoryText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_TaxCategoryText` | `I_BusPartTaxTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBUPATAXNUMBER'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
 dataCategory: #DIMENSION,
 dataExtraction: {
    enabled: true,
   delta.changeDataCapture: {
      mapping:[
                {
                    table: 'DFKKBPTAXNUM', role: #MAIN,
                    viewElement: ['BusinessPartner','BPTaxType'],
                    tableElement: ['partner','taxtype']
                },
                 {
                    table: 'BUT000', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['BusinessPartner'],
                    tableElement: ['partner']
                }               
                
           ]
   }
 }
}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,   
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE]
@ClientHandling.algorithm : #SESSION_VARIABLE
@ObjectModel.representativeKey:'BPTaxType'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Core view for Tax Number'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerTax'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_Businesspartnertaxnumber
  as select from dfkkbptaxnum as BusinessPartnerTaxNumber
  
  association [1..1] to I_BusinessPartner    as _BusinessPartner on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..*] to I_BusPartTaxTypeText as _TaxCategoryText on $projection.BPTaxType = _TaxCategoryText.BPTaxType
{
  @ObjectModel.foreignKey.association: '_BusinessPartner'
  key BusinessPartnerTaxNumber.partner  as BusinessPartner,
  key BusinessPartnerTaxNumber.taxtype  as BPTaxType,
      BusinessPartnerTaxNumber.taxnum   as BPTaxNumber,
      BusinessPartnerTaxNumber.taxnumxl as BPTaxLongNumber,
      _BusinessPartner.AuthorizationGroup,
      _TaxCategoryText,
      _BusinessPartner
      //concat(taxtype,taxnum) as FullTax
}
```
